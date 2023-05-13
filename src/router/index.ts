import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/view/Home/Home.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/cicd/'),
  routes
});

export default router;
