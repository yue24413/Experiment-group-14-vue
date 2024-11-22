import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// createWebHashHistory
// createWebHistory
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/main/IndexView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/main/index.vue'),
      },
      {
        path: 'test',
        component: () => import('@/views/main/test/IndexView.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/main/index.vue'),
          },
          {
            path: 'test1',
            component: () => import('@/views/main/test/test1/IndexView.vue'),
          },
          {
            path: 'test2',
            component: () => import('@/views/main/test/test2/IndexView.vue'),
          },
          {
            path: 'test3',
            component: () => import('@/views/main/test/test3/IndexView.vue'),
          },
          {
            path: 'test4',
            component: () => import('@/views/main/test/test4/IndexView.vue'),
          },
          {
            path: 'test5',
            component: () => import('@/views/main/test/test5/IndexView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
