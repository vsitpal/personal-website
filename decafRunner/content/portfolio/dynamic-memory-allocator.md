---
title: "Dynamic memory allocator"
date: 2016-07-31T00:00:00Z
image: "/images/malloc.jpg"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["C", "Operating System"]
description: "Dynamic storage (heap) manager/allocator"
draft: false
---

## Project Details
- Implemented a dynamic storage allocator program which requests memory from the OS and assigns required memory to the process which called it. 

- It maintains a part of memory called "heap" to manage requests.

- It implements 4 basic functions of a dynamic memory allocation:
1. malloc
2. calloc
3. realloc
4. free

- Used segregated free lists combined with mini-blocks to achieve a utilization of over 74%.