---
title: "Yugabyte DB Open Source Project"
date: 2020-07-28T00:00:00Z
image: "/images/ydb-contribution.jpg"
client: "Yugabyte DB"
project_url : "https://github.com/yugabyte/yugabyte-db/pull/5014"
categories: ["Database System", "C++"]
description: "Small and early contribution to open-source software"
draft: false
---

## Project Requirements

- Tried my hand at open-source Database contribution. Read guidelines and the design of the system to make a small contribution to the huge code base and test the changes.


## Project Details

- Change default value of flag metric_node_name in prometheus metrics

- To get started with this issue, I had to compile the C++ source code locally. Used https://docs.yugabyte.com/latest/contribute/core-database/build-from-src-macos/ for some guidance on the build process.

- Once I compiled the source code, the yb-ctl code (documented at https://docs.yugabyte.com/latest/admin/yb-ctl/) helped me start up a local cluster that I used to test the changes I made (/bin/yb-ctl destroy && bin/yb-ctl start --rf 1)