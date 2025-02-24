import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('../pages/Home.vue')),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: defineAsyncComponent(() => import('../pages/Detail.vue')),
  },
  {
    path: '/task',
    name: 'Task',
    component: defineAsyncComponent(() => import('../pages/Task.vue')),
  },
  {
    path: '/task_detail/:id',
    name: 'TaskDetail',
    component: defineAsyncComponent(() => import('../pages/TaskDetail.vue')),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
