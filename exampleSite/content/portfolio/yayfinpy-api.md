---
title: "yayFinPy: Yet Another Yahoo! Finance Python API"
date: 2021-05-15T00:00:00Z
image: "/images/yayfinpy.jpeg"
client: "Carnegie Mellon University"
project_url : "https://github.com/vikramrajsitpal/yayFinPy"
categories: ["Python"]
description: "API Design and Implementation: Final Project"
draft: false
---

## Project Requirements
- Write a short proposal describing the broken API. If it is a part of a larger API, indicate precisely which parts you intend to replace. Include links to the API documentation.
- Describe the use cases that the API can’t handle properly, and demonstrate the shortcomings. 
- Using the API design process taught, design a replacement API. 
- Maintain the key design artifacts: requirements document, an issues list, a design rationale, and client code for use-cases with the original and replacement API. 
- Once the API is understood and we gained confidence in it, we were to write high quality documentation.
- Implement a working prototype of your fixed API. This can be layered atop the original, broken API, or it can be written atop a lower layer of the system. 
- Write and run unit tests for your prototype.

## Project Details

- Ever since Yahoo! finance decommissioned their historical data API, many programs that relied on it to stop working.
- yfinance solved this problem by offering a reliable, threaded, and Pythonic way to download historical market data from Yahoo! finance.
- yayFinPy, which is short for Yet Another Yahoo Finance Python API improves upon yfinance and part of academic course project at CMU in the course API Design and Implementation - 17780 taught by: Josh Bloch and Charlie Garrod.
- We found a significant number of flaws and challenges in the API which makes it a suitable API to target for improvement. We believe that improving this API would have a significant impact on the users of this API. 
- In addition to fixing the API, we completely restructured the API to make it approachable and easy to use and added several additional features like stock sentiment analysis, tweets, custom portfolio management, and many more.
- Read all the details in the project repository given above.