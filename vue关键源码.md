# Vue2关键源码

## Vue2生命周期

* beforeCreate 组件实例刚刚被创建，组件属性计算之前，如data属性等
* created 组件实例创建完成，属性已绑定，但DOM还未生成，$el属性还不存在
* beforeMount 模版编译挂载之前
* mounted 模版编译挂载之后（不保证组件已在document中）
* beforeUpdate 组件更新之前
* updated 组件更新之后
* activated for keep-alive，组件被激活时调用
* deactivated for keep-alive 组件被移除时调用
* beforeDestory 组件销毁前调用
* destoryed 组件销毁后调用

最常用的

* beforeCreate : 举个栗子：可以在这加个loading事件
* created ：在这结束loading，还做一些初始化，实现函数自执行
* mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
* beforeDestory： 你确认删除XX吗？
* destoryed：当前组件已被删除，清空相关内容

## Vue2 中数据绑定的实现方式

过程：

* 初始化：new Vue() -> vm._init()
* 数据劫持：initState(vm) -> initProps(), initData() -> dep.depend()
* 依赖收集：vm.$mount() -> vm. _mount() -> new Watcher() -> vm. _render()

大列表数据更新：
在directives/repeat.js里有个diff：function（data,oldVms）
比较新旧两个列表的vm数据状态，差量更新DOM

## Vue2 中对 Virtual DOM 机制的使用方式

Vue在2.0版本也引入了vdom。其vdom算法是基于snabbdom算法所做的修改。

大列表数据更新：
在directives/repeat.js里有个diff：function（data,oldVms）
比较新旧两个列表的vm数据状态，差量更新DOM

对新旧vnode进行比较，多了就销毁，少了就添加，变了就更新，调用diff函数