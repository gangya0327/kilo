function defineReactive(obj, key, val) {
  // 递归 val 对象
  observe(val)

  Object.defineProperty(obj, key, {
    get() {
      console.log('get :>> ', key, val)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set :>> ', key, newVal)
        observe(newVal)
        val = newVal
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
  compileText(node) {
    node.textContent = this.$vm.$data[RegExp.$1]
  }
  text(node, val) {
    node.textContent = this.$vm.$data[val]
  }
  html(node, val) {
    node.innerHTML = this.$vm.$data[val]
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
