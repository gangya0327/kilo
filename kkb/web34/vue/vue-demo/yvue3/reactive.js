function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('get ->', key)
      track(target, key)
      return typeof target[key] === 'object'
        ? reactive(target[key])
        : target[key]
    },
    set(target, key, value) {
      console.log('set ->', key, value)
      target[key] = value
      trigger(target, key)
    },
    deleteProperty(target, key) {
      console.log('deleteProperty ->', key)
      delete target[key]
      trigger(target, key)
    },
  })
}

// 临时存储副作用函数
const effectStack = []

function effect(fn) {
  // 包装 fn，立即执行 fn，返回包装结果
  const e = createReactiveEffect(fn)
  e()
  return e
}

function createReactiveEffect(fn) {
  const effect = function () {
    try {
      effectStack.push(fn)
      return fn()
    } finally {
      effectStack.pop()
    }
  }
  return effect
}

// 保存依赖关系的数据结构
const targetMap = new WeakMap()

// 依赖收集
function track(target, key) {
  // 获取当前正在执行的副作用函数
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    // 取出 target，key 对应的 map
    let depMap = targetMap.get(target)
    if (!depMap) {
      depMap = new Map()
      targetMap.set(target, depMap)
    }

    // 获取 key 对应的 set
    let deps = depMap.get(key)
    if (!deps) {
      deps = new Set()
      depMap.set(key, deps)
    }

    // 存入 set
    deps.add(effect)
  }
}

// 触发副作用函数
// 当某个响应式数据发生变化，根据 target，key 获取对应的副作用函数并执行
function trigger(target, key) {
  // 获取 target，key 对应的 set，遍历执行他们
  const depMap = targetMap.get(target)
  if (depMap) {
    const deps = depMap.get(key)
    if (deps) {
      deps.forEach((effect) => effect())
    }
  }
}

const state = reactive({
  foo: 'foo',
  bar: {
    baz: 13,
  },
})

effect(() => {
  console.log('effect1', state.foo)
})

effect(() => {
  console.log('effect2', state.foo, state.bar.baz)
})

state.foo
// state.foo = 'foooo'
// delete state.foo
state.bar = 'bar'
// state.bar
// state.bar.baz

// state.bar = {
//   baz: 25,
// }
// state.bar.baz
