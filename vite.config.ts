import { defineConfig, ConfigEnv } from 'vite';
import * as path from 'path';
import { createVitePlugins } from './config';

export default defineConfig(({ command, mode }: ConfigEnv) => {
  // if (command === 'serve') {
  //   return {
  //     // dev 独有配置
  //   }
  // } else {
  //   // command === 'build'
  //   return {
  //     // build 独有配置
  //   }
  // }
  return {
    resolve: {
      //设置路径别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: createVitePlugins(),

    server: {
      port: 8080, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 8080,
      },
      // 设置 https 代理
      proxy: {
        '/api': {
          target: 'your https address',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },

    // build
    // build: {
    //   target: 'es2015',
    //   terserOptions: {
    //     compress: {
    //       keep_infinity: true,
    //       drop_console: VITE_DROP_CONSOLE,
    //     },
    //   },
    //   rollupOptions: {
    //     output: {
    //       manualChunks: configManualChunk,
    //     },
    //   },
    //   // 关闭brotliSize显示屏可以稍微缩短打包时间
    //   brotliSize: false,
    //   chunkSizeWarningLimit: 2000,
    // },
  };
});
