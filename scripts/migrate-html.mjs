import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Script para migrar HTMLs da pasta site/ para site-vite/
 * Extrai o conteúdo único e substitui partes compartilhadas por placeholders
 */

const SITE_DIR = 'site';
const SRC_DIR = 'site-vite';
const HTML_FILES = readdirSync(SITE_DIR).filter(f => f.endsWith('.html'));

console.log(`📦 Migrando ${HTML_FILES.length} arquivos HTML...\n`);

for (const filename of HTML_FILES) {
  try {
    const sourcePath = join(SITE_DIR, filename);
    const destPath = join(SRC_DIR, filename);
    const content = readFileSync(sourcePath, 'utf-8');

    // Extrai seções
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/);
    const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
    const ogTitleMatch = content.match(/<meta\s+property="og:title"\s+content="(.*?)"/);
    const ogDescMatch = content.match(/<meta\s+property="og:description"\s+content="(.*?)"/);
    const ogUrlMatch = content.match(/<meta\s+property="og:url"\s+content="(.*?)"/);
    const ogImageMatch = content.match(/<meta\s+property="og:image"\s+content="(.*?)"/);
    const twitterTitleMatch = content.match(/<meta\s+name="twitter:title"\s+content="(.*?)"/);
    const twitterDescMatch = content.match(/<meta\s+name="twitter:description"\s+content="(.*?)"/);
    const twitterImageMatch = content.match(/<meta\s+name="twitter:image"\s+content="(.*?)"/);
    const bodyTagMatch = content.match(/<body[^>]*>/);
    
    // Extrai conteúdo principal (entre </header> e <footer>)
    const headerEnd = content.indexOf('</header>');
    const footerStart = content.indexOf('<footer');
    const mainContent = headerEnd > 0 && footerStart > 0 
      ? content.substring(headerEnd + '</header>'.length, footerStart).trim()
      : content.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[0] || '<main></main>';

    // Monta o novo HTML com placeholders
    const newHtml = `<!doctype html>
<html lang="en">
  <head>
    <!-- HEAD_COMMON -->
    <title>${titleMatch?.[1] || 'RepoCheckAI'}</title>
    <meta
      name="description"
      content="${descMatch?.[1] || ''}"
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${canonicalMatch?.[1] || ''}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${ogTitleMatch?.[1] || ''}" />
    <meta
      property="og:description"
      content="${ogDescMatch?.[1] || ''}"
    />
    <meta property="og:url" content="${ogUrlMatch?.[1] || ''}" />
    <meta property="og:image" content="${ogImageMatch?.[1] || ''}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${twitterTitleMatch?.[1] || ''}" />
    <meta
      name="twitter:description"
      content="${twitterDescMatch?.[1] || ''}"
    />
    <meta name="twitter:image" content="${twitterImageMatch?.[1] || ''}" />
  </head>
  ${bodyTagMatch?.[0] || '<body>'}
    <!-- HEADER -->

${mainContent}

    <!-- FOOTER -->
  </body>
</html>
`;

    writeFileSync(destPath, newHtml, 'utf-8');
    console.log(`✓ ${filename}`);
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`);
  }
}

console.log(`\n✅ Migração completa! Arquivos em ${SRC_DIR}/`);
console.log(`\n📝 Próximos passos:`);
console.log(`   1. npm install -D vite`);
console.log(`   2. npm run dev:site  (para testar)`);
console.log(`   3. npm run build:site (para gerar site/)`);
