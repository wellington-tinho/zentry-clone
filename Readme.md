
![image](./public/zentry-icon.png)

# Zentry Clone 🚧

Este projeto é um clone da landing page da Zentry, desenvolvido com React, TypeScript, Vite e TailwindCSS.

> 🚧 **Em desenvolvimento** — funcionalidades e estilos ainda podem sofrer alterações.

## � Demonstração

Insira aqui um GIF ou screenshot do projeto em execução.

![Demonstração do Projeto](./public/zentry-icon.png)

Versão live: https://vercel-123.com

## �📦 Estrutura do Projeto (detalhada)

Raiz do repositório:

```
eslint.config.js
index.html
package.json
pnpm-lock.yaml
Readme.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
src/
```

Conteúdo do diretório `public/`:

```
public/
├── zentry-icon.png
└── fonts/
   └── zentry-regular.woff2
```

Conteúdo do diretório `src/` (principais arquivos e pastas):

```
src/
├── App.tsx                   # Componente raiz
├── main.tsx                  # Ponto de entrada do React
├── index.css                 # Estilos globais (Tailwind)
├── vite-env.d.ts             # Tipagens do Vite
├── assets/
│   ├── zentry-symbol-white.png
│   ├── audio/
│   │   ├── music_loop_1.mp3
│   │   └── music_main.mp3
│   ├── images/
│   │   ├── custom-home-intro-desktop.webp
│   │   └── custom-home-intro.webp
│   └── video/
│       ├── hero-cut-1.mp4
│       └── radiant_desktop_homepage_v9.mp4
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

## 📄 Licença

Uso educacional. Este projeto não tem vínculo oficial com a Zentry.

---

Desenvolvido por [Wellington](https://github.com/wellington-tinho)
