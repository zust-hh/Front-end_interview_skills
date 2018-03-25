先想想这个函数需要做什么。jQuery extend文档中描述的jQuery.extend原型是
jQuery.extend( target [, object1 ] [, objectN ] )

它的含义是将object1、object2...合并到target中，并返回合并过的target。这里面有两个点需要注意一下。

合并是从后到前的；
target的值是被修改了的；
是深拷贝的（若是参数对象中有属性是对象，也是会递归合并的）；
其实若不想原始数据被更改也很简单，只要第一个参数传空对象就好了。

```js
void function(global){
    var extend,
        _extend,
        _isObject;

    _isObject = function(o){
        return Object.prototype.toString.call(o) === '[object Object]';
    }

    _extend = function self(destination, source) {
        var property;
        for (property in destination) {
            if (destination.hasOwnProperty(property)) {

                // 若destination[property]和sourc[property]都是对象，则递归
                if (_isObject(destination[property]) && _isObject(source[property])) {
                    self(destination[property], source[property]);
                };

                // 若sourc[property]已存在，则跳过
                if (source.hasOwnProperty(property)) {
                    continue;
                } else {
                    source[property] = destination[property];
                }
            }
        }
    }

    extend = function(){
        var arr = arguments,
            result = {},
            i;

        if (!arr.length) return {};

        for (i = arr.length - 1; i >= 0; i--) {
            if (_isObject(arr[i])) {
                _extend(arr[i], result);
            };
        }

        arr[0] = result;
        return result;
    }

    global.extend = extend;
}(window)
```