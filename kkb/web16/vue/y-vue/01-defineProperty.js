function defineReactive(obj, key, val) {
  // 递归
  observe(val);

  // 对传入obj进行拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ': ' + newVal);
        // 如果传入的newVal仍然是obj，则需要做响应化处理
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

// const obj = {};
// defineReactive(obj, 'foo', 'foo');
// obj.foo;
// obj.foo = 'bar';

const obj = {
  foo: 'foo',
  baz: { a: 1 },
  arr: [1, 2, 3],
};

observe(obj);

obj.foo;
obj.foo = 'far';
obj.baz;
obj.baz.a;
obj.baz.a = 2;

obj.baz = { b: 10 };
obj.baz.b = 200;

set(obj, 'cat', 'cat');
obj.cat;
obj.cat = 'dog';

// Object.defineProperty对数组无效
obj.arr.push(4);
