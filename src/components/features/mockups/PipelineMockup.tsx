const stages = [
  {
    label: "Demo booked",
    color: "#dbeafe",
    amount: "$30K",
    cards: [
      { name: "Sarah Chen", company: "Stripe", color: "#023e8a" },
      { name: "Alex Rivera", company: "Figma", color: "#f59e0b" },
    ],
  },
  {
    label: "Negotiation",
    color: "#fef3c7",
    amount: "$45K",
    cards: [
      { name: "James Park", company: "Linear", color: "#10b981" },
    ],
  },
  {
    label: "Closed Won",
    color: "#d1fae5",
    amount: "$82K",
    cards: [
      { name: "Tom Wright", company: "Vercel", color: "#3b82f6" },
      { name: "Maria Lopez", company: "Notion", color: "#ec4899" },
    ],
  },
];

export default function PipelineMockup() {
  return (
    <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#f1f5f9]">
        <span className="text-sm font-semibold text-[#111827]">Sales pipeline</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#9ca3af] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#f1f5f9]">
            Filter
          </span>
          <span className="text-xs text-[#9ca3af] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#f1f5f9]">
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
                className="text-[11px] font-semibold text-[#111827] px-2 py-0.5 rounded-md"
                style={{ backgroundColor: stage.color }}
              >
                {stage.label}
              </span>
              <span className="text-[11px] text-[#9ca3af]">{stage.amount}</span>
            </div>
            <div className="space-y-2">
              {stage.cards.map((card) => (
                <div
                  key={card.name}
                  className="bg-[#f9fafb] rounded-lg p-2.5 border border-[#f1f5f9]"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#111827] truncate">
                        {card.name}
                      </p>
                      <p className="text-[10px] text-[#9ca3af] truncate">
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
