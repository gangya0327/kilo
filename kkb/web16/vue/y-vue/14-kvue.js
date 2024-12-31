function defineReactive(obj, key, val) {
  // 递归
  observe(val);

  // 创建一个 Dep 和当前 key 一一对应
  const dep = new Dep();

  //对传入的 obj 进行访问拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      // 依赖收集
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ': ' + newVal);
        // 如果传入的 newVal 依然是对象，也需要做响应化处理
        observe(newVal);
        val = newVal;

        // watchers.forEach((w) => w.update());
        dep.notify();
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  // 创建 Observer 实例
  new Observer(obj);
}

// 代理函数，方便用户直接访问 $data 中的数据
function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key];
      },
      set(newVal) {
        vm[sourceKey][key] = newVal;
      },
    });
  });
}

// 创建 KVue 实例
class KVue {
  constructor(options) {
    // 保存options
    this.$options = options;
    this.$data = options.data;

    // 响应化处理
    observe(this.$data);
    // 代理
    proxy(this, '$data');
    // 创建编译器
    new Compiler(options.el, this);
  }
}

// 根据对象类型决定如何做响应化
class Observer {
  constructor(value) {
    this.value = value;

    // 判断类型
    if (typeof value === 'object') {
      this.walk(value);
    }
  }

  // 对象数据响应化
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }

  // todo 数组数据响应化
}

// 创建 Watcher 实例，保存更新函数，值变化时调用更新函数
const watchers = [];
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // watchers.push(this);
    // 在 Dep.target 静态属性上设置为当前 Watcher 实例
    Dep.target = this;
    this.vm[this.key]; // 读取触发 get
    Dep.target = null;
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

// 创建 Dep 实例，管理某个 key 相关的 Watcher 实例
class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(dep) {
    this.deps.push(dep);
  }
  notify() {
    this.deps.forEach((d) => d.update());
  }
}
