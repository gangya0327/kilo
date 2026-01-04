function defineReactive(obj, key, val) {
  // 递归 val 对象
  observe(val)

  // 响应式处理
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set', key)
        // 若 newVal 就是对象，也需要对其进行响应式处理
        observe(newVal)
        val = newVal
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

class YVue {
  constructor(options) {
    console.log('options :>> ', options)
    this.$options = options
    this.$data = options.data

    // 响应式处理
    observe(this.$data)

    // 代理
    proxy(this)

    // 模板编译
  }
}

// export default YVue
