# 什么是虚拟DOM？

>  是一种更新DOM的思想模式

从概念上来讲，虚拟DOM是一种数据结构，用JS对象来标识真实的DOM；其实本身谈论虚拟DOM没有太多的意义，虚拟DOM本身是服务于diff算法，让diff算法去比较当前虚拟DOM和render生成的虚拟DOM的变化点，找出来真正更新了的DOM节点，然后更新真实的DOM。

所以大家一致说虚拟DOM更新比更新真是DOM要快，我认为其实是在说Diff速度比dom更新的速度快，但是真正的性能怎么样，其实还是和更新的粒度是有关系的。

## 虚拟DOM的数据结构是怎样的

我是占位符

## Diff算法是怎么工作的

[React Diff 算法简介](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

