import 'vue-global-api';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import installElementPlus from '@/plugins/element';

// 创建vue实例
const app = createApp(App);

// pinia
app.use(store);

// router
app.use(router);

// 路由守卫控制
// import './permission'

// element plus 全局导入
// installElementPlus(app);

// 字体图标 - 放在elemnt后面

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
