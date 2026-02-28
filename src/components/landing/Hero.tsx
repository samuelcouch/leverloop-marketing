import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { Badge } from '../ui/Badge';

export default function Hero() {
  return (
    <section className="pt-24 pb-0 lg:pt-28 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #f5f0e8 0%, #faf7f2 40%, #ffffff 80%)' }}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        {/* Pill badge */}
        <a href="#assistants" className="mb-6 hover:bg-subtle transition-colors">
          <Badge variant="pill" className="gap-2">
            <span className="flex -space-x-1 text-base">
              <span>🤖</span>
              <span>😊</span>
              <span>🤩</span>
            </span>
            Introducing LeverLoop Assistants
            <span className="text-muted">›</span>
          </Badge>
        </a>

        {/* Headline */}
        <h1 className="font-display text-[3.25rem] sm:text-[4rem] lg:text-[4.75rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-heading">
          The CRM that works for you
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base lg:text-lg text-body max-w-2xl mx-auto leading-relaxed">
          LeverLoop captures the full context of your relationships in one
          beautifully simple CRM. AI Assistants learn from this data to automate
          busywork.
        </p>

        {/* Signup form — stacked with labels */}
        <form className="mt-6 max-w-md mx-auto text-left">
          <Input
            label="What's your professional email?"
            type="email"
            placeholder="you@company.com"
            className="mb-4"
          />

          <Select
            label="How many teammates will be using LeverLoop?"
            placeholder="Select option"
            options={[
              { label: "1–2", value: "1-2" },
              { label: "3–9", value: "3-9" },
              { label: "10–49", value: "10-49" },
              { label: "50+", value: "50+" },
            ]}
            className="mb-4"
          />

          <Button type="submit" size="lg" shape="pill" arrow>Get started</Button>
        </form>
      </div>

      {/* Product Mock */}
      <div className="mt-10 max-w-6xl mx-auto px-5 lg:px-8 relative">
        <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[#e5e7eb] bg-white shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.12)] h-[340px] sm:h-[400px] lg:h-[460px]">
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-56 border-r border-[#f1f5f9] bg-[#fafafa] p-4 shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-[#6366f1] flex items-center justify-center text-white text-[10px] font-bold">
                  L
                </div>
                <span className="text-sm font-semibold text-[#111827]">
                  Acme Corp
                </span>
              </div>
              <nav className="flex flex-col gap-0.5">
                {[
                  { icon: "🔍", label: "Search" },
                  { icon: "🔔", label: "Notifications" },
                  { icon: "✉️", label: "Messages" },
                  { icon: "📊", label: "Dashboard" },
                  { icon: "🤖", label: "Assistants" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm ${
                      item.label === "Dashboard"
                        ? "bg-white text-[#111827] font-medium shadow-sm border border-[#f1f5f9]"
                        : "text-[#6b7280]"
                    }`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </nav>
              <div className="mt-auto pt-4 border-t border-[#f1f5f9]">
                <div className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider mb-2">
                  Groups
                </div>
                {["All contacts", "Hot leads", "Partners"].map((g) => (
                  <div
                    key={g}
                    className="text-sm text-[#6b7280] py-1.5 px-2.5"
                  >
                    {g}
                  </div>
                ))}
              </div>
            </div>

            {/* Main pipeline view */}
            <div className="flex-1 flex flex-col min-w-0">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#f1f5f9]">
                <h3 className="text-sm font-semibold text-[#111827]">
                  Sales pipeline
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#9ca3af] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#f1f5f9]">
                    Filter
                  </span>
                  <span className="text-xs text-[#9ca3af] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#f1f5f9]">
                    Sort
                  </span>
                </div>
              </div>

              <div className="flex-1 flex gap-4 p-4 overflow-hidden">
                {/* Column: Demo booked */}
                <div className="flex-1 min-w-[160px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#111827] bg-[#dbeafe] px-2.5 py-1 rounded-md">
                      Demo booked
                    </span>
                    <span className="text-xs text-[#9ca3af]">$30K</span>
                  </div>
                  <div className="space-y-2.5">
                    <PipelineCard
                      name="Sarah Chen"
                      company="Stripe"
                      email="sarah@stripe.com"
                      color="#6366f1"
                    />
                    <PipelineCard
                      name="Alex Rivera"
                      company="Figma"
                      email="alex@figma.com"
                      color="#f59e0b"
                    />
                  </div>
                </div>

                {/* Column: Active Discussion */}
                <div className="flex-1 min-w-[160px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#111827] bg-[#fef3c7] px-2.5 py-1 rounded-md">
                      Active Discussion
                    </span>
                    <span className="text-xs text-[#9ca3af]">$45K</span>
                  </div>
                  <div className="space-y-2.5">
                    <PipelineCard
                      name="James Park"
                      company="Linear"
                      email="james@linear.app"
                      color="#10b981"
                    />
                    <PipelineCard
                      name="Maria Lopez"
                      company="Notion"
                      email="maria@notion.so"
                      color="#ec4899"
                    />
                  </div>
                </div>

                {/* Column: Closed Won */}
                <div className="hidden md:block flex-1 min-w-[160px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#111827] bg-[#d1fae5] px-2.5 py-1 rounded-md">
                      Closed Won
                    </span>
                    <span className="text-xs text-[#9ca3af]">$82K</span>
                  </div>
                  <div className="space-y-2.5">
                    <PipelineCard
                      name="Tom Wright"
                      company="Vercel"
                      email="tom@vercel.com"
                      color="#3b82f6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right detail panel */}
            <div className="hidden lg:flex flex-col w-64 border-l border-[#f1f5f9] p-5 shrink-0">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white text-lg font-semibold mb-3">
                  SC
                </div>
                <div className="font-semibold text-sm text-[#111827]">
                  Sarah Chen
                </div>
                <div className="text-xs text-[#6b7280] flex items-center gap-1 mt-0.5">
                  <span className="w-3 h-3 rounded-full bg-[#6366f1] inline-block" />
                  Stripe
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 mb-5">
                {["✨ Enrich", "✉️ Email"].map((action) => (
                  <button
                    key={action}
                    className="px-3 py-1.5 rounded-lg border border-[#e5e7eb] text-xs font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-colors"
                  >
                    {action}
                  </button>
                ))}
                <button className="px-2 py-1.5 rounded-lg border border-[#e5e7eb] text-xs text-[#6b7280]">
                  ···
                </button>
              </div>

              <div className="border-t border-[#f1f5f9] pt-4">
                <div className="text-xs font-semibold text-[#111827] mb-3">
                  Upcoming
                </div>
                <div className="flex items-center gap-2.5 py-2 px-2 rounded-lg bg-[#f9fafb]">
                  <div className="w-7 h-7 rounded bg-[#dbeafe] flex items-center justify-center text-[10px]">
                    📅
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#111827]">
                      Product demo
                    </div>
                    <div className="text-[10px] text-[#9ca3af]">In 1h</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 py-2 px-2 rounded-lg mt-1">
                  <div className="w-7 h-7 rounded bg-[#fef3c7] flex items-center justify-center text-[10px]">
                    📞
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#111827]">
                      Follow-up call
                    </div>
                    <div className="text-[10px] text-[#9ca3af]">Tomorrow</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f1f5f9] pt-4 mt-4">
                <div className="text-xs font-semibold text-[#111827] mb-3">
                  Recent activity
                </div>
                <div className="text-xs text-[#6b7280] leading-relaxed">
                  Opened pricing email · 2h ago
                </div>
                <div className="text-xs text-[#6b7280] leading-relaxed mt-1.5">
                  Visited website · Yesterday
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function PipelineCard({
  name,
  company,
  email,
  color,
}: {
  name: string;
  company: string;
  email: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#f1f5f9] p-3 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"
          style={{ backgroundColor: color }}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <span className="text-xs font-semibold text-[#111827] truncate">
          {name}
        </span>
      </div>
      <div className="text-[10px] text-[#6b7280] flex items-center gap-1.5 mb-0.5">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color, opacity: 0.3 }}
        />
        {company}
      </div>
      <div className="text-[10px] text-[#9ca3af] flex items-center gap-1.5">
        <span className="text-[8px]">@</span>
        {email}
      </div>
    </div>
  );
}
