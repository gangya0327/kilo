import Vue from 'vue';
import App from './App.vue';
// import Test from '@/components/Layout/test.vue';

import './styles/global.less';

new Vue({
  render: (h) => h(App),
  // render: (h) => h(Test),
}).$mount('#app');
