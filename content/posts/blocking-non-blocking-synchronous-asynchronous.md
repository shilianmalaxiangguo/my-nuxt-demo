---
layout: '../../layouts/MarkdownPost.astro'
title: '阻塞与非阻塞、同步与异步'
date: 2024-03-10
description: '阻塞与非阻塞、同步与异步'
author: '保安'
cover:
  url: '../img/cc.jpg'
  square: '../img/cc.jpg'
  twitter: '../img/cc.jpg'
  alt: 'cover'
tags: [ "JS基础" ]
theme: 'dark'
featured: true
---

![封面|wide](/images/cc.jpg)

## 阻塞/非阻塞

阻塞/非阻塞是一种现象，这是一个相对概念。

我们应该关心的是**任务执行顺序、任务优先级的约定**，阻塞/非阻塞只是在描述一个现象。

## 同步/异步（sync/async）

await语法糖，写法是同步的写法，但任务还是异步任务。

同步是**单线程**的。因此同一时刻只能允许一个任务。

异步是**多线程**的。这意味着很这个异步任务可以并行挂载运行。

**凡事需要别的线程参与的任务，我们都可以称为异步任务。**

## 串行

定义了**多个异步任务**，并让这些异步任务**依次执行**，这种称为**串行**。

