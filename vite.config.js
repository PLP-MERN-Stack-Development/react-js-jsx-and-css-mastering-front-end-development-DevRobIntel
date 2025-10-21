import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure Vite serves from the root where index.html is
  server: {
    port: 5173,
    open: true, // Automatically opens the browser
  },
  build: {
    outDir: 'dist',
  },
});