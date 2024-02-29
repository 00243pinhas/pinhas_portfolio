
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Set the root directory to the project root
  root: './',
  // Configure the output directory for the built files
  build: {
    outDir: 'dist',
    // Configure Rollup options
    rollupOptions: {
      // Specify the output directory for JavaScript files
      rollupOptions: {
        input: {
          main: './src/main.js', // Set the entry point for Rollup to the main.js file in the src directory
        },
    
      },
    }
  },
  
  // Configure the entry points for JavaScript and SCSS files
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  minify: false, // Enable minification
  target: 'es2018', // Specify the target environment
});
