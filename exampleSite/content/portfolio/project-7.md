---
title: "Distributed File System"
date: 2020-04-15T00:00:00Z
image: "/images/dfs.png"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["Python", "Distributed System"]
description: "Distributed File System Service with a naming and multiple storage servers"
draft: false
---

## Project Requirements
- Design a simple and scalable distributed file system service.

## Project Details

- Implemented a simple user-space distributed file system service.
- Files were hosted remotely on one or more storage servers and used the underlying FS for simplicity.
- Separately, a single naming server was used to index the files, indicating which one is stored where. When a client wishes to access a file, it first contacts the naming server to obtain the IP address and client port of the storage server hosting it. After that, it communicates directly with the storage server to complete the operation.
- The file system supported file reading, writing, creation, deletion, and size queries. It also supported certain directory operations - listing, creation and deletion.
- Possible to lock files for exclusive access, and commonly accessed files were automatically replicated on multiple storage servers.