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

### 注意事项

由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项)中有相关的讨论。

## [在 `v-for` 里使用值范围](https://cn.vuejs.org/v2/guide/list.html#在-v-for-里使用值范围)

`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div>
  <span v-for="n in 5">{{ n }} </span>
</div>
```

结果

```
1,2,3,4,5
```

## 在 <template> 上使用 v-for

类似于 `v-if`，你也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容。比如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## [在组件上使用 `v-for`](https://cn.vuejs.org/v2/guide/list.html#在组件上使用-v-for)

在自定义组件上，你可以像在任何普通元素上一样使用 `v-for`。

```html
// 当在组件上使用 v-for 时，key 现在是必须的

<my-component v-for="item in items" :key="item.id"></my-component>
```



# 事件处理

## [事件处理方法](https://cn.vuejs.org/v2/guide/events.html#事件处理方法)

> 在 `Vue` 中，使用 `v-on` 指令来绑定一个方法，进行事件监听， `v-on` 指令可以绑定所有的 `html` 事件

## [内联处理器中的方法](https://cn.vuejs.org/v2/guide/events.html#内联处理器中的方法)

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法，就像原生 `HTML` 绑定方法一样：

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

## 访问原始 `DOM` 事件

> 有时候需要访问原始的 DOM 事件，可以把 `$event` 作为函数的第二个参数，就可以访问到了，这是 `Vue` 内部做了处理

例子：

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

## 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

- `.stop`   			阻止事件冒泡
- `.prevent`      阻止事件重载页面，包括所有会导致页面刷新的行为
- `.capture`      在捕获阶段执行事件
- `.self`             event.target 是自身时触发事件（只有点击事件所在的节点时才生效）
- `.once`             事件只执行一次
- `.passive`      见 [MDN 说明](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

```html
<!-- 阻止单击事件继续传播，效果类似 stopPropagation 的作用 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

***2.1.4 新增***

```html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

## [按键修饰符](https://cn.vuejs.org/v2/guide/events.html#按键修饰符)

> 按键修饰符的作用是给 `v-on` 绑定的事件添加键盘事件监听

### 用法

可以直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。

### Vue 内置的一些修饰符

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

### `Vue.config.keyCodes` 自定义按键修饰符别名

> Vue 可以自定义按键和修饰符的对应关系，具体见官方文档	



# 表单输入绑定

## 绑定方法

Vue 中使用 `v-model` 来把表单组件的 `data` 属性进行绑定，以实现双向绑定的效果 ，`v-model` 绑定的表单要和 `data` 中的属性存在一一对应的关系。

## 绑定原理

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。



# 组件基础

## 组件命名规范

参考这里：[组件名为多个单词](https://cn.vuejs.org/v2/style-guide/#组件名为多个单词必要)

**组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。**

这样做可以避免跟现有的以及未来的 HTML 元素[相冲突](https://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的。

#### 反例:

```js
Vue.component('todo', {
  // ...
})

export default {
  name: 'Todo',
  // ...
}
```

#### 好例子

```js
Vue.component('todo-item', {
  // ...
})

export default {
  name: 'TodoItem',
  // ...
}
```

## `data` 必须是一个函数

> data 必须是一个函数的原因是运用了js中函数有独立作用域的原理，保证了每一个组件数据都有自己独立的作用域，不会相互影响

参考：[为什么vue中data必须是一个函数](https://www.jianshu.com/p/839cbef3be41)

`Object` 是引用数据类型,如果不用 `function`  返回,每个组件的 `data`  都是内存的同一个地址,一个数据改变了其他也改变了;

`javascipt` 只有函数构成作用域(注意理解作用域,只有`函数的{}`构成作用域,`对象的{}`以及 `if(){}`都不构成作用域)，`data` 是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立,不会相互影响。

## 通过 `prop` 向子组件传递数据

> 1. 组件实例有一个 `props` 属性，用来定义组件可以接收的 `prop`，`props` 可以是一个简单的数组列表，也可以是一个对象。
> 2. 在组件实例中访问 `props` 就像访问 `data` 中的数据一样。

### `props`定义为列表

> 当 `props` 定义为列表时，无法指定 `prop` 的类型和默认值。**这种用法不推荐。**

```js
Vue.component('blog-post', {
  props: ['title', 'name', 'value'],
  template: '<h3>{{ title }}</h3>'
})
```

### `props` 定义为对象

> 当 `props` 定义为对象时，可以指定 `prop` 的类型和默认值。**这是推荐的用法。**

```js
props: {
  status: String
}

// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

## 单个根元素

组件模板只能有一个根元素，和 `React` 中组件只能有一个根元素一样。

## 组件通信

待研究

## [通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)

待研究

## [动态组件](https://cn.vuejs.org/v2/guide/components.html#动态组件)

可以通过 `Vue` 内置的 `<component>` 元素加一个特殊的 `is` 属性来实现动态加载组件的功能：

```html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
```

在上述示例中，`currentTabComponent` 可以包括

- 已注册组件的名字，或
- 一个组件的选项对象

## [解析 DOM 模板时的注意事项](https://cn.vuejs.org/v2/guide/components.html#解析-DOM-模板时的注意事项)

有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。

这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：

```
<table>
  <blog-post-row></blog-post-row>
</table>
```

这个自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 `is` attribute 给了我们一个变通的办法：

```
<table>
  <tr is="blog-post-row"></tr>
</table>
```

需要注意的是**如果我们从以下来源使用模板的话，这条限制是\*不存在\*的**：

- 字符串 (例如：`template: '...'`)
- [单文件组件 (`.vue`)](https://cn.vuejs.org/v2/guide/single-file-components.html)
- `<script type="text/x-template">`



# 深入了解组件

## `Prop` 

### `Prop` 的大小写

- `HTML` 中的 `attribute` 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。

- `camelCase` (驼峰命名法) 的 `prop` 名需要使用其等价的 `kebab-case` (短横线分隔命名) 命名。



在 `JavaScript` 中定义是 `camelCase` 的：

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```



在 `HTML` 中是 `kebab-case` 的：

```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

### `Prop` 的传递

#### 传递静态 `props`

```js
// 传递静态值
<blog-post title="My journey with Vue"></blog-post>
```

#### 传递动态 `props`

> 可以通过 `v-bind` 动态赋值

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

#### 传递数字

> 传递数字时，一定要使用 `v-bind`

```html
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

#### [传入一个布尔值](https://cn.vuejs.org/v2/guide/components-props.html#传入一个布尔值)

```html
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

### [传入一个数组](https://cn.vuejs.org/v2/guide/components-props.html#传入一个数组)

```html
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
```

### [传入一个对象](https://cn.vuejs.org/v2/guide/components-props.html#传入一个对象)

```html
<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:author="post.author"></blog-post>
```

### [传入一个对象的所有 `property`](https://cn.vuejs.org/v2/guide/components-props.html#传入一个对象的所有-property)

想要将一个对象的所有 property 都作为 prop 传入，你可以使用不带参数的 `v-bind` (取代 `v-bind:prop-name`)。例如，对于一个给定的对象 `post`：

```js
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```

```js
<blog-post v-bind="post"></blog-post>
```

等价于

```html
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

## [单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#单向数据流)

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不**应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图变更一个 prop 的情形：

1. **这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。**在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：

   ```js
   props: ['initialCounter'],
   data: function () {
     return {
       counter: this.initialCounter
     }
   }
   ```

2. **这个 prop 以一种原始的值传入且需要进行转换。**在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

   ```js
   props: ['size'],
   computed: {
     normalizedSize: function () {
       return this.size.trim().toLowerCase()
     }
   }
   ```

注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身**将会**影响到父组件的状态。

## [Prop 验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-验证)

> `prop` 验证发生在组件实例创建之前，所以 `data,computed` 等属性时不可以访问的。

```js
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

## [非 Prop 的 Attribute](https://cn.vuejs.org/v2/guide/components-props.html#非-Prop-的-Attribute)

> 传递给一个组件的 `attribute` 在组件的 `props` 属性上没有定义，称为非 `prop` `attribute`。这些 `attribute` 会被添加到组件的根元素上。这是因为 组件的根元素默认会继承父组件的 `attribute`



## 自定义事件

### 事件名

> 不同于 `prop`，事件名不存在任何的大小写转换。

### [将原生事件绑定到组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#将原生事件绑定到组件)

> 1. 可以使用 `v-on` 的 `.native` 修饰符，给自定义组件添加原生事件。
> 2. `.native` 只能用在自定义组件上。
> 3. 给自定义组件添加的事件绑定，默认会添加在组件的根元素上。

有时候并不想把事件添加在组件的根元素上，而是想自定义。Vue 提供了一个 `$listeners` property，它是一个对象，***里面包含了作用在这个组件上的所有监听器。***例如：

```js
{
  focus: function (event) { /* ... */ }
  input: function (value) { /* ... */ },
}
```

拥有了`$listeners`对象之后，就可以从`$listeners`中拿到父组件传递的任何监听函数，进行自定义绑定，透传都可以。

### [`.sync` 修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-修饰符)

`.sync` 的作用是为了更方便的让子组件更新父组件中的属性值。

举例：

```jsx
// 父组件
<home-page :valueChild.sync="valueChild"></home-page>

data: function() {
    return {
        valueChild: true
    }
},

// 子组件
<button @click="clickHandler">更新</button>

props: {
    valueChild: {
    	type: Boolean
    }
},
methods: {
    clickHandler() {
    	this.$emit('update:valueChild', false)
    }
}
```

> 暂时不知道怎么更新对象，作为问题，待研究

## 插槽

> 和插槽相关的额内容有 `<slot></slot>` 标签 `v-slot` 指令，插槽提供了一种内容分发机制。

### `<slot></slot>`

正常情况下，一个自定义组件开始和结束标签的内容是不会被渲染的。`<slot></slot>` 标签可以***用在自定义组件内部***，用来渲染标签之间的内容，普通文本和 `html` 标签都可以，甚至是组件，也可以。

#### 不带名字的 `slot`

> 默认情况下，标签之间的内容都会渲染在 `<slot></slot>` 标签之间，当 `<slot></slot>` 有重复时，会重复渲染。

```html
// 子组件
<template>
	<div>
		<slot></slot>
	</div>
</template>

// 父组件
<parent-component>
	<div>
        这里边的任何内容都会被渲染到子组件的<slot></slot>标签所在的位置
    </div>
</parent-component>
```

#### 带名字的 `slot`

> 带名字的 `slot`，又称具名插槽，需要配合 `v-slot` 指令一起使用。

1. `slot` 标签有一个 `name` 属性，制定了 `name` 属性的 `slot` 标签称为具名插槽。
2. 父组件中使用 `v-slot` 指令，定向渲染内容。

举个例子：

```html
<!-- BaiscLayout组件 -->
<template>
	<div>
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>


<!-- 引用BaiscLayout组件时的写法 -->
<basic-layout>
    <!-- 通过 v-slot 指定区块名称，
		 v-slot 指令建议总是写在 template 标签上
		 制定了名称的内容会染在 basic-layout 组件内对应名称的 slot 标签上，
		 如果名称写错了，没有对应上，则不会渲染，也不会渲染在默认 slot 标签内。
	-->
    <template v-slot:header>
        <h3>我是title</h3>
    </template>
    <template v-slot:footer>
        <h3>我是 footer</h3>
    </template>
    
    <!-- 所有没有通过 v-slot 指定名称的内容将会渲染在默认的，不具名 slot 标签上 -->
    <p>我是内容我是内容<我是内容/p>
    <p>我是内容我是内容<我是内容/p>
    <p>我是内容我是内容<我是内容/p>
    <p>我是内容我是内容<我是内容/p>
</basic-layout>
```