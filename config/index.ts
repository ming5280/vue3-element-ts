/**
 * @name Config
 * @description 项目配置
 */

// 应用名
export const APP_TITLE = import.meta.env.VITE_APP_TITLE;

// 本地服务端口
export const VITE_PORT = import.meta.env.VITE_PORT;

// prefix
export const API_PREFIX = import.meta.env.VITE_API_PREFIX;

// Interface
export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// serve
export const API_BASE_URL = '/api';
export const API_TARGET_URL = 'http://localhost:3000';

// mock
export const MOCK_API_BASE_URL = '/mock/api';
export const MOCK_API_TARGET_URL = 'http://localhost:3000';

// 包依赖分析
export const ANALYSIS = import.meta.env.VITE_ANALYSIS;

// 代码压缩
export const COMPRESSION = import.meta.env.VITE_COMPRESSION;

// 删除 console
export const DROP_CONSOLE = import.meta.env.VITE_DROP_CONSOLE;

// 打包输出目录
export const OUTPUT_DIR = import.meta.env.VITE_OUTPUT_DIR;

// 页面入口路径
export const PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;
