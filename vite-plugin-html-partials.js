import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite plugin que injeta partials HTML em placeholders
 * @returns {import('vite').Plugin}
 */
export function htmlPartialsPlugin() {
  let partials = {};

  return {
    name: 'html-partials',
    
    configResolved(config) {
      // Carrega os partials uma vez no início
      const partialsDir = resolve(config.root, 'partials');
      
      try {
        partials = {
          headCommon: readFileSync(resolve(partialsDir, 'head-common.html'), 'utf-8'),
          header: readFileSync(resolve(partialsDir, 'header.html'), 'utf-8'),
          footer: readFileSync(resolve(partialsDir, 'footer.html'), 'utf-8'),
          scripts: readFileSync(resolve(partialsDir, 'scripts.html'), 'utf-8'),
        };
        console.log('✓ Partials carregados com sucesso');
      } catch (error) {
        console.warn('⚠ Erro ao carregar partials:', error.message);
      }
    },

    transformIndexHtml(html) {
      // Substitui os placeholders pelos partials
      return html
        .replace('<!-- HEAD_COMMON -->', partials.headCommon || '')
        .replace('<!-- HEADER -->', partials.header || '')
        .replace('<!-- FOOTER -->', partials.footer || '')
        .replace('<!-- SCRIPTS -->', partials.scripts || '');
    },
  };
}
