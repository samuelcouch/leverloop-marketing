import type { FeatureDetail } from "../../data/features";
import { FeatureRow } from "../ui/FeatureRow";
import { Section } from "../ui/Section";

/* ── Detail panel mockups ── */

function FilterMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="text-xs font-semibold text-[#111827] mb-3">Active filters</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { label: "Stage: Demo booked", color: "#dbeafe" },
            { label: "Owner: Me", color: "#ede9fe" },
            { label: "Value: > $10K", color: "#fef3c7" },
          ].map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111827] px-2.5 py-1 rounded-full"
              style={{ backgroundColor: f.color }}
            >
              {f.label}
              <span className="text-[#9ca3af] cursor-pointer">×</span>
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { name: "Sarah Chen", company: "Stripe", value: "$24K", color: "#023e8a" },
            { name: "Alex Rivera", company: "Figma", value: "$18K", color: "#f59e0b" },
            { name: "James Park", company: "Linear", value: "$32K", color: "#10b981" },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#f9fafb]">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                style={{ backgroundColor: r.color }}
              >
                {r.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#111827]">{r.name}</div>
                <div className="text-[10px] text-[#9ca3af]">{r.company}</div>
              </div>
              <span className="text-xs font-semibold text-[#111827]">{r.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[10px] text-[#9ca3af] text-center">Showing 3 of 12 results</div>
      </div>
    </div>
  );
}

function InstantMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#f1f5f9]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-sm text-[#111827]">Str</span>
          <span className="w-[2px] h-4 bg-[#023e8a] animate-pulse" />
        </div>
        <div className="py-1">
          {[
            { type: "Contact", title: "Sarah Chen", sub: "Stripe · VP of Sales" },
            { type: "Deal", title: "Stripe Renewal", sub: "$24K · Demo booked" },
            { type: "Email", title: "Re: Stripe integration", sub: "Received 2h ago" },
            { type: "Note", title: "Strategy meeting notes", sub: "Stripe expansion Q3" },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f9fafb] cursor-pointer">
              <span className="text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider w-12 shrink-0">
                {r.type}
              </span>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#111827] truncate">{r.title}</div>
                <div className="text-[10px] text-[#9ca3af] truncate">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2.5 border-t border-[#f1f5f9] text-[10px] text-[#9ca3af]">
          4 results · 12ms
        </div>
      </div>
    </div>
  );
}

function SavedMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-[#111827]">Smart lists</div>
          <button className="text-[10px] px-2.5 py-1 rounded-lg bg-[#111827] text-white font-medium">
            + New list
          </button>
        </div>
        <div className="space-y-2">
          {[
            { name: "Hot leads this week", count: 14, icon: "🔥", shared: true },
            { name: "Deals closing in Q1", count: 8, icon: "📊", shared: true },
            { name: "Uncontacted > 7 days", count: 23, icon: "⏰", shared: false },
            { name: "Enterprise prospects", count: 5, icon: "🏢", shared: true },
          ].map((list) => (
            <div key={list.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#f9fafb] cursor-pointer">
              <span className="text-sm">{list.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#111827]">{list.name}</div>
                <div className="text-[10px] text-[#9ca3af]">{list.count} contacts · Auto-updates</div>
              </div>
              {list.shared && (
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#dce8f5] text-[#023e8a] font-medium">
                  Shared
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StagesMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="text-xs font-semibold text-[#111827] mb-3">Pipeline stages</div>
        <div className="space-y-2">
          {[
            { name: "Lead", color: "#c5d9ed", required: ["Company", "Email"], action: "Auto-enrich" },
            { name: "Qualified", color: "#dbeafe", required: ["Budget", "Timeline"], action: "Notify owner" },
            { name: "Demo booked", color: "#fef3c7", required: ["Meeting date"], action: "Send prep email" },
            { name: "Proposal", color: "#fce7f3", required: ["Contract value"], action: "Alert manager" },
            { name: "Closed Won", color: "#d1fae5", required: ["Signed contract"], action: "Onboarding flow" },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3 p-2.5 rounded-lg border border-[#f1f5f9]">
              <span className="text-[11px] font-semibold text-[#111827] px-2 py-0.5 rounded-md shrink-0" style={{ backgroundColor: s.color }}>
                {s.name}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-[#9ca3af] truncate">
                  Required: {s.required.join(", ")}
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#f9fafb] text-[#6b7280] font-medium shrink-0">
                {s.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ForecastMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-[#111827]">Q1 Forecast</div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#d1fae5] text-[#065f46] font-medium">On track</span>
        </div>
        <div className="flex items-end gap-1.5 h-24 mb-3">
          {[35, 50, 45, 70, 60, 80, 75, 90, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                backgroundColor: i >= 7 ? "#023e8a" : i >= 5 ? "#5a9bd5" : "#c5d9ed",
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { label: "Committed", value: "$182K", pct: "72%" },
            { label: "Best case", value: "$248K", pct: "98%" },
            { label: "Win rate", value: "64%", pct: "+8%" },
          ].map((s) => (
            <div key={s.label} className="bg-[#f9fafb] rounded-lg p-2.5">
              <div className="text-[10px] text-[#9ca3af]">{s.label}</div>
              <div className="text-sm font-semibold text-[#111827]">{s.value}</div>
              <div className="text-[10px] font-medium text-[#10b981]">{s.pct}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="text-xs font-semibold text-[#111827] mb-4">Deal timeline</div>
        <div className="space-y-3">
          {[
            { icon: "📧", title: "Pricing email opened", time: "2h ago", auto: true },
            { icon: "📞", title: "Discovery call — 23 min", time: "Yesterday", auto: true },
            { icon: "📝", title: "Note: Budget approved internally", time: "2 days ago", auto: false },
            { icon: "📅", title: "Demo scheduled for Thursday", time: "3 days ago", auto: true },
            { icon: "🔗", title: "LinkedIn connection accepted", time: "1 week ago", auto: true },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-lg bg-[#f9fafb] flex items-center justify-center text-xs shrink-0">
                  {a.icon}
                </div>
                {i < 4 && <div className="w-px h-3 bg-[#e5e7eb] mt-1" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-[#111827]">{a.title}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-[#9ca3af]">{a.time}</span>
                  {a.auto && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#dce8f5] text-[#023e8a] font-medium">
                      Auto-logged
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FollowupMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f1f5f9] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#023e8a] animate-pulse" />
          <span className="text-xs font-semibold text-[#111827]">AI-drafted follow-up</span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-[#dce8f5] text-[#023e8a] font-medium">
            Ready to send
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] text-[#9ca3af]">To:</span>
            <span className="text-[10px] font-medium text-[#111827] bg-[#f9fafb] px-2 py-0.5 rounded">
              Sarah Chen &lt;sarah@stripe.com&gt;
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-[#9ca3af]">Subject:</span>
            <span className="text-[10px] text-[#111827]">Following up on our demo</span>
          </div>
          <div className="border-t border-[#f1f5f9] pt-3 text-xs text-[#6b7280] leading-relaxed">
            Hi Sarah,<br /><br />
            Thanks for taking the time to see the demo yesterday. I noticed you had some questions about our API integrations — I've attached a guide that covers the setup process…
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-[#9ca3af]">
            <span>✨ Based on meeting transcript + CRM data</span>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-[#f1f5f9] bg-[#fafafa] flex justify-end gap-2">
          <button className="text-[10px] px-2.5 py-1 rounded-lg border border-[#e5e7eb] text-[#6b7280] font-medium">Edit</button>
          <button className="text-[10px] px-2.5 py-1 rounded-lg bg-[#111827] text-white font-medium">Send</button>
        </div>
      </div>
    </div>
  );
}

function EnrichMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#023e8a] to-[#0353a4] flex items-center justify-center text-white text-sm font-semibold">
            JK
          </div>
          <div>
            <div className="text-sm font-semibold text-[#111827]">Julia Kim</div>
            <div className="text-xs text-[#9ca3af]">Added 30 seconds ago</div>
          </div>
          <span className="ml-auto text-[10px] text-[#10b981] font-medium bg-[#d1fae5] px-2 py-0.5 rounded-full">
            ✓ Enriched
          </span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Title", value: "Head of Partnerships", source: "LinkedIn" },
            { label: "Company", value: "Vercel", source: "LinkedIn" },
            { label: "Email", value: "julia@vercel.com", source: "Clearbit" },
            { label: "Phone", value: "+1 (628) 555-0199", source: "Apollo" },
            { label: "Location", value: "New York, NY", source: "LinkedIn" },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-between py-1">
              <span className="text-[10px] text-[#9ca3af] w-14">{f.label}</span>
              <span className="text-[10px] font-medium text-[#111827] flex-1">{f.value}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#f9fafb] text-[#9ca3af]">{f.source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightsMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">✨</span>
          <div className="text-xs font-semibold text-[#111827]">AI Insights</div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] font-medium ml-auto">
            3 actions needed
          </span>
        </div>
        <div className="space-y-3">
          {[
            {
              type: "warning",
              title: "Acme Corp going cold",
              detail: "No response in 9 days — suggest follow-up",
              color: "#fef3c7",
              icon: "⚠️",
            },
            {
              type: "opportunity",
              title: "Upsell signal: Figma",
              detail: "Usage up 120% — upgrade conversation recommended",
              color: "#d1fae5",
              icon: "📈",
            },
            {
              type: "action",
              title: "3 deals stalled in Proposal",
              detail: "Average 14 days without movement",
              color: "#fee2e2",
              icon: "🔴",
            },
          ].map((insight, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg" style={{ backgroundColor: insight.color }}>
              <span className="text-sm shrink-0">{insight.icon}</span>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#111827]">{insight.title}</div>
                <div className="text-[10px] text-[#6b7280] mt-0.5">{insight.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mock map ── */

const mockMap: Record<FeatureDetail["mock"], React.FC> = {
  filter: FilterMock,
  instant: InstantMock,
  saved: SavedMock,
  stages: StagesMock,
  forecast: ForecastMock,
  activity: ActivityMock,
  followup: FollowupMock,
  enrich: EnrichMock,
  insights: InsightsMock,
};

/* ── Main component ── */

export default function FeatureDetails({ details }: { details: FeatureDetail[] }) {
  return (
    <Section className="!pb-0">
      <div className="space-y-10">
        {details.map((d, i) => {
          const MockComponent = mockMap[d.mock];
          return (
            <FeatureRow
              key={d.headline}
              label={d.label}
              headline={d.headline}
              description={d.description}
              cta={d.cta}
              reversed={i % 2 !== 0}
              mockup={<MockComponent />}
            >
              <p className="mt-4 text-sm text-body">
                <strong className="text-heading">Key benefit: </strong>
                {d.benefit}
              </p>
            </FeatureRow>
          );
        })}
      </div>
    </Section>
  );
}
