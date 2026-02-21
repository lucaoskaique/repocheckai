# Site Source

## Setup Vite para Gerenciamento de HTMLs

Este projeto agora usa **Vite** para gerenciar os arquivos HTML do site, eliminando ~700 linhas de código duplicado.

### 🎯 O que mudou?

**Antes:**
- 11 arquivos HTML com header/footer/meta tags duplicados
- ~1650 linhas de código
- Manutenção manual de cada arquivo

**Agora:**
- Partials compartilhados (`site-src/partials/`)
- ~950 linhas de código (42% de redução!)
- Edite uma vez, atualize tudo

### 📁 Estrutura

```
site-src/          # Código fonte (editável)
├── partials/      # Componentes compartilhados
│   ├── head-common.html
│   ├── header.html
│   └── footer.html
├── index.html
├── about.html
└── ...

site/              # Build output (GitHub Pages)
├── assets/        # CSS, JS, imagens
├── index.html     # Gerado pelo Vite
└── ...
```

### 🚀 Comandos

```bash
# Dev server com hot-reload
npm run dev:site

# Build para produção (gera site/)
npm run build:site

# Preview do build
npm run preview:site

# Migrar HTMLs existentes (primeira vez)
npm run migrate:site
```

### ✏️ Como Editar o Site

**1. Editar conteúdo compartilhado (header, footer):**
```bash
site-src/partials/header.html   # Atualiza todas as páginas
site-src/partials/footer.html
```

**2. Editar página específica:**
```bash
site-src/index.html
site-src/about.html
```

**3. Ver as mudanças em tempo real:**
```bash
npm run dev:site
# Abre http://localhost:3000
```

**4. Gerar site final:**
```bash
npm run build:site
# Atualiza site/ para deploy
```

### 📚 Documentação Completa

Veja [site-src/README.md](site-src/README.md) para detalhes completos.

### 🔄 GitHub Pages Deploy

O GitHub Actions deve continuar fazendo deploy da pasta `site/` normalmente. Apenas rode `npm run build:site` antes de commit/push.

---

**Documentação gerada durante refatoração para setup Vite**
