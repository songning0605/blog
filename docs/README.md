### React生命周期

### 什么是React Hooks？Hooks给React开发带来了什么，有什么好处？

### React 中的 useState() 是什么？

### 函数式组件和类组件的区别和优缺点

### prop深层嵌套传递，可能会存在什么问题，如何避免？

### 受控组件和非受控组件区别是什么？
- 受控组件的数据或状态由React来进行管理
- 非受控组件的数据或状态由自身维护

### 什么是 React Context?

### 什么是 React Fiber?

### Hooks会取代 render props 和高阶组件吗？

### 如何避免组件的重新渲染？

### 什么是纯函数？

### 如何避免组件的重新渲染？
- React.memo()，PureComponent，shouldComponentUpdate
- 组件层级不要太深
- 不要传递无关的属性

### 当调用setState时，React render 是如何工作的？

### 如何避免在React重新绑定实例？
- 如果是函数式组件，是不存在这个问题的。
- 在类组件中使用箭头函数的方式来定义函数。

### 类组件和函数式组件的区别

- 类组件有生命周期函数，生命周期函数中可以访问props和state，函数式组件时没有生命周期函数。
- 类组件有this概念，函数式组件没有这个概念。
- 类组件可以针对props和state进行性能优化，函数式组件只能针对props做性能优化。

### React中refs有什么用途

> refs提供了访问DOM节点和React元素的能力

1. 创建Refs的方式

   - 类组件中通过React.createRef和回调Refs的方式创建。
   - 函数式组件中用React.useRef创建。
2. Refs的使用

   - 创建的ref可以添加给类组件，用于获取组件实例。
   - 可以添加给HTML元素，获取dom节点。
   - 可以作为props传递给子组件，获取子组件内部的DOM节点或元素。
3. refs的使用场景
   1. 需要管理焦点、选择文本或媒体播放时
   2. 触发式动画
   3. 与第三方 DOM 库集成

### state 和 props 的区别

state 是组件内部管理的状态，是可变的。

props 是外部传入的状态，是不可变的。

### 什么是高阶组件

- 高阶组件是一个函数，接收一个组件作为参数，返回一个新的组件。
- 主要用来抽离公共逻辑，渲染劫持。比如打印日志，抽离公共state。

### **什么是受控组件？** 

HTML表单元素通常会自己维护值的状态，并且会根据用户输入进行更新，值和操作都由React控制的表单元素称为受控组件。

### React.createElement 怎么使用

> 创建并返回指定类型的新 [React 元素](https://zh-hans.reactjs.org/docs/rendering-elements.html)

React.createElement 接收三个参数，type是必须的，可以是标签名字符串，可以是React组件类型，也可以是React Fragment

```react
React.createElement(
  type,
  [props],
  [...children]
)
```

### 讲讲什么是JSX

JSX 是一种语法形式，可以用JS的语法来写HTML代码，在编译时会被转化为js对象。

### 为什么不能直接更新state

如果直接更新state，组件时不会重新渲染的。

在React中，state的作用是，在它变化的时候要触发DOM更新，必须通过指定的方法进行更新。

### React的生命周期都有哪几个阶段，常用的有哪些？

1. 挂载阶段

   - [**`constructor()`**](https://zh-hans.reactjs.org/docs/react-component.html#constructor)
   - [`static getDerivedStateFromProps()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops) （不常用，作用是返回一个新的对象来更新state）
   - [**`render()`**](https://zh-hans.reactjs.org/docs/react-component.html#render)
   - [**`componentDidMount()`**](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)

2. 更新阶段

   - **shouldComponentUpdate**
   - **render**
   - **componentDidUpdate**

3. 卸载阶段

   - **componentWillUNmount**

     它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

### Reat中如何避免嵌套地狱

### React 中如何处理事件

### React 元素和 React 组件的区别

### React中Key的作用

### 说说对React Context的理解









   

   

   

   