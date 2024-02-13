import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        init: resolve(__dirname, 'src/init.ts'),
        index: resolve(__dirname, 'src/index.ts')
      }
    },
    rollupOptions: {
      external: [],
      output: {}
    }
  }
})
