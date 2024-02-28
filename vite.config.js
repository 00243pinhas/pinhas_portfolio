import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Specify the output directory for the built files (in the root)
    rollupOptions: {
      input: {
        main: './main.js', // Set the entry point for Rollup (assuming script.js is in the root)
      },
    },
    minify: true, // Enable minification
    target: 'es2018', // Specify the target environment
  },
});
