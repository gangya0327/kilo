import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
