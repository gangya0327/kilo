import Vue from 'vue';
import App from './App.vue';
// import Test from '@/components/Layout/test.vue';

Vue.config.productionTip = false;

import './styles/global.less';

import router from '@/router'

new Vue({
  router,
  render: (h) => h(App),
  // render: (h) => h(Test),
}).$mount('#app');
