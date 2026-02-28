import { FeatureRow } from '../ui/FeatureRow';
import { Section } from '../ui/Section';

const features = [
  {
    label: "Capture",
    headline: "Capture contacts at lightning speed",
    description:
      "The LeverLoop browser extension imports leads and enriches their details without ever leaving LinkedIn, Gmail, or any social platform.",
    cta: "Explore the extension",
    mock: CaptureMock,
  },
  {
    label: "Research",
    headline: "Sales research, done for you",
    description:
      "Smart fields find emails and phone numbers with one click, identify your strongest connection to a lead, and import data from prospect websites using AI.",
    cta: "Explore enrichment",
    mock: ResearchMock,
  },
  {
    label: "Outreach",
    headline: "Personalized outreach, at scale",
    description:
      "CRM data combined with AI to generate contextual drafts, schedule messages, and automate multi-step sequences across email and social.",
    cta: "Explore messaging",
    mock: OutreachMock,
  },
  {
    label: "Integrate",
    headline: "Get the full picture on every lead",
    description:
      "Integrations collect every detail about your relationships by connecting to your emails, calendar, social platforms, and 6,000+ additional tools.",
    cta: "Explore integrations",
    mock: RecapMock,
  },
  {
    label: "Collaborate",
    headline: "Sell together, close faster",
    description:
      "Collaborate on deals with shared pipelines, customizable roles and permissions, and real-time sales dashboards that keep everyone aligned.",
    cta: "Explore pipelines",
    mock: CloseMock,
  },
];

export default function FeatureTabs() {
  return (
    <Section className="!pb-0">
      <div className="space-y-10">
        {features.map((f, i) => {
          const MockComponent = f.mock;
          return (
            <FeatureRow
              key={f.headline}
              label={f.label}
              headline={f.headline}
              description={f.description}
              cta={f.cta}
              reversed={i % 2 !== 0}
              mockup={<MockComponent />}
            />
          );
        })}
      </div>
    </Section>
  );
}

function CaptureMock() {
  return (
    <div className="p-5">
      {/* Browser extension bar */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#f9fafb] border-b border-[#f1f5f9]">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#fca5a5]" />
            <div className="w-2 h-2 rounded-full bg-[#fcd34d]" />
            <div className="w-2 h-2 rounded-full bg-[#86efac]" />
          </div>
          <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-[#9ca3af] text-center border border-[#f1f5f9]">
            linkedin.com/in/sarah-chen
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#023e8a] to-[#0353a4] flex items-center justify-center text-white text-sm font-semibold shrink-0">
              SC
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#111827]">Sarah Chen</div>
              <div className="text-xs text-[#6b7280]">VP of Sales at Stripe</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>
      {/* Extension popup */}
      <div className="mt-3 bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#023e8a] flex items-center justify-center text-white text-[8px] font-bold">
              L
            </div>
            <span className="text-xs font-semibold text-[#111827]">Add to LeverLoop</span>
          </div>
          <span className="text-[10px] text-[#10b981] font-medium bg-[#d1fae5] px-2 py-0.5 rounded-full">
            ✓ Found
          </span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Email", value: "sarah@stripe.com", found: true },
            { label: "Phone", value: "+1 (415) 555-0123", found: true },
            { label: "Group", value: "Hot leads", found: false },
          ].map((field) => (
            <div key={field.label} className="flex items-center justify-between">
              <span className="text-[10px] text-[#9ca3af]">{field.label}</span>
              <span className={`text-[10px] ${field.found ? "text-[#111827]" : "text-[#023e8a]"} font-medium`}>
                {field.value}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full py-2 bg-[#111827] text-white text-xs font-semibold rounded-lg">
          Import contact
        </button>
      </div>
    </div>
  );
}

function ResearchMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center text-sm">
            🏢
          </div>
          <div>
            <div className="text-sm font-semibold text-[#111827]">Stripe, Inc.</div>
            <div className="text-xs text-[#6b7280]">Financial Technology · San Francisco</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { label: "Founded", value: "2010" },
            { label: "Employees", value: "8,000+" },
            { label: "Funding", value: "$8.7B" },
            { label: "Valuation", value: "$50B" },
          ].map((item) => (
            <div key={item.label} className="bg-[#f9fafb] rounded-lg p-2.5">
              <div className="text-[10px] text-[#9ca3af]">{item.label}</div>
              <div className="text-xs font-semibold text-[#111827]">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#f1f5f9] pt-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs">🤖</span>
            <span className="text-[10px] font-semibold text-[#023e8a]">AI Research Notes</span>
          </div>
          <div className="text-xs text-[#6b7280] leading-relaxed">
            Stripe is a leading financial infrastructure platform powering payments for internet businesses. Recent expansion into banking-as-a-service and crypto payouts. Key decision makers include...
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#dce8f5] text-[#023e8a] font-medium">
              Auto-enriched
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f9fafb] text-[#9ca3af] border border-[#f1f5f9]">
              Updated 2m ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutreachMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f1f5f9] flex items-center justify-between">
          <div className="text-xs font-semibold text-[#111827]">Compose sequence</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#dce8f5] text-[#023e8a] font-medium">
              AI draft
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-[#9ca3af]">To:</span>
            <span className="text-[10px] font-medium text-[#111827] bg-[#f9fafb] px-2 py-0.5 rounded">
              Sarah Chen &lt;sarah@stripe.com&gt;
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-[#9ca3af]">Subject:</span>
            <span className="text-[10px] text-[#111827]">
              Quick question about your payments stack
            </span>
          </div>
          <div className="border-t border-[#f1f5f9] pt-3">
            <div className="text-xs text-[#6b7280] leading-relaxed">
              Hi Sarah,
              <br /><br />
              I noticed Stripe recently expanded into banking-as-a-service — congrats on the launch! I'd love to share how LeverLoop could help your team manage...
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#023e8a] animate-pulse" />
              <span className="text-[10px] text-[#023e8a] font-medium">
                AI is personalizing based on CRM data...
              </span>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-[#f1f5f9] flex items-center justify-between bg-[#fafafa]">
          <div className="flex gap-3">
            <span className="text-[10px] text-[#9ca3af]">Step 1 of 3</span>
          </div>
          <div className="flex gap-2">
            <button className="text-[10px] px-2.5 py-1 rounded-lg border border-[#e5e7eb] text-[#6b7280] font-medium">
              Edit
            </button>
            <button className="text-[10px] px-2.5 py-1 rounded-lg bg-[#111827] text-white font-medium">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecapMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="text-xs font-semibold text-[#111827] mb-3">
          Connected integrations
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { name: "Gmail", icon: "📧", connected: true },
            { name: "Calendar", icon: "📅", connected: true },
            { name: "Slack", icon: "💬", connected: true },
            { name: "LinkedIn", icon: "💼", connected: true },
            { name: "Zoom", icon: "🎥", connected: true },
            { name: "Hubspot", icon: "🔶", connected: false },
          ].map((app) => (
            <div
              key={app.name}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border ${
                app.connected
                  ? "border-[#d1fae5] bg-[#f0fdf4]"
                  : "border-[#e5e7eb] bg-[#f9fafb]"
              }`}
            >
              <span className="text-lg">{app.icon}</span>
              <span className="text-[10px] font-medium text-[#6b7280]">{app.name}</span>
              {app.connected && (
                <span className="text-[8px] text-[#10b981] font-medium">Connected</span>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-[#f1f5f9] pt-3">
          <div className="text-xs font-semibold text-[#111827] mb-2">Recent synced data</div>
          <div className="space-y-2">
            {[
              { text: "Email opened by Sarah Chen", time: "2m ago", icon: "📧" },
              { text: "Meeting scheduled with James", time: "1h ago", icon: "📅" },
              { text: "LinkedIn message from Maria", time: "3h ago", icon: "💼" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-xs">{item.icon}</span>
                <span className="text-[10px] text-[#6b7280] flex-1">{item.text}</span>
                <span className="text-[10px] text-[#9ca3af]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f1f5f9] flex items-center justify-between">
          <div className="text-xs font-semibold text-[#111827]">Pipeline overview</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#f9fafb] text-[#9ca3af] border border-[#f1f5f9]">
              Q1 2026
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-end gap-1.5 h-28 mb-3">
            {[40, 65, 50, 80, 70, 55, 90, 75, 85, 60, 95, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 11 ? "#023e8a" : i >= 9 ? "#5a9bd5" : "#c5d9ed",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-[#9ca3af] mb-4">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Won", value: "$247K", change: "+12%", positive: true },
              { label: "Pipeline", value: "$580K", change: "+8%", positive: true },
              { label: "Avg. deal", value: "$18K", change: "-3%", positive: false },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f9fafb] rounded-lg p-2.5">
                <div className="text-[10px] text-[#9ca3af]">{stat.label}</div>
                <div className="text-sm font-semibold text-[#111827]">{stat.value}</div>
                <div
                  className={`text-[10px] font-medium ${
                    stat.positive ? "text-[#10b981]" : "text-[#ef4444]"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
