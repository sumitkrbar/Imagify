import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.PORT || 10000,
    host: '0.0.0.0',
    allowedHosts: ['imagify-by-sumit.onrender.com']
  }
});
