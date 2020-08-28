import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Menucontainer',
    component: () => import('../views/main/Homecontainer.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/main/About.vue'),
      },
      {
        path: 'ShareholderInfo',
        name: 'ShareholderInfo',
        component: () => import('../views/main/ShareholderInfo.vue'),
      },
      {
        path: 'NEXT',
        name: 'NEXT_STEP',
        component: () => import('../views/main/Next.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin 管理頁面',
    component: () => import('../views/submenu/Menucontainer.vue'),
    children: [
      {
        path: 'B2',
        name: 'B2_PAGE',
        component: () => import('../views/submenu/B2.vue'),
      },
      {
        path: 'B3',
        name: 'B3_PAGE',
        component: () => import('../views/submenu/B3.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'Admin 管理頁面',
    component: () => import('../views/submenu/Menucontainer.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
