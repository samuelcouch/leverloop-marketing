import { privacyPageData } from '../../data/privacy';

export default function PrivacyPolicyPage() {
  const { lastUpdated, intro, consent, sections } = privacyPageData;

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <header className="mb-12">
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-heading">
            Privacy Policy
          </h1>
          <p className="mt-4 text-body">
            <strong className="text-heading">Last updated:</strong> {lastUpdated}
          </p>
          <p className="mt-6 text-body leading-relaxed">{intro}</p>
          <p className="mt-4 text-body leading-relaxed">{consent}</p>
        </header>

        <nav className="mb-12 rounded-xl border border-edge bg-subtle p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted mb-4">
            Table of Contents
          </h2>
          <ol className="columns-1 sm:columns-2 gap-x-8 text-sm space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="article-prose">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
