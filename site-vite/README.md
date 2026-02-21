# Site Source (Vite Setup)

Este diretório contém os arquivos fonte do site RepoCheckAI que são processados pelo Vite e geram os arquivos finais na pasta `site/`.

## 📁 Estrutura

```
site-vite/
├── partials/           # Componentes compartilhados
│   ├── head-common.html   # Meta tags, links CSS/fonts
│   ├── header.html        # Header + navegação
│   ├── footer.html        # Footer + links
│   └── scripts.html       # Scripts JS
├── index.html          # Página principal
├── about.html          # Sobre
└── ...                 # Outras páginas
```

## 🚀 Comandos

### Desenvolvimento Local
```bash
npm run dev:site
```
Abre um servidor local em `http://localhost:3000` com hot-reload ⚡

### Build para Produção
```bash
npm run build:site
```
Gera os arquivos otimizados na pasta `site/` (usada pelo GitHub Pages)

### Preview do Build
```bash
npm run preview:site
```
Testa a versão de produção localmente

### Migrar HTMLs da pasta site/
```bash
npm run migrate:site
```
Converte HTMLs existentes para o formato com placeholders

## ✏️ Como Editar

### 1. Editar Conteúdo Compartilhado

**Header, Footer, etc.** → Edite os arquivos em `partials/`

Todas as páginas serão atualizadas automaticamente!

### 2. Editar Conteúdo de Página Específica

**Conteúdo único** → Edite o HTML correspondente

Por exemplo, para editar a homepage:
```bash
site-vite/index.html
```

### 3. Adicionar Nova Página

1. Crie o arquivo HTML em `site-vite/nova-pagina.html`
2. Use os placeholders:
   ```html
   <!doctype html>
   <html>
     <head>
       <!-- HEAD_COMMON -->
       <title>Título da Página</title>
       <meta name="description" content="..."/>
       <!-- Outras meta tags -->
     </head>
     <body>
       <!-- HEADER -->
       
       <main>
         <!-- Seu conteúdo aqui -->
       </main>
       
       <!-- FOOTER -->
     </body>
   </html>
   ```
3. Adicione a página no `vite.config.js`:
   ```js
   rollupOptions: {
     input: {
       // ...
       novaPagina: resolve(__dirname, 'site-vite/nova-pagina.html'),
     }
   }
   ```

## 🔧 Como Funciona

O plugin customizado `vite-plugin-html-partials.js` substitui automaticamente os placeholders:

- `<!-- HEAD_COMMON -->` → Conteúdo de `partials/head-common.html`
- `<!-- HEADER -->` → Conteúdo de `partials/header.html`
- `<!-- FOOTER -->` → Conteúdo de `partials/footer.html`
- `<!-- SCRIPTS -->` → Conteúdo de `partials/scripts.html`

## 📦 Deploy (GitHub Pages)

O GitHub Actions já deve estar configurado para fazer deploy da pasta `site/`.

Após o build (`npm run build:site`), os arquivos gerados em `site/` são servidos pelo GitHub Pages.

## 🎯 Benefícios

✅ **Menos duplicação**: ~700 linhas de código duplicado eliminadas  
✅ **Manutenção fácil**: Edite header/footer uma vez, atualize tudo  
✅ **Dev Experience**: Hot-reload instantâneo durante desenvolvimento  
✅ **SEO**: HTML estático gerado (sem JavaScript no runtime)  
✅ **Performance**: Assets otimizados automaticamente pelo Vite  

## 🐛 Troubleshooting

### Build falha com erro de módulo
Certifique-se de ter o Vite instalado:
```bash
npm install -D vite
```

### Assets não carregam
Verifique se os caminhos relativos estão corretos (`./assets/...`)

### Hot-reload não funciona
Reinicie o dev server: `Ctrl+C` e `npm run dev:site` novamente
