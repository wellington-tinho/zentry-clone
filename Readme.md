
# <img src="./public/zentry-icon.png" width="24" height="24" alt="Zentry Icon" /> Zentry Clone 

Este projeto é um clone da landing page da Zentry, desenvolvido com React, TypeScript, TailwindCSS e GASP.

> 🚧 **Em desenvolvimento** — funcionalidades e estilos ainda podem sofrer alterações.

##  Demonstração

[Veja o vídeo do Zentry Clone](https://portfolio-lake-eta-46.vercel.app/assets/zentry-clone.mp4)

Versão live: https://zentry-clone-olive-one.vercel.app/

## 📦 Estrutura do Projeto (detalhada)

```
src/
├── App.tsx                   # Componente raiz
├── main.tsx                  # Ponto de entrada do React
├── index.css                 # Estilos globais (Tailwind)
├── vite-env.d.ts             # Tipagens do Vite
└── components/
   ├── hero.tsx
   ├── intro.tsx
   ├── navbar.tsx
   ├── productGrid.tsx
   ├── information.tsx
   └── ui/
      ├── accordionScrool.tsx
      ├── animatedText.tsx
      ├── button.tsx
      ├── divWithMouseInteractionEffects.tsx
      └── gridItem.tsx
```

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- GSAP (animações)

## 🛠️ Como rodar o projeto

1. Instale as dependências:

```bash
pnpm install
```

ou

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

3. Abra o navegador em http://localhost:5173

## 🏗️ Scripts úteis

- `dev` — inicia o servidor de desenvolvimento.
- `build` — gera a build de produção.
- `preview` — serve a build de produção localmente.
- `lint` — executa o ESLint.

## 📁 Principais Componentes (descrição)

- `src/components/hero.tsx` — seção hero com animações e vídeo.
- `src/components/intro.tsx` — bloco de introdução com textos animados.
- `src/components/navbar.tsx` — navegação superior responsiva.
- `src/components/productGrid.tsx` — grid de cards/produtos.
- `src/components/information.tsx` — seção com vídeo e detalhes do produto.

## 🎨 Estilos

TailwindCSS com classes utilitárias e customizações em `src/index.css`.

## 🤖 AI Code Review

Este projeto inclui um sistema automatizado de code review usando GitHub Models que roda automaticamente em Pull Requests e commits diretos nos branches `main` e `developer`.

**Funcionalidades:**
- ✅ Análise automática de código a cada alteração
- ✅ Feedback técnico sobre qualidade, bugs e boas práticas
- ✅ Comentários automáticos no PR com timestamp
- ✅ Filtro inteligente de arquivos relevantes

Para mais detalhes sobre configuração e uso, consulte: **[📋 AI Code Review - Documentação Completa](.github/AI-REVIEW-README.md)**

## 📄 Licença

Uso educacional. Este projeto não tem vínculo oficial com a Zentry.

---

Desenvolvido por [Wellington](https://github.com/wellington-tinho)
