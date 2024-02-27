import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    
    outDir: 'dist',
   
    assetsDir: 'aseetes',
    
    css: {
      preprocessorOptions: {
    
        scss: {
         
          additionalData: `@import "./scss/index.scss";`,
        },
      },
    },
   
    assetsInlineLimit: 0, 
  },
 
});