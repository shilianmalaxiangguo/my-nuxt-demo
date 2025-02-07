---
layout: '../../layouts/MarkdownPost.astro'
title: '执行上下文'
date: 2024-03-08
description: '执行上下文'
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

## 执行上下文

在任何时候，**只能有一个执行上下文**在执行，我们称之为**运行时上下文**。

执行上下文包含了跟踪对应可执行代码执行进度所需要的所有状态，每个执行上下文中都有特定的实体对象用于记录这些特定状态。

### code evaluation state

用于记录上下文代码的执行状态: 执行、挂起（暂定）、恢复。

### Function

function object，函数对象。可以通过函数表达式来被调用。普通对象包含[[HasProperty]],[[GetOwnProperty]]等内部方法。
函数对象还额外包含[[Call]]、[[Construct]]两个内部方法。Call表示函数可以被其他对象调用，Construct表示函数可以被当成构造函数用于创建对象。

this为内部方法[[Call]]的第一个参数。当执行上下文处于栈顶时，对应的Function Object可以成为 active function object。

### Realm

资源域。与作用域是不同的概念。它表示当前代码的运行环境范围，两个不同页面对象两个不同的域。

一个Realm域由一个Realm记录对象呈现，具体包含的内部属性有：
- [[Intrinsics]] 该属性对应所有的内置对象，例如Map，JSON等以及一些全局方法isNaN
- [[GlobalObject]] 全局对象
- [[GlobalEnv]] 全局环境记录
- [[TemplateMap]] 模板对象列表
- [[HostDefined]] 保留供主机使用的字段,通常为undefined

与执行上下文一样,环境记录是纯粹的规范机制,**无法从外部访问或者操作这些值**。

## 变量提升

环境记录用于收集各种声明的绑定。用于创建**未被初始化**的可变绑定。只会收集某种声明，并不会立即赋值。

```javascript
console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization

let a = 20
```
initialization就是未初始化之前不能访问变量a。也就是log访问a时，a已经完成了绑定，只不过还没有赋值。

这就是变量提升。在执行代码之前，环境记录会提前收集所有的声明绑定。

ES6的let/const/class是一样的提示。因为要解决对undefined的理解带来的历史遗留问题。本质的核心是相当于我们在执行上下文的创建阶段，
环境记录相当于裁判一样，需要给每一位选手提前收集所有相关信息资料。然后在代码执行阶段，针对每个变量进行绑定并进行赋值操作。
类似于需要提前规划好有准备，然后才开始着手开启项目。**好比，阿瓦隆需要收集各自玩家的牌，来决定本轮发不发车是一样的道理。**

```javascript
console.log(a) // undefined

var a = 20
```
**undefined并非表达一个具体的值，而只是一个代指，表示没有任何值，编译之后也不会存在未被初始化、未被定义的状态，而是被undefined来作用于指代[未处始化的标记]。因此，undefined可以表示未被初始化。**

而只有null才表达一个空值。使用function关键字生命的函数，在初始化时，就直接赋值指向对应的函数体。


## Local对象

在作用域链[[Scope]]中，完成的作用域包含一个函数自身的Local对象。

Local，由函数参数，var、let/const、function、class、this指向等声明的变量共同组成。

**仅仅只有处于栈顶的执行上下文。才会生成Local对象。**并且Local的具体内容在执行上下文的生命周期中不断变化。
相当于:
1. 第一阶段: 函数参数、function变量、this指向，能先在Local中赋值
2. 第二阶段：其他变量的初始值都为undefined
3. 第三阶段：在代码执行过程中逐步明确给Local的赋值。

从理解上下文运行机制的角度来说，Local对象与环境记录对象，可以认为是同一个对象。

```javascript
function foo() {
    var a = 20;
    function bar() {
        a = 30;
        console.log(a);
    }
    bar();
}
foo();
```
函数bar的Local对象中不包含一个独立的变量a。因为bar被调用的时候，会在自己的作用域中寻找是否有变量a，如果没有就会在外层的作用域中查找，直到找到a。

Math能在代码的任何地方访问的到，因为在全局执行上下文中，JavaScript环境会提供一些内置对象，在任何地方都可使用。类似window、Math、Date。

**全局变量和全局函数，在执行上下文的层次结构中，全局执行上下文位于“最底层”的，但在作用域链的上下文中是“最顶层的”。**

**因为它处于作用域链的末端。当在一个函数内部寻找不到变量的时候，解释器会沿着作用域链向“上”查找，直到达到全局作用域。**
如果在全局作用域中仍然找不到该变量，则会产生一个引用错误。xxx is not defined.
