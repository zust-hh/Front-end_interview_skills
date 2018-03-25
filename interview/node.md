# Node.js 学习

## Node.js 简介

V8引擎用于Chrome浏览器的JS解释部分，搬到了服务器上
　　Node.js运行在Javascript引擎上，不用建设在任何服务器软件之上。
　　Node.js自身哲学，花最小的硬件成本，追求更高的并发，更高的处理性能。

### Node.js 特性

解决服务器高性能瓶颈的三个特点

* 单线程
  * Node.js不为每个客户连接创建一个新的线程，仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞I/O、事件驱动机制，让Node.js程序宏观上并行。好处还有操作系统完全不再有线程创建、销毁的时间开销。坏处就是一个用户造成了线程的崩溃，整个服务就崩溃了。
* 非阻塞I/O
  * 在执行访问数据库的代码之后，将立即转而执行后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高程序的执行效率。
  　　当某个I/O执行完毕时，将以事件的形式通知执行I/O操作的线程，线程执行这个事件的回调函数。为了处理异步I/O，线程必须有事件循环，不断检查有没有未处理的事件，依次予以处理。
* 事件驱动
  * 在Node中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在Node中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，可以转而处理其他事件（比如，又有新用户连接了），然后返回继续执行原事件的回调函数，这种处理机制，称为“事件环机制”（事件有优先级）
  　　Node.js底层是C++（V8也是C++）。底层代码中，近半数都用于事件队列、回调函数队列的构建。用事件驱动来完成服务器的任务调度。

### Node.js适合开发什么？

Node.js善于I/O，不善于计算，因为Node.js最擅长的就是任务调度，如果你的业务有很多的CPU计算，就相当于阻塞了单线程，就不适合Node开发。
当应用程序需要处理大量并发的I/O，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node.js非常适合。Node.js也非常适合与web socket配合，开发长连接的实时交互应用程序。
适合：

* 用户表单收集
* 考试系统
* 聊天室
* 图文直播
* 提供JSON的API（为前台angular使用）

Node.js无法挑战老牌3P

## Node.js环境

### CommonJS (02)

* 每个文件是一个模块，有自己的作用域
* 在模块内部module变量代表模块本身
* module.exports属性代表模块对外接口

### require规则 (03)

* /表示绝对路径，./表示相对于当前文件的
* 支持js、json、node拓展名,不写依次尝试
* 不写路径则认为是build-in模块或者各级node_modules内的第三方模块

### require特性

* module被加载的时候执行，加载后缓存 (04)
* 一旦出现某个模块被循环加载，就只输出已执行的部分,还未执行的部分不会输出 (05)

### global(全局变量) (09)

* CommonJS
* Buffer、process、console
* timer

#### process(进程)

* 启动变量相关：（10）
  * argv
  * argv0
  * execArgv
  * execPath
* 运行环境 （11）
  * env
* 当前执行路径 （12）
  * cwd
* timer （13）
  * setTimeout （下个队列和当前队列中间）
  * setImmediate（延迟到下个队列队首）
  * nextTick(延迟至当前队列最后一个)

### 调试 (14)

* Inspector （chrome://inspect）
* VS Code

## Node.js基础API

### path(和路径有关的一切) (21)

* normalize (把一切路径转换为标准路径) （15）
* join (将给出的结果路径拼接成标准路径) （16）
* resolve (将相对路径返回绝对路径) （17）
* name（18）
  * basename （自己的名）
  * extname (拓展名)
  * dirname （文件夹名）
* parse (解析文件名,返回一个name对象) (19)
* format (把name对象转换回去) (19)
* 系统相关 (20)
  * sep
  * delimiter
  * win32
  * posix
* 总结：
  * __dirname、__filename总是返回文件的绝对路径
  * process.cwd()总是返回执行node命令所在文件夹
  * ./在require方法中总是相对当前文件所在文件夹
  * ./在其他地方和process.cwd()一样

### Buffer（缓冲）

》 Buffer用来处理二进制数据流
》 实例类似整数数组，大小固定
》 C++代码在V8堆外分配物理内存

* 创建： (22)
  * alloc()
  * allocunsafe()
  * from()
* class方法(Buffer.) (23)
  * byteLength()
  * isBuffer()
  * concat()
* 实例方法 (24)
  * length
  * toString()
  * fill()
  * equals()
  * indexOf()
  * copy()
* 处理中文 (25)

### events(事件)

* 一般的监听处理事件 （26）
* 传参的监听处理事件 （27）
* 只执行一次的监听处理事件 （28）
* 移除绑定事件 （29）

### fs(文件系统)

* readFile （30）
* writeFile （31）
* stats(文件信息相关) (32)
* rename (33)
* unlink （删除） (34)
* readdir （读文件夹） (35)
* mkdir (36)
* rmdir (37)
* watch (监视文件变化) (38)
* readstream (数据流) (39)
* writestream (40)
* promisify (解决回调地狱) (41)

## 本地构建

### gulp

常用方法：

* task
* src
* watch

常用库：

* gulp-less 解析less
* gulp-antoprefixer 自动加浏览器兼容前缀
* gulp-clean-css 压缩css
* gulp-babel 构建javascript

### babel

### webpack

* 配置文件
  * entry 定义入口文件
  * output 输出结果相关
    * path 输出目标路径
    * filename 打包出来的文件名
  * module 模块
    * rules 模块规则，配置loader、解析器等选项
  * externals 忽略某些js，不要打包
  * plugin 放多页面共同引用的js处理，或者忽略引用了但是没用的js

* 需要把css单独打包，在config中引入extract-text-webpack-plugin
* 忽略引用了但是没用的js，在config中引入 uglifyjs-webpack-plugin