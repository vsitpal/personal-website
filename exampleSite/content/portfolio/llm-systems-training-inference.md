---
title: "Systems for LLM Training and Inference"
date: 2025-12-15T00:00:00Z
image: "/images/genAI.png"
client: "Carnegie Mellon University"
project_url : "Private GitHub repositories for academic integrity reasons"
categories: ["Machine Learning", "CUDA", "Distributed System", "GPU Systems", "Python"]
description: "Building, optimizing, and serving LLMs from a systems perspective"
draft: false
---

## Project Introduction

- This course gave me the opportunity to revisit machine learning from a very different perspective than when I first encountered it. I originally took an introductory ML course in Fall 2019, before later gravitating toward systems work. Returning in Fall 2025, with a much stronger systems background, made the material significantly more interesting and concrete.

- Instead of treating modern ML systems as opaque tools, this course focused on the mechanics that make large-scale models possible in practice: GPU execution, memory behavior, distributed training, inference systems, and the engineering tradeoffs involved in building and serving LLMs efficiently.

- That systems-first framing was what made the course especially valuable to me. Working through implementation details and performance bottlenecks sharpened not only my understanding of training and inference infrastructure, but also my intuition for the machine learning models themselves.


## Project Details

- Over the semester, I worked on seven substantial mini-projects that built on one another incrementally:

    - Built parts of a small educational deep-learning framework (miniTorch) to understand how autodiff and tensor systems work under the hood.
    - Wrote CUDA kernels for core tensor operations, optimized them for performance, and integrated them into miniTorch.
    - Implemented and benchmarked a decoder-only transformer (GPT-2) in miniTorch, including core modules such as multi-head attention and LayerNorm, along with a machine translation pipeline to train and evaluate the model.
    - Optimized transformers on GPU, focusing on memory access patterns and writing fused CUDA kernels.
    - Scaled training with distributed techniques including data parallelism, model parallelism, ZeRO/DeepSpeed, and pipeline parallelism (GPipe).
    - Worked on advanced training and inference systems using DeepSpeed to train and fine-tune large models efficiently with LoRA, and studied SGLang closely to tune inference and squeeze out as much performance as possible.
    - Built an RLHF system using a VERL-like framework, implementing PPO-based RLHF and reasoning carefully about the design required to make RLHF stable.


## What I Enjoyed Most

- What I liked most about this course was how system-oriented everything was. Every design decision came back to the same questions:

    - Where does the memory go?
    - What lives on GPU vs CPU?
    - Where is the bottleneck?
    - What breaks at scale?

- Coming in with a strong systems background, this course gave me a much clearer picture of how we actually build, train, and serve LLMs — not just how to use them.
