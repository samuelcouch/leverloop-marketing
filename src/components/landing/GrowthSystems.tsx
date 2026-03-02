import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import {
  growthSystemsCopy,
  customerIntelMock,
  unifiedInboxMock,
  type GrowthMockId,
} from '../../data/landing';

const mockById: Record<GrowthMockId, React.ComponentType> = {
  customer_intel: CustomerIntelPanel,
  unified_inbox: UnifiedInboxPanel,
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


