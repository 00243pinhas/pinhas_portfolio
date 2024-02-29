import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
 
  root: './',

  build: {
    outDir: 'dist',

    rollupOptions: {

      output: {
      
        dir: 'dist',
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
