/**
 * @name AutoImportDeps
 * @description 打包文件压缩
 */

import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';
import { COMPRESSION } from '../../index';

export function configCompressPlugin(): Plugin | Plugin[] {
  if (COMPRESSION) {
    return compressPlugin({
      ext: '.gz',
      deleteOriginFile: false,
    }) as Plugin;
  }
  return [];
}
