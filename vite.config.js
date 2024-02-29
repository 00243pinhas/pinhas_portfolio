
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  
  build: {
    outDir: 'dist',
    
    rollupOptions: {
  
      rollupOptions: {
        input: {
          main: './src/main.js', 
        },
    
      },
    }
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  minify: false,
  target: 'es2018', 
});
