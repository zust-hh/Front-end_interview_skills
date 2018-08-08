## 二维数组的全排列组合

如输入[ [1,2],[3,4],[5,6] ]
输出：
[ 1, 3, 5 ]
[ 1, 3, 6 ]
[ 1, 4, 5 ]
[ 1, 4, 6 ]
[ 2, 3, 5 ]
[ 2, 3, 6 ]
[ 2, 4, 5 ]
[ 2, 4, 6 ]

```js
function printArr(arr,n,res){
    for(var i = 0; i<arr[i].length;i++){
        if(n == 0){
            res = []
        }
        if(n<arr.length){
            var _res = res.slice()
            _res.push(arr[n][i])
            if(n == arr.length-1){
                console.log(_res)
            }else{
                printArr(arr,n+1,_res)
            }
        }
    }
}
```

## es5继承

要点：
1. 父函数中的方法叫实例方法
2. 父函数.prototype.方法叫原型方法
3. 子函数继承实例方法只需在子函数方法中father.call(this)
4. 子函数继承原型方法需要son.prototype = new father()
5. son.prototype.constructor = son

```js
function father(name){//父函数
  this.name=name|'koro1';
  this.code=function(){ //父类的实例方法
    console.log(this.name+'coding');
  }
};
father.prototype.add=function(food){ //父类的原型方法
  console.log(this.name+'eat'+food);
}
function son(name){ //子函数
  father.call(this); //将this绑定到子类，绑定父类的实例方法code（原型方法add还未绑定）
  this.name=name|| 'OBKoro1';
}
son.prototype = new father();//把父类的原型方法绑定到子类，实现继承
var sonVar= new son('faker');//这里也可以传参name
son.prototype.constructor = son;//修复构造函数的指向
console.log(sonVar.code());
console.log(sonVar.add());//可以调用父类的方法了
```

## 快速排序

```js
function quickSort(arr) {
        if(arr.length == 0) {
            return [];    // 返回空数组
        }

        var cIndex = Math.floor(arr.length / 2);
        var c = arr.splice(cIndex, 1);
        var l = [];
        var r = [];

        for (var i = 0; i < arr.length; i++) {
            if(arr[i] < c) {
                l.push(arr[i]);
            } else {
                r.push(arr[i]);
            }
        }

        return quickSort(l).concat(c, quickSort(r));
    }

    console.log(quickSort(arr));
```