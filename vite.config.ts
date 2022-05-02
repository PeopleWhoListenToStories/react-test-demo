import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDev = process.env.NODE_ENV === 'development';
  const defaultSettings = {
    root: process.cwd(),
    base: process.env.VITE_APP_BASE,
    mode: mode, // 模式
    publicDir: '/',
    clearScreen: true, // Vite在记录某些消息时清除终端屏幕
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            ...{
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 1998,
      strictPort: true, // 如果端口已在使用中，则设置为退出，而不是自动尝试下一个可用端口
      open: true,
      proxy: {
        // '/api': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, '')
        // },
        // with RegEx
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/fallback/, '')
        // },
        // Using the proxy instance
        // '/api': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   configure: (proxy, options) => {
        //     // proxy will be an instance of 'http-proxy'
        //   }
        // },
        // Proxying websockets or socket.io
        // '/socket.io': {
        //   target: 'ws://localhost:3000',
        //   ws: true
        // }
      }
    },
    build: {
      outDir: process.env.VITE_APP_DIR,
      assetsDir: 'static',
      assetsInlineLimit: 4096, //小于此阈值的导入或引用资产将被内联为 base64 URL，以避免额外的 http 请求。设置为0完全禁用内联
      cssCodeSplit: true, // 启用 CSS 代码拆分
      sourcemap: isDev ? true : false, // 开发环境下生成生产源映射
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      },
      // 生产环境移除console
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    preview: {
      port: 8080
    }
  };
  return {
    ...defaultSettings
  };
});
