---
layout: '../../layouts/MarkdownPost.astro'
title: '函数调用'
date: 2024-03-07
description: '函数调用'
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

## 函数调用

```javascript
function foo() {}

var bar = () => {}
```

无论是函数声明还是用箭头函数，都能创建一个函数体。

函数也是一个数据，每一个函数体都是一个**对象**，在代码解析阶段创建，被持久的**存储在内存之中**。

也就是说，程序在运行过程中，函数体这个对象始终存在。

因此，我们可以在程序**运行的任何时候**调用该声明的函数。

在其他语言中，例如Java，函数声明会在代码打包的过程中就解析好了，因此**函数是静态的**，
在内存中会专门提供一个**静态的方法区**去存放函数体。
但是在JS是在代码**运行过程中**对函数进行解析的，因此在内存分配中，JS并没有一个类似方法区的静态区域来存储函数体。
而是**将函数体看成一个对象**，存放于**堆内存**中。

函数其实是一个特殊的对象，因为它具备对象的所有特征。

## 函数是一个特殊的对象

1. 函数可以属性赋值
```javascript
function MaFeiFei () {
    console.log("I'm a mafeifei")
}
MaFeiFei.biubiubiu = '98K'
console.log(MaFeiFei.biubiubiu) // 98k
```
2. 函数可以作为参数来传递

```javascript
function runningman (name) {
    console.log("人恨话不多，请叫我:",name)
}

function PD (project, name) {
    project && project(name)
}

PD(runningman, '开哥') // 人恨话不多，请叫我:开哥

// 常用于callback函数。 callback && callback(arguments)
```

3. 函数可以作为返回值
```javascript
function mute (mode) {
    return function vibration(size) {
        return console.log(`现在的模式是:`,mode,',震动太小是:',size)
    }
}
// 返回值的函数可以是匿名函数，但是声明通常是为了好打断点排错。
// 知道是哪个函数名体内出现了异常。
```

## 函数执行上下文

通常情况下，函数执行完成后，其占用的内存空间会被垃圾回收器（GC）回收，这就是所谓的执行上下文所占用的内存空间。

在JavaScript引擎中，使用栈来管理和跟踪多个上下文的运行情况，并确保**全局上下文始终在栈底**，并且不会弹出。**栈顶始终是当前正在执行的上下文**。

栈空间的分配是从高地址向低地址分配。

| 地址高位               | 栈内存的使用从内存高位开始 |
|--------------------|---------------|
| 1000(其实应该用16进制来表示) | ⬇             |
| 999                |               |
| 998                |               |
| ...                |               |
| 3                  |               |
| 2                  |               |
| 1                  | ⬆             |
| 地址低位               | 堆内存的使用从内存低位开始 |

## 调用者[caller], 被调用者[callee]

```javascript
function Overwatch (mapName, score) {
  console.log(`当前地图为:${mapName},当前比分为:${score}`)
    return {
        mapName,
        score
    }
}
function playStart () {
    const game = Overwatch('漓江塔','3:2')
    console.log('这是ob转播视角：当前游戏情况:',game.mapName,',当前比分->',game.score)
    return function doPlay() {
        console.log('游戏进行中...')
    }
}
```

playStart函数内部发现了函数Overwatch。我们称playStart为<strong>调用者[caller]</strong>,Overwatch为被<strong>调用者[callee]</strong>。


## 两个a是否是同一个地址值
```javascript
function main () {
    const a = 20
    
    function inner() {
        console.log(a)
    }
}
```

main函数中访问的a和inner函数中访问的a在内存中并不是同一个地址。
变量a是在main的作用域中声明的，因此它的作用域是限定在函数main内部。
每个函数的执行上下文都在调用栈中有自己的位置，并拥有自己的变量环境，因此它们在内存中存储在各自的执行上下文中。

end

 
