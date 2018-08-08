1. concat

```js
a.concat(b)
// 返回：一个新的字符串
```

2. indexOf

```js
a.indexOf('i')
// 返回字符串中第一处出现的索引，没有返回-1
```

3. charAt

```js
a.charAt(0)
// 返回指定位置的字符
```

4. substring（以两个参数中较小的作为起始位置）

```js
a.substring(1, 4)
// 返回起始位置到结束位置的子串
```

5. substr

```js
a.substr(1, 4)
// 返回起始位置指定长度的子串
```

6. replace(替换)

```js
a.replace('1', '2')
// 查找匹配字串，并替换
```

7. slice（部分）(和substring相同)

8. split(切开)

```js
a.split('')
// 根据某字符切开，转化成字符串数组
```

9. length

10. toLowerCase、toUpperCase

11. parseInt(str, num)

将str转化为十进制数字，根据num可判断是几进制转化为十进制

## es6添加

1. 可用for of遍历

2. includes（包含）返回boolean

3. starsWith、endsWith 返回boolean

4. repeat(重复)

```js
a.repeat(3)
```

5. padStart、padEnd（补全）

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padEnd(4, 'ab') // 'xaba'
```
