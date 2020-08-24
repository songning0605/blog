# 基础

## 介绍

### [声明式渲染](https://cn.vuejs.org/v2/guide/index.html#声明式渲染)

> Vue 采用模板语法把数据渲染进 DOM 系统

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### [条件与循环](https://cn.vuejs.org/v2/guide/index.html#条件与循环)

> `Vue` 使用 `v-if` 来控制元素的显示和隐藏， 如下边的例子，当 `seen` 为 `true` 时显示 `p` 标签，否则不显示

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```js
var app = new Vue({
    data() {
        return {
            seen: true
        }
    }
})
```

### 使用 `v-model` 处理用户输入

> `Vue` 中使用 `v-model` 进行双向绑定，来处理用户输入



# `Vue` 实例

## 创建一个 `Vue` 实例

> 当创建一个 `Vue` 实例时，可以传入一个**选项对象**

```js
var vm = new Vue({
  // 选项
})
```

## [生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

![img](https://cn.vuejs.org/images/lifecycle.png)

# 模板语法

> `Vue.js` 使用了基于 `HTML` 的模板语法，允许开发者声明式地将 `DOM` 绑定至底层 `Vue` 实例的数据。所有 `Vue.js` 的模板都是合法的 `HTML`，所以能被遵循规范的浏览器和 HTML 解析器解析。