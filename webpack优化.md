# webpack2 终极优化

## 优化输出

使打包结果更小

### 压缩css

css-loader

### tree-shaking

利用 import export 语法的静态性来删掉export但是没有import的东西

### 优化uglifyJsPlugin

覆盖默认配置，将注释、空格、console都删除，以及对变量的提取和删除

### 定义环境变量NODE_ENV=production

### 使用CommonsChunkPlugin抽取公共代码

在多页面场景利用浏览器缓存，不同页面的公共代码之前加载过就不再加载

### 在生产环境按文件的md5值打hash后缀

只有修改过的文件hash才会变，充分利用缓存。进一步还可以将一般不会动的库提取打包

## 优化开发体验

### 更快的构建

#### 缩小文件的搜索范围

写明node_module的全路径，配置loader的搜索范围，只对自己写的js进行babel编译，将node_module中的忽略

#### 开启babel_loader缓存

#### 使用alias

直接使用dist目录的整体文件，不用到lib文件后递归查询

#### 使用noParse

使某些文件脱离的webpack的解析

#### 使用happypack多进程并行构建

#### 使用DllPlugin复用模块

### 更方便的功能

#### 模块热替换

#### 自动生成html

使用web-webpack-plugin，生成的html自动引入entry生成的js文件

#### 管理多页面

使用AutoWebPlugin自动将每个目录看成一个单页应用，为每一个目录生成一个html入口

#### 分析输出结果

用webpack analyze 以可视化的方式直观的分析构建
