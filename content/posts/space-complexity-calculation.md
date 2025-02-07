---
layout: '../../layouts/MarkdownPost.astro'
title: '空间复杂度计算'
date: 2024-03-14
description: '空间复杂度计算'
author: '保安'
cover:
  url: '../img/cc.jpg'
  square: '../img/cc.jpg'
  twitter: '../img/cc.jpg'
  alt: 'cover'
tags: [ "数据结构" ]
theme: 'dark'
featured: true
---

![封面|wide](/images/cc.jpg)

## 空间复杂度计算

### 解释
和时间复杂度类似，空间复杂度通常也使用大O记号来渐进地表示，例如O(n),O(n log n),O(n^2),O(2^n)，其中n表示输入的长度。

空间复杂度是算法在运行过程中临时占用存储空间大小的量度。

就像时间复杂度的计算不考虑算法使用的空间一样，空间复杂度也不考虑算法运行需要的时间长短。

#### O(1)
```javascript
let i = 0;
i += 1
```
只声明了单个变量，所占用的内存永远是1。

#### O(n)
```javascript
const list = []
for (let i = 0; i < n; i += 1) {
    list.push(i)
}
```
声明了一个数组，给数组里添加了n个值，相当于占用了n个内存单元。

#### O(n^2)
```javascript
const matrix = [] // 矩阵 === 二维数组
for (let i = 0; i < n; i += 1) {
    matrix.push([])
    for (let j = 0; j < n; j += 1) {
        matrix[i].push(j)
    }
}
```
