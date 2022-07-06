import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import legacy from '@vitejs/plugin-legacy';
import compressPlugin from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';

export function createVitePlugins() {
  return [
    vue(),

    // 在开发和构建时进行代码规范校验
    eslintPlugin({
      /* 配置选项 */
      // 禁用 eslint 缓存
      cache: false,
    }),

    // 在script标签中写component name
    VueSetupExtend(),

    // 自动导入api
    AutoImport({
      dts: 'types/auto-imports.d.ts', // 生成 `auto-imports.d.ts` 全局声明路径
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
    }),

    // 自动注册element plus组件
    Components({
      dts: 'types/components.d.ts', // 生成 `components.d.ts` 全局声明路径
      dirs: ['src/components'], // 要导入组件的目录的路径
      deep: true, // 搜索子目录
      resolvers: [ElementPlusResolver()],
    }),

    // 兼容ie 11
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),

    // gzip 压缩
    compressPlugin({
      verbose: false, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 文件容量大于这个值进行压缩，它将被压缩，单位为b
      algorithm: 'gzip', // 压缩算法 可选 ['gzip','brotliCompress' ,'deflate','deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
    }),
    // 图片压缩
  ];
}
