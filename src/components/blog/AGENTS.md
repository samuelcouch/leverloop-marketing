# Blog & Article Components

## Article Page Structure

`BlogArticlePage.tsx` renders long-form articles with this structure:
1. **ArticleHero** — breadcrumbs, title, excerpt, date/read-time
2. **QuickAnswer** — short summary box (emerald-themed)
3. **KeyTakeaways** — numbered list in accent-themed box
4. **WhoIsThisFor** — audience targeting box
5. **Table of Contents** — sticky sidebar on desktop (xl:), collapsible on mobile
6. **Article sections** — rendered inside `.article-prose` wrapper via `dangerouslySetInnerHTML`
7. **FAQ accordion** — expandable question/answer pairs
8. **AuthorCard** — avatar, name, role, bio, LinkedIn link
9. **RelatedPosts** — grid of related article cards

## Prose Styling

All long-form article content must be wrapped in the `.article-prose` class (defined in `src/styles/global.css`). This class handles typography for `h2`, `h3`, `p`, lists, blockquotes, code blocks, tables, and images. Do not add inline styles to article HTML content — the prose class covers it.

## Data Sources

- Blog post metadata: `src/data/blog.ts` (`BlogPost`, `Author`, `Category`)
- Full article content: `src/data/articles.ts` (`BlogArticle` with sections, FAQ, key takeaways)
- Article sections contain raw HTML strings in the `content` field.

## Conventions

- FAQ items use an accordion pattern with `ChevronDown`/`ChevronUp` icons.
- Related posts are resolved by slug from the `posts` array.
- The TOC uses `IntersectionObserver` to highlight the active section heading.
