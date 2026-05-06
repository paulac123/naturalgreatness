# Natural Greatness 🌿

Tienda online de productos naturales construida con React, TypeScript y Vite.

## Tecnologías

- **React** 19.2.4 — Framework UI
- **TypeScript** — Tipado estático
- **Vite** 8.0.4 — Build tool
- **Tailwind CSS** 4.2.2 — Estilos
- **ESLint** 9.39.4 — Linting

## Estructura

```
src/
├── components/     # Componentes React
├── services/       # Servicios API
├── types/          # Definiciones TypeScript
└── utils/          # Utilidades
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilar producción |
| `npm run lint` | Verificar código |
| `npm run preview` | Vista previa |

## Instalación

```bash
npm install
npm run dev
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
