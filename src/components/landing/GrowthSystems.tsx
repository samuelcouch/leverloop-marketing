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
              className="rounded-3xl border border-edge bg-white overflow-hidden"
            >
              <div className="p-6 sm:p-7">
                <span className="inline-flex px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold">
                  {card.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-heading leading-tight">
                  {card.headline}
                </h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{card.description}</p>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-body leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1 text-accent text-xs">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-edge-light bg-warm p-5">
                <div className="rounded-2xl border border-edge bg-white shadow-sm overflow-hidden">
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
      <div className="border-r border-edge-light p-4">
        <div className="text-xs font-semibold text-heading">{customerIntelMock.customersTitle}</div>
        <div className="mt-3 space-y-2">
          {customerIntelMock.customers.map((customer) => (
            <div key={customer.name} className="rounded-lg border border-edge-light p-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold text-heading truncate">{customer.name}</div>
                {customer.flag && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-warning-soft text-warning-dark font-semibold">
                    {customer.flag}
                  </span>
                )}
              </div>
              <div className="mt-1 text-[11px] text-body leading-tight">{customer.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs font-semibold text-heading">{customerIntelMock.detailTitle}</div>
        <div className="text-[11px] text-body mt-1">{customerIntelMock.detailSubtitle}</div>
        <div className="mt-3 space-y-2">
          {customerIntelMock.fields.map((field) => (
            <div key={field.label} className="flex items-center justify-between gap-2 text-[11px]">
              <span className="text-muted">{field.label}</span>
              <span className="text-heading font-semibold">{field.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-success-soft text-success-dark text-[11px] font-semibold px-2.5 py-2 leading-tight">
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
          <div className="text-xs font-semibold text-heading">{unifiedInboxMock.title}</div>
          <div className="text-[11px] text-body mt-1">{unifiedInboxMock.contact}</div>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-full bg-accent-soft text-accent font-semibold">
          {unifiedInboxMock.status}
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {unifiedInboxMock.thread.map((item, index) => (
          <div
            key={`${item.sender}-${index}`}
            className={`rounded-lg border p-2.5 ${
              item.tone === 'auto'
                ? 'border-info-soft bg-[#f5f9ff]'
                : 'border-edge-light bg-[#fafafa]'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold text-heading">{item.sender}</span>
              <span className="text-[10px] text-muted">{item.time}</span>
            </div>
            <p className="text-[11px] text-body mt-1 leading-relaxed">{item.message}</p>
            <span className="inline-flex mt-2 text-[10px] px-2 py-0.5 rounded-full bg-white border border-edge-light text-body">
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
        <div className="text-xs font-semibold text-heading">{revenueRecoveryMock.title}</div>
        <span className="text-[10px] px-2 py-1 rounded-full bg-warning-soft text-warning-dark font-semibold">
          {revenueRecoveryMock.subtitle}
        </span>
      </div>

      <div className="space-y-2">
        {revenueRecoveryMock.opportunities.map((opportunity) => (
          <div
            key={opportunity.label}
            className="rounded-lg border border-edge-light bg-[#fafafa] p-2.5 flex items-center justify-between gap-2"
          >
            <div>
              <div className="text-[11px] font-semibold text-heading">{opportunity.label}</div>
              <div className="text-[11px] text-body">{opportunity.amount}</div>
            </div>
            <button className="text-[10px] px-2 py-1 rounded-md bg-ink text-white font-semibold whitespace-nowrap">
              {opportunity.action}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[11px] text-body leading-relaxed">{revenueRecoveryMock.footer}</div>
    </div>
  );
}

function MobileOfflinePanel() {
  return (
    <div className="flex items-center justify-center py-4 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="w-[230px] rounded-[26px] border border-edge bg-white shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="h-6 bg-ink flex items-center justify-center">
          <div className="w-14 h-1 rounded-full bg-white/40" />
        </div>

        <div className="p-3.5">
          <div className="text-xs font-semibold text-heading">{mobileOfflineMock.title}</div>
          <div className="inline-flex mt-2 text-[10px] px-2 py-0.5 rounded-full bg-warning-soft text-warning-dark font-semibold">
            {mobileOfflineMock.mode}
          </div>

          <div className="mt-3 rounded-lg border border-edge-light bg-[#fafafa] p-2.5">
            <div className="text-[11px] font-semibold text-heading">{mobileOfflineMock.customer}</div>
            <div className="text-[11px] text-body mt-1">{mobileOfflineMock.task}</div>
          </div>

          <div className="mt-3 text-[11px] font-semibold text-heading">{mobileOfflineMock.queueLabel}</div>
          <div className="mt-2 space-y-1.5">
            {mobileOfflineMock.queue.map((item) => (
              <div
                key={item.text}
                className="text-[11px] text-body flex items-center gap-2 rounded-md border border-edge-light px-2 py-1.5"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[10px] font-semibold text-success-dark bg-success-soft rounded-md px-2 py-1.5 text-center">
            {mobileOfflineMock.syncStatus}
          </div>
        </div>
      </div>
    </div>
  );
}
