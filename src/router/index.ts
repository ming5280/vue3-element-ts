import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import FirstNav from '/@/layouts/zhzg/FirstNav.vue';
import SecondNav from '/@/layouts/zhzg/SecondNav.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import(/* webpackChunkName: "loginPage" */ '/@/view/login/Login.vue'),
  },
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import(/* webpackChunkName: "indexPage" */ '/@/view/index.vue'),
  },
  {
    path: '/vueUse',
    name: 'VueUse',
    meta: {
      title: 'vueUse demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import(/* webpackChunkName: "vueUse" */ '/@/view/vueUse.vue'),
  },
  {
    path: '/request',
    name: 'RequestPage',
    meta: {
      title: 'request demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import(/* webpackChunkName: "requestPage" */ '/@/view/form.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    meta: {
      title: '表单',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import(/* webpackChunkName: "form" */ '/@/view/demo/form.vue'),
  },
  {
    path: '/404',
    name: 'NotFund',
    meta: {
      title: '404-找不到页面',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import(/* webpackChunkName: "notFund" */ '/@/view/404.vue'),
  },

  // 智慧政工
  {
    path: '/zhzg',
    // redirect: '/',
    name: 'Zhzg',
    component: FirstNav,
    children: [
      {
        path: 'zhdj',
        name: 'Zhdj',
        // redirect: '/zhdj',
        component: SecondNav,
        // meta: { title: '首页', keepAlive: false, requireAuth: true },
        children: [
          {
            path: 'dzzb',
            name: 'Dzzb',
            component: () =>
              import(/* webpackChunkName: "dzzb" */ '/@/view/zhzg/zhdj/dzzb/index.vue'),
            meta: { title: '党组织部', keepAlive: false, requireAuth: true },
          },
          {
            path: 'dygl',
            name: 'Dygl',
            component: () =>
              import(/* webpackChunkName: "dygl" */ '/@/view/zhzg/zhdj/dygl/index.vue'),
            meta: { title: '党员管理', keepAlive: false, requireAuth: true },
          },
          {
            path: 'djjd',
            name: 'Djjd',
            component: () =>
              import(/* webpackChunkName: "djjd" */ '/@/view/zhzg/zhdj/djjd/index.vue'),
            meta: { title: '党建进度', keepAlive: false, requireAuth: true },
          },
        ],
      },
    ],
  },

  // 动态路由
  // {
  //   // path: '/',
  //   name: 'dynamicRouter',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: Index,
  //       name: 'Dashboard',
  //       meta: { title: '首页', keepAlive: true, requireAuth: true },
  //     },
  //   ],
  // },
  { path: '/:pathMatch(.*)*', name: 'notFound', redirect: '/404' },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
export default router;

// export function generateRouter(userRouters) {
//   let newRouters;
//   newRouters = userRouters.map((r) => {
//     let routes = {
//       path: r.path,
//       name: r.name,
//       component: () => import(`../view/${r.name}.vue`),
//     };
//     if (r.children) {
//       routes.children = generateRouter(r.children);
//     }
//     return routes;
//   });
//   return newRouters;
// }
