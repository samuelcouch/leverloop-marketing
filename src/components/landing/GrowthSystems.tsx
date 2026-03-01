import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import {
  growthSystemsCopy,
  customerIntelMock,
  unifiedInboxMock,
  revenueRecoveryMock,
  mobileOfflineMock,
  type GrowthMockId,
} from '../../data/landing';

const mockById: Record<GrowthMockId, React.ComponentType> = {
  customer_intel: CustomerIntelPanel,
  unified_inbox: UnifiedInboxPanel,
  revenue_recovery: RevenueRecoveryPanel,
  mobile_offline: MobileOfflinePanel,
};

export default function GrowthSystems() {
  return (
    <Section padding="compact">
      <SectionHeader
        heading={growthSystemsCopy.heading}
        subheading={growthSystemsCopy.subheading}
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {growthSystemsCopy.cards.map((card) => {
          const MockComponent = mockById[card.mock];

          return (
            <article
              key={card.headline}
              className="rounded-3xl border border-border-neutral bg-background-elevated overflow-hidden"
            >
              <div className="p-6 sm:p-7">
                <span className="inline-flex px-3 py-1 rounded-full pair-bg-bright-blue text-xs font-semibold">
                  {card.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-content-primary leading-tight">
                  {card.headline}
                </h3>
                <p className="mt-3 text-sm text-content-secondary leading-relaxed">{card.description}</p>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-content-secondary leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1 text-content-link text-xs">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border-neutral bg-background-neutral p-5">
                <div className="rounded-2xl border border-border-neutral bg-background-elevated shadow-sm overflow-hidden">
                  <MockComponent />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function CustomerIntelPanel() {
  return (
    <div className="grid grid-cols-2">
      <div className="border-r border-border-neutral p-4">
        <div className="text-xs font-semibold text-content-primary">{customerIntelMock.customersTitle}</div>
        <div className="mt-3 space-y-2">
          {customerIntelMock.customers.map((customer) => (
            <div key={customer.name} className="rounded-lg border border-border-neutral p-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold text-content-primary truncate">{customer.name}</div>
                {customer.flag && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full pair-bg-bright-yellow font-semibold">
                    {customer.flag}
                  </span>
                )}
              </div>
              <div className="mt-1 text-[11px] text-content-secondary leading-tight">{customer.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs font-semibold text-content-primary">{customerIntelMock.detailTitle}</div>
        <div className="text-[11px] text-content-secondary mt-1">{customerIntelMock.detailSubtitle}</div>
        <div className="mt-3 space-y-2">
          {customerIntelMock.fields.map((field) => (
            <div key={field.label} className="flex items-center justify-between gap-2 text-[11px]">
              <span className="text-content-tertiary">{field.label}</span>
              <span className="text-content-primary font-semibold">{field.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg pair-bg-bright-green text-[11px] font-semibold px-2.5 py-2 leading-tight">
          {customerIntelMock.alert}
        </div>
      </div>
    </div>
  );
}

function UnifiedInboxPanel() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="text-xs font-semibold text-content-primary">{unifiedInboxMock.title}</div>
          <div className="text-[11px] text-content-secondary mt-1">{unifiedInboxMock.contact}</div>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full pair-bg-bright-blue font-semibold">
          {unifiedInboxMock.status}
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {unifiedInboxMock.thread.map((item, index) => (
          <div
            key={`${item.sender}-${index}`}
            className={`rounded-lg border p-2.5 ${
              item.tone === 'auto'
                ? 'border-secondary-bright-blue/65 bg-secondary-bright-blue/16'
                : 'border-border-neutral bg-background-neutral'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold text-content-primary">{item.sender}</span>
              <span className="text-[10px] text-content-tertiary">{item.time}</span>
            </div>
            <p className="text-[11px] text-content-secondary mt-1 leading-relaxed">{item.message}</p>
            <span className="inline-flex mt-2 text-[10px] px-2 py-0.5 rounded-full bg-background-elevated border border-border-neutral text-content-secondary">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueRecoveryPanel() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="text-xs font-semibold text-content-primary">{revenueRecoveryMock.title}</div>
        <span className="text-[10px] px-2 py-1 rounded-full pair-bg-bright-yellow font-semibold">
          {revenueRecoveryMock.subtitle}
        </span>
      </div>

      <div className="space-y-2">
        {revenueRecoveryMock.opportunities.map((opportunity) => (
          <div
            key={opportunity.label}
            className="rounded-lg border border-border-neutral bg-background-neutral p-2.5 flex items-center justify-between gap-2"
          >
            <div>
              <div className="text-[11px] font-semibold text-content-primary">{opportunity.label}</div>
              <div className="text-[11px] text-content-secondary">{opportunity.amount}</div>
            </div>
            <button className="text-[10px] px-2 py-1 rounded-md bg-interactive-primary text-interactive-contrast font-semibold whitespace-nowrap">
              {opportunity.action}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[11px] text-content-secondary leading-relaxed">{revenueRecoveryMock.footer}</div>
    </div>
  );
}

function MobileOfflinePanel() {
  return (
    <div className="flex items-center justify-center py-4 bg-gradient-to-b from-background-neutral to-background-elevated">
      <div className="w-[230px] rounded-[26px] border border-border-neutral bg-background-elevated shadow-sm overflow-hidden">
        <div className="h-6 bg-core-forest-green flex items-center justify-center">
          <div className="w-14 h-1 rounded-full bg-core-bright-green/55" />
        </div>

        <div className="p-3.5">
          <div className="text-xs font-semibold text-content-primary">{mobileOfflineMock.title}</div>
          <div className="inline-flex mt-2 text-[10px] px-2 py-0.5 rounded-full pair-bg-bright-yellow font-semibold">
            {mobileOfflineMock.mode}
          </div>

          <div className="mt-3 rounded-lg border border-border-neutral bg-background-neutral p-2.5">
            <div className="text-[11px] font-semibold text-content-primary">{mobileOfflineMock.customer}</div>
            <div className="text-[11px] text-content-secondary mt-1">{mobileOfflineMock.task}</div>
          </div>

          <div className="mt-3 text-[11px] font-semibold text-content-primary">{mobileOfflineMock.queueLabel}</div>
          <div className="mt-2 space-y-1.5">
            {mobileOfflineMock.queue.map((item) => (
              <div
                key={item.text}
                className="text-[11px] text-content-secondary flex items-center gap-2 rounded-md border border-border-neutral px-2 py-1.5"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[10px] font-semibold pair-bg-bright-green rounded-md px-2 py-1.5 text-center">
            {mobileOfflineMock.syncStatus}
          </div>
        </div>
      </div>
    </div>
  );
}
