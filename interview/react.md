对于redux不是很了解，当初时间不够，没学，当时很多父子之间通讯，以及隔好几代通讯不方便，我就用一个类似顶层的global对象，用来存一些经常通讯的变量。

## 生命周期

渲染过程调用到的生命周期函数，主要几个要知道；
  	* constructor
  	* getInitialState
  	* getDefaultProps
  	* componentWillMount
  	* render
  	* componentDidMount

  	更新过程

  	* componentWillReceiveProps
  	* shouldComponentUpdate
  	* componentWillUpdate
  	* render
  	* componentDidUpdate

  	卸载过程

  	componentWillUnmount

## react优点

组件模式：代码复用和团队分工
虚拟 DOM：性能优势
移动端支持：跨终端

对比以前的方式的话，优势在于：
高性能虚拟DOM（Virtual DOM）

Virtual DOM的概念的提出是为了简化对DOM的操作：通过在内存中创建 Virtual DOM元素，利用 Virtual DOM来减少对实际DOM的操作从而提升性能。类似于真实的原生DOM，虚拟DOM也可以通过JavaScript来创建，但这样的代码可读性并不好，于是React发明了JSX，利用HTML语法来创建虚拟DOM。

对比vue
在vue2.0之后之后也加入了虚拟dom，差不多，都是数据驱动视图
优势的话就是react-native，react-vr，react的论坛和github上有很多组件，然后react不断在更新。生态圈已经形成，问题比较容易讨论出来。

## react的优势

react的论坛和github上有很多组件，然后react不断在更新。生态圈已经形成，问题比较容易讨论出来。

## diff算法的理解

其实比较新旧两个列表的数据状态，差量更新DOM

对于不用节点类型
1.逐层进行节点比较
简单粗暴的对层级的节点有不同时，直接删除原层级，插入新层级，不用进入层级看不同，增快速度

对于相同节点类型
只需要对属性重设

对于同一层列表节点的比较
最开始写代码的时候总会有个警告，说每个孩子都应该有个唯一标识key，后来了解到，这个key就是react对于列表节点高效更新的依据。能够更新的时候直接插入或删除，不用像数组一样，全部移动

## 为什么要单项数据流

1.单向数据流　数据流动方向可以跟踪，流动单一，追查问题的时候可以跟快捷。缺点就是写起来不太方便。要使UI发生变更就必须创建各种action来维护对应的state
2.双向流动　值和UI双绑定，这种好处大家都懂。但是由于各种数据相互依赖相互绑定，导致数据问题的源头难以被跟踪到，子组件修改父组件，兄弟组件互相修改有有违设计原则。　但　好处就是　太特么方便了。

## 组件交互

1.父向子：直接通过props，使用子组件的时候，数据放在props中直接给子组件
2.子向父：通过props，传递一个父组件作用域的函数，那个函数里面可以修改父组件内部的数据，子组件就通过调用那个函数来改变父元素的数据
3.兄弟间：因为我没学过redux，目前应该最优的方法是使用观察者模式，eventProxy.js，在一个中发布message事件，另一个监听message事件

## state和props的区别

父组件的state变成单向数据流传递给子组件不就是子组件的props吗。
==props：==一般用于父组件向子组件通信，在组件之间通信使用。
==state：==一般用于组件内部的状态维护，更新组建内部的数据，状态，更新子组件的props等。