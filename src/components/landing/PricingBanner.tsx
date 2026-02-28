import Button from '../ui/Button';
import { Section } from '../ui/Section';
import { pricingSectionCopy } from '../../data/landing';

export default function PricingBanner() {
  return (
    <Section padding="compact" id="pricing">
      <div className="rounded-3xl border border-edge bg-gradient-to-br from-white via-[#f9fbff] to-[#eef4ff] p-7 sm:p-10 lg:p-12">
        <span className="inline-flex px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold">
          {pricingSectionCopy.badge}
        </span>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-heading leading-tight max-w-3xl">
          {pricingSectionCopy.heading}
        </h2>
        <p className="mt-5 text-base lg:text-lg text-body leading-relaxed max-w-3xl">
          {pricingSectionCopy.subheading}
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          {pricingSectionCopy.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-xl border border-edge-light bg-white/90 px-3.5 py-3 text-sm text-heading font-medium flex items-center gap-2"
            >
              <span className="text-success text-xs">✓</span>
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
            className="text-sm font-semibold text-body hover:text-heading transition-colors"
          >
            {pricingSectionCopy.secondaryCta.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
