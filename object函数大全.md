1. Object.is(a, b)

```js
//  Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
  Object.is(NaN, NaN) // 会返回 true.
```