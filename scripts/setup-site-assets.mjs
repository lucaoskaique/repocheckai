import { existsSync, symlinkSync, lstatSync } from 'fs';
import { resolve } from 'path';

/**
 * Script para criar symlink dos assets
 * Necessário para o Vite dev server acessar CSS/JS/imagens
 */

const ASSETS_LINK = resolve('site-vite', 'assets');

try {
  // Verifica se o link já existe
  if (existsSync(ASSETS_LINK)) {
    try {
      const stats = lstatSync(ASSETS_LINK);
      if (stats.isSymbolicLink()) {
        console.log('✓ Symlink de assets já existe');
        process.exit(0);
      } else {
        console.error('✗ site-vite/assets existe mas não é um symlink');
        process.exit(1);
      }
    } catch (err) {
      // Se falhar ao verificar, tenta criar mesmo assim
    }
  }

  symlinkSync('../site/assets', ASSETS_LINK, 'dir');
  console.log('✓ Symlink de assets criado com sucesso');
  console.log(`  site-vite/assets -> ../site/assets`);
} catch (error) {
  if (error.code === 'EEXIST') {
    console.log('✓ Symlink de assets já existe');
    process.exit(0);
  }
  console.error('✗ Erro ao criar symlink:', error.message);
  process.exit(1);
}
