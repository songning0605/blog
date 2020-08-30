在调用 `new` 的过程中会发生以上四件事情：

1. 新生成了一个对象
2. 链接对象的原型属性到构造函数的原型
3. 绑定 this
4. 返回新对象（和构造函数的返回结果）

所以在实现 new 的过程中应该围绕这四个步骤来实现。

```js
function create() {
	// 1、创建一个新的对象
	var obj = new Object();

	/**
	 * 2、设置对象的原型属性，要分为两小步
	 * 	1）拿到构造函数
	 * 	2）设置创建的对象原型属性为构造函数的原型对象，实现继承的目的
	 */
	// 1）拿到构造函数
	var Con = [].shift.call(arguments);
	// 2）设置对象的原型属性
	obj.__proto__ = Con.prototype;

	/**
	 * 3、确定 this 指向
	 * 这里其实就是使用 apply 借用构造函数，并指定构造函数中的 this 为新创建的对象，达到继承的目的
	 */
	var result = Con.apply(obj, arguments);

	/**
	 * 4、返回创建对象，但是这里又分为两种情况
	 * 	1）如果构造函数返回值是引用类型，则返回构造函数的返回值。
	 * 	2）如果构造函数的返回值是基本类型，则返回新创建的对象。
	 */
	return result instanceof Object ? result : obj;
}
```