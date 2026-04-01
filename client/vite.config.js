import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@all-components': path.resolve(__dirname, 'src/components/all-components'),
    },
  },
  plugins: [react()],
  server: {
    port: 3000, // Optional: keeps it on the CRA default port
  },
});