import Vue from 'vue';
import App from './App.vue';
// import Test from '@/components/Loading/test.vue';

Vue.config.productionTip = false;

import '@/styles/global.less';

import { showMessage } from '@/utils';
Vue.prototype.$showMessage = showMessage;

import router from '@/router';

import '@/mock';

import vLoading from '@/directives/loading';
Vue.directive('loading', vLoading);

new Vue({
  router,
  render: (h) => h(App),
  // render: (h) => h(Test),
}).$mount('#app');
