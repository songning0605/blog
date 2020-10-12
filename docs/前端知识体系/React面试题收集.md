# 什么是虚拟DOM？

>  是一种更新DOM的思想模式

从概念上来讲，虚拟DOM是一种数据结构，用JS对象来标识真实的DOM；其实本身谈论虚拟DOM没有太多的意义，虚拟DOM本身是服务于diff算法，让diff算法去比较当前虚拟DOM和render生成的虚拟DOM的变化点，找出来真正更新了的DOM节点，然后更新真实的DOM。

所以大家一致说虚拟DOM更新比更新真是DOM要快，我认为其实是在说Diff速度比dom更新的速度快，但是真正的性能怎么样，其实还是和更新的粒度是有关系的。

## 虚拟DOM的数据结构是怎样的

我是占位符

## Diff算法是怎么工作的

[React Diff 算法简介](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

###  对比不同类型的元素

### 对比同一类型的元素

### 对比同类型的组件元素

> 一个`DOM节点`在某一时刻最多会有4个节点和他相关。
>
> 1. `current Fiber`。如果该`DOM节点`已在页面中，`current Fiber`代表该`DOM节点`对应的`Fiber节点`。
> 2. `workInProgress Fiber`。如果该`DOM节点`将在本次更新中渲染到页面中，`workInProgress Fiber`代表该`DOM节点`对应的`Fiber节点`。
> 3. `DOM节点`本身。
> 4. `JSX对象`。即`ClassComponent`的`render`方法的返回结果，或`FunctionComponent`的调用结果。`JSX对象`中包含描述`DOM节点`的信息。
>
> `Diff算法`的本质是对比1和4，生成2。

## Diff的瓶颈以及React如何应对

由于`Diff`操作本身也会带来性能损耗，React文档中提到，即使在最前沿的算法中，将前后两棵树完全比对的算法的复杂程度为 O(n 3 )，其中`n`是树中元素的数量。

如果在`React`中使用了该算法，那么展示1000个元素所需要执行的计算量将在十亿的量级范围。这个开销实在是太过高昂。

为了降低算法复杂度，`React`的`diff`会预设三个限制：

1. 只对同级元素进行`Diff`。如果一个`DOM节点`在前后两次更新中跨越了层级，那么`React`不会尝试复用他。
2. 两个不同类型的元素会产生出不同的树。如果元素由`div`变为`p`，React会销毁`div`及其子孙节点，并新建`p`及其子孙节点。
3. 开发者可以通过 `key prop`来暗示哪些子元素在不同的渲染下能保持稳定。考虑如下例子：

```
// 更新前
<div>
  <p key="ka">ka</p>
  <h3 key="song">song</h3>
</div>

// 更新后
<div>
  <h3 key="song">song</h3>
  <p key="ka">ka</p>
</div>
```

如果没有`key`，`React`会认为`div`的第一个子节点由`p`变为`h3`，第二个子节点由`h3`变为`p`。这符合限制2的设定，会销毁并新建。

但是当我们用`key`指明了节点前后对应关系后，`React`知道`key === "ka"`的`p`在更新后还存在，所以`DOM节点`可以复用，只是需要交换下顺序。

这就是`React`为了应对算法性能瓶颈做出的三条限制。

# React组件的通信方式

组件通信分为以下几种情况

1. 父传子：prop

2. 子传父：回调函数
3. 跨级组件通信
4. 非嵌套关系的组件通信

# React 事件绑定原理

React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。
另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用 event.preventDefault。在 React17 中，这个实现又有了新的变化。
[![react事件绑定原理](https://camo.githubusercontent.com/4b62f65c1fe2a41a2acbcb13fd9f50a0c388c683/687474703a2f2f696d672d7374617469632e796964656e6778756574616e672e636f6d2f77786170702f69737375652d696d672f7169642d31372e706e67)](https://camo.githubusercontent.com/4b62f65c1fe2a41a2acbcb13fd9f50a0c388c683/687474703a2f2f696d672d7374617469632e796964656e6778756574616e672e636f6d2f77786170702f69737375652d696d672f7169642d31372e706e67)

