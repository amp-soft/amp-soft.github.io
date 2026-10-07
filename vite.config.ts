/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    //setupFiles: './vitest.setup.ts'
  },
  resolve: {
    alias: {
      //'@': path.resolve(import.meta.dirname, './src'),
      '@/features': path.resolve(import.meta.dirname, './src/features'),
      '@/shared': path.resolve(import.meta.dirname, './src/shared'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@test': path.resolve(import.meta.dirname, './src/test'),
    }
  },
  server: {
    //port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true
  }
})
