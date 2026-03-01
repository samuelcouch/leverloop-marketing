import { useState, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui';
import Select from '../ui/Select';
import { posts, categories, type Category } from '../../data/blog';

const POSTS_PER_PAGE = 6;

function BlogRow({ post }: { post: (typeof posts)[number] }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex items-start justify-between gap-4 py-6 border-b border-border-neutral last:border-b-0"
    >
      <div className="flex-1 min-w-0">
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider pair-bg-forest-green mb-2">
          {post.category}
        </span>
        <h3 className="font-display font-bold text-content-primary text-lg leading-snug group-hover:text-content-link transition-colors">
          {post.title}
        </h3>
        <p className="mt-1.5 text-sm text-content-tertiary">
          {post.author.name}
          <span className="mx-1.5">·</span>
          {post.date}
          <span className="mx-1.5">·</span>
          {post.readTime}
        </p>
      </div>
      <div className="shrink-0 mt-6 text-content-tertiary group-hover:text-content-primary transition-colors">
        <ArrowRight size={20} />
      </div>
    </a>
  );
}

function BlogCard({ post }: { post: (typeof posts)[number] }) {
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
          {post.date}
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

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  function selectCategory(cat: Category) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <Section padding="default" maxWidth="xl" className="pt-24 lg:pt-28">
      <SectionHeader
        heading="Blog"
        subheading="Product updates, engineering deep-dives, and practical guides from the LeverLoop team."
        headingSize="lg"
      />

      {/* Mobile: native select */}
      <div className="mt-8 sm:hidden">
        <Select
          value={activeCategory}
          onChange={(e) => selectCategory(e.target.value as Category)}
          options={categories.map((c) => ({
            label: c === 'All' ? 'All categories' : c,
            value: c,
          }))}
        />
      </div>

      {/* Desktop: inline text filters */}
      <div className="hidden sm:flex mt-10 flex-wrap items-center justify-center gap-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => selectCategory(cat)}
            className={[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === cat
                ? 'border border-interactive-primary text-interactive-primary'
                : 'text-content-tertiary hover:text-content-primary',
            ].join(' ')}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider (mobile only) */}
      <div className="mt-6 sm:mt-8 border-t border-border-neutral sm:border-0" />

      {/* Mobile: list */}
      <div className="sm:hidden divide-y divide-border-neutral">
        {paginated.map((post) => (
          <BlogRow key={post.slug} post={post} />
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {paginated.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Empty state */}
      {paginated.length === 0 && (
        <p className="text-center text-content-secondary mt-16">
          No posts in this category yet.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-10 sm:mt-12 flex items-center justify-center gap-2"
        >
          <button
            aria-label="Previous page"
            disabled={safePage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border-neutral bg-background-elevated flex items-center justify-center text-content-tertiary hover:text-content-primary hover:border-interactive-primary transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Mobile: "Page X of Y" — Desktop: numbered buttons */}
          <span className="sm:hidden text-sm font-medium text-content-secondary px-3">
            Page {safePage} of {totalPages}
          </span>
          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                aria-current={page === safePage ? 'page' : undefined}
                className={[
                  'w-10 h-10 rounded-full text-sm font-semibold transition-colors',
                  page === safePage
                    ? 'pair-bg-forest-green'
                    : 'text-content-tertiary hover:text-content-primary',
                ].join(' ')}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            aria-label="Next page"
            disabled={safePage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border-neutral bg-background-elevated flex items-center justify-center text-content-tertiary hover:text-content-primary hover:border-interactive-primary transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronRight size={16} />
          </button>
        </nav>
      )}
    </Section>
  );
}
