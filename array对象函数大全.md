**1. concat**

**2. join**

```js
a.join('')
// 返回拼接用指定字符分割的字符串
```

**3. pop（尾部弹出）**

**4. push（尾部增加）**

**5. shift（头部弹出）**

**6. unshift（头部增加）**

**7. reverse(反转)**

**8. slice（切片）**

```js
a.slice(1, 4)
// 返回起始位置到结束位置的子数组
```

**9. sort**

**10. splice（替换）**

```js
arrayObject.splice(index,howmany,item1,.....,itemX)
// 可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素
// 返回被删除的数组
```

**11. toString**

**12. Math.max/min**

```js
Math.max(...[14, 3, 77])
```

**13. Array.from**

```js
Array.from(obj)
// 将类数据接口转化为数组

// 第二个参数用来对每个元素进行处理
Array.from(arrayLike, x => x * x);
```

**14. Array.of**

```js
// 将一组值转换为数组，弥补Array构造函数的不足
Array(3) // [,,,]
Array.of(3) // [3]
Array.of(3, 8, 11) // [3, 8, 11]
```

**15. find**

所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员

```js
// 找出数组中第一个小于 0 的成员
[1, 4, -5, 10].find((n) => n < 0)
```

**16.  fill**

给定值，填充一个数组

```js
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']  指定填充的起始位置和结束位置
```

**17.  entries()，keys() 和 values()** 

用于遍历数组。它们都返回一个遍历器对象.可以用for...of循环进行遍历.

keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

**18. includes（包含）返回boolean**

**19. filter**

创建一个新数组, 其包含通过所提供函数实现的测试的所有元素

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

**20. reduce**

对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。

执行数组中每个值的函数，包含四个参数：

*accumulator*
累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。

*currentValue*
数组中正在处理的元素。

*currentIndex(可选)*
数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。

*array(可选)*
调用reduce的数组

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

**21. indexOf**