# 对于JavaScript运行机制的深度学习

（本篇文章主要涉及的是promise队列和普通异步的讨论，想要了解运行机制的，可以去看阮大神的文章[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)）

之前我对于JavaScript运行机制的理解，是通过下面几点

* JavaScript的单线程机制
* 任务队列（同步任务和异步任务）
* 事件和回调函数
* 定时器
* Event Loop（事件循环）

本来一切都是风平浪静，但是突然一道题摆在我面前的时候，我懵了

```js
setTimeout(function(){console.log(4)},0);
new Promise(function(resolve){
    console.log(1)
    for( var i=0 ; i<10000 ; i++ ){
        i==9999 && resolve()
    }
    console.log(2)
}).then(function(){
    console.log(5)
});
console.log(3);
```

主要的矛盾点在于输出4和5的顺序，如果promise.then也是普通的异步任务，那么顺序应该是1，2，3，4，5。但是在亲自测试后发现答案是1，2，3，5，4。

那么是什么导致了这样呢，所以对于JavaScript运行机制的理解，还要加上以下几点

* Promise（这里指浏览器实现的原生Promise）
* process.nextTick
* setImmediate
* ...

通过上面的题目就知道，定时器任务会迟于.then加入运行队列中，为什么呢？

看了很多文章博客，终于找到了答案

## Event loops

首先对事件循环的基本概念了解
**一个浏览器只能有一个事件循环**
**而一个事件循环可以多个任务队列**

### 任务源

相同任务源的任务，只能放到一个任务队列中。不同任务源的任务，可以放到不同任务队列中。客户端可能实现了一个包含鼠标键盘事件的任务队列，还有其他的任务队列，而给鼠标键盘事件的任务队列更高优先级，例如75%的可能性执行它。这样就能保证流畅的交互性，而且别的任务也能执行到了。但是，同一个任务队列中的任务必须按先进先出的顺序执行。

## promiseA+规范

[图灵社区 : 阅读 : 【翻译】Promises/A+规范](http://www.ituring.com.cn/article/66566)

在这篇文章中说到了macrotask和microtask两个概念，这表示异步任务的两种分类。在挂起任务时，JS引擎会将所有任务按照类别分到这两个队列中，首先在macrotask的队列（这个队列也被叫做task queue）中取出第一个任务，执行完毕后取出microtask队列中的所有任务顺利执行；之后再取macrotask任务，周而复始。

这样看来定时器和promise肯定处于不同的任务队列，没错

两个类别的具体分类如下：

* **macro-task**： script（整体代码），setTimeout,setInterval,setImmediate,I/O,UI rendering
* **micro-task**: process.nextTick,Promise(这里指浏览器实现的原生Promise)，Object.observe,MutationObserver

## 题目解答

在执行同步任务输出1，2，3后浏览器先执行一个macrotask，执行过程中把setTimeout中的输出放在新创建的macrotask中，还创建了一个microtask里面放.then中的输出，之后浏览器执行microtask，输出5，然后在新的循环中，再执行macrotask输出4。
**一切解决**

## process.nextTick和setImmediate

既然提到了process.nectTick和setImmediate,那就提一下，在阮大神的文章中是这样解释的
process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。

所以把这几个异步任务的执行先后排个顺序的话，就是下面这样：
**process.nextTick > promise.then > setTimeout > setImmediate**

我只是大神知识的搬运工，其中有我理解不对的地方，还请大家互相讨论，谢谢！！