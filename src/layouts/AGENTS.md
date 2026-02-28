# Layouts — SEO & Page Shell

## Layout.astro Owns All SEO

`Layout.astro` is the single shared layout. It is responsible for **all** SEO and meta concerns:
- `<title>` and `<meta name="description">`
- Canonical URL (`<link rel="canonical">`)
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`)
- Twitter card meta (`summary_large_image`)
- `articleMeta` prop for blog posts (`article:published_time`, `article:author`, `article:section`)
- JSON-LD structured data via the `jsonLd` prop
- Google Fonts preconnect and stylesheet links

## Props

```ts
interface Props {
  title?: string;
  description?: string;
  jsonLd?: Record<string, unknown>;
  ogType?: string;
  articleMeta?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
  };
}
```

## Rules

- **Never** put SEO meta tags, Open Graph tags, or JSON-LD in components — it all belongs here.
- The `<body>` sets the base font (`Plus Jakarta Sans`) and text color (`text-heading`).
- The `.font-display` class is defined here for Bricolage Grotesque headings.
- Global CSS is imported here via `import '../styles/global.css'`.
