# Data Layer

## Pattern

All content and configuration lives here as typed TypeScript exports. Components import from these files — **no hardcoded content in components**.

## Rules

- Define types and export them alongside the data in the same file.
- Do **not** use Astro content collections — this project uses plain TypeScript data files.
- When adding new pages or sections, define their content here first, then import it in the component.

## Existing Data Shapes

- **`blog.ts`** — `BlogPost`, `Author`, `Category`, `ArticleSection`, `FAQ`, `BlogArticle`. Exports `authors`, `categories`, `posts`.
- **`articles/`** — One file per article (`<slug>.ts`), each exporting `default` as `BlogArticle`. The barrel `articles/index.ts` uses `import.meta.glob` to auto-discover all article files and re-exports `articles: Record<string, BlogArticle>`. To add a new article, create a new `<slug>.ts` file — no manual import wiring needed.
- **`features.ts`** — `Feature`, `FeatureDetail`, `ResourceLink`, `FAQItem`. Exports `features` array with slugs, details, mockup types, resources, and FAQs.
