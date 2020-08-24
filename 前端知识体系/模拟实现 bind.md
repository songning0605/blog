参考：

[`javascript` 深入之 `bind` 模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)

[深度解析 `bind` 原理、使用场景及模拟实现](https://muyiy.vip/blog/3/3.4.html#bind)

## `bind`

**`bind` **功能描述

> 1. `bind`方法用于把函数体内的`this`绑定到某个对象，然后返回一个新函数
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

###  模拟实现第二步

对于第 3 点，使用 `arguments` 获取参数数组并作为 `self.apply()` 的第二个参数。

对于第 4 点，获取返回函数的参数，然后同第3点的参数合并成一个参数数组，并作为 `self.apply()` 的第二个参数。

```js
Function.prototype.bind2 = function(context) {
  var self = this; // 拿到 bind 的调用者
  
  // 实现第3点，bind 创建函数的时候可以传入参数
  var args = Array.prototype.slice.call(arguments, 1); // 获取绑定时传入的参数
  
  return function() {
    // 实现第4点，调用 bind 创建的函数时，可以传入参数，并且会和bind的参数合并，传递给原来的函数
    var bindArgs = Array.prototype.slice.call(arguments, 1);
    self.apply(context, args.concat(bindArgs));
  }
}
```

**到这里，大部分的功能都已经实现了，但是 `bind` 返回的函数可以使用 `new` 操作符创建对象**

举个例子：

```js
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'Jack');
var obj = new bindFoo(20);
// undefined
// Jack
// 20

obj.habit;
// shopping

obj.friend;
// kevin
```

上面例子中，运行结果`this.value` 输出为 `undefined`，这不是全局`value` 也不是`foo`对象中的`value`，这说明 `bind` 的 `this` 对象失效了，`new` 的实现中生成一个新的对象，这个时候的 `this`指向的是 `obj`。

这里可以通过修改返回函数的原型来实现，代码如下：

```js
Function.prototype.bind2 = function(context) {
  var selft = this
  var args = Array.prototype.slice,.call(arguments, 1)
  
  var fBound = function() {
    var bindArgs = Array.prototype.slice,.call(arguments, 1)
    
    if (this instanceof fBound) {
  		selft.apply(this, args.concat(bindArgs))
    } else {
      selft.apply(context, args.concat(bindArgs))
    }
  }
  
  // 使用 new 操作符时，要处理继承问题
  function F() {}
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  F.prototype = this.prototype;
  fBound.prototype = new F();
  
  return fBound
}
```

