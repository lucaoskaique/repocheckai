import { defineConfig } from 'vite';
import { resolve } from 'path';
import { htmlPartialsPlugin } from './vite-plugin-html-partials.js';

export default defineConfig({
  root: 'site-vite',
  
  build: {
    outDir: '../site',
    emptyOutDir: false, // Não apagar assets/robots.txt/etc
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'site-vite/index.html'),
        about: resolve(__dirname, 'site-vite/about.html'),
        changelog: resolve(__dirname, 'site-vite/changelog.html'),
        contribute: resolve(__dirname, 'site-vite/contribute.html'),
        docs: resolve(__dirname, 'site-vite/docs.html'),
        install: resolve(__dirname, 'site-vite/install.html'),
        roadmap: resolve(__dirname, 'site-vite/roadmap.html'),
        trust: resolve(__dirname, 'site-vite/trust.html'),
        useCases: resolve(__dirname, 'site-vite/use-cases.html'),
        webUi: resolve(__dirname, 'site-vite/web-ui.html'),
        '404': resolve(__dirname, 'site-vite/404.html'),
      },
    },
  },

  plugins: [htmlPartialsPlugin()],
  
  server: {
    port: 3000,
    open: true,
  },
});
