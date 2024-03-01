
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  base: './',
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
  
  minify: false,
  target: 'es2018', 
});
