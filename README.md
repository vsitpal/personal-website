# Vikram's Den

Personal website for Vikramraj Sitpal — powered by GenAI, good taste, and just enough overengineering. 🤖⚙️

## What is this?

This repo contains the source for my personal website: writing, projects, interests, and assorted systems-flavored internet presence.

Website: https://0xdecaf.run

## Built with

- Hugo
- curiosity
- GenAI assistance
- Vikram doing the final judging

## Note

If something looks polished, thank GenAI.
If something looks obsessive, that was probably Vikram.

## Updating the interests page quickly

Your personal/technical links on the interests page live in `decafRunner/content/interests/_index.md`.

The helper script and its Node metadata now live under `scripts/` so Netlify does not treat the repo root as a Node project.

For local edits:

```bash
cd scripts
npm install
npm run add:interest
```

The script will:
- detect headings dynamically from `_index.md`
- show you a numbered menu of leaf subsection choices only
- ask for the entry title and link
- insert the new item using the same existing markdown format: `* [Title](URL)`

You can also use it non-interactively:

```bash
cd scripts
npm run add:interest -- --section "Technical topics > Research Papers > Systems" --title "Paper name" --url "https://example.com"
```

`--section` accepts either:
- the menu number
- the full breadcrumb path
- or just the heading title

This script is intended for making local content changes first; commit the updated markdown afterward and then deploy the site separately.

Only last-level / leaf headings are valid insertion targets.
