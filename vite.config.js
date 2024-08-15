import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => { 
  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : '/portfolio/',
    build: {
      outDir: 'dist',
    },
    server: {
    },
  }
})
