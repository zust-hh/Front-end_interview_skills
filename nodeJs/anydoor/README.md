# anydoor

一个node.js写的静态资源服务器

## 安装

``` cmd
npm i -g anydoor
```

## 使用方法

```
anydoor # 把当前文件夹作为静态资源服务器根目录

anydoor -p 8080 # 设置端口号为 8080

anydoor -h localhost # 设置 host 为 localhost

anydoor -d /usr # 设置 /usr为根目录
```

## 第三方模块

* chlak 输出颜色
* supervisor node代码热更新
* handlebars 前端模版引擎

## helper文件夹

* route 主要函数
* mime 判断编码类型
* compress 进行压缩
* range 处理只要部分内容的range请求
  * range: bytes=[start]-[end]
  * Accept-Ranges:bytes
  * Content-Range:bytes start-end/total
* 缓存header
  * Expires,Cache-Control
  * If-Modified-Since/Last-Modified
  * If-Node-Match/ETag