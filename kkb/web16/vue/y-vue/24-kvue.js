function defineReactive(obj, key, val) {
  observe(val);

  const dep = new Dep();

  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set(newVal) {
      console.log('set ' + key + ': ' + newVal);
      observe(newVal);
      val = newVal;
      dep.notify();
    },
  });
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  new Observer(obj);
}

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

class KVue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    // 响应化数据
    observe(this.$data);
    // 代理到app
    proxy(this, '$data');

    new Compiler(options.el, this);
  }
}

class Observer {
  constructor(value) {
    // 判断数据类型，对象，数组
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
}

class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    Dep.target = this;
    this.vm[this.key];
    Dep.target = null;
  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

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
