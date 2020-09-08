## 概念

- `instanceof` 用来判断一个对象是否是另一个构造函数的实例。

- ***原理是判断构造函数的原型是否出现在对象的原型链上*** 

## 模拟实现

> `instanceof` 的原理是在对象的原型上查找构造函数的原型，所以实现的时候围绕这一点就可以了。

### 第一版

```js
function myInstanceof(left, right) {
  // 对象的原型属性
  let leftPrototype = left.__proto__;
  // 构造函数的原型对象
  const rightPrototype = right.prototype;
  
  // 创造一个循环，在对象的原型链上查找构造函数的原型，直到原型链为 null
  while(true) {
    // 原型链源头为 null 时，中断循环
    if (leftPrototype === null) {
      return false;
    }
    // 找到构造函数的原型，中断循环
    if (leftPrototype === rightPrototype) {
      return true;
    }
    
   	// 没有找到，继续向上查找
    leftPrototype = leftPrototype.__proto__;
  }
}
```

### 第二版

> `instanceof` 左边的值可以是基本类型，当为基本类型时，返回 `false`，右边的值必须是对象 。所以自定义实现要加入这些判断。

```js
function myInstanceof(left, right) {
  // lType 为 null、undefined，返回 false
  if (left === undefined || left === null) {
    return false;
  }
  
  const lType = typeof left;
  const rType = typeof right;
  // lType 为基本类型，返回 false
  if (lType !== 'function' && lType !== 'object' ) {
		return false;
	}
  // rType 不是对象，报错
	if (rType !== 'function' && rType !== 'object' ) {
		throw new Error('右侧必须是一个 object');
	}
  
  let lPrototype = left.__proto__;
	const rPrototype = right.prototype;
	
	while(true) {
		if (lPrototype === null) {
			return false;
		}
		if (lPrototype === rPrototype) {
			return true;
		}
		lPrototype = lPrototype.__proto__;
	}
}
```

