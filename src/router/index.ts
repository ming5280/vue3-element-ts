import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import Layout from '/@/layout/index.vue';
// import Index from '/@/view/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('/@/view/login/Login.vue'),
  },
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/index.vue'),
  },
  {
    path: '/vueUse',
    name: 'VueUse',
    meta: {
      title: 'vueUse demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/vueUse.vue'),
  },
  {
    path: '/request',
    name: 'RequestPage',
    meta: {
      title: 'request demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/form.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    meta: {
      title: '表单',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/demo/form.vue'),
  },
  {
    path: '/404',
    name: 'NotFund',
    meta: {
      title: '404-找不到页面',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/404.vue'),
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
