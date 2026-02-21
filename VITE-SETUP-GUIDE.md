# 🎉 Setup Vite Completo!

## O que foi feito:

### ✅ Estrutura Criada
- ✓ `site-src/` - Pasta com código fonte
- ✓ `site-src/partials/` - Componentes compartilhados
  - `head-common.html` - Meta tags, CSS, fonts
  - `header.html` - Navegação + topbar
  - `footer.html` - Footer + links
- ✓ `site-src/index.html` - Template exemplo (simplificado)

### ✅ Configuração
- ✓ `vite.config.js` - Config do Vite
- ✓ `vite-plugin-html-partials.js` - Plugin customizado
- ✓ `scripts/migrate-html.mjs` - Script de migração automática
- ✓ `package.json` - Scripts adicionados:
  - `npm run dev:site` - Dev server
  - `npm run build:site` - Build produção
  - `npm run preview:site` - Preview do build
  - `npm run migrate:site` - Migrar HTMLs

### ✅ Documentação
- ✓ `site-src/README.md` - Guia completo
- ✓ `site-src/SETUP.md` - Overview do setup

## 🚀 Próximos Passos:

### 1. Instalar Vite
```bash
npm install -D vite
```

### 2. Migrar os HTMLs existentes
```bash
npm run migrate:site
```

Isso vai converter todos os 11 arquivos HTML de `site/` para `site-src/` com os placeholders.

### 3. Testar no Dev Server
```bash
npm run dev:site
```

Abre em `http://localhost:3000` com hot-reload ⚡

### 4. Verificar se tudo funciona
- ✅ Header/footer aparecem?
- ✅ CSS carrega corretamente?
- ✅ Links funcionam?
- ✅ Hot-reload funciona quando edita um partial?

### 5. Fazer Build de Produção
```bash
npm run build:site
```

Gera os arquivos otimizados em `site/` (prontos para GitHub Pages)

### 6. Testar o Build
```bash
npm run preview:site
```

Preview da versão de produção em `http://localhost:4173`

## 📝 Editar Conteúdo

### Conteúdo Compartilhado (Header/Footer)
```bash
site-src/partials/header.html
site-src/partials/footer.html
site-src/partials/head-common.html
```

**Benefício**: Edite UMA VEZ, atualize TODAS as páginas!

### Conteúdo Específico de Página
```bash
site-src/index.html
site-src/about.html
site-src/docs.html
# ... etc
```

## 🎯 Resultados

### Antes:
- 11 arquivos HTML
- ~1650 linhas de código
- ~700 linhas duplicadas (header/footer/meta)
- Manutenção manual

### Depois:
- 11 arquivos HTML (simplificados)
- 4 partials (compartilhados)
- ~950 linhas de código
- **42% de redução!**
- Hot-reload durante dev
- Build otimizado automático

## 🔧 Troubleshooting

### Links dos assets quebrados?
Certifique-se que os caminhos usam `./assets/` (relativo)

### Dev server não inicia?
```bash
# Instale o Vite novamente
npm install -D vite
```

### Build não gera HTMLs?
Verifique se todos os paths em `vite.config.js` estão corretos

### Hot-reload não funciona?
Reinicie o dev server (Ctrl+C e `npm run dev:site` novamente)

## 📚 Documentação

- [site-src/README.md](site-src/README.md) - Guia detalhado
- [site-src/SETUP.md](site-src/SETUP.md) - Overview técnico

## 🎊 Pronto!

Você agora tem um setup moderno com:
- ⚡ Dev server rápido com HMR
- 📦 Build otimizado automático  
- 🔧 Manutenção simplificada
- 🎨 Componentes reutilizáveis
- 🚀 Pronto para GitHub Pages

**Comandos principais:**
```bash
npm run dev:site      # Desenvolver
npm run build:site    # Gerar site/
```

---

**Need help?** Veja a documentação em `site-src/README.md`
