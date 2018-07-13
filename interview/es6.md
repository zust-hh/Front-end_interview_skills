# ES6

## 环境搭建

* 在项目目录下新建目录src（承载es6语法）和dist（承载编译之后的es5语法）
* 在项目中npm init -y初始化
* 安装babel-cli babel-preset-es2015
* 在根目录下新建.babelrc文件

```js
{
  "presets":[
    "es2015"
  ],
  "plugins":[]
}
```

* 在src中写es6语法后，运行babel src/index.js -o dist/index.js

## 新的声明方式

* var 全局变量
* let 局部变量
* const 静态变量

## 变量的解构赋值

* 数组的解构赋值

```js
let [a,b,c] = [1,2,3];
let [a,[b,c],d] = [1,[2,3],4];

let [foo=true] = [];
console.log(foo) // true

let [a,b="World"] = ["Hello"]
console.log(a+b) // HelloWorld

let [a,b="World"] = ['Hello',undefined]
console.log(a+b) //HelloWorld

let [a,b="World"] = ['Hello',null]
console.log(a+b) // Hellonull
```

* 对象的解构赋值

```js
// 不用按次序，但是要名相同
let {foo,bar} = {bar:'World',foo:'Hello'}
console.log(foo+bar) //HelloWorld

// 如果解构前，已经定义了变量，需要在解构的语句外面加一个圆括号
let foo;
({foo}={foo:'Hello1'})
console.log(foo)
```

* 字符串的解构

```js
const [a,b,c,d,e]="Hello"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
```

## ...扩展运算符和rest运算符

* 对象扩展运算符（...）

```js
// 运用1：对于一个方法传入参数不确定
function f(...arg) {
  console.log(arg[0])
  console.log(arg[1])
  console.log(arg[2])
}
f(1,2) // 1,2,undefined

// 运用2：解决数组赋值只是堆栈引用问题
let arr1=['www','baidu','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('hh');
console.log(arr2); //["www", "baidu", "com", "hh"]
console.log(arr1); //["www", "baidu", "com"]
```

* rest运算符

```js
function f(first,...arg){
    console.log(arg.length);
}
f(0,1,2,3,4,5,6,7); //7

function f1(first,...arg){
    for(let val of arg){  // for of循环可以避免开拓内存空间，增加运行效率
        console.log(val);
    }
}

f1(0,1,2,3,4,5,6,7); // 1,2,3,4,5,6,7
```

## 字符串模版

```js
let s1='hhh';
let blog = `非常高兴你能看到这篇文章,${s1}`;
document.write(blog);

//支持html标签
let s2='hhh';
let blog = `<b>非常高兴你能看到这篇文章</b>,${s1}`;
document.write(blog);

//对运算的支持
let a=1;
let b=2;
let result=`${a+b}`;
document.write(result); //3
```

## 字符串查找

```js
let s1='hh';
let blog = '非常高兴你能看到这篇文章，我是你的老hh';
document.write(blog.includes(s1));

//判断开头有没有 startsWith
//判断结尾有没有 endsWith
```

## 复制字符串

```js
document.write('hhh|'.repeat(3));
```

## ES6数字操作

* 二进制和八进制

```js
let er = 0b010101 //21
let ba = 0o666 //438
```

* 数字判断和转换

```js
// 数字验证
let a = 11/4;
console.log(Number.isFinite(a)) // true

//NaN验证 NaN是特殊的非数字
console.log(Number.isNaN(NaN)) //true

// 判断是否为整数
console.log(Number.isInteger(123.4)) //false

// 整数转换、浮点数转换
let a = '9.18'
console.log(Number.parseInt(a))  //9
console.log(Number.parseFloat(a)) //9.18

// 整数取值范围操作
let a = Math.pow(2,53)-1 // 最大的整数2^53-1

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER)

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER)

// 安全整数判断
let a = Math.pow(2,53)-1;
console.log(Number.isSafeInterger(a)) //false
```

## ES6新增的数组知识

* JSON数组格式转换

```js
let  json = {
    '0': 0,
    '1': 'hh',
    '2': 'hello',
    length:3
}

//将json转化为数组
let arr = Array.from(json)

//将一堆文本或者变量转换成数组
let arr = Array.of(3,'4',5,6)
```

* find()方法

在find方法中我们需要传入一个匿名函数，函数需要传入三个参数：

    * value：表示当前查找的值。
    * index：表示当前查找的数组索引。
    * arr：表示当前数组。

在函数中如果找到符合条件的数组元素就进行return，并停止查找。如果找不到会显示undefined

```js
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))
// 6
```

* fill()方法

fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充结束的位置。

```js
let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('hh',2,5);
console.log(arr); //[0, 1, "hh", "hh", "hh", 5, 6, 7, 8, 9]
```

* 数组的遍历

```js
// for...of循环
for(let item of arr){
  console.log(item)
}

//for...of输出数组索引
for(let index of arr.keys()){
  console.log(index)  //0,1,2
}

//同时输出内容和索引
for(let [index,item] of arr.entries()){
  console.log(index + item)
}
```

* entries()实例方法

entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。

```js
let arr=['hello','world','hh']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
```

## ES6中箭头函数和扩展

* 默认值 函数多个参数，可以给其中的参数设置默认值，传参时不必要传
* 主动抛出错误 使用 throw new Error('')
* 严谨模式 在函数体头部 'use strict'
* 获得需要传递的参数个数 function.length
* 箭头函数 () => {} ，与普通函数的区别是，箭头函数的this指向外部空间，也就是保留上下文
* 对于需要动态获取this的场景不能使用箭头函数，因为箭头函数的this在定义的时候就固定了
* 使用箭头函数创建普通对象时，你需要将对象包裹在小括号中,一个空对象{}和一个空的块{}看起来完全一样。ES6中的规则是，紧随箭头的{被解析为块的开始，而不是对象的开始

```js
// 为与你玩耍的每一个小狗创建一个新的空对象
    var chewToys = puppies.map(puppy => {});   // 这样写会报Bug！
    var chewToys = puppies.map(puppy => ({})); //
```

## ES6中的函数和数组补漏

* 对象的函数解构

```js
let json = {
    a:'hello',
    b:'world'
}
function fun({a,b}){
    console.log(a,b);
}
fun(json);
```

* 数组的函数解构

```js
let arr = ['hello','world','hh'];
function fun(a,b,c){
    console.log(a,b,c);
}
fun(...arr);
```

* in的用法

```js
//对象判断
let obj={
    a:'hello',
    b:'world'
}
console.log('a' in obj);  //true

//数组判断
//这里的0指的是数组下标位置是否为空
let arr=[,,,,,];
console.log(0 in arr); //false

let arr1=['hh','HH'];
console.log(0 in arr1);  // true
```

* 数组的遍历方法

```js
// forEach
let arr=['hello','world','hh'];
arr.forEach((val,index)=>console.log(index,val));

//filter
arr.filter(x=>console.log(x));

// some
arr.some(x=>console.log(x));

// map
arr.map(x=>console.log(x));
// console.log(arr.map(x=>'web'));
```

* 数组转换字符串

```js
//join() 在数组中加入间隔
let arr=['hello','world','hh'];
console.log(arr.join('|'));

// toString() 转换时用,隔开
console.log(arr.toString())
```

## ES6中对象

* 对象赋值

ES6允许把声明的变量直接赋值给对象

```js
let name="hello";
let skill= 'web';
var obj= {name,skill};
console.log(obj);  //Object {name: "hello", skill: "web"}
```

* 对象Key值构建

对于不知道key名的，可以用[ ] 的形式，进行对象的构建。

```js
let key='skill';
var obj={
    [key]:'web'
}
console.log(obj.skill);
```

* 自定义对象方法

```js
var obj={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj.add(1,2));  //3
```

* Object.is()对象比较

```js
var obj1 = {name:'hello'};
var obj2 = {name:'hello'};
console.log(obj1.name === obj2.name);//true
console.log(Object.is(obj1.name,obj2.name)); //true

// 区分=== 和 is方法，===为同值相等，is()为严格相等
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
```

* Object.assign()合并对象

```js
var a={a:'hello'};
var b={b:'world'};
var c={c:'web'};

let d=Object.assign(a,b,c)
console.log(d); //{a: "hello", b: "world", c: "web"}
```

## Symbol在对象中的作用

Symbol的意思是全局标记

* 声明Symbol

```js
var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object;
var f= Symbol();
console.log(typeof(f)); //symbol
```

* Symbol的打印

```js
var g = Symbol('hello');
console.log(g); //Symbol(hello)
console.log(g.toString());
```

* Symbol在对象中的应用

用Symbol构建对象的Key，并调用和赋值。

```js
var hello = Symbol();
var obj={
    [hello]:'Hello'
}
console.log(obj[hello]);
obj[hello]='web';
console.log(obj[hello]);
```

* Symbol对象元素的保护作用

在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护

```js
//没有保护的写法
var obj={name:'hh',skill:'web',age:18};
for (let item in obj){
    console.log(obj[item]);
}

// 用Symbol进行保护
let obj={name:'hh',skill:'web'};
let age=Symbol();
obj[age]=18;
for (let item in obj){
    console.log(obj[item]); //hh web
}
console.log(obj[age]); // 18
```

## Set和WeakSet数据解构

Set的数据结构是以数组的形式构建的。Set.size可以得到Set值的数量

* Set声明

```js
let setArr = new Set(['hello','world','hh','hello']);
// Set会去重
console.log(setArr);//Set {"hello", "world", "hh"}
```

* Set值的增删查

```js
//add追加。
let setArr = new Set(['hello','world','web']);
setArr.add('前端职场');
console.log(setArr);

//delete删除
setArr.delete('前端职场');
console.log(setArr);

//has查找
console.log(setArr.has('hello'));//true

//clear清空
setArr.clear();
console.log(setArr);//Set(0) {}
```

* WeakSet的声明

WeakSet里边的值也是不允许重复的

```js
// 直接在new 的时候就放入值，将报错
let weakObj=new WeakSet();
let obj={a:'hello',b:'world'}
weakObj.add(obj);
console.log(weakObj);
```

## map数据结构

在一些构建工具中是非常喜欢使用map这种数据结构来进行配置的，因为map是一种灵活，简单的适合一对一查找的数据结构。

* Json和map格式的对比

map的效率和灵活性更好,你可以把它看成一种特殊的键值对，但你的key可以设置成数组，值也可以设置成字符串，让它不规律对应起来。

```js
let json = {
    name:'hello',
    skill:'web'
}
console.log(json.name);

var map=new Map();
map.set(json,'hello');
// map.set('hello',json)
console.log(map);
```

* map的增删查

```js
// 增加set
map.set(json,'hello');

// 取值get
console.log(map.get(json));

// 删除delete
map.delete(json);
console.log(map)

// size取长度
console.log(map.size);

// has查找
console.log(map.has('hello'))

// clear清空
map.clear()
```

## 用Proxy进行预处理

在运行函数前初始化一些数据，在改变对象值后做一些善后处理。这些都算钩子函数，Proxy的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。
Proxy的应用可以使函数更加强大，业务逻辑更加清楚，而且在编写自己的框架或者通用组件时非常好用。

* 声明Proxy

第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。

```js
// 基本形式
// new Proxy（{},{}）;

var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am hh'
}, {
        get:function(target,key,property){
            console.log('come in Get');
            return target[key];
        }
    });

console.log(pro.name); // come in Get, I am hh
```

* get属性

get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

target：得到的目标值
key：目标的key值，相当于对象的属性
property：这个不太常用，用法还在研究中，还请大神指教。

* set属性

set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

target:目标值。
key：目标的Key值。
value：要改变的值。
receiver：改变前的原始值。

```js
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am hh'
}, {
        get:function(target,key){
            console.log('come in Get');
            return target[key];
        },
        set:function(target,key,value,receiver){
            console.log(`setting ${key} = ${value}`);
            return target[key] = value;
        }

    });

console.log(pro.name); // come in Get,I am hh
pro.name='zust'; // setting name = zust
console.log(pro.name); // come in Get,zust
```

* apply的使用

apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。

```js
let target = function () {
    return 'I am hh';
};
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}

var pro = new Proxy(target, handler);

console.log(pro()); // do apply,I am hh
```

## promise对象的使用

ES6中的promise的出现给我们很好的解决了回调地狱的问题，在使用ES5的时候，在多层嵌套回调时，写完的代码层次过多，很难进行维护和二次开发，ES6认识到了这点问题，现在promise的使用，完美解决了这个问题。那我们如何理解promise这个单词在ES5中的作用那，你可以想象他是一种承诺，当它成功时执行一些代码，当它失败时执行一些代码。它更符合人类的行为思考习惯，而不在是晦涩难懂的冰冷语言。

* promise实现思想

.then方法和状态，一个promise的构造函数，会return一个处理后的新promise对象，初始化状态为pending，然后设置两个回调函数数组，一个是成功的，一个是拒绝的。然后就是判断状态，去选择循环执行哪个函数集

* promise的基本用法

promise执行多步操作非常好用，那我们就来模仿一个多步操作的过程，那就以吃饭为例吧。要想在家吃顿饭，是要经过三个步骤的。

1.洗菜做饭。
2.坐下来吃饭。
3.收拾桌子洗碗。
这个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步。我们可以在脑海里先想想这样一个简单的过程在ES5写起来就要有多层的嵌套。那我们现在用promise来实现。

```js
let state=1;

function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}


function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}


function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);

}).then(function(val){
     console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    return val;
});
```

* promise.all & promise.race

```js
// 接收promise对象数组
// 待全部完成，统一执行success
Promise.all([result1, result2]).then(datas => {
    console.log(datas[0]);
    console.log(datas[1]);
})

// 接收promise对象数组
// 其中一个完成，就执行success
Promise.race([result1, result2]).then(data => {
    console.log(data);
})
```

* async await

```js
// await 后面跟的是一个Promise实例
const load = async function() {
    const result1 = await loadImg(src1)
    console.log(result1)
    const result2 = await loadImg(src2)
    console.log(result2)
}
load()
```

## class类的使用

我们在ES5中经常使用方法或者对象去模拟类的使用，虽然可以实现功能，但是代码并不优雅，ES6为我们提供了类的使用。需要注意的是我们在写类的时候和ES5中的对象和构造函数要区分开来，不要学混了。

* 类的声明

```js
class coder{
    name(val){
        console.log(val);
    }
}
```

* 类的使用

实例化类，并使用类中的方法

```js
class Coder{
    name(val){
        console.log(val);
    }
}

let hh= new Coder;
hh.name('hh');
```

* 类的多方法声明

注意的是两个方法中间不要写逗号了，还有这里的this指类本身，还有要注意return 的用法

```js
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('hh')+':'+'Skill:'+val);
    }
}

let hh= new Coder;
hh.name('hh');
hh.skill('web');
```

* 类的传参

在类的参数传递中我们用constructor( )进行传参。传递参数后可以直接使用this.xxx进行调用。

```js
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('hh')+':'+'Skill:'+val);
    }

    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    add(){
        return this.a+this.b;
    }
}

let hh=new Coder(1,2);
console.log(hh.add());
```

我们用constructor来约定了传递参数，然后用作了一个add方法，把参数相加。这和以前我们的传递方法有些不一样，所以需要小伙伴们多注意下。

* class的继承

```js
class htmler extends Coder{

}

let hh=new htmler;
hh.name('hh');
```

声明一个htmler的新类并继承Coder类，htmler新类里边为空，这时候我们实例化新类，并调用里边的name方法。结果也是可以调用到的。

## 模块化操作

在ES5中我们要进行模块华操作需要引入第三方类库，随着前后端分离，前端的业务日渐复杂，ES6为我们增加了模块话操作。模块化操作主要包括两个方面。

export :负责进行模块化，也是模块的输出。
import : 负责把模块引，也是模块的引入操作。

* export的用法

export可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用。先来看个最简单的例子，把一个变量模块化。我们新建一个temp.js文件，然后在文件中输出一个模块变量。

```js
// temp.js
export var a = 'hh';

// index.js
import {a} from './temp.js';
console.log(a);
```

* 多变量的输出

这里声明了3个变量，需要把这3个变量都进行模块化输出，这时候我们给他们包装成对象就可以了

```js
var a ='hello';
var b ='hh';
var c = 'web';

export {a,b,c}
```

* 函数的模块化输出

```js
export function add(a,b){
    return a+b;
}
```

* as的用法

有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用as来操作

```js
var a ='hello';
var b ='hh';
var c = 'web';

export {
    x as a,
    y as b,
    z as c
}
```

* export default的使用

加上default相当是一个默认的入口。在一个文件里export default只能有一个。我们来对比一下export和export   default的区别

1.export

```js
export var a ='hh';

export function add(a,b){
    return a+b;
}
```

对应的导入方式

```js
import {a,add} form './temp';//也可以分开写
```

2.export default

```js
export default var a='hh';
```

对应的引入方式

```js
import str from './temp';
```

ES6的模块化不能直接在浏览器中预览，必须要使用Babel进行编译之后正常看到结果。