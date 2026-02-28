import { useState } from 'react';
import Button from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import {
  pricingPageData,
  type BillingInterval,
  type PricingPlan,
} from '../../data/pricing';

const { hero, billingToggle, plans, extraUserRate, featureGroups, addOns, faqs, bottomCta } =
  pricingPageData;

const upgradeLabels: Record<string, string> = {
  starter: 'Available in Pro',
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BillingToggle({
  interval,
  onChange,
}: {
  interval: BillingInterval;
  onChange: (i: BillingInterval) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      <div className="inline-flex items-center rounded-full bg-subtle p-1 border border-edge-light">
        <button
          type="button"
          onClick={() => onChange('monthly')}
          className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            interval === 'monthly'
              ? 'bg-white text-heading shadow-sm'
              : 'text-muted hover:text-body'
          }`}
        >
          {billingToggle.monthly}
        </button>
        <button
          type="button"
          onClick={() => onChange('annual')}
          className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 ${
            interval === 'annual'
              ? 'bg-white text-heading shadow-sm'
              : 'text-muted hover:text-body'
          }`}
        >
          {billingToggle.annual}
          <span className="text-[10px] sm:text-[11px] font-bold text-success bg-success-soft px-1.5 sm:px-2 py-0.5 rounded-full">
            {billingToggle.annualSavings}
          </span>
        </button>
      </div>
    </div>
  );
}

function EnterprisePlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="relative rounded-2xl border border-edge bg-gradient-to-b from-[#fafafa] to-white p-6 lg:p-8 flex flex-col">
      <h3 className="font-display text-xl font-bold text-heading">{plan.name}</h3>
      <p className="mt-1 text-sm text-body">{plan.description}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-heading">
          Custom
        </span>
      </div>

      <p className="mt-3 text-xs text-body font-medium">
        Tailored to your team size and needs
      </p>

      <div className="mt-6">
        <Button
          href={plan.cta.href}
          variant="primary"
          size="lg"
          shape="pill"
          arrow
        >
          {plan.cta.label}
        </Button>
      </div>

      {plan.enterpriseFeatures && (
        <div className="mt-6 pt-6 border-t border-edge-light">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
            What's included
          </p>
          <ul className="space-y-1.5">
            {plan.enterpriseFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[13px] text-body leading-snug"
              >
                <CheckIcon className="text-success shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PlanCard({
  plan,
  interval,
}: {
  plan: PricingPlan;
  interval: BillingInterval;
}) {
  if (plan.enterprise) {
    return <EnterprisePlanCard plan={plan} />;
  }

  const [expanded, setExpanded] = useState(false);
  const price = interval === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  const tierKey = plan.name.toLowerCase() as 'starter' | 'pro';

  const includedGroups = featureGroups.filter((g) =>
    g.rows.some((r) => r[tierKey] !== false),
  );
  const lockedGroups = featureGroups.filter(
    (g) => !g.rows.some((r) => r[tierKey] !== false),
  );

  const allIncludedRows = includedGroups.flatMap((g) =>
    g.rows.filter((r) => r[tierKey] !== false),
  );
  const previewCount = 4;
  const hasMore = allIncludedRows.length > previewCount;

  return (
    <div
      className={`relative rounded-2xl border p-6 lg:p-8 flex flex-col ${
        plan.highlighted
          ? 'border-accent bg-gradient-to-b from-white to-[#f6f9ff] shadow-[0_8px_40px_-12px_rgba(2,62,138,0.15)]'
          : 'border-edge bg-white'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-6">
          <Badge variant="numbered" color="indigo" className="shadow-sm">
            {plan.badge}
          </Badge>
        </div>
      )}

      <h3 className="font-display text-xl font-bold text-heading">{plan.name}</h3>
      <p className="mt-1 text-sm text-body">{plan.description}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-heading">
          ${price}
        </span>
        <span className="text-sm text-muted">/mo</span>
      </div>

      {interval === 'annual' && plan.annualPrice && (
        <p className="mt-1 text-xs text-muted">
          Billed annually (${plan.annualPrice * 12}/yr)
        </p>
      )}

      <p className="mt-3 text-xs text-body font-medium">
        {plan.includedUsers === 1
          ? '1 user included'
          : `${plan.includedUsers} users included`}
        <span className="text-muted"> · Extra users {extraUserRate}</span>
      </p>

      <div className="mt-6">
        <Button
          href={plan.cta.href}
          variant={plan.highlighted ? 'accent' : 'primary'}
          size="lg"
          shape="pill"
          arrow
        >
          {plan.cta.label}
        </Button>
      </div>

      {/* Included features */}
      <div className="mt-6 pt-6 border-t border-edge-light space-y-4">
        {includedGroups.map((group) => {
          const rows = group.rows.filter((r) => r[tierKey] !== false);
          const isCollapsed = !expanded && hasMore;

          return (
            <div key={group.name}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                {group.name}
                <span className="ml-1.5 normal-case tracking-normal font-medium">
                  · {rows.length} included
                </span>
              </p>
              <ul className="space-y-1.5">
                {rows.map((row) => {
                  if (isCollapsed) {
                    const groupStartIndex = allIncludedRows.indexOf(row);
                    if (groupStartIndex >= previewCount) return null;
                  }
                  return (
                    <li
                      key={row.label}
                      className="flex items-start gap-2 text-[13px] text-body leading-snug"
                    >
                      <CheckIcon className="text-success shrink-0 mt-0.5" />
                      <span>{row.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-[13px] font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
          >
            {expanded ? 'Show less' : `Show all ${allIncludedRows.length} features`}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path
                d="M3 4.5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Locked groups */}
        {lockedGroups.map((group) => (
          <div
            key={group.name}
            className="rounded-lg bg-subtle px-3 py-2.5 flex items-center gap-2"
          >
            <LockIcon className="text-muted shrink-0" />
            <span className="text-[12px] text-muted">
              <span className="font-medium">{group.name}</span>
              {' · '}
              {upgradeLabels[tierKey] ?? 'Upgrade to unlock'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddOns() {
  return (
    <Section padding="compact" background="muted">
      <SectionHeader heading={addOns.heading} subheading={addOns.subheading} headingSize="sm" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {addOns.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-edge bg-white p-5 flex flex-col gap-3"
          >
            <span className="text-2xl">{item.icon}</span>
            <h3 className="font-display text-base font-bold text-heading">{item.title}</h3>
            <p className="text-sm text-body leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section padding="default" maxWidth="md">
      <SectionHeader heading={faqs.heading} headingSize="sm" />
      <div className="mt-10 divide-y divide-edge-light">
        {faqs.items.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-semibold text-heading pr-4">{faq.question}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full bg-subtle flex items-center justify-center text-muted transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M6 2.5v7M2.5 6h7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-body leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function BottomCta() {
  return (
    <Section padding="compact">
      <div className="rounded-3xl border border-edge bg-gradient-to-br from-white via-[#f9fbff] to-[#eef4ff] p-7 sm:p-10 lg:p-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-heading leading-tight max-w-2xl mx-auto">
          {bottomCta.heading}
        </h2>
        <p className="mt-5 text-base lg:text-lg text-body leading-relaxed max-w-2xl mx-auto">
          {bottomCta.subheading}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={bottomCta.primaryCta.href} shape="pill" arrow>
            {bottomCta.primaryCta.label}
          </Button>
          <Button href={bottomCta.secondaryCta.href} variant="secondary" shape="pill">
            {bottomCta.secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingInterval>('annual');

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-0 lg:pt-40 relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #f5f0e8 0%, #faf7f2 40%, #ffffff 80%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <Badge variant="pill" className="gap-2 mb-6">
            {hero.badge}
          </Badge>

          <h1 className="font-display text-[2.5rem] sm:text-[4rem] lg:text-[4.75rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-heading">
            {hero.heading}
          </h1>

          <p className="mt-4 text-base lg:text-lg text-body max-w-2xl mx-auto leading-relaxed">
            {hero.subheading}
          </p>

          <BillingToggle interval={billing} onChange={setBilling} />
        </div>

        {/* Plan cards */}
        <div className="max-w-5xl mx-auto px-5 lg:px-8 mt-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} interval={billing} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            All plans include a 14-day free trial · No credit card required
          </p>
        </div>
      </section>

      <AddOns />
      <FAQSection />
      <BottomCta />
    </>
  );
}
