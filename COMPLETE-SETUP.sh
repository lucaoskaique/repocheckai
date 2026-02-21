#!/bin/bash

# Script para finalizar setup do Vite
# Execute este script na raiz do projeto: bash COMPLETE-SETUP.sh

set -e

echo "🚀 Finalizando setup Vite para RepoCheckAI..."
echo ""

# 1. Instalar Vite
echo "📦 1/4: Instalando Vite..."
npm install -D vite
echo "✓ Vite instalado!"
echo ""

# 2. Migrar HTMLs
echo "🔄 2/4: Migrando HTMLs para site-src/..."
npm run migrate:site
echo "✓ HTMLs migrados!"
echo ""

# 3. Testar build
echo "🏗️  3/4: Testando build..."
npm run build:site
echo "✓ Build completado!"
echo ""

# 4. Verificar arquivos gerados
echo "🔍 4/4: Verificando arquivos gerados..."
ls -lh site/*.html | head -n 5
echo ""

echo "✅ Setup completo!"
echo ""
echo "📝 Próximos passos:"
echo "   • npm run dev:site       (dev server com hot-reload)"
echo "   • npm run build:site     (build para produção)"
echo "   • npm run preview:site   (preview do build)"
echo ""
echo "📚 Documentação:"
echo "   • VITE-SETUP-GUIDE.md    (instruções completas)"
echo "   • site-src/README.md     (guia de uso)"
echo ""
