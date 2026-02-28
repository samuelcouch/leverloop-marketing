# Data Layer

## Pattern

All content and configuration lives here as typed TypeScript exports. Components import from these files — **no hardcoded content in components**.

## Rules

- Define types and export them alongside the data in the same file.
- Do **not** use Astro content collections — this project uses plain TypeScript data files.
- When adding new pages or sections, define their content here first, then import it in the component.

## Existing Data Shapes

- **`blog.ts`** — `BlogPost`, `Author`, `Category`, `ArticleSection`, `FAQ`, `BlogArticle`. Exports `authors`, `categories`, `posts`.
- **`articles.ts`** — `Record<string, BlogArticle>` with full article content (sections as HTML strings, FAQ, key takeaways, related slugs). Imports types and data from `blog.ts`.
- **`features.ts`** — `Feature`, `FeatureDetail`, `ResourceLink`, `FAQItem`. Exports `features` array with slugs, details, mockup types, resources, and FAQs.
