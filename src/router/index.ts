import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

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
    component: () => import(/* webpackChunkName: "requestPage" */ '/@/view/request.vue'),
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

  // {
  //   path: '/template',
  //   name: 'Template',
  //   meta: {
  //     title: 'template',
  //     keepAlive: true,
  //     requireAuth: true,
  //   },
  //   component: () => import(/* webpackChunkName: "Template" */ '/@/view/zhzg/template.vue'),
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
