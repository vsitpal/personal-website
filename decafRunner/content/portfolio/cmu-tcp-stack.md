---
title: "CMU TCP Stack"
date: 2020-11-18T00:00:00Z
image: "/images/tcp.jpg"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["Network System", "C"]
description: "TCP stack with Reno-style CCA"
draft: false
---

## Project Requirements

- Reasoning about designing end-to-end systems when the underlying network is fundamentally unreliable and disorderly.

- Analyzing a program for performance and fairness, designing ways to improve it, and testing those improvements.
 
- Build our own CMU-TCP using UDP sockets, crafting packets and transmitting them ourselves. UDP will not re-transmit lost packets, and UDP has no controls on how fast we transmit: we augment UDP with these features.


## Project Details

- Implement the TCP Handshake and Teardown - Implement TCP starting handshake and teardown
handshake before data transmission starts and ends.
- Implement improved RTT Estimation - You will notice that loss recovery is very slow! One reason
for this is that it initially uses a fixed retransmission timeout (RTO) of 3 seconds. Implement an
adaptive RTO by estimating the RTT with Jacobson/Karels Algorithm or using the Karn/Partridge
algorithm.
- Use byte-based sequence numbers: Change the sequence numbers and ACK numbers to represent the
number of bytes sent and received
- Implement Windowing: Implement TCP’s sliding window algorithm to send a window of packets.
- Implement duplicate ACK Retransmission - Another reason loss recovery is slow is the starter code
relies on timeouts to detect packet loss. One way to recover more quickly is to retransmit whenever
you see triple duplicate ACKs. Implement retransmission on the receipt of 3 duplicate ACKs.
- Implement Flow Control: Update code to use a receiver’s AdvertisedWindow as maximum
window size; this field is contained in the CMUTCP Header.
- Implement Congestion Control: add a new parameter, the congestion window.
The size of sending window should be the minimum of cwnd and the advertised window.