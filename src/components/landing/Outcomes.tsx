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
            className="rounded-2xl border border-edge bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              {pillar.highlight}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-heading">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm text-body leading-relaxed">{pillar.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
