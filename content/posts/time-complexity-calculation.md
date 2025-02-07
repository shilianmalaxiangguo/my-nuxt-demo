---
layout: '../../layouts/MarkdownPost.astro'
title: '时间复杂度计算'
date: 2024-03-14
description: '时间复杂度计算'
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

## 时间复杂度计算

### 解释
用来估计算法执行所需要的时间随着输入大小的增长而增长的速率。通常表示为大O符号（Big O notation），这是一种数学符号用于描述函数增长的上界。

- O(1)：常数时间复杂度，表示算法的执行时间不随输入数据的大小变化而变化。
- O(log n)：对数时间复杂度，表示算法的执行时间按对数速率增加，这通常是非常有效的，例如二分查找算法。
- O(n)：线性时间复杂度，表示算法的执行时间与输入数据的大小成正比。
- O(n log n)：线性对数时间复杂度，比线性时间稍慢，常见于某些高效的排序算法，如快速排序和归并排序。
- O(n^2)：二次时间复杂度，表示算法的执行时间与输入数据的平方成正比，常见于简单的排序算法，如冒泡排序和插入排序。
- O(2^n)：指数时间复杂度，表示算法的执行时间以指数方式增加，这在输入数据稍大时通常是不切实际的。
- O(n!)：阶乘时间复杂度，表示算法的执行时间随输入数据的阶乘增加，通常是最慢的。

![坐标图|inline](/img/1024px-Comparison_computational_complexity.svg.png)[2]


#### O(1)
```javascript
let i = 0;
i += 1
```
因为这两行代码永远会被执行仅一次。

#### O(n)
```javascript
for(let i = 0; i < n; i += 1) {
    console.log(i)
}
```

#### O(1) + O(n) = O(n)
```javascript
let i = 0;
i += 1;
for (let j = 0; j < n; j += 1) {
    console.log(j)
}
```
两个时间复杂度相加，我们取增长趋势更快的时间复杂度，因为n足够大的时候，1可以忽略不计。


#### O(n) * O(n) = O(n^2)
```javascript
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        console.log(i, j)
    }
}
```
两个时间复杂度相乘，要按照正常的乘法运算来计算。



#### O(logN)
```javascript
let i = 1;
while (i < n) {
    console.log(i);
    i *= 2;
}
```
logN是以2为底，2的多少次循环，能等于N
 
参考资料
- [维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)


