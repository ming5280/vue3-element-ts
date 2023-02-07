/**
 * Generate proxy
 */
import { ProxyOptions } from 'vite';

type ProxyTargetList = Record<string, ProxyOptions>;
const httpsRE = /^https:\/\//;

export function createProxy(VITE_API_PREFIX: string, VITE_BASE_API_URL: string): ProxyTargetList {
  const isHttps = httpsRE.test(VITE_BASE_API_URL);
  const ret: ProxyTargetList = {
    // PREFIX
    [VITE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${VITE_API_PREFIX}`), ''),
      ...(isHttps ? { secure: false } : {}),
    },

    // other to do...
  };
  console.log(ret);
  return ret;
}
