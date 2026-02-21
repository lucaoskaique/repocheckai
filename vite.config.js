import { defineConfig } from 'vite';
import { resolve } from 'path';
import { htmlPartialsPlugin } from './vite-plugin-html-partials.js';

export default defineConfig({
  root: 'site-src',
  
  build: {
    outDir: '../site',
    emptyOutDir: false, // Não apagar assets/robots.txt/etc
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'site-src/index.html'),
        about: resolve(__dirname, 'site-src/about.html'),
        changelog: resolve(__dirname, 'site-src/changelog.html'),
        contribute: resolve(__dirname, 'site-src/contribute.html'),
        docs: resolve(__dirname, 'site-src/docs.html'),
        install: resolve(__dirname, 'site-src/install.html'),
        roadmap: resolve(__dirname, 'site-src/roadmap.html'),
        trust: resolve(__dirname, 'site-src/trust.html'),
        useCases: resolve(__dirname, 'site-src/use-cases.html'),
        webUi: resolve(__dirname, 'site-src/web-ui.html'),
        '404': resolve(__dirname, 'site-src/404.html'),
      },
    },
  },

  plugins: [htmlPartialsPlugin()],
  
  server: {
    port: 3000,
    open: true,
  },
});
