import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/Color-converter-GUI/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});