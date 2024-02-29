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
      output: {
        entryFileNames: '[name].[hash].js', // Customize the output file names (optional)
        chunkFileNames: '[name].[hash].js', // Customize the chunk file names (optional)
        assetFileNames: '[name].[hash].[ext]', // Customize the asset file names (optional)
        // Output JavaScript files directly in the dist directory
        dir: 'dist',
      },
    },
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
