import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/get-link': 'http://127.0.0.1:8081',
    },
  },
  plugins: [react(),tailwindcss(),],
})
