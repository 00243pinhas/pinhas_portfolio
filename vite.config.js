import { defineConfig } from 'vite';

export default defineConfig({
  build: {

    outDir: 'dist',
    
    assetsDir: '.',
    
    assetsInlineLimit: 0, 
  },

  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  }
  
});
