---
title: "myFTL: SSD Flash Translation Layer"
date: 2020-10-10T00:00:00Z
image: "/images/ssd.png"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["C++", "Storage System"]
description: "A flash translation layer (FTL) for an emulated solid state drive (SSD)"
draft: false
---

## Project Requirements

- In this project, I built a flash translation layer (FTL) for an emulated solid state drive (SSD). SSDs rely on firmware in the drive to perform multiple functions. 

- When SSDs were first introduced, their radically different architecture, and the asymmetry between reads and writes (due to erase operations), required a completely different way of reading or writing to them. 

- The Flash Translation Layer (FTL) is an abstraction introduced to maintain current file system and driver code as it is. The FTL translates the commands issued by file systems and user programs to an SSD-friendly format.

- Usually the FTL is built into the SSD firmware.


## Project Details

- Programmed a general purpose page-mapped and Hybrid Log-Block Mapping Scheme Flash Translation Layer (FTL) for SSDs with wear-levelling and garbage collection in highly memory constrained environment.

- Please contact me for more information.