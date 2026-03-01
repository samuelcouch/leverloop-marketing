const tasks = [
  {
    icon: "✉️",
    title: "Follow-up drafted",
    detail: "Sent personalized email to Sarah Chen",
    time: "2 min ago",
    color: "#dbeafe",
  },
  {
    icon: "✨",
    title: "Contact enriched",
    detail: "Added LinkedIn, title, and company info for 3 leads",
    time: "8 min ago",
    color: "#ede9fe",
  },
  {
    icon: "📊",
    title: "Deal insight",
    detail: "Acme Corp engagement is up 40% this week",
    time: "15 min ago",
    color: "#d1fae5",
  },
  {
    icon: "🔔",
    title: "Meeting reminder",
    detail: "Product demo with James Park in 1 hour",
    time: "25 min ago",
    color: "#fef3c7",
  },
];

export default function AssistantsMockup() {
  return (
    <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#f1f5f9]">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#023e8a] to-[#0353a4] flex items-center justify-center text-white text-sm">
          🤖
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111827]">LeverLoop Assistant</p>
          <p className="text-[11px] text-[#9ca3af]">Working in the background</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-[11px] text-[#10b981] font-medium">Active</span>
        </div>
      </div>

      {/* Task list */}
      <div className="py-1">
        {tasks.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 px-5 py-3.5 hover:bg-[#f9fafb] transition-colors"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
              style={{ backgroundColor: t.color }}
            >
              {t.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#111827]">{t.title}</p>
              <p className="text-sm text-[#6b7280] mt-0.5 truncate">{t.detail}</p>
            </div>
            <span className="text-[11px] text-[#9ca3af] shrink-0 mt-0.5">
              {t.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
