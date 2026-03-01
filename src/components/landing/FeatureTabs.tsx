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
  good: 'pair-bg-bright-blue',
  better: 'pair-bg-bright-yellow',
  best: 'pair-bg-bright-green',
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
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-background-neutral border-b border-border-neutral">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-secondary-dark-maroon" />
            <div className="w-2 h-2 rounded-full bg-secondary-bright-yellow" />
            <div className="w-2 h-2 rounded-full bg-core-bright-green" />
          </div>
          <div className="flex-1 bg-background-elevated rounded px-2 py-0.5 text-[10px] text-content-tertiary text-center border border-border-neutral">
            {speedToLeadMock.browserUrl}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full pair-bg-forest-green flex items-center justify-center text-sm font-semibold shrink-0">
              {speedToLeadMock.initials}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-content-primary">{speedToLeadMock.name}</div>
              <div className="text-xs text-content-secondary">{speedToLeadMock.title}</div>
              <div className="text-xs text-content-tertiary mt-0.5">{speedToLeadMock.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-background-elevated rounded-xl border border-border-neutral shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded pair-bg-forest-green flex items-center justify-center text-[8px] font-bold">
              L
            </div>
            <span className="text-xs font-semibold text-content-primary">{speedToLeadMock.panelTitle}</span>
          </div>
          <span className="text-[10px] pair-bg-bright-green font-medium px-2 py-0.5 rounded-full">
            {speedToLeadMock.status}
          </span>
        </div>
        <div className="space-y-2">
          {speedToLeadMock.fields.map((field) => (
            <div key={field.label} className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-content-tertiary shrink-0">{field.label}</span>
              <span
                className={`text-[10px] text-right ${
                  field.highlight ? 'text-content-link' : 'text-content-primary'
                } font-medium`}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full py-2 bg-interactive-primary text-interactive-contrast text-xs font-semibold rounded-lg">
          {speedToLeadMock.buttonLabel}
        </button>
      </div>
    </div>
  );
}

function EstimateMock() {
  return (
    <div className="p-5">
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg pair-bg-bright-blue flex items-center justify-center text-sm">
            🧾
          </div>
          <div>
            <div className="text-sm font-semibold text-content-primary">{estimateMock.title}</div>
            <div className="text-xs text-content-secondary">{estimateMock.subtitle}</div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {estimateMock.options.map((option) => (
            <div key={option.tier} className="bg-background-neutral rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <div
                  className={`inline-flex text-[10px] px-2 py-0.5 rounded-full font-semibold ${estimateToneClasses[option.tone]}`}
                >
                  {option.tier}
                </div>
                <div className="text-xs text-content-primary mt-1">{option.service}</div>
              </div>
              <div className="text-xs font-semibold text-content-primary">{option.price}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-border-neutral pt-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs">✍️</span>
            <span className="text-[10px] font-semibold text-content-link">{estimateMock.noteLabel}</span>
          </div>
          <div className="text-xs text-content-secondary leading-relaxed">{estimateMock.note}</div>
          <div className="mt-2 flex gap-1.5 flex-wrap">
            {estimateMock.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full pair-bg-bright-blue font-medium"
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
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border-neutral flex items-center justify-between">
          <div className="text-xs font-semibold text-content-primary">{paymentMock.title}</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded pair-bg-bright-blue font-medium">
              {paymentMock.badge}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-content-tertiary">To:</span>
            <span className="text-[10px] font-medium text-content-primary bg-background-neutral px-2 py-0.5 rounded">
              {paymentMock.recipient}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-content-tertiary">Subject:</span>
            <span className="text-[10px] text-content-primary">{paymentMock.subject}</span>
          </div>
          <div className="border-t border-border-neutral pt-3">
            <div className="text-xs text-content-secondary leading-relaxed">
              {paymentMock.bodyLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-content-link animate-pulse" />
              <span className="text-[10px] text-content-link font-medium">{paymentMock.status}</span>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-border-neutral flex items-center justify-between bg-background-neutral">
          <div className="flex gap-3">
            <span className="text-[10px] text-content-tertiary">{paymentMock.step}</span>
          </div>
          <div className="flex gap-2">
            <button className="text-[10px] px-2.5 py-1 rounded-lg border border-interactive-secondary text-content-secondary font-medium">
              {paymentMock.actions[0]}
            </button>
            <button className="text-[10px] px-2.5 py-1 rounded-lg bg-interactive-primary text-interactive-contrast font-medium">
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
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm p-4">
        <div className="text-xs font-semibold text-content-primary mb-3">{dispatchMock.title}</div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {dispatchMock.techCards.map((tech) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border ${
                tech.active
                  ? 'border-interactive-accent/55 bg-interactive-accent/20'
                  : 'border-border-neutral bg-background-neutral'
              }`}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-[10px] font-medium text-content-secondary">{tech.name}</span>
              <span className="text-[8px] text-content-secondary font-medium text-center leading-tight">
                {tech.status}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-border-neutral pt-3">
          <div className="text-xs font-semibold text-content-primary mb-2">{dispatchMock.updatesTitle}</div>
          <div className="space-y-2">
            {dispatchMock.updates.map((update) => (
              <div key={update.text} className="flex items-center gap-2">
                <span className="text-xs">{update.icon}</span>
                <span className="text-[10px] text-content-secondary flex-1">{update.text}</span>
                <span className="text-[10px] text-content-tertiary">{update.time}</span>
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
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border-neutral flex items-center justify-between">
          <div className="text-xs font-semibold text-content-primary">{membershipMock.title}</div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-background-neutral text-content-tertiary border border-border-neutral">
              {membershipMock.range}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-end gap-1.5 h-28 mb-3">
            {[40, 65, 50, 80, 70, 55, 90, 75, 85, 60, 95, 78].map((height, index) => (
              <div
                key={index}
                className={`flex-1 rounded-t ${
                  index === 11
                    ? 'bg-core-forest-green'
                    : index >= 9
                      ? 'bg-secondary-bright-blue'
                      : 'bg-secondary-bright-blue/60'
                }`}
                style={{
                  height: `${height}%`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-content-tertiary mb-4">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {membershipMock.stats.map((stat) => {
              const changeClass = stat.change.startsWith('+')
                ? 'text-sentiment-positive'
                : stat.change.startsWith('-')
                  ? 'text-sentiment-negative'
                  : 'text-content-secondary';

              return (
                <div key={stat.label} className="bg-background-neutral rounded-lg p-2.5">
                  <div className="text-[10px] text-content-tertiary">{stat.label}</div>
                  <div className="text-sm font-semibold text-content-primary">{stat.value}</div>
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
