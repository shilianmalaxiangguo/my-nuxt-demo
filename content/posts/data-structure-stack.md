---
layout: '../../layouts/MarkdownPost.astro'
title: '数据结构栈'
date: 2024-03-04
description: 'masquerade'
author: '保安'
cover:
  url: '../img/cc.jpg'
  square: '../img/cc.jpg'
  twitter: '../img/cc.jpg'
  alt: 'cover'
tags: ["算法", "数据结构"]
theme: 'dark'
featured: true
---

![封面|wide](/images/cc.jpg)


起初的去面试，混淆了**先进先出**和**先进后出**的概念，现在总结一次就不会再忘记了。

## 先进先出

### (FIFO = First In, First Out)

先进先出是一种队列（Queue）的概念。类似于排队等候服务的概念。

前端种的应用例如：处理异步操作和消息队列。（普通排队和插队）的概念。

## 先进后出

### (LIFO = Last In, First Out)

LIFO是<strong>栈(Stack)</strong>的管理方式,类似于在放慢块状物的杯子中，再继续存放其他的物体。
必须要先拿最上面的，再能往下面（栈底）继续深入。


然后栈操作有个很简单的算法题，**有效括号**

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

#### 解题思路

创建一个数组，如果当前的括号，能和数组中的最后一个匹配，那么就消除这两个，否则就放进数组内。

结束后，如果数组的长度为空，那么证明括号都匹配成功，都消除了，否则就证明有遗留的单身狗。
```javascript
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s){
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
```
