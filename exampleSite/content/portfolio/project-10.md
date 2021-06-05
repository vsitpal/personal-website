---
title: "Loose-Ordering Consistency for Persistent Memory Systems"
date: 2020-12-11T00:00:00Z
image: "/images/dram_loc.png"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["Python", "Computer Architecture", "Storage System"]
description: "Model with low performance overhead for consistency in persistent memory systems"
draft: false
---

## Project Introduction
- Implemented as a course project for Computer Architecture (15740) at CMU, this research article proposes a consistency model with low performance overhead for providing consistency in persistent memory systems, i.e., the ones using NVRAMs instead of DRAMs. With emerging non-volatile memory (NVM) technologies, data persistence can be enabled at the main memory level with access speed similar to DRAM. If NVRAM is used just as a simple memory like DRAM, then the system is not harnessing the actual power of NVRAM, i.e., data persistence.

- Traditional disk storage devices have huge latencies to read or write data with write latencies ranging up the order of ~10ms. With the emergence of new persistent memory technologies, we can reduce the memory write latency to a magnitude that is similar to that of DRAM. In such persistent memories, memory writes need to be performed in strict order to satisfy storage consistency requirements and enable correct recovery from system crashes. Unfortunately, adhering to a strict order for writes to persistent memory significantly degrades system performance as it requires flushing dirty data blocks from CPU caches and waiting for their completion at the main memory in the order specified by the program. Our goal in this project is to design new mechanism that reduces the performance overhead caused by strict ordering of writes in persistent memory

- The traditional recovery protocol (WAL) is not designed to leverage the benefits of the low latency NV memory and incurs a significant overhead due to strict ordering that results in high performance overhead that could be ignored on slow disk drives but wastes the low latency performance of NVRAM thus providing an opportunity for analysis and scope for improvement. This is explored using a new consistency protocol called Loose Order Consistency (LOC) which is the primary idea of this project and to examine the performance gains compared to WAL. This project does not validate the correctness of LOC as we reference a [paper](https://ieeexplore.ieee.org/document/6974684) which has already proven the theoretical correctness of it. We employ a transactional memory model for the purpose of this project, and it is simulated on software using the x86 restricted transactional memory (RTM) library.



## Project Background

- The idea presented in this course project is directly derived from a research paper [3] published by researchers from CMU, Tsinghua University and Chinese academy of Sciences. The implementation of this idea in this project is performed by us, using Intel PIN and a self-prototyped software simulator Python3.
- The paper explores a transactional memory model and explores the implementations that are in place for providing persistence and consistency of memory in the cases of crash recovery. The paper looks at software write-ahead logging (WAL) which is a widely implemented protocol to ensure consistency in persistent memory (storage) systems. Methods such as WAL have inefficiencies of imposing strict inter-transactional and intra-transactional ordering on committing memory blocks to persistent memory. These restrictions impact the performance of the commit protocol significantly because in order to preserve persistence ordering from the CPU cache to persistent memory, software needs to explicitly include the relatively costly cache flush (e.g., clflush) and memory fence (e.g., mfence) instructions (at the end of each transaction) to force the ordering of cache writebacks.

- Loose-Ordering Consistency (LOC) satisfies the ordering requirements of persistent memory writes at significantly lower performance degradation than state-of-the-art mechanisms. LOC consists of two key techniques. First, Eager Commit reduces the commit overhead for writes within a transaction by eliminating the need to perform a persistent commit record write at the end of a transaction. It is done by ensuring that one can determine the status of all committed transactions during recovery by storing necessary metadata information statically with blocks of data written to memory. Second, Speculative Persistence relaxes the ordering of writes between transactions by allowing writes to be speculatively written to persistent memory. A speculative write is made visible to software only after its associated transaction commits in program order.



## Project Details and Implementation
- This project design and implementation has three major parts:
    - Trace generation
    - WAL and LOC Simulators
    - Test workloads which use Transaction memory model

- We used the PIN tool, with its RTM and Thread APIs, to get the memory trace for our workload. Since RTM is not supported anymore on modern Intel processors, we dynamically detected transaction related instructions and removed them before the processor could actually execute them. The design for trace was complex in order to keep the backend design simple and single-threaded. The order of execution of various threads is done implicitly by PIN and we trace it accordingly.

### Intel PIN Design:
- We use the Intel PIN tool’s API to perform Dynamic Binary Instrumentation (DBI) on several multi-threaded program workloads each using transactional memory primitives (TxBegin and TxEnd) to identify the transactions by ID (TxID) and threadid (TID). 

- We use x86’s restricted transactional memory (RTM) extensions to simulate transactions in our test workloads. This acts as the frontend of our project where we instrument various workloads and generate output traces that we provide to backend simulators to analyze and compare their performance for results.

- We used PIN tool’s features to instrument multi-threaded programs by instruction and checked for the transaction markers mentioned above. Along with it, we check if the instruction accesses memory and records the information along with the threadid into a memory trace. This provides us with a complete memory trace of the entire workload we instrumented that contains all the information about all the threads that were created along with their respective transactions and memory accesses for those transactions.

- This memory trace then serves as the input to our backend simulator which simulates the WAL or LOC protocol and provides the performance results for each design.