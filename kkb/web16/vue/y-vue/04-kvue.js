class KVue {
  constructor(options) {
    // 保存选项
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

// 观察者，保存更新函数，值发生变化则调用更新函数
const watchers = [];
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // watchers.push(this);
    // Dep.target 静态属性上设置为当前 watcher 实例
    Dep.target = this;
    this.vm[this.key]; // 读取触发 get
    Dep.target = null; // 收集完马上置空
  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

function defineReactive(obj, key, val) {
  // 递归
  observe(val);

  // 创建一个 Dep 和当前的 key 一一对应
  const dep = new Dep();

  // 对传入obj进行拦截
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
        // 如果传入的newVal仍然是obj，则需要做响应化处理
        observe(newVal);
        val = newVal;

        // 通知更新
        // watchers.forEach((w) => w.update());
        dep.notify();
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  new Observer(obj);
}

// 代理函数，方便用户直接访问 $data 中的数据
function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach((key) => {
    // 将 $data 中的 key 代理到 vm 属性中
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

// 管理某个 key 相关所有 watcher 实例
class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(dep) {
    this.deps.push(dep);
  }

  notify() {
    this.deps.forEach((dep) => dep.update());
  }
}
