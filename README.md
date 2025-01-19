
# 🚀 React + TypeScript + Vite Starter

Welcome to the **React + TypeScript + Vite** Starter! This template provides a blazing-fast development experience with **Vite**, complete with **React 18**, **TypeScript**, and a robust **ESLint** setup for high-quality code.

---

## ✨ Features

- ⚡ **Vite** – Superfast build tool with HMR (Hot Module Replacement).
- 🛠️ **React 18** – Build interactive user interfaces effortlessly.
- 🔒 **TypeScript** – Type-safe development for fewer bugs.
- ✅ **ESLint** – Configured with:
  - Type-aware linting for accurate error detection.
  - React-specific rules for best practices.
  - Stylistic rules for consistent code formatting.
 
    
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
<div align="center">

#### © 2025 All Right Reserved, Designed By [Ruwi B Dilshani] (https://github.com/ruwibdilshani)

</div>

