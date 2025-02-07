---
layout: '../../layouts/MarkdownPost.astro'
title: "设计模式-单例模式"
date:  "2024-03-19"
description: "设计模式-单例模式"
author: '保安'
cover:
  url: '../img/cc.jpg'
  square: '../img/cc.jpg'
  twitter: '../img/cc.jpg'
  alt: 'cover'
tags: [ "设计模式" ]
theme: 'dark'
featured: true
---

![封面|wide](/images/cc.jpg)

## 单例模式

**保证一个类仅有一个实例，并且提供一个访问它的全局访问点**，这样的模式就是单例模式。说人话就是：人们称呼的老婆，通常是特指某一个人（正常人）、某一个物（二刺螈）、某几个人（非正常人）或者某几个物（煞笔二刺螈）来构成。

我们要尊重物种的多样性（XP），但现在特指是“new”出来的一个实例（实例是通过创建出来的）。

单例模式是最通俗易懂，容易上手的一种模式，同时有广泛使用的场景，比如自己封装或着使用别人封装的开源工具类。

```javascript
class SingletonFake{
    init() {
        console.log('我是一个单例类!')
    }
}

const s1 = new SingletonFake()
const s2 = new SingletonFake()

s1 === s2 // false
```
为什么是false，s1、s2之间没有任何瓜葛，都是熟悉的陌生人，各自为独立的对象，各自独占一块属于自己的内存空间。

但是我们想要做的是s1和s2，甚至s3都是返回的同一个实例。（**即，无论尝试创建多少次，始终返回第一次已经创建好了的实例**）

要做的到这一点，**需要有一个具备判断自己是否已经创建过一个实例的能力**。我们可以整理成静态方法写入函数体内。
```javascript
class Singleton {
    init() {
        console.log('我是一个单例类!')
    }
    static getInstance() {
       if (!Singleton.instance) {
           Singleton.instance = new Singleton()
       }
       return Singleton.instance
    }
    // #getInstance2() {
    //     if (!Singleton.instance) {
    //         Singleton.instance = new Singleton()
    //     }
    //     return Singleton.instance
    // }
}
const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()
const s3 = Singleton.getInstance2() // Uncaught TypeError: Singleton.getInstance is not a function
// 因为#为private私有方法，只能在类内部访问
s1 === s2 // true
```

如果要每一种方式来尝试创建Singleton类的实例，都只能得到同一个实例。那么我们可以完善这个demo
```javascript
class Singleton {
    static #instance;
    value;
    
    constructor(value) {
        if (Singleton.#instance) {
            return Singleton.#instance
        }
        this.value = value // 让传入的value设置该类里实例的属性进行赋值，开始干活了
        Singleton.#instance = this // 存储类的私有静态引用，确保将来任何创建实例都返回这个创建的实例
    }

    init() {
        console.log('我是一个单例类!')
    }
    
    static getInstance(value) {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton(value);
        }
        return Singleton.#instance;
    }
}
const s1 = new Singleton()
const s2 = new Singleton()
const s3 = Singleton.getInstance()

console.log('s1 === s2', s1 === s2) // true
console.log('s1 === s3', s1 === s3) // true
```

也可以用闭包的方式来实现
```javascript
Singleton.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new Singleton()
        }
        return instance
    }
})()
```

**因为闭包的特性，所以instance本身就只能在内部被访问，所以不用声明单独的静态属性来防止污染外部环境的变量**。

简单说下步骤和解释
1. Singleton.getInstance = (function() { ... })()：这里定义了一个自执行的匿名函数（即 IIFE - Immediately Invoked Function Expression），它在定义后立即执行。它的返回值是一个函数，这个函数被赋值给 Singleton.getInstance。

2. let instance = null：在这个自执行函数的作用域内，定义了一个变量 instance 并初始化为 null。这个变量对外部是不可见的，只能通过 getInstance 方法访问，这就模拟了一个私有变量。

3. return function() { ... }：自执行函数返回一个新的函数，**这个函数是 getInstance 方法的实际实现。每次调用 Singleton.getInstance() 都会执行这个函数**。

4. if(!instance) { ... }：在返回的函数内部，首先检查 instance 变量是否为 null。如果是 null，说明还没有创建 Singleton 的实例。

5. instance = new Singleton()：如果 instance 是 null，则创建 Singleton 类的一个新实例，并将其赋值给 instance 变量。**这是单例的唯一实例**。

6. return instance：返回 instance 变量，无论它是刚刚创建的还是之前已经存在的实例。

通过这种方式，Singleton.getInstance 方法始终返回同一个 Singleton 实例，无论它被调用多少次，从而实现了单例模式。这种模式的优点是它不仅隐藏了实例的创建逻辑，还确保了单例的私有性和唯一性。
