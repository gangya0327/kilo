import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Pinia from '@/pages/Pinia.vue';
import Communication from '@/pages/communication/Index.vue';
import News from '@/pages/news/Index.vue';
import Detail from '@/pages/news/Detail.vue';
import About from '@/pages/About.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/news',
    component: News,
    children: [
      {
        name: 'newDetail',
        path: 'detail/:id/:name/:content',
        component: Detail,
        props: true,
      },
    ],
  },
  { path: '/pinia', component: Pinia },
  {
    path: '/communication',
    component: Communication,
    redirect: '/communication/props',
    children: [
      { path: 'props', component: () => import('@/pages/communication/1-props/Father.vue') },
      { path: 'custom', component: () => import('@/pages/communication/2-custom/Father.vue') },
      { path: 'mitt', component: () => import('@/pages/communication/3-mitt/Father.vue') },
      { path: 'v-model', component: () => import('@/pages/communication/4-v-model/Father.vue') },
      { path: 'attr', component: () => import('@/pages/communication/5-attr/Father.vue') },
      { path: 'ref', component: () => import('@/pages/communication/6-ref/Father.vue') },
      { path: 'provide', component: () => import('@/pages/communication/7-provide/Father.vue') },
      { path: 'pinia', component: About },
      { path: 'slot', component: () => import('@/pages/communication/9-slot/Father.vue') },
    ],
  },
  { path: '/advance', component: () => import('@/pages/advance.vue') },
  { path: '/customRef', component: () => import('@/pages/customRef.vue') },
  { path: '/teleport', component: () => import('@/pages/teleport/Index.vue') },
  { path: '/suspense', component: () => import('@/pages/suspense/Index.vue') },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
