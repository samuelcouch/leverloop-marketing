import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { outcomesSectionCopy } from '../../data/landing';

export default function Outcomes() {
  return (
    <Section padding="compact">
      <SectionHeader
        heading={outcomesSectionCopy.heading}
        subheading={outcomesSectionCopy.subheading}
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {outcomesSectionCopy.pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-border-neutral bg-background-elevated p-6 shadow-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-content-tertiary">
              {pillar.highlight}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-content-primary">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm text-content-secondary leading-relaxed">{pillar.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
