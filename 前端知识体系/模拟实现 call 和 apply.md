参考：

[木易杨的实现](https://muyiy.vip/blog/3/3.3.html)

[冴羽的深入系列](https://github.com/mqyqingfeng/Blog/issues/11)

## `call`

> ##### 一句话介绍 `call`
>
> `call()` 方法在使用一个指定的 `this` 值和若干个指定的参数值的前提下调用某个函数或方法。

举个例子：

```js
var foo = {
	value: 1
}

function bar(name, age) {
    console.log(this.value, name, age)
}

bar.call(foo, 'song', 20) // 输出：1, song, 20
```

**`call` 做了下边两件事情**

- `call` 改变了 `bar` 函数的 `this` 指向
- `bar` 函数执行了，`call` 可以给 `bar` 传递多个参数

所以我们在实现自定义的 `call` 函数时，围绕以上两点来实现就可以了

### 模拟实现第一点，函数指定 `this`

> 在实现第一步之前，我们首先要知道函数中的 `this` 是怎么确定的？
>
> - 函数被对象调用，函数中的 `this` 是调用者
> - 如果函数单独执行了，函数中的 `this` 就是 `window`

通过 `this` 的确定规则可以知道，要实现给函数指定 `this` 的功能，就需要***把函数挂载在对象上***，让对象去调用函数，这样就可以让对象成为函数的 `this` 对象了，这就是自定义 `call` 要做的事情；

**代码实现：**

```js
Function.prototype.call = function(context) {
    // context 就是要设置的 this 对象，context 可以是null、undefined 或者基本类型
    // 确保 context 为对象
    context = (context || context === 0) ? Object(context) : window;
    
    // 把要执行的函数挂载在 context 上，这里有一个问题，怎么拿到要执行的函数？
    // 要执行的函数调用了 call，所以这里边的 this 就是要执行的函数
    context.fn = this; 
    
    // 通过 context.fn() 执行函数，fn 中的 this 就是 context
    context.fn()
}
```

至此，给函数指定 `this` 的功能就实现了

### 模拟实现第二点，给函数传递多个参数

```js
Function.prototype.call = function(context) {
    // context 就是要设置的 this 对象，context 可以是null、undefined 或者基本类型
    // 确保 context 为对象
    context = (context || context === 0) ? Object(context) : window;
    
    // 把要执行的函数挂载在 context 上，这里有一个问题，怎么拿到要执行的函数？
    // 要执行的函数调用了 call，所以这里边的 this 就是要执行的函数
    context.fn = this; 
    
    // 通过 context.fn() 执行函数，fn 中的 this 就是 context
    // context.fn()
    
    // 通过函数的 arguments 对象拿到参数
    var args = [...arguments].slice(1); // 第一个参数为 this 对象，丢掉
    
    context.fn(...args)
}
```



至此第二点就实现了

### 注意点

> - 在实现自定义 `call` 函数的时候，我们改变了 `context` 对象，给它添加了一个临时属性，用来达到调用函数的目的，这个要删除
> - 函数有可能有返回值，所以自定义 `call` 应该要可以返回函数的值

### 优化实现

```js
Function.prototype.call = function(context) {
    // context 就是要设置的 this 对象，context 可以是null、undefined 或者基本类型
    // 确保 context 为对象
    context = (context || context === 0) ? Object(context) : window;
    
    // 把要执行的函数挂载在 context 上，这里有一个问题，怎么拿到要执行的函数？
    // 要执行的函数调用了 call，所以这里边的 this 就是要执行的函数
    context.fn = this; 
    
    // 通过 context.fn() 执行函数，fn 中的 this 就是 context
    // context.fn()
    
    // 通过函数的 arguments 对象拿到参数
    var args = [...arguments].slice(1); // 第一个参数为 this 对象，丢掉
    
    // 给函数传递多个参数，保存函数的返回结果
    var result = context.fn(...args); 
    
    // 删除临时属性 fn
    delete context.fn;
    
    return result;
}
```

## `apply`

> `apply` 的功能和 `call` 的唯一区别是 `apply` 传参是数组形式，`call` 是展开的

在 `call` 的基础上修改一下来实现 `apply`

```js
Function.prototype.apply = function(context) {
  // context 就是要设置的 this 对象，context 可以是null、undefined 或者基本类型
  // 确保 context 为对象
  context = (context || context === 0) ? Object(context) : window;
    
  // 把要执行的函数挂载在 context 上，这里有一个问题，怎么拿到要执行的函数？
  // 要执行的函数调用了 call，所以这里边的 this 就是要执行的函数
  context.fn = this; 
    
  // 通过 context.fn() 执行函数，fn 中的 this 就是 context
  // context.fn()
  
  // 拿到第二个参数
  var args = [...arguments].slice(1)[0];
  
  var result;
  if (Array.isArray(agrs)) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  }
  
  // 删除临时属性 fn
  delete context.fn;
  
  return context;
}
```



