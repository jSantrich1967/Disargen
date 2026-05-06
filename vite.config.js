import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use "/" for Vercel (default), and "/Disargen/" for GitHub Pages
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
