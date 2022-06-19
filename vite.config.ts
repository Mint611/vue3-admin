import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
  // server: {
  //   proxy: {
  //     // string shorthand
  //     '/foo': 'http://localhost:4567',
  //     // with options
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //     // with RegEx
  //     '^/fallback/.*': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/fallback/, '')
  //     },
  //     // Using the proxy instance
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //         // proxy will be an instance of 'http-proxy'
  //       }
  //     },
  //     // Proxying websockets or socket.io
  //     '/socket.io': {
  //       target: 'ws://localhost:5173',
  //       ws: true
  //     }
  //   }
  // }
})
