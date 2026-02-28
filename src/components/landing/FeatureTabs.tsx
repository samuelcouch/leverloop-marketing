import { FeatureRow } from '../ui/FeatureRow';
import { Section } from '../ui/Section';
import {
  landingFeatureRows,
  speedToLeadMock,
  estimateMock,
  paymentMock,
  dispatchMock,
  membershipMock,
  type EstimateOptionTone,
  type LandingFeatureMockId,
} from '../../data/landing';

const estimateToneClasses: Record<EstimateOptionTone, string> = {
  good: 'bg-[#dbeafe] text-[#1d4ed8]',
  better: 'bg-[#fef3c7] text-[#92400e]',
  best: 'bg-[#d1fae5] text-[#065f46]',
};

const mockById: Record<LandingFeatureMockId, React.ComponentType> = {
  speed_to_lead: SpeedToLeadMock,
  estimates: EstimateMock,
  payments: PaymentMock,
  dispatch: DispatchMock,
  memberships: MembershipMock,
};

export default function FeatureTabs() {
  return (
    <Section className="!pb-0" id="use-cases">
      <div className="space-y-10">
        {landingFeatureRows.map((feature, index) => {
          const MockComponent = mockById[feature.mock];
          return (
            <FeatureRow
              key={feature.headline}
              label={feature.label}
              headline={feature.headline}
              description={feature.description}
              cta={feature.cta}
              ctaHref={feature.ctaHref}
              reversed={index % 2 !== 0}
              mockup={<MockComponent />}
            />
          );
        })}
      </div>
    </Section>
  );
}

function SpeedToLeadMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#f9fafb] border-b border-[#f1f5f9]">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#fca5a5]" />
            <div className="w-2 h-2 rounded-full bg-[#fcd34d]" />
            <div className="w-2 h-2 rounded-full bg-[#86efac]" />
          </div>
          <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-[#9ca3af] text-center border border-[#f1f5f9]">
            {speedToLeadMock.browserUrl}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#023e8a] to-[#0353a4] flex items-center justify-center text-white text-sm font-semibold shrink-0">
              {speedToLeadMock.initials}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#111827]">{speedToLeadMock.name}</div>
              <div className="text-xs text-[#6b7280]">{speedToLeadMock.title}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{speedToLeadMock.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#023e8a] flex items-center justify-center text-white text-[8px] font-bold">
              L
            </div>
            <span className="text-xs font-semibold text-[#111827]">{speedToLeadMock.panelTitle}</span>
          </div>
          <span className="text-[10px] text-[#10b981] font-medium bg-[#d1fae5] px-2 py-0.5 rounded-full">
            {speedToLeadMock.status}
          </span>
        </div>
        <div className="space-y-2">
          {speedToLeadMock.fields.map((field) => (
            <div key={field.label} className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-[#9ca3af] shrink-0">{field.label}</span>
              <span
                className={`text-[10px] text-right ${
                  field.highlight ? 'text-[#023e8a]' : 'text-[#111827]'
                } font-medium`}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full py-2 bg-[#111827] text-white text-xs font-semibold rounded-lg">
          {speedToLeadMock.buttonLabel}
        </button>
      </div>
    </div>
  );
}

function EstimateMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center text-sm">
            🧾
          </div>
          <div>
            <div className="text-sm font-semibold text-[#111827]">{estimateMock.title}</div>
            <div className="text-xs text-[#6b7280]">{estimateMock.subtitle}</div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {estimateMock.options.map((option) => (
            <div key={option.tier} className="bg-[#f9fafb] rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <div
                  className={`inline-flex text-[10px] px-2 py-0.5 rounded-full font-semibold ${estimateToneClasses[option.tone]}`}
                >
                  {option.tier}
                </div>
                <div className="text-xs text-[#111827] mt-1">{option.service}</div>
              </div>
              <div className="text-xs font-semibold text-[#111827]">{option.price}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#f1f5f9] pt-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs">✍️</span>
            <span className="text-[10px] font-semibold text-[#023e8a]">{estimateMock.noteLabel}</span>
          </div>
          <div className="text-xs text-[#6b7280] leading-relaxed">{estimateMock.note}</div>
          <div className="mt-2 flex gap-1.5 flex-wrap">
            {estimateMock.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[#dce8f5] text-[#023e8a] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f1f5f9] flex items-center justify-between">
          <div className="text-xs font-semibold text-[#111827]">{paymentMock.title}</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#dce8f5] text-[#023e8a] font-medium">
              {paymentMock.badge}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-[#9ca3af]">To:</span>
            <span className="text-[10px] font-medium text-[#111827] bg-[#f9fafb] px-2 py-0.5 rounded">
              {paymentMock.recipient}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-[#9ca3af]">Subject:</span>
            <span className="text-[10px] text-[#111827]">{paymentMock.subject}</span>
          </div>
          <div className="border-t border-[#f1f5f9] pt-3">
            <div className="text-xs text-[#6b7280] leading-relaxed">
              {paymentMock.bodyLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#023e8a] animate-pulse" />
              <span className="text-[10px] text-[#023e8a] font-medium">{paymentMock.status}</span>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-[#f1f5f9] flex items-center justify-between bg-[#fafafa]">
          <div className="flex gap-3">
            <span className="text-[10px] text-[#9ca3af]">{paymentMock.step}</span>
          </div>
          <div className="flex gap-2">
            <button className="text-[10px] px-2.5 py-1 rounded-lg border border-[#e5e7eb] text-[#6b7280] font-medium">
              {paymentMock.actions[0]}
            </button>
            <button className="text-[10px] px-2.5 py-1 rounded-lg bg-[#111827] text-white font-medium">
              {paymentMock.actions[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DispatchMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-4">
        <div className="text-xs font-semibold text-[#111827] mb-3">{dispatchMock.title}</div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {dispatchMock.techCards.map((tech) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border ${
                tech.active ? 'border-[#d1fae5] bg-[#f0fdf4]' : 'border-[#e5e7eb] bg-[#f9fafb]'
              }`}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-[10px] font-medium text-[#6b7280]">{tech.name}</span>
              <span className="text-[8px] text-[#6b7280] font-medium text-center leading-tight">
                {tech.status}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-[#f1f5f9] pt-3">
          <div className="text-xs font-semibold text-[#111827] mb-2">{dispatchMock.updatesTitle}</div>
          <div className="space-y-2">
            {dispatchMock.updates.map((update) => (
              <div key={update.text} className="flex items-center gap-2">
                <span className="text-xs">{update.icon}</span>
                <span className="text-[10px] text-[#6b7280] flex-1">{update.text}</span>
                <span className="text-[10px] text-[#9ca3af]">{update.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MembershipMock() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[#f1f5f9] flex items-center justify-between">
          <div className="text-xs font-semibold text-[#111827]">{membershipMock.title}</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#f9fafb] text-[#9ca3af] border border-[#f1f5f9]">
              {membershipMock.range}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-end gap-1.5 h-28 mb-3">
            {[40, 65, 50, 80, 70, 55, 90, 75, 85, 60, 95, 78].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t"
                style={{
                  height: `${height}%`,
                  backgroundColor:
                    index === 11 ? '#023e8a' : index >= 9 ? '#5a9bd5' : '#c5d9ed',
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
            {membershipMock.stats.map((stat) => {
              const changeClass = stat.change.startsWith('+')
                ? 'text-[#10b981]'
                : stat.change.startsWith('-')
                  ? 'text-[#ef4444]'
                  : 'text-[#6b7280]';

              return (
                <div key={stat.label} className="bg-[#f9fafb] rounded-lg p-2.5">
                  <div className="text-[10px] text-[#9ca3af]">{stat.label}</div>
                  <div className="text-sm font-semibold text-[#111827]">{stat.value}</div>
                  <div className={`text-[10px] font-medium ${changeClass}`}>{stat.change}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
