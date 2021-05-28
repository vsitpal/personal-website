---
title: "RTOS Kernel"
date: 2020-04-30T12:00:00Z
image: "/images/arm.jpg"
client: "Carnegie Mellon University"
project_url : "Private GitHub repository for academic integrity reasons"
categories: ["OS"]
description: "RTOS Kernel on Cortex M4 STM32"
draft: false
---

#### Project Requirements

Build a Real-time kernel on ARM based chips from scratch.


#### Project Details

RTOS Kernel on STM32 Cortex M4 chip

Mar 2020 – Apr 2020

- Developed a real-time kernel capable of admission control, task scheduling, isolation, and synchronization.
- In simpler terms, the kernel ensured that the tasks are schedulable, actually scheduling tasks on the fly, memory protection (per thread), mutexes and avoiding deadlocks.
- Kernel features:
• Context switching and task management
• Fixed priority rate-monotonic scheduling using a Priority queue
• Isolation (using MPU) and real-time synchronization, using Original Priority Ceiling Protocol to avoid unbounded priority inversion and deadlocks 


Timers, Interrupts and System Calls

Feb 2020 – Mar 2020

Built the first part of our RTOS kernel with:
• User space isolation: a kernel capable of running arbitrary programs in userspace with an exception driven jump from Handler mode to Thread mode.
• Interrupts: a kernel with the ability to handle requests from user programs via system calls.
• Servo motor control: servo motor control program, using a few custom system calls. 


STM32: Device Drivers and MMIO

Jan 2020 – Feb 2020

- Used Memory Mapped IO (MMIO) to interface with peripheral embedded devices.
- Implemented the drivers for UART and I2C serial communication as well as the onboard ADC.
- Interfaced with our custom PCB to measure sound and light levels and display them to the seven-segment LED display. 


ARM Bootloader Bootstrapping and Assembly optimization

Jan 2020

- Wrote a simple bootloader for the STM32. Assembly code to load and initialise global data (.data and .bss sections; to be copied onto SRAM) for an ARM Cortex-M4 architecture with code residing on Flash memory. JTAG and OpenOCD used for debugging and transferring binaries.

- Optimized an ARM assembly challenge with 50x speedup (compared to the original code) 
