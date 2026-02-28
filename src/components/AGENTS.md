# Components

- All interactive components are React (`.tsx`). Astro components (`.astro`) are only used for pages and layouts — never in this directory.
- UI primitives live in `ui/` and are barrel-exported from `ui/index.ts`. Section-level components go in their domain folder (`landing/`, `features/`, `blog/`).
- Compose page sections using `Section` + `SectionHeader` for consistent spacing and layout.
- No hardcoded content in components — import all copy and configuration from `src/data/*.ts`.
- This is a template. Keep components generic so the site can be re-skinned by swapping data files, theme colors, and copy. Avoid product-specific logic in reusable components.
