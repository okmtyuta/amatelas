import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: { '@src': resolve(__dirname, './src') }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          clsx: 'clsx',
          vue: 'vue'
        }
      }
    }
  },
  plugins: [vue()]
})
