---
layout: '../../layouts/MarkdownPost.astro'
title: '数据结构（二）'
date: 2024-03-12
description: '数据结构（二）'
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

## 数据结构（二）

算法不要记抽象模糊的概念，好比背单词不去死记拼写，而是去记例句（情景使用）。我们要————**以题为纲**。从优质的题目中去学习、从有关联的题目中提取相同的知识点和解题思路，来建立自己的知识体系。

数据结构层面，需要掌握一下几种：
- 数组
- 栈
- 队列
- 链表
- 树（着重讲二叉树）

## 数组

数组是要认识的第一个数据结构。作为最简单、最基础的数据结构，大多数语言都对数组有原生的表达，可以对数组“开箱即用”，不需要自行模拟实现。

在算法题中，初始化一个数组，并不知道内部元素的情况时。更推荐的是构造函数创建数组的方法:
```javascript
const arr = new Array()
// 等价于
// const arr = []
```
构造函数的方式，可以满足“创造制定长度的空数组”这样的需求。需要多长，就传多大的参数:
```javascript
const arr = new Array(10)
```
### 二维数组的初始化

**二位数组与矩阵是等价关系。**

如果用fill来初始化二维数组
```javascript
const arr = (new Array(7)).fill([])
// (7) [Array(0), Array(0), Array(0), Array(0), Array(0), Array(0), Array(0)]
```
但是需要修改的时候
```javascript
arr[0][0] = 1
// arr: '[[1],[1],[1],[1],[1],[1],[1]]'
```

因为这7个数组对应了同一个引用、指向的是同一块内存空间，，这7个元素他的本质上来看是同一个数组。所以修改第0项的时候，第1到第6项会跟着发生改变。

### 正确初始化二维数组

```javascript
const len = arr.length
for(let i = 0; i < len; i++){
    // 将数组的每一个坑位都初始化数组
    arr[i] = new Array()
    // 或者 arr[i] = []
}
```

### 二维数组的访问
一维数组需要循环遍历一层，二维数组是两层，三位数组是三层...N维数组需要N层循环完成遍历。

```javascript
const outerLen = arr.length
for (let i = 0; i < outerLen; i++) {
    const innerLen = arr[i].length
    for(let j = 0; j < innerLen; j++) {
        console.log(arr[i][j],`第${i}层，第${j}项`)
    }
}
```
