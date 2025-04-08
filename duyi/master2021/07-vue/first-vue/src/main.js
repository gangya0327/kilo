import Vue from 'vue';
// import App from './App.vue'
import ImageLoader from '@/components/ImageLoader/test.vue';

import './styles/global.less';

new Vue({
  // render: h => h(App),
  render: (h) => h(ImageLoader),
}).$mount('#app');
