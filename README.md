# Isaac Golan — Portfolio

One-page portfolio built with React, Vite, Tailwind CSS, and a Three.js
particle animation. No navigation bar — single scroll from the bento-grid
hero into the experience/projects list.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Three.js for the fluid particle animation
- Outfit (Google Fonts) as the display/body typeface

## Structure

```
src/
  components/
    HeroSection.jsx        bento grid: bio, name, contact, particles, education, photo
    ExperienceSection.jsx  accordion list of roles/projects
    ParticleBackground.jsx Three.js canvas used inside the hero grid
  index.css                Tailwind entry + border-collapse grid helpers
  App.jsx                  layout wrapper (Hero + Experience, nothing else)
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Deploy (Vercel)

This repo includes a `vercel.json` (framework: vite, build: `npm run build`,
output: `dist`). Push to a Git repo and import it in Vercel, or deploy
directly from the CLI:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

No backend/environment variables are required.
