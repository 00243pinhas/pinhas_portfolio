
import { defineConfig } from 'vite';

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
