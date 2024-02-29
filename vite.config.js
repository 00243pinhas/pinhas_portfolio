import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.', // Set the root directory to the project root
  build: {
    outDir: 'dist', // Specify the output directory for the built files (in the root)
    assetsDir: '.', // Set the assets directory to the project root
    rollupOptions: {
      input: {
        main: './src/main.js', // Set the entry point for Rollup to the main.js file in the src directory
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    minify: false, // Enable minification
    target: 'es2018', // Specify the target environment
  },
});
