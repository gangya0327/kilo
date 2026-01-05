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
// obj.foo = 'fff'
// obj.bar
// obj.bar = 'bbbb'
// obj.baz
// obj.baz.a

set(obj, 'dong', 'dong')
obj.dong
// obj.baz = 'bbb'
// obj.baz = 'bbb'

obj.baz = {
  a: 1,
}
obj.baz.a
obj.baz.a = 2
