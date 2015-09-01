# ToolTip悬浮提示框

## 特效介绍：

模仿超链接的悬浮效果

## 特效分析

**特效设计**：

技术点：
1. 绝对定位: `position:absolute`
2. js创建dom：`createElement` 与 `appentChild`
3. 鼠标事件：`mouseenter` 和 `mouseleave`, `setTimeout` 与 `clearTimeout`

核心代码：

```
<a class-"toolTip">中国</a>
```
鼠标移动：
`<a class="toolTip">中国<div class="toolTip-box">中华人民共和国</div></a>`

createElement: 创建元素节点，并返回创建节点元素的对象
appendChild:把创建的节点追加到已有的元素中
`createElement` 与 `appentChild`一般一起使用

setTimeout: 在指定毫秒数后，调用某方法,只执行一次，执行多次的话，回掉自己`setTimeout(function(){},3000)`
clearTimeout: 取消setTimeout函数的调用
