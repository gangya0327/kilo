let Vue

class Store {
  constructor(options) {
    this.$options = options
    this._mutations = options.mutations
    this._actions = options.actions

    this._vm = new Vue({
      data() {
        return {
          $$state: options.state, // 不让 $$state 被代理
        }
      },
    })
    this.commit = this.commit.bind(this)
  }
  get state() {
    return this._vm._data.$$state
  }
  set state(value) {
    console.error('请使用热 replaceState 修改状态')
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    if (!entry) {
      console.error('error')
      return
    }
    entry(this.state, payload)
  }
  dispatch(type, payload) {
    const entry = this._actions[type]
    if (!entry) {
      console.error('error')
      return
    }
    entry(this, payload)
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      // 只需要拿到根实例时，执行一次赋值
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default { Store, install }
