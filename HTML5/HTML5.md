# HTML5学习

## HTML5的新特性

* 用于绘画的canvas标签
* 用于媒介回放的video和audio元素
* 对本地离线储存的更好支持
* 新的特殊内容元素：article、footer、header、nav、section等
* 新的表单控件：calendar、data、time、email、url、search
* 浏览器的支持：Safari、Chrome、Firefox以及Opera包括IE9基本支持了HTML5

## HTML5语法的改变

* DOCTYPE声明
  * < !DOCTYPE html>
* 指定字符编码
  * < meta charset='UTF-8'>
* 可以省略标记的元素
  * 
* 具有boolean值的属性
  * 只写属性不写属性值或值为空字符串或值为属性名都为true
* 省略引号
  * 属性的值可以省略引号
* 新增的结构元素
  * section（内容块）、article（与上下文无关的文章）、aside（article的辅助信息）、header、hgroup、footer、nav、figure
* 新增的其他元素
  * video、audio、embed、mark、progress、meter、time、ruby、rt、rp、wbr、canvas、command、details、detalist、datagrid、keygen、output、source、menu
* 新增的input元素的类型
  * email、url、number、range、Date Pickers
* 废除的元素
  * 能用CSS替代的元素：basefont、big、center、font、s、tt、u等
  * 不再使用frame框架
  * 只有部分浏览器支持的元素
  * 其他被废除的元素
* 新增的属性
  * 表单相关的属性
  * 链接相关的属性
  * 其他属性
* 废除的属性
* 全局属性
  * contentEditable属性（使元素可编辑）
  * designMode属性
  * hidden属性（使元素隐藏）
  * spellcheck属性（使input和textarea拥有拼写检查）
  * tabindex属性（设置按tab键跳转的顺序）

## 新增结构元素

* article

![article](../images/article.png)

* section(不要作为设置样式的容器)

![section](../images/section.png)

* nav

![nav](../images/nav.png)

* aside

![aside](../images/aside.png)

* time元素与微格式、pubdate属性