const tasks = [
  {
    icon: '✉️',
    title: 'Follow-up drafted',
    detail: 'Sent personalized email to Sarah Chen',
    time: '2 min ago',
    tone: 'pair-bg-bright-blue',
  },
  {
    icon: '✨',
    title: 'Contact enriched',
    detail: 'Added LinkedIn, title, and company info for 3 leads',
    time: '8 min ago',
    tone: 'pair-bg-bright-pink',
  },
  {
    icon: '📊',
    title: 'Deal insight',
    detail: 'Acme Corp engagement is up 40% this week',
    time: '15 min ago',
    tone: 'pair-bg-bright-green',
  },
  {
    icon: '🔔',
    title: 'Meeting reminder',
    detail: 'Product demo with James Park in 1 hour',
    time: '25 min ago',
    tone: 'pair-bg-bright-yellow',
  },
] as const;

export default function AssistantsMockup() {
  return (
    <div className="w-full max-w-[440px] bg-background-elevated rounded-2xl border border-border-neutral shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border-neutral">
        <div className="w-8 h-8 rounded-full pair-bg-forest-green flex items-center justify-center text-sm">
          🤖
        </div>
        <div>
          <p className="text-sm font-semibold text-content-primary">LeverLoop Assistant</p>
          <p className="text-[11px] text-content-tertiary">Working in the background</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sentiment-positive animate-pulse" />
          <span className="text-[11px] text-sentiment-positive font-medium">Active</span>
        </div>
      </div>

      {/* Task list */}
      <div className="py-1">
        {tasks.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 px-5 py-3.5 hover:bg-background-neutral transition-colors"
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${t.tone}`}
            >
              {t.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-content-primary">{t.title}</p>
              <p className="text-sm text-content-secondary mt-0.5 truncate">{t.detail}</p>
            </div>
            <span className="text-[11px] text-content-tertiary shrink-0 mt-0.5">
              {t.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
