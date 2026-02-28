const results = [
  {
    category: "Deals",
    title: "Acme Corp Renewal",
    snippet: "Contract renewal for Acme Corp — Q3 pipeline",
    color: "#6366f1",
  },
  {
    category: "Deals",
    title: "Acme Expansion",
    snippet: "Upsell opportunity for enterprise plan…",
    color: "#6366f1",
  },
  {
    category: "Contacts",
    title: "Sarah Chen — Acme",
    snippet: "VP of Engineering · Last contacted 2 days ago",
    color: "#f59e0b",
  },
  {
    category: "Notes",
    title: "Acme Onboarding Notes",
    snippet: "Key stakeholders and integration timeline…",
    color: "#10b981",
  },
  {
    category: "Emails",
    title: "Re: Acme Pricing",
    snippet: "Thanks for sending over the updated pricing for…",
    color: "#3b82f6",
  },
];

export default function SearchMockup() {
  return (
    <div className="relative w-full max-w-[440px]">
      {/* Search card */}
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#f1f5f9]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-[15px] text-[#111827] font-medium">Acme</span>
          <span className="w-[2px] h-5 bg-[#6366f1] animate-pulse" />
          <button className="ml-auto text-[#9ca3af] hover:text-[#6b7280] transition-colors">
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
              className="flex items-start gap-3.5 px-5 py-3 hover:bg-[#f9fafb] transition-colors cursor-pointer"
            >
              <div
                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: r.color }}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-wider">
                    {r.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#111827] mt-0.5 truncate">
                  {r.title}
                </p>
                <p className="text-sm text-[#6b7280] mt-0.5 truncate">
                  {r.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card – tilted decorative element */}
      <div className="absolute -right-6 top-8 w-40 h-52 bg-white rounded-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.10)] border border-[#f1f5f9] rotate-6 hidden sm:flex flex-col items-center justify-center p-4 z-[-1]">
        <div className="w-full h-20 rounded-lg bg-gradient-to-br from-[#e0e7ff] via-[#ede9fe] to-[#fae8ff] mb-3" />
        <div className="w-full space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-[#f1f5f9]" />
          <div className="h-2 w-1/2 rounded bg-[#f1f5f9]" />
          <div className="h-2 w-2/3 rounded bg-[#f1f5f9]" />
        </div>
      </div>
    </div>
  );
}
