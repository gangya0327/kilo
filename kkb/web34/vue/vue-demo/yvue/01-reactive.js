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

// 动态新增属性
function set(obj, key, val) {
  defineReactive(obj, key, val)
}

const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: {
    a: 11,
  },
}
observe(obj)
// obj.foo
// obj.foo = 'ffff'
// obj.bar
// obj.bar = 'bbbb'
// obj.baz
// obj.baz.a
// obj.dong = 'dong'
// obj.dong
set(obj, 'dong', 'dong')
// obj.dong
obj.baz = {
  a: 22,
}
obj.baz.a
obj.baz.a = 33
