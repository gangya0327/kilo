function defineReactive(obj, key, val) {
  // 递归
  observe(val);

  //对传入的 obj 进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ': ' + newVal);
        // 如果传入的 newVal 依然是对象，也需要做响应化处理
        observe(newVal);
        val = newVal;
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

function set(obj, key, val) {
  defineReactive(obj, key, val);
}

const obj = { foo: 'foo', baz: { a: 1 }, arr: [1, 2, 3] };
observe(obj);

obj.foo;
obj.foo = 'fee';
obj.baz;
obj.baz.a;
obj.baz.a = 2;

obj.baz = { b: 3 };
obj.baz.b = 4;

// obj.bar = 5
// obj.bar
set(obj, 'bar', 4);
obj.bar;
obj.bar = 5;

// Object.defineProperty 对数组无效
obj.arr.push(4);
