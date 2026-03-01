import Button from '../ui/Button';
import { Section } from '../ui/Section';
import { pricingSectionCopy } from '../../data/landing';

export default function PricingBanner() {
  return (
    <Section padding="compact" id="pricing">
      <div className="rounded-3xl border border-border-neutral bg-gradient-to-br from-background-elevated via-background-neutral to-secondary-bright-blue/16 p-7 sm:p-10 lg:p-12">
        <span className="inline-flex px-3 py-1 rounded-full pair-bg-bright-blue text-xs font-semibold">
          {pricingSectionCopy.badge}
        </span>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-content-primary leading-tight max-w-3xl">
          {pricingSectionCopy.heading}
        </h2>
        <p className="mt-5 text-base lg:text-lg text-content-secondary leading-relaxed max-w-3xl">
          {pricingSectionCopy.subheading}
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          {pricingSectionCopy.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-xl border border-border-neutral bg-background-elevated px-3.5 py-3 text-sm text-content-primary font-medium flex items-center gap-2"
            >
              <span className="text-content-link text-xs">✓</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={pricingSectionCopy.primaryCta.href} shape="pill" arrow>
            {pricingSectionCopy.primaryCta.label}
          </Button>
          <a
            href={pricingSectionCopy.secondaryCta.href}
            className="text-sm font-semibold text-content-secondary hover:text-content-primary transition-colors"
          >
            {pricingSectionCopy.secondaryCta.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
