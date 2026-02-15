import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// import router from './yrouter'
import router from './zrouter'

// import store from './store'
// import store from './ystore'
import store from './zstore'

Vue.config.productionTip = false

import create from '@/utils/create'
import MyNotice from '@/components/MyNotice.vue'

Vue.prototype.$notice = function (options) {
  const comp = create(MyNotice, options)
  console.log('comp ->', comp)
  comp.show()
  return comp
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
