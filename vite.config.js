import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/nsdsahil-portfolio/',
  build: {
    sourcemap: true,
  },
  plugins: [react()],
})
