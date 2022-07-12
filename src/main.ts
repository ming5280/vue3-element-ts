import 'vue-global-api';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '/@/styles/index.scss';
// import { setupGlobDirectives } from './directives';
// import installElementPlus from '@/plugins/element';

// 创建vue实例
const app = createApp(App);

// pinia
app.use(store);

// router
app.use(router);

// 路由守卫控制
// import './router/permission'

// element plus 手动导入
// installElementPlus(app);

// Register UI components
// setupComponents(app);

// 全局属性
// app.config.globalProperties.AuthEnum = AuthEnum;

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
