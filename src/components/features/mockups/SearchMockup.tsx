const results = [
  {
    category: 'Deals',
    title: 'Acme Corp Renewal',
    snippet: 'Contract renewal for Acme Corp - Q3 pipeline',
    tone: 'bg-core-forest-green',
  },
  {
    category: 'Deals',
    title: 'Acme Expansion',
    snippet: 'Upsell opportunity for enterprise plan...',
    tone: 'bg-core-forest-green',
  },
  {
    category: 'Contacts',
    title: 'Sarah Chen - Acme',
    snippet: 'VP of Engineering · Last contacted 2 days ago',
    tone: 'bg-secondary-dark-gold',
  },
  {
    category: 'Notes',
    title: 'Acme Onboarding Notes',
    snippet: 'Key stakeholders and integration timeline...',
    tone: 'bg-sentiment-positive',
  },
  {
    category: 'Emails',
    title: 'Re: Acme Pricing',
    snippet: 'Thanks for sending over the updated pricing for...',
    tone: 'bg-secondary-bright-blue',
  },
] as const;

export default function SearchMockup() {
  return (
    <div className="relative w-full max-w-[440px]">
      {/* Search card */}
      <div className="bg-background-elevated rounded-2xl border border-border-neutral shadow-sm overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border-neutral">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-content-tertiary"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[15px] text-content-primary font-medium">Acme</span>
          <span className="w-[2px] h-5 bg-content-link animate-pulse" />
          <button className="ml-auto text-content-tertiary hover:text-content-secondary transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Results */}
        <div className="py-2">
          {results.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 px-5 py-3 hover:bg-background-neutral transition-colors cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${r.tone}`} />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-content-tertiary uppercase tracking-wider">
                    {r.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-content-primary mt-0.5 truncate">
                  {r.title}
                </p>
                <p className="text-sm text-content-secondary mt-0.5 truncate">
                  {r.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card - tilted decorative element */}
      <div className="absolute -right-6 top-8 w-40 h-52 bg-background-elevated rounded-xl shadow-sm border border-border-neutral rotate-6 hidden sm:flex flex-col items-center justify-center p-4 z-[-1]">
        <div className="w-full h-20 rounded-lg bg-gradient-to-br from-secondary-bright-blue via-secondary-bright-pink to-core-bright-green mb-3" />
        <div className="w-full space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-background-neutral" />
          <div className="h-2 w-1/2 rounded bg-background-neutral" />
          <div className="h-2 w-2/3 rounded bg-background-neutral" />
        </div>
      </div>
    </div>
  );
}
