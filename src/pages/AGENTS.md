# Pages & Routing

## Rules

- All pages are `.astro` files. No React (`.tsx`) pages.
- Pages are **thin wrappers** — they import React components from `src/components/` and pass data as props. Logic and UI belong in components, not here.
- Every page uses `Layout.astro` as its layout wrapper, passing SEO props (`title`, `description`, `jsonLd`, `ogType`, `articleMeta`).
- Data is imported from `src/data/*.ts` — never hardcoded in page files.
