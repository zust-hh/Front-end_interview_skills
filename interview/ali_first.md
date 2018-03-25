首先自我介绍，聊项目

说自己哪个项目最有成就感，哪个项目最有难度

说说react和vue的区别

react和vue的虚拟dom有什么不同

mvvm是怎么实现的

diff算法

对于原型和原型链的理解

对于闭包

for in和for of的区别

1. in是循环对象属性，of是遍历数组；
2. in循环出来的是key，of循环出来的是value；
3. of是ES6新引入的特性。修复了ES5引入的in的不足
4. of不能循环普通的对象，需要通过和Object.keys()搭配使用
5. of语句在可迭代对象(包括 Array, Map, Set, String,TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.也就是说，for of只可以循环可迭代对象的可迭代属性，不可迭代属性在循环中被忽略了。

```js
for(var key of Object.keys(student)){
    //使用Object.keys()方法获取对象key的数组
    console.log(key+": "+student[key]);
}
```

对于promise怎么自己实现

对于generator的理解

* generator对象
* yield
* iterate对象
* next()

箭头函数

怎么原生js绑定事件

对于动态添加的元素怎么绑定事件

怎么实现响应式

（rem怎么实现响应式：通过媒体查询改变字体的大小，然后布局用rem）

你做过的安全方面

对于node做过什么功能

node进程怎么管理

对于构建工具的使用

对于数据库有没有做过什么高级的事情

对于学习一个新技术你会怎么做

对于前端以后的发展你有什么想法

你还有什么想问我的吗