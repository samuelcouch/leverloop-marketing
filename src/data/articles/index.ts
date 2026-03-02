import type { BlogArticle } from '../blog';

const modules = import.meta.glob<{ default: BlogArticle }>('./**/*.ts', {
  eager: true,
});

export const articles: Record<string, BlogArticle> = Object.fromEntries(
  Object.entries(modules)
    .filter(([path]) => !path.endsWith('/index.ts'))
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace(/\.ts$/, '');
      return [slug, mod.default];
    }),
);
