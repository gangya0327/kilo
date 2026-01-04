let Vue

class Store {
  constructor(options) {
    this.$options = options
    this._mutations = options.mutations
    this._actions = options.actions

    this.commit = this.commit.bind(this)

    this._vm = new Vue({
      data() {
        return {
          $$state: options.state,
        }
      },
    })
  }
  get state() {
    return this._vm._data.$$state
  }
  set state(value) {
    console.error('不允许直接修改 state')
  }
  commit(type, payload) {
    const entry = this._mutations[type]
    if (!entry) return false
    entry(this.state, payload)
  }
  dispatch(type, payload) {
    const entry = this._actions[type]
    if (!entry) return false
    entry(this, payload)
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default { Store, install }
