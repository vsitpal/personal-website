---
title: "Open AFS"
date: 2022-06-24T00:00:00Z
image: "/images/afs.jpg"
client: "Google Summer of Code"
project_url : "Link below"
categories: ["C", "Storage System"]
description: "Add file reverse lookup index in AFS"
draft: false
---
## Project Details

[Project Submission link](https://docs.google.com/document/d/1LU8FTm5_ZqmoM2XhfZe1YtQUYcV__rDqaQtulWlXS-s/edit?usp=sharing)

OpenAFS is a distributed file system. Currently, it has "File ID" or FID to "entry" or name lookup functionality, AKA, reverse lookup and also normal lookup, which is “name” for a given FID. Inverse Lookup is currently computationally expensive because the algorithm scans a hash index data structure embedded within a "Directory object" (which has `key:name`, `value: FID`) looking for a name that matches the given FID. It is not performant as it's merely brute-forcing the search.  

So my code changes add a completely new feature, a key-value database built on top of LMDB, and along with it low-level unit tests, and overall feature tests using the Robotest framework.  

### Links

Three GitHub repositories have my work:

1. [Feature Code](https://github.com/vikramrajsitpal/openafs/tree/gsoc-22-ri)
   - Tag (3 commits starting this tag): `gsoc-2022-ri-final`

2. Test Library Code:
   - [Repository](https://github.com/vikramrajsitpal/robotframework-openafslibrary/tree/gsoc-ri)
   - Pull Requests:
     - [PR 1](https://github.com/openafs-contrib/robotframework-openafslibrary/pull/3)
     - [PR 2](https://github.com/openafs-contrib/robotframework-openafslibrary/pull/4)

3. Test scripts:
   - [Repository](https://github.com/vikramrajsitpal/openafs-robotest/tree/gsoc-ri)
   - [PR](https://github.com/openafs-contrib/openafs-robotest/pull/31)