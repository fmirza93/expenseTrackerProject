import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    outDir: 'dist'
  },
  server: {
    port: 8080
  },
  plugins: [react()]
});
