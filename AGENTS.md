# AGENTS.md — LeverLoop Marketing Site

## Project Overview

Marketing website for LeverLoop, a B2B SaaS CRM platform. Built on a reusable Astro template.

## Tech Stack

- **Framework:** Astro 5 (static-first, `.astro` pages + layouts)
- **Interactive components:** React 19 (`.tsx`) via `@astrojs/react`
- **Styling:** Tailwind CSS v4 (via Vite plugin, NOT PostCSS — configured in `astro.config.mjs`)
- **Icons:** `lucide-react`
- **Accessible UI primitives:** `@headlessui/react`
- **Typography:** Bricolage Grotesque (headings/display) + Plus Jakarta Sans (body) via Google Fonts

## Architecture

```
src/
├── pages/          # Astro routes (.astro files only)
├── layouts/        # Layout.astro — single shared layout with SEO props
├── components/
│   ├── ui/         # Reusable primitives (Button, Card, Badge, etc.)
│   ├── landing/    # Homepage sections (Hero, Navbar, Footer, etc.)
│   ├── features/   # Feature detail pages & mockups
│   └── blog/       # Blog index & article components
├── data/           # TypeScript data files (features, articles, blog)
├── styles/         # global.css — Tailwind + custom theme + article prose
└── assets/         # Static assets imported by components
```

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Do NOT

- Install new CSS frameworks or UI libraries without discussion — Tailwind + Headless UI cover all needs.
- Use Astro content collections — this project uses plain TypeScript data files.
