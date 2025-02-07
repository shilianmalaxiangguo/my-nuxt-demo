---
layout: '../../layouts/MarkdownPost.astro'
title: '命令式&函数式'
date: 2024-06-04
description: '命令式&函数式'
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

## 命令式&函数式

与`命令式编程`严格对立的是`声明式编程`: 不关心`怎么做`，只关心`得到什么`。

函数式变成是声明式编程的一种。

函数式变成需要考虑的是:
1. 我要怎么样的输出？
2. 我应该提供什么样的输入？

命令式必须要严格按照命令来执行，必须先做什么，再做什么，必须还原命令操作。对做菜过程了如指掌，对每一个步骤事无巨细。

函数式编程可以`模块化`，把每个环节的功能可单独抽离出来，然后黑盒迭代，`不用去考虑内部实现`，而是只需要保证返回`结果可用`的就行。

```javascript
// 定义筛选逻辑
const ageBiggerThan24 = (person)=> person.age >= 24

// 定义排序逻辑
const smallAgeFirst = (a, b) => {
  return a.age - b.age
}

// 定义信息提取逻辑
const generateLogText = (person)=>{
  const perLogText = `${person.name}'s age is ${person.age}`
  return perLogText
}

const logText = peopleList.filter(ageBiggerThan24)
                      .sort(smallAgeFirst)
                      .map(generateLogText)
                      .join(',')

console.log(logText)

```

### 纯函数

输入输出数据流全是显式（Explicit）的函数。

显式数据流意味着函数除了入参和返回值之外，不以任何其它形式与外界进行数据交换。

纯函数本质是一种规则，一种限制条件，为了是限制你返回的数据必须不依赖于外部，而只单纯考虑你本身的计算。

这本身就是解耦的另一种实现。所以说纯函数可以提高代码质量。

也是在检验你原p纯度。

### 函数是一等公民

函数要成为一等公名的前提是:函数可以当为变量一样使用。
- 函数可以当参数传递(回调函数)
- 方法可以把函数当成返回值(闭包的特性)
- 函数可以成为变量被赋值

这三种特性，对象(Object)一样有，在js中，函数Function的原型也本质上是一个Object，所以,函数是一等公民，其实是对象本身也是一等公民。

同时具备这三种特性，那么这种语言就有`最高自由度`，所以js，好比`黑子的篮球`里的黄濑，究极复制人，啥东西都能抄过来，什么需求都能给你实现。

### 状态的复杂度

前端整体的复杂度较高，本质是`状态的复杂度`。

`状态`就是数据，处理数据，就是维护成千上百个`状态`的生老病死、起承转合。

`额外拷贝`的本质就是`只读`。只想让他展示，但是别什么成份，尤其是原p都来沾边嗷，不touch，可以类比,`readonly`。

对于复杂的两个对象，他们各自有很多个相同的状态，只是值并不一样，如何快速找出不易样的地方。这个有实际场景，就是gitcommit的索引。

快速找出两个文件中的不同，关键就是存储两个同时存储两个的索引，比较索引的不同，而不是比较两个文件本身。

任何行业都有这个概念，视频剪辑里的proxy代理剪辑，代码里的proxy模式，等等。

`git快照保存的是文件的索引，而不是保存文件本身。`

**变化的文件**拥有的`新的索引`和`新的存储空间`，**不变的文件**原地立正。

