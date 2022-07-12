/**
 * @name Visualizer
 * @description 包文件分析
 */

import visualizer from 'rollup-plugin-visualizer';
import { ANALYSIS } from '../../index';

export function configVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as Plugin;
  }
  return [];
}
