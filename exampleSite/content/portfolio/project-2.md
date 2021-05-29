---
title: "Artwork Design"
date: 2020-08-07T00:00:00Z
image: "/images/selinux.jpeg"
client: "NVIDIA"
project_url : "Private Gerrit Repository with NVIDIA"
categories: ["Security", "C", "C++"]
description: "System Software Engineering Intern at NVIDIA"
draft: false
---

## Project Requirements

Try and Secure Android Game streaming containers with multi-architecture support.

## Project Details

_May 2020 – Aug 2020_

- Worked on securing Android game streaming systems.
- Worked on Linux kernel (Linux Security Module), LXC/LXD system container manager and SELinux namespacing (prototype on top of Linux kernel release candidates)
- Opened to userspace as an API via selinuxfs node. Based on work by Stephen Smalley.
- Finally, the kernel was able to run multiple SELinux instances (selinuxfs) on the same host given the process was running in a separate mount and network namespace.
- Custom kernel configurations and built-ins added for Android container support on CentOS.