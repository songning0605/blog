## `bind`

**`bind` **功能描述

> 1. `bind`方法用于将函数体内的`this`绑定到某个对象，然后返回一个新函数
>2. `bind()` 方法会创建一个新函数
> 3. 传入 `bind` 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。
>4. `bind` 返回的绑定函数也能使用 `new` 操作符创建对象：这种行为就像把绑定函数当成构造器，提供的 `this` 值被忽略，同时调用时的参数被提供给模拟函数。

语法：

```js
fun.bind(thisArg[, arg1[, arg2[, ...]]]) 
```

`bind` 方法与 `call / apply` 最大的不同就是前者返回一个绑定上下文的**函数**，而后两者是**直接执行**了函数。

**举个例子**

```js
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

bar.call(foo, "Jack", 20); // 直接执行了函数
// {value: 1, name: "Jack", age: 20}

var bindFoo1 = bar.bind(foo, "Jack", 20); // 返回一个函数
bindFoo1(); // 函数的 this 值是 foo
// {value: 1, name: "Jack", age: 20}

var bindFoo2 = bar.bind(foo, "Jack"); // 返回一个函数

bindFoo2(20);

```

## 模拟实现

首先实现以下四个特征

- 1、可以指定`this`
- 2、返回一个函数
- 3、可以传入参数
- 4、柯里化

### 模拟实现第一步

对于第 1 点，使用 `call / apply` 指定 `this` 。

对于第 2 点，使用 `return` 返回一个函数。

结合前面 2 点，可以写出第一版，代码如下：

```js
Function.prototype.bind2 = function(context) {
  var self = this; // this 指向调用者
  
  // 实现第二点，返回一个函数
  return function() {
    // 实现第一点，指定 this
    return self.apply(context)
  }
}
```

