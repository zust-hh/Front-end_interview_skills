1. jQuery 库中的 $() 是什么？（答案如下）
$() 函数是 jQuery() 函数的别称，乍一看这很怪异，还使 jQuery 代码晦涩难懂。一旦你适应了，你会爱上它的简洁。$() 函数用于将任何对象包裹成 jQuery 对象，接着你就被允许调用定义在 jQuery 对象上的多个不同方法。你甚至可以将一个选择器字符串传入 $() 函数，它会返回一个包含所有匹配的 DOM 元素数组的 jQuery 对象。

2. 网页上有 5 个 < div> 元素，如何使用 jQuery来选择它们？（答案）

你可以用标签选择器来选择所有的 div 元素。jQuery 代码：$("div")，这样会返回一个包含所有 5 个 div 标签的 jQuery 对象。

3. jQuery 里的 ID 选择器和 class 选择器有何不同？

```js
$('#LoginTextBox')  // Returns element wrapped as jQuery object with id='LoginTextBox'
$('.active') // Returns all elements with CSS class active.
```

4. 如何在点击一个按钮时使用 jQuery 隐藏一个图片？
这是一个事件处理问题。jQuery为按钮点击之类的事件提供了很好的支持。你可以通过以下代码去隐藏一个通过ID或class定位到的图片。你需要知道如何为按钮设置事件并执行hide() 方法，代码如下所示：

```js
$('#ButtonToClick').click(function(){
    $('#ImageToHide').hide();
});
```

5.  $(document).ready() 是个什么函数？为什么要用它？

 相当于DOMContentLoaded，ready() 函数用于在文档进入ready状态时执行代码。当DOM 完全加载（例如HTML被完全解析DOM树构建完成时），jQuery允许你执行代码。使用$(document).ready()的最大好处在于它适用于所有浏览器，jQuery帮你解决了跨浏览器的难题。

6. JavaScript window.onload 事件和 jQuery ready 函数有何不同？（答案）

JavaScript window.onload 事件和 jQuery ready 函数之间的主要区别是，前者除了要等待 DOM 被创建还要等到包括大型图片、音频、视频在内的所有外部资源都完全加载。如果加载图片和媒体内容花费了大量时间，用户就会感受到定义在 window.onload 事件上的代码在执行时有明显的延迟。

另一方面，jQuery ready() 函数只需对 DOM 树的等待，而无需对图像或外部资源加载的等待，从而执行起来更快。使用 jQuery $(document).ready() 的另一个优势是你可以在网页里多次使用它，浏览器会按它们在 HTML 页面里出现的顺序执行它们，相反对于 onload 技术而言，只能在单一函数里使用。鉴于这个好处，用 jQuery ready() 函数比用 JavaScript window.onload 事件要更好些。

7. 如何找到所有 HTML select 标签的选中项？

你能用下面的 jQuery 选择器获取所有具备 multiple=true 的 < select > 标签的选中项：

```js
$('[name=NameOfSelectedTag] :selected')
```

这段代码结合使用了属性选择器和 :selected 选择器，结果只返回被选中的选项。你可按需修改它，比如用 id 属性而不是 name 属性来获取 < select> 标签。

8. jQuery 里的 each() 是什么函数？你是如何使用它的？

each() 函数就像是 Java 里的一个 Iterator，它允许你遍历一个元素集合。你可以传一个函数给 each() 方法，被调用的 jQuery 对象会在其每个元素上执行传入的函数。有时这个问题会紧接着上面一个问题，举个例子，如何在 alert 框里显示所有选中项。我们可以用上面的选择器代码找出所有选中项，然后我们在 alert 框中用 each() 方法来一个个打印它们，代码如下：

```js
$('[name=NameOfSelectedTag] :selected').each(function(selected) {
    alert($(selected).text());
});
```

其中 text() 方法返回选项的文本。

9. 你是如何将一个 HTML 元素添加到 DOM 树中的？

append、prepend、before、after
你可以用 jQuery 方法 appendTo() 将一个 HTML 元素添加到 DOM 树中。这是 jQuery 提供的众多操控 DOM 的方法中的一个。你可以通过 appendTo() 方法在指定的 DOM 元素末尾添加一个现存的元素或者一个新的 HTML 元素。

10. $(this) 和 this 关键字在 jQuery 中有何不同？

$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text() 获取文本，用val() 获取值等等。而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)。

11. jq中的事件绑定是通过代理实现的，目的是省内存

12. jq中可以链式调用，因为每一个实例的对象方法都会返回this，对于同一个DOM对象的操作指定同一个实例