import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// import router from './yrouter'
import router from './zrouter'

// import store from './store'
// import store from './ystore'
import store from './zstore'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
