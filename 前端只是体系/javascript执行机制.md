## 关于javascript

`javascript` 是单线程语言，在 `HTML5` 中提出了 `Web-Worker`，使 `javascript` 可以执行多线程，但是 `javascript` 是单线程的核心没有改变，多线程是单线程模拟出来的。

##  `javascript` 事件循环

`JS` 在执行的时候分为 ***同步任务*** 和 ***异步任务***，先看一张图：

![image-20200821142207176](./imgs/image-20200821142207176.png)



导图要表达的内容用文字来表述的话：

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。

- 当指定的事情完成时，Event Table会将这个函数移入Event Queue。

- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。

- 上述过程会不断重复，也就是常说的Event Loop(事件循环)。

> `JS` 引擎存在监控线程，会持续不断的检查主线执行栈是否为空，来完成事件循环

**看一个例子：**

```js
let data = [];
$.ajax({
    url:www.javascript.com,
    data:data,
    success:() => {
        console.log('发送成功!');
    }
})
console.log('代码执行结束');
```

上面是一段简易的 `ajax` 请求代码：

- ajax进入Event Table，注册回调函数 `success`。
- 执行 `console.log('代码执行结束')`。
- ajax事件完成，回调函数 `success` 进入Event Queue。
- 主线程从Event Queue读取回调函数 `success` 并执行。

## 事件循环任务的划分规则

> 从前边的内容可以知道，`JS` 在执行的时候是不停的循环执行的，称为事件循环；每次事件循环，会执行完本次循环中所有的宏任务和微任务。

除了广义的同步任务和异步任务，`JS` 对任务有更精细的定义：

- 宏任务
  - 整体的 `JS` 代码
  - `setTimeout`
  - `setInterval`·123
- 微任务
  - `Prmise`
  - `process.nextTick` `node` 中的异步任务，类似于 `setTimeout`，但是在 `node` 中，它是微任务
- 不同的任务类型会进入不同的 `Event Queue`,  宏任务有宏任务的队列，微任务有微任务的队列

具体看一段代码：

```js
setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})
- 
console.log('console');
```

- 这段代码作为宏任务，进入主线程。

- 先遇到`setTimeout`，那么将其回调函数注册后分发到宏任务Event Queue。(注册过程与上同，下文不再描述)

- 接下来遇到了`Promise`，`new Promise`立即执行，`then`函数分发到微任务Event Queue。

- 遇到`console.log()`，立即执行。

- 好啦，整体代码script作为第一个宏任务执行结束，看看有哪些微任务？我们发现了`then`在微任务Event Queue里面，执行。

- ok，第一轮事件循环结束了，我们开始第二轮循环，当然要从宏任务Event Queue开始。我们发现了宏任务Event Queue中`setTimeout`对应的回调函数，立即执行。

- 结束。

事件循环，宏任务，微任务的关系如图所示：

![event-loop](F:\blog\imgs\event-loop.png)

**实战**

```js
console.log('1');

// 宏任务
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})

// 宏任务，非 node 环境下，不要加这一段
process.nextTick(function() {
    console.log('6');
})

// 微任务
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

// 宏任务
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```

第一轮事件循环流程分析如下：

- 整体script作为第一个宏任务进入主线程，遇到`console.log`，输出1。
- 遇到`setTimeout`，其回调函数被分发到宏任务Event Queue中。我们暂且记为`setTimeout1`。
- 遇到`process.nextTick()`，其回调函数被分发到微任务Event Queue中。我们记为`process1`。
- 遇到`Promise`，`new Promise`直接执行，输出7。`then`被分发到微任务Event Queue中。我们记为`then1`。
- 又遇到了`setTimeout`，其回调函数被分发到宏任务Event Queue中，我们记为`setTimeout2`。

| 宏任务Event Queue | 微任务Event Queue |
| :---------------: | :---------------: |
|    setTimeout1    |     process1      |
|    setTimeout2    |       then1       |

- 上表是第一轮事件循环宏任务结束时各Event Queue的情况，此时已经输出了1和7。
- 我们发现了`process1`和`then1`两个微任务。
- 执行`process1`,输出6。
- 执行`then1`，输出8。

好了，第一轮事件循环正式结束，这一轮的结果是输出1，7，6，8。那么第二轮时间循环从`setTimeout1`宏任务开始：

- 首先输出2。接下来遇到了`process.nextTick()`，同样将其分发到微任务Event Queue中，记为`process2`。`new Promise`立即执行输出4，`then`也分发到微任务Event Queue中，记为`then2`。

| 宏任务Event Queue | 微任务Event Queue |
| :---------------: | :---------------: |
|    setTimeout2    |     process2      |
|                   |       then2       |

- 第二轮事件循环宏任务结束，我们发现有`process2`和`then2`两个微任务可以执行。
- 输出3。
- 输出5。
- 第二轮事件循环结束，第二轮输出2，4，3，5。
- 第三轮事件循环开始，此时只剩setTimeout2了，执行。
- 直接输出9。
- 将`process.nextTick()`分发到微任务Event Queue中。记为`process3`。
- 直接执行`new Promise`，输出11。
- 将`then`分发到微任务Event Queue中，记为`then3`。

| 宏任务Event Queue | 微任务Event Queue |
| :---------------: | :---------------: |
|                   |     process3      |
|                   |       then3       |

- 第三轮事件循环宏任务执行结束，执行两个微任务`process3`和`then3`。
- 输出10。
- 输出12。
- 第三轮事件循环结束，第三轮输出9，11，10，12。

整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。

## 最后

- javascript是一门单线程语言
- Event Loop是javascript的执行机制