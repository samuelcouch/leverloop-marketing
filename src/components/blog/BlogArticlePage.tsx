import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import type { BlogArticle, BlogPost, FAQ } from '../../data/blog';
import { posts } from '../../data/blog';

/* Breadcrumbs */

function Breadcrumbs({ category }: { category: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-content-tertiary">
        <li>
          <a href="/" className="hover:text-content-primary transition-colors">Home</a>
        </li>
        <li aria-hidden="true" className="text-border-neutral">›</li>
        <li>
          <a href="/blog" className="hover:text-content-primary transition-colors">Blog</a>
        </li>
        <li aria-hidden="true" className="text-border-neutral">›</li>
        <li>
          <span className="text-content-secondary">{category}</span>
        </li>
      </ol>
    </nav>
  );
}

/* Article Hero */

function ArticleHero({ article }: { article: BlogArticle }) {
  return (
    <header className="pt-28 pb-6 lg:pt-36 lg:pb-8 relative overflow-hidden hero-radial">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <Breadcrumbs category={article.category} />

        <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-content-primary">
          {article.title}
        </h1>

        <p className="mt-5 text-lg text-content-secondary leading-relaxed max-w-2xl">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 text-sm text-content-tertiary mt-6">
          <time dateTime={article.publishedISO}>{article.date}</time>
          <span>·</span>
          <span>{article.readTime}</span>
          {article.lastUpdated && (
            <>
              <span>·</span>
              <span>Updated {article.lastUpdated}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

/* Quick Answer */

function QuickAnswer({ answer }: { answer: string }) {
  return (
    <div className="rounded-2xl border border-sentiment-positive/35 bg-sentiment-positive/12 p-6 sm:p-8 mb-8">
      <h2 className="font-display text-lg font-bold text-content-primary mb-3">
        Quick answer
      </h2>
      <p className="text-sm text-content-secondary leading-relaxed">{answer}</p>
    </div>
  );
}

/* Key Takeaways */

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-secondary-bright-blue/60 bg-secondary-bright-blue/18 p-6 sm:p-8 mb-8">
      <h2 className="font-display text-lg font-bold text-content-primary mb-4">
        Key takeaways
      </h2>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-content-secondary leading-relaxed">
            <span className="w-5 h-5 rounded-full pair-bg-forest-green flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Who This Is For */

function WhoIsThisFor({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-border-neutral bg-background-neutral p-6 sm:p-8 mb-12">
      <h2 className="font-display text-lg font-bold text-content-primary mb-4">
        Who this is for
      </h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-content-secondary leading-relaxed">
            <span className="text-content-link mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* FAQ Section */

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-neutral last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start justify-between gap-4 w-full py-5 text-left"
      >
        <h3 className="font-display text-base font-semibold text-content-primary leading-snug">
          {faq.question}
        </h3>
        <span className="text-content-tertiary shrink-0 mt-0.5">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-content-secondary leading-relaxed -mt-1">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

function FAQSection({ items }: { items: FAQ[] }) {
  return (
    <section className="mt-16 pt-10 border-t border-border-neutral">
      <h2 className="font-display text-xl font-bold text-content-primary mb-6">
        Frequently asked questions
      </h2>
      <div className="rounded-2xl border border-border-neutral bg-background-neutral p-6 sm:p-8">
        {items.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}

/* Table of Contents */

function TableOfContents({
  sections,
  activeId,
}: {
  sections: BlogArticle['sections'];
  activeId: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav aria-label="Table of contents" className="hidden xl:block">
        <div className="sticky top-28">
          <p className="text-xs font-semibold text-content-tertiary uppercase tracking-wider mb-4">
            On this page
          </p>
          <ul className="space-y-1 border-l border-border-neutral">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={[
                    'block pl-4 py-1.5 text-sm transition-colors border-l-2 -ml-px',
                    activeId === s.id
                      ? 'border-content-link text-content-link font-medium'
                      : 'border-transparent text-content-tertiary hover:text-content-primary hover:border-border-neutral',
                  ].join(' ')}
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile: collapsible */}
      <div className="xl:hidden mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full rounded-xl border border-border-neutral bg-background-neutral px-4 py-3 text-sm font-medium text-content-primary"
        >
          On this page
          <ChevronDown
            size={16}
            className={`text-content-tertiary transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {mobileOpen && (
          <ul className="mt-2 rounded-xl border border-border-neutral bg-background-neutral p-3 space-y-0.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-content-secondary hover:text-content-primary hover:bg-background-elevated rounded-lg transition-colors"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

/* Author Card */

function AuthorCard({ author }: { author: BlogArticle['authorDetail'] }) {
  return (
    <div className="mt-16 pt-10 border-t border-border-neutral">
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-full pair-bg-bright-blue flex items-center justify-center font-semibold text-lg shrink-0">
          {author.avatar}
        </div>
        <div>
          <p className="text-xs font-semibold text-content-tertiary uppercase tracking-wider mb-1">
            Written by
          </p>
          <h3 className="font-display text-lg font-bold text-content-primary">
            {author.name}
          </h3>
          <p className="text-sm text-content-tertiary mt-0.5">{author.role}</p>
          <p className="text-sm text-content-secondary leading-relaxed mt-3 max-w-lg">
            {author.bio}
          </p>
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-content-link mt-3 hover:text-interactive-primary transition-colors"
            >
              Connect on LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* Newsletter CTA */

function NewsletterCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="rounded-3xl bg-background-neutral p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-content-primary">
            Get articles like this in your inbox
          </h2>
          <p className="text-content-secondary mt-3 max-w-lg mx-auto">
            Product updates, engineering deep-dives, and practical guides - delivered
            every two weeks. No spam, unsubscribe anytime.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              required
              className="w-full sm:flex-1 px-4 py-3 rounded-full border border-interactive-secondary bg-background-elevated text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-accent/35 focus:border-interactive-primary transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-interactive-primary text-interactive-contrast text-sm font-semibold hover:bg-interactive-primary/90 transition-colors"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Related Posts */

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border-neutral bg-background-neutral p-6 hover:bg-background-elevated transition-all duration-200"
    >
      <div>
        <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider pair-bg-forest-green mb-3">
          {post.category}
        </span>
        <h3 className="font-display font-bold text-content-primary text-lg leading-snug group-hover:text-content-link transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-neutral">
        <p className="text-xs text-content-tertiary">
          {post.author.name}
          <span className="mx-1">·</span>
          {post.readTime}
        </p>
        <div className="text-content-tertiary group-hover:text-content-primary transition-colors">
          <ArrowRight size={16} />
        </div>
      </div>
    </a>
  );
}

function RelatedPosts({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  if (related.length === 0) return null;

  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-content-primary text-center mb-10">
          Related articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {related.map((post) => (
            <RelatedPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Main Page Component */

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
  const [activeId, setActiveId] = useState(article.sections[0]?.id ?? '');
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    const headings = articleRef.current?.querySelectorAll('[data-section-heading]');
    headings?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [article.slug]);

  return (
    <>
      <ArticleHero article={article} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)_220px] xl:gap-10">
          {/* Left: TOC */}
          <TableOfContents sections={article.sections} activeId={activeId} />

          {/* Center: article body */}
          <article ref={articleRef} className="max-w-[720px] mx-auto xl:mx-0 w-full">
            {article.quickAnswer && (
              <QuickAnswer answer={article.quickAnswer} />
            )}

            <KeyTakeaways items={article.keyTakeaways} />

            {article.whoIsThisFor && article.whoIsThisFor.length > 0 && (
              <WhoIsThisFor items={article.whoIsThisFor} />
            )}

            {/* Article sections */}
            <div className="article-prose">
              {article.sections.map((section) => (
                <section key={section.id} className="mb-12 last:mb-0 scroll-mt-24">
                  <h2 id={section.id} data-section-heading className="scroll-mt-24">
                    {section.heading}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </section>
              ))}
            </div>

            {article.faq && article.faq.length > 0 && (
              <FAQSection items={article.faq} />
            )}

            <AuthorCard author={article.authorDetail} />
          </article>

          {/* Right: spacer for centering */}
          <div className="hidden xl:block" />
        </div>
      </div>

      {/* Back to blog link */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-content-tertiary hover:text-content-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to blog
        </a>
      </div>

      <RelatedPosts slugs={article.relatedSlugs} />
    </>
  );
}
