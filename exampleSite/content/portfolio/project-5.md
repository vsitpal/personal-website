---
title: "Raft: Replicated state machine protocol"
date: 2020-02-28T00:00:00Z
image: "/images/raft.png"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["Distributed System", "Go"]
description: "Distributed Systems course lab at CMU"
draft: false
---

## Project Requirements

- A replicated service which achieves fault tolerance by storing complete copies of its state (i.e., data) on multiple replica servers. Replication allows the service to continue operating even if some of its servers experience failures (crashes or a broken or flaky network). The challenge is that failures may cause the replicas to hold differing copies of the data.

- Raft organizes client requests into a sequence, called the log, and ensures that all the replica servers see the same log. Each replica executes client requests in log order, applying them to its local copy of the service's state. Since all the live replicas see the same log contents, they all execute the same requests in the same order, and thus continue to have identical service state. If a server fails but later recovers, Raft takes care of bringing its log up to date. Raft will continue to operate as long as at least a *majority* of the servers are alive and can talk to each other. If there is no such majority, Raft will make no progress, but will pick up where it left off as soon as a majority can communicate again.


## Project Details

- Implemented Raft (using Go), a replicated state machine protocol as described in its [paper](https://raft.github.io/raft.pdf).
- Implemented leader election and heartbeats using RPCs. The goal was for a single leader to be elected, for the leader to remain the leader if there are no failures, and for a new leader to take over if the old leader fails or if packets to/from the old leader are lost
- Implemented the leader and follower code to append new log entries and commit them if they receive a majority
- Optimized the method that backs up log checks by more than one entry at a time for faster convergence in case of log mismatches
- More information about the project [here](https://pdos.csail.mit.edu/6.824/labs/lab-raft.html).
- Interactive Raft simulator [here](https://raft.github.io).