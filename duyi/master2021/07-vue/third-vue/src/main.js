import Vue from 'vue'
import App from './App.vue'

import "./styles/global.less"

Vue.config.productionTip = false

import router from './router'

import { showMessage } from '@/utils';
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
