function defineReactive(obj, key, val) {
  // 递归 val 对象
  observe(val)

  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        observe(newVal)
        val = newVal

        dep.notify()
        // watchers.forEach((w) => w.update())
      }
    },
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key])
  })
}

function proxy(vm) {
  Object.keys(vm.$data).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(newVal) {
        vm.$data[key] = newVal
      },
    })
  })
}

// eslint-disable-next-line no-unused-vars
class ZVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data

    // 响应式处理
    observe(this.$data)

    // 代理
    proxy(this)

    // 模板编译
    new Compiler(options.el, this)
  }
}

class Compiler {
  constructor(el, vm) {
    this.$vm = vm

    const dom = document.querySelector(el)
    this.compile(dom)
  }

  // 遍历节点
  compile(dom) {
    dom.childNodes.forEach((node) => {
      if (this.isElement(node)) {
        if (node.childNodes.length > 0) {
          this.compile(node)
        }
        const attrs = node.attributes
        Array.from(attrs).forEach((attr) => {
          if (this.isDirective(attr.name)) {
            const dir = attr.name.substring(2)
            this[dir] && this[dir](node, attr.value)
          }
        })
      } else if (this.isInter(node)) {
        this.compileText(node)
      }
    })
  }

  update(node, exp, dir) {
    // 设置初始值
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    // 创建 watcher 实例
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  compileText(node) {
    this.update(node, RegExp.$1, 'text')
    // node.textContent = this.$vm.$data[RegExp.$1]
  }
  text(node, exp) {
    this.update(node, exp, 'text')
    // node.textContent = this.$vm.$data[val]
  }
  textUpdater(node, val) {
    node.textContent = val
  }
  html(node, exp) {
    this.update(node, exp, 'html')
    // node.innerHTML = this.$vm.$data[val]
  }
  htmlUpdater(node, val) {
    node.innerHTML = val
  }

  isElement(node) {
    return node.nodeType === 1
  }
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
  isDirective(name) {
    return name.startsWith('v-')
  }
}

// const watchers = []

class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm
    this.key = key
    this.updater = updater

    Dep.target = this
    this.vm[this.key]
    Dep.target = null
    // watchers.push(this)
  }

  update() {
    this.updater.call(this.vm, this.vm[this.key])
  }
}

class Dep {
  constructor() {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach((d) => d.update())
  }
}
