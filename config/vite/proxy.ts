/**
 * Generate proxy
 */
import { ProxyOptions } from 'vite';

type ProxyTargetList = Record<string, ProxyOptions>;

export function createProxy(VITE_API_PREFIX: string, VITE_BASE_API_URL: string): ProxyTargetList {
  const ret: ProxyTargetList = {
    // test
    [VITE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${VITE_API_PREFIX}`), ''),
    },
    // mock to do...
  };
  return ret;
}
