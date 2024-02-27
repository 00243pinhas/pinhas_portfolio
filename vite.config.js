import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Specify the output directory for the built files
    outDir: 'dist',
    // Set assetsDir to '.' to indicate that assets are in the root directory
    assetsDir: '.',
    // Set cssDir to the path of your SCSS folder relative to the root directory
    css: {
      preprocessorOptions: {
        // Set the directory where your SCSS files are located
        scss: {
          // Specify the path of your SCSS folder relative to the root directory
          additionalData: `@import "./scss/index.scss";`,
        },
      },
    },
    // Specify any additional asset types you want to copy directly to the output directory
    assetsInlineLimit: 0, // Set to 0 to disable asset inlining
  },
  // Specify any additional Vite plugins or configurations here
});