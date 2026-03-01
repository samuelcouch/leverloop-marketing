const stages = [
  {
    label: 'Demo booked',
    tone: 'pair-bg-bright-blue',
    amount: '$30K',
    cards: [
      { name: 'Sarah Chen', company: 'Stripe', tone: 'bg-core-forest-green' },
      { name: 'Alex Rivera', company: 'Figma', tone: 'bg-secondary-dark-gold' },
    ],
  },
  {
    label: 'Negotiation',
    tone: 'pair-bg-bright-yellow',
    amount: '$45K',
    cards: [
      { name: 'James Park', company: 'Linear', tone: 'bg-sentiment-positive' },
    ],
  },
  {
    label: 'Closed Won',
    tone: 'pair-bg-bright-green',
    amount: '$82K',
    cards: [
      { name: 'Tom Wright', company: 'Vercel', tone: 'bg-secondary-bright-blue' },
      { name: 'Maria Lopez', company: 'Notion', tone: 'bg-secondary-bright-pink' },
    ],
  },
] as const;

export default function PipelineMockup() {
  return (
    <div className="w-full max-w-[440px] bg-background-elevated rounded-2xl border border-border-neutral shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-neutral">
        <span className="text-sm font-semibold text-content-primary">Sales pipeline</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-content-tertiary bg-background-neutral px-2.5 py-1 rounded-md border border-border-neutral">
            Filter
          </span>
          <span className="text-xs text-content-tertiary bg-background-neutral px-2.5 py-1 rounded-md border border-border-neutral">
            Sort
          </span>
        </div>
      </div>

      {/* Columns */}
      <div className="flex gap-3 p-4 overflow-hidden">
        {stages.map((stage) => (
          <div key={stage.label} className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-3">
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${stage.tone}`}
              >
                {stage.label}
              </span>
              <span className="text-[11px] text-content-tertiary">{stage.amount}</span>
            </div>
            <div className="space-y-2">
              {stage.cards.map((card) => (
                <div
                  key={card.name}
                  className="bg-background-neutral rounded-lg p-2.5 border border-border-neutral"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-base-light text-[9px] font-bold shrink-0 ${card.tone}`}
                    >
                      {card.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-content-primary truncate">
                        {card.name}
                      </p>
                      <p className="text-[10px] text-content-tertiary truncate">
                        {card.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
