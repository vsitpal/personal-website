#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const INTERESTS_FILE = path.join(__dirname, '..', 'decafRunner', 'content', 'interests', '_index.md');

function readInterestsFile() {
  return fs.readFileSync(INTERESTS_FILE, 'utf8');
}

function writeInterestsFile(content) {
  fs.writeFileSync(INTERESTS_FILE, content, 'utf8');
}

function parseHeadings(lines) {
  const headings = [];
  const stack = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = /^(#{2,6})\s+(.+?)\s*$/.exec(line);

    if (!match) {
      continue;
    }

    const level = match[1].length;
    const rawTitle = match[2].trim();
    const title = rawTitle.replace(/^\*\*(.*)\*\*$/, '$1').trim();

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    const breadcrumb = [...stack.map((item) => item.title), title].join(' > ');
    const heading = { index, level, rawTitle, title, breadcrumb };

    headings.push(heading);
    stack.push({ level, title });
  }

  return headings;
}

function getLeafHeadings(headings) {
  return headings.filter((heading, index) => {
    const nextHeading = headings[index + 1];

    if (!nextHeading) {
      return true;
    }

    return nextHeading.level <= heading.level;
  });
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      continue;
    }

    const key = token.slice(2);
    const next = argv[i + 1];

    if (!next || next.startsWith('--')) {
      args[key] = 'true';
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

function createPrompt() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function askQuestion(rl, question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

function normalizeLine(line) {
  return line.replace(/\r$/, '');
}

function findHeadingBySelector(headings, selector) {
  const normalized = selector.trim().toLowerCase();
  const numericChoice = Number.parseInt(normalized, 10);

  if (!Number.isNaN(numericChoice) && numericChoice >= 1 && numericChoice <= headings.length) {
    return headings[numericChoice - 1];
  }

  const breadcrumbMatch = headings.find((heading) => heading.breadcrumb.toLowerCase() === normalized);
  if (breadcrumbMatch) {
    return breadcrumbMatch;
  }

  const titleMatch = headings.find((heading) => heading.title.toLowerCase() === normalized);
  if (titleMatch) {
    return titleMatch;
  }

  return null;
}

function findInsertIndex(lines, headings, selectedHeading) {
  for (const heading of headings) {
    if (heading.index <= selectedHeading.index) {
      continue;
    }

    if (heading.level <= selectedHeading.level) {
      return heading.index;
    }
  }

  return lines.length;
}

function hasDuplicateEntry(lines, startIndex, endIndex, entryLine) {
  for (let i = startIndex; i < endIndex; i += 1) {
    if (normalizeLine(lines[i]) === entryLine) {
      return true;
    }
  }

  return false;
}

function insertEntry(content, selectedHeading, title, url) {
  const lines = content.split('\n');
  const headings = parseHeadings(lines);
  const insertIndex = findInsertIndex(lines, headings, selectedHeading);
  const entryLine = `* [${title}](${url})`;

  if (hasDuplicateEntry(lines, selectedHeading.index + 1, insertIndex, entryLine)) {
    throw new Error('That exact entry already exists in the selected subsection.');
  }

  let insertionPoint = insertIndex;
  while (insertionPoint > selectedHeading.index + 1 && normalizeLine(lines[insertionPoint - 1]) === '') {
    insertionPoint -= 1;
  }

  const before = lines.slice(0, insertionPoint);
  const after = lines.slice(insertionPoint);
  const block = [];

  if (before[before.length - 1] !== '') {
    block.push('');
  }

  block.push(entryLine);
  block.push('');

  return [...before, ...block, ...after].join('\n').replace(/\n{3,}/g, '\n\n');
}

async function chooseHeadingInteractively(rl, headings) {
  console.log('\nChoose where to add the entry:\n');
  headings.forEach((heading, index) => {
    console.log(`  ${index + 1}. ${heading.breadcrumb}`);
  });
  console.log('');

  while (true) {
    const answer = await askQuestion(rl, 'Section number: ');
    const selected = findHeadingBySelector(headings, answer);
    if (selected) {
      return selected;
    }

    console.log('Invalid choice. Pick a number from the list above.\n');
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const content = readInterestsFile();
  const headings = parseHeadings(content.split('\n'));
  const leafHeadings = getLeafHeadings(headings);

  if (!leafHeadings.length) {
    throw new Error(`No headings found in ${INTERESTS_FILE}`);
  }

  const rl = createPrompt();

  try {
    const selectedHeading = args.section
      ? findHeadingBySelector(leafHeadings, args.section)
      : await chooseHeadingInteractively(rl, leafHeadings);

    if (!selectedHeading) {
      throw new Error('Could not find the requested leaf section. Use the interactive menu or pass a valid leaf `--section`.');
    }

    const title = args.title || await askQuestion(rl, 'Entry title: ');
    const url = args.url || await askQuestion(rl, 'Entry link: ');

    if (!title) {
      throw new Error('Entry title cannot be empty.');
    }

    if (!url) {
      throw new Error('Entry link cannot be empty.');
    }

    const updated = insertEntry(content, selectedHeading, title, url);
    writeInterestsFile(updated);

    console.log(`\nAdded to: ${selectedHeading.breadcrumb}`);
    console.log(`Entry: * [${title}](${url})`);
    console.log(`Updated file: ${INTERESTS_FILE}\n`);
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error(`\nError: ${error.message}\n`);
  process.exit(1);
});