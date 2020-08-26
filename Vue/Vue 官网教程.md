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

***

## 插值

### 文本

是使用“Mustache”语法 (双大括号)

```html
<span>Message: {{ msg }}</span>
```

- `msg` 会实时响应数据的变化，并更新 `dom`
- 可以使用 `v-once` 指令来控制节点渲染之后不再更新

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

### 原始 HTML

双大括号会把数据解释为文本，如果想要输出 `HTML` 字符串，需要用到 `v-html` 指令：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

输出：

```
Using mustaches: <span style="color:red;">red color</span>
Using mustaches: red color
```

### Atribute

双大括号不能在 `HTML` 标签中插入属性值，要在 `html` 标签中绑定属性，需要用到 `v-bind` 指令

比如要动态的绑定一个 `Id` 属性

```html
<div v-bind:id="dynamicId"></div>
```

### 使用 `JavaScript` 表达式

`Vue` 模板中允许在双括号中使用 `JavaScript` 表达式，但也***仅限于使用表达式***（有输出结果）

## 指令

> 指令 (Directives) 是带有 `v-` 前缀的特殊 **attribute**
>
> **指令的职责是**，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

### 参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML attribute：

<a v-bind:href="url">...</a>

### 动态参数

> 从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：

如下 `v-on` 的值会根据变量 `eventName` 的值动态改变，不过也有一些限制：

```html
<a v-bind:[attributeName]="url"> ... </a>	
```

***对动态参数的值的约束***

动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

***动态参数表达式的约束***

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。**不过尽量还是少用**。

### 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定，会给指令添加一些特定的行为。

例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```



## 缩写

> `v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。Vue 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

### `v-bind` 缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

### `v-on` 缩写

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```



# 计算属性和监听属性

## 计算属性

### 概念
计算属性动态的**监听依赖值**的变化，动态的返回计算结果。在监听值变化时可以触发一个回调。

格式：

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```



计算属性由两部分组成：get和set，分别用来获取计算属性和设置计算属性。默认只有get，如果需要set，要自己添加。另外set设置属性，并不是直接修改计算属性，而是**修改它的依赖**。

```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      //this.fullName = newValue 这种写法会报错
      var names = newValue.split(' ')
      this.firstName = names[0]//对它的依赖进行赋值
      this.lastName = names[names.length - 1]
    }
  }
}

```

### 计算属性 vs 普通属性

可以像绑定普通属性一样在模板中绑定计算属性，在定义上有区别：**计算属性的属性值必须是一个函数**。

```js
data:{ //普通属性
  msg:'浪里行舟',
},
computed:{ //计算属性
  msg2:function(){ //该函数必须有返回值，用来获取属性，称为get函数
    return '浪里行舟';
  },
  reverseMsg:function(){
  //可以包含逻辑处理操作，同时reverseMsg依赖于msg,一旦msg发生变化，reverseMsg也会跟着变化
    return this.msg.split(' ').reverse().join(' ');
 }
}  

```

### 计算属性 vs 方法

两者最主要的区别：computed 是可以缓存的，methods 不能缓存；**只要相关依赖没有改变，多次访问计算属性得到的值是之前缓存的计算结果，不会多次执行。**网上有种说法就是方法可以传参，而计算属性不能，其实并不准确，计算属性可以通过闭包来实现传参：

```js
:data="closure(item, itemName, blablaParams)"
computed: {
 closure () {
   return function (a, b, c) {
        /** do something */
        return data
    }
 }
}

```

### 计算属性的实现原理

> 做为课题研究

## 侦听属性

> Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性watch。**watch中可以执行任何逻辑，如函数节流，Ajax异步获取数据，甚至操作 DOM（不建议）。**

### 常规用法

```js
<template>
  <div class="attr">
    <h1>watch属性</h1>
    <h2>{{ $data }}</h2>
    <button @click="() => (a += 1)">修改a的值</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
    },
    "b.c": function(val, oldVal) {
      this.b.d += 1;
    },
    "b.d": function(val, oldVal) {
      this.e.f.g += 1;
    },
    e: {
      handler: function(val, oldVal) {
        this.h.push("浪里行舟");
      },
      deep: true //用于监听e对象内部值的变化
    }
  }
};
</script>

```

### 使用 `watch` 的深度遍历和立即调用功能

使用 `watch` 来监听数据变化的时候除了常用到 `handler` 回调，其实其还有两个参数，便是：

- `deep` 设置为 `true` 用于监听对象内部值的变化

  - `watch` 默认不会监听对象内部的变化，如果需要监听对象内部变化，需要设置 `deep = true`，数组不用设置 `deep = true` 则可以监听到变化。

    ```js
    e: {
        handler: function(val, oldVal) {
            this.h.push("浪里行舟");
        },
        deep: true //用于监听e对象内部值的变化
    }
    ```

- `immediate` 设置为 `true` ，表示，当组件创建时，将立即以监听对象的初始值触发回调

### `watch` 的实现原理

> 作为课题研究

## 计算属性 VS 监听属性

![image.png](https://user-gold-cdn.xitu.io/2019/6/13/16b4e78acdcb3f7b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

从上面流程图中，我们可以看出它们之间的区别：

- watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
- computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。

除此之外，有点很重要的区别是：**计算属性不能执行异步任务，计算属性必须同步执行**。也就是说计算属性不能向服务器请求或者执行异步任务。如果遇到异步任务，就交给侦听属性。watch也可以检测computed属性。

## 总结

计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。

- computed能做的，watch都能做，反之则不行
- 能用computed的尽量用computed



# `Class` 和 `Style` 绑定

> `class` 和 `style` 属于 `attribute` 范畴，除了常规的用法之外，也可以使用 `v-bind` 进行动态绑定

## 绑定 `class`

> `v-bind:class` 指令也可以与普通的 `class attribute` 共存。

### 对象语法

`v-bind` 绑定动态的 `class` ，当值为对象时，对象中的**属性值应该是布尔值**，当值为 `true` 时，对应的属性名会被渲染为 `class`

当有如下模板：

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

和如下 data：

```js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```html
<div class="static active"></div>
```

绑定的数据对象不必内联定义在模板里，定义为一个对象是更好的做法：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

### 数组语法

> 可以把一个数组传给 `v-bind:class`，以应用一个 class 列表，这个时候，渲染出的是数组中变量对应的值，数组中的元素也可以使用对象语法，规则和 `class` 的对象语法一致

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果想**根据条件切换列表中的 class**，可以用三元表达式：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

更简单的办法是在数组中使用对象语法：

```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
<!-- 这样看起来就会简洁许多 -->
```



### 用在组件上

当在组件上使用 `class` 属性时，语法规则没有任何变化，对应的 class 值会被渲染在组件的根元素上。根元素上已经存在的 class 不会被覆盖，而是进行合并。

**举个例子：**

声明组件：

```js
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

使用：

```js
<my-component class="baz boo"></my-component>
```

渲染结果：

```html
<p class="foo bar baz boo">Hi</p>
```



## 绑定 `style`

### 对象语法

当 `v-bind:style`  采用对象语法时，属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，需要用引号括起来) 来命名，用法同 `React` 中的 `style` 用法

```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

### 数组语法

当 `v-bind:style` 采用数组语法时，数组中的元素应该是对象，可以把多个**样式对象**应用到同一个元素上：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### 自动添加前缀

当 `style` 绑定对象中的属性需要添加浏览器前缀时，`Vue` 会自动添加，**无需用户手动添加**。

### 多重值（备选）

当绑定对象中的属性值需要多个备选值时，可以把属性值设置为多个值组成的数组，最终会渲染最后一个支持的属性值（若支持多个，渲染最后一个支持的值，若没有支持的，则不渲染）



# 条件渲染

## `v-if`

> `v-if` 根据指定属性的值为 `true | false` 来决定是否显示元素。为 `true` 时显示，否则不显示。

配合 `v-if` 一起使用的还有 `v-else-if`、 `v-else` ，用法同 `if else`

### 用 `key` 管理可复用元素

> 需要作为 `key` 来进行研究。

## `v-show`

> `v-show` 不支持 `<template>` 元素，也不支持 `v-else`。

`v-show` 的用法和 `v-if` 一样。不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS property `display`。

## `v-if` VS `v-show`

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

- `v-if` 也是惰性的，如果初始条件为假，则什么也不做，只有条件为真时，才会渲染。

- `v-show` 则简单的多，不管绑定的属性条件真假，元素都会渲染，只是 `display` 值的问题。

  ```
  一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
  ```



# 列表渲染

## 使用 `v-for` 遍历数组

> 可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```html
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

## 用 `v-for` 遍历对象

假设我们有如下对象 `object`：

```js
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```

**在用 `v-for` 遍历时，如果只有一个参数，则遍历的是属性值**：

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

**输出**：

- How to do lists in Vue
- Jane Doe
- 2016-04-10

**如果提供两个参数，第一个是 `value` 值，第二个是 `name` 属性**：

```html
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
```

**还可以用第三个参数作为索引：**

```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

## 数组更新检测

### 变更方法

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

### 替换数组

上边针对数组的变更方法会改变原始数组，`Vue` 也提供了产生不改变原始数组，产生新数组的方法：

- `filter`
- `concat`
- `slice`

上边这几个方法不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以用新数组替换旧数组，Vue针对这种整体替换的方式提供了优化，整体替换仍然是高效的：

```js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

