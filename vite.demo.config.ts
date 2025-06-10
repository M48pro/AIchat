import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration for building the demo site
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-demo',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});