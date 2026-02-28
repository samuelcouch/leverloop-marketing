# Styles & Theming

## Tailwind CSS v4

Tailwind is configured via the **Vite plugin** in `astro.config.mjs` — NOT PostCSS. Do not add Tailwind to a PostCSS config.

## Theme Tokens

All semantic color tokens are defined in `global.css` under `@theme {}`. Always use these tokens in components — **never raw hex values or default Tailwind palette colors**.

| Group | Tokens |
|-------|--------|
| Text | `heading`, `body`, `muted` |
| Surfaces | `surface`, `subtle`, `raised`, `warm` |
| Borders | `edge`, `edge-light`, `divider` |
| Brand | `accent`, `accent-hover`, `accent-soft` |
| Dark UI | `ink`, `ink-hover` |
| Success | `success`, `success-soft`, `success-dark` |
| Warning | `warning-soft`, `warning-dark` |
| Danger | `danger`, `danger-soft` |

## Typography

- **Headings/display:** Bricolage Grotesque via the `.font-display` CSS class (defined in `Layout.astro`).
- **Body text:** Plus Jakarta Sans, set on `<body>` in `Layout.astro`.

## Article Prose

The `.article-prose` class in `global.css` styles all long-form blog/article content: `h2`, `h3`, `p`, `strong`, `a`, lists, blockquotes, code/pre, tables, images, figures, and `hr`. When editing these styles, maintain visual consistency with the existing typographic scale.
