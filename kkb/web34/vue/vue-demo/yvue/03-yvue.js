function defineReactive(obj, key, val) {
  // 递归 val 对象
  observe(val)

  const dep = new Dep()

  // 响应式处理
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set', key)
        // 若 newVal 就是对象，也需要对其进行响应式处理
        observe(newVal)
        val = newVal
        // 通知更新
        // watchers.forEach((w) => w.update())
        dep.notify()
      }
    },
  })
}

// 遍历 obj 的所有属性，执行响应式处理
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  Object.keys(obj).forEach((key) => defineReactive(obj, key, obj[key]))
}

function proxy(vm) {
  Object.keys(vm.$data).forEach((key) =>
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(newVal) {
        vm.$data[key] = newVal
      },
    })
  )
}

// eslint-disable-next-line no-unused-vars
class YVue {
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

// 遍历模板树，解析其中动态内容，初始化并获取更新函数
class Compiler {
  constructor(el, vm) {
    // 保存实力
    this.$vm = vm

    // 获取宿主元素的 dom 节点
    const dom = document.querySelector(el)

    this.compile(dom)
  }

  // 遍历宿主元素
  compile(el) {
    const childNodes = el.childNodes
    childNodes.forEach((node) => {
      if (this.isElement(node)) {
        // 元素节点
        console.log('编译元素', node.nodeName)
        // 解析动态指令，绑定属性和事件
        const attrs = node.attributes
        Array.from(attrs).forEach((attr) => {
          // 判断是否是动态属性
          // 指令 v-xx="yy"
          const attrName = attr.name
          const exp = attr.value
          if (this.isDirective(attrName)) {
            const dir = attrName.substring(2)
            // 判断是否合法指令，并执行
            this[dir] && this[dir](node, exp)
          }
        })
        // this.compileElement(node)
        // 递归
        if (node.childNodes.length > 0) {
          this.compile(node)
        }
      } else if (this.isInter(node)) {
        // 插值节点
        console.log('编译插值', node.textContent)
        this.compileText(node)
      }
    })
  }

  // 处理所有动态绑定
  update(node, exp, dir) {
    // 设置初始值
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])
    // 创建 watcher 实例
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  // 解析 指令 内容
  // v-text
  text(node, exp) {
    this.update(node, exp, 'text')
  }
  textUpdater(node, val) {
    node.textContent = val
  }
  // v-html
  html(node, exp) {
    this.update(node, exp, 'html')
  }
  htmlUpdater(node, val) {
    node.innerHTML = val
  }

  // 解析 {{xx}} 内容
  compileText(node) {
    this.update(node, RegExp.$1, 'text')
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

// 具体节点更新
class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm
    this.key = key
    this.updater = updater

    // watchers.push(this)
    // 读取当前值，触发依赖收集
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }

  // 给 dep 来调用触发更新
  update() {
    const newVal = this.vm[this.key]
    this.updater.call(this.vm, newVal)
  }
}

// 通知 watcher 去更新
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
