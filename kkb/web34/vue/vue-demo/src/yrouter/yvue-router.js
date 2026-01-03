
let Vue

class VueRouter {
  constructor(options) {
    this.$options = options

    // 给指定对象定义响应式属性
    Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')

    // 监听 hashchange
    window.addEventListener('hashchange', ()=>{
      this.current = window.location.hash.slice(1)
    })
  }
}

// Vue 是构造函数，用于扩展
VueRouter.install = function (_Vue) {
  Vue = _Vue

  // 下面代码延迟到根实例创建时
  Vue.mixin({
    beforeCreate() {
      // 只需要拿到根实例时，执行一次赋值
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 注册两个全局组件 router-view,router-link
  Vue.component('router-link', {
    // template: '<div>router-link</div>' // 运行时构建，无法编译此内容
    props: {
      to: { type: String, required: true }
    },
    render(h) {
      // 获取插槽内容
      return h('a',
        {
          attrs: {
            href: '#' + this.to
          }
        },
        this.$slots.default)
    }
  })

  Vue.component('router-view', {
    // template: '<div>router-view</div>' // 运行时构建，无法编译此内容
    render(h) {
      // console.log('this.$router.$options.routes :>> ', this.$router.$options.routes);
      // console.log('this.$router.current :>> ', this.$router.current);

      let component = null
      const route = this.$router.$options.routes.find(r=>r.path===this.$router.current)
      if(route) {
        component = route.component
      }
      return h(component)
    }
  })
}

export default VueRouter