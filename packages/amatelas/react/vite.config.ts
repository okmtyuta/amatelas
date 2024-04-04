import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {},
  build: {
    outDir: 'dist',
    lib: {
      // entry: {
      //   server: resolve(__dirname, 'src/components/server.ts'),
      //   svg: resolve(__dirname, 'src/svg/index.ts')
      // }
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@okmtyuta/amatelas-theme']
    }
  },
  plugins: [react()]
})
