# Christopher Zhang — Portfolio

React + TypeScript portfolio site built with Vite, Material UI, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview locally.

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/` for GitHub Pages deployment.

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and static build
- **Material UI** — responsive layout and components
- **Framer Motion** — hero name animations and scroll reveals
- **React Router** — project detail pages

## Project structure

```
src/
  components/     UI sections and layout
  data/           Portfolio content and project copy
  pages/          Home and project detail routes
  theme.ts        MUI theme (colors from original site)
```

Legacy static HTML files are preserved in `legacy/` for reference.
