import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import Button from '../ui/Button';
import type { ResourceLink } from '../../data/features';

const typeBadgeColor: Record<ResourceLink['type'], 'blue' | 'green' | 'yellow' | 'indigo'> = {
  Guide: 'blue',
  Template: 'green',
  Checklist: 'yellow',
  Playbook: 'indigo',
};

const typeIcons: Record<ResourceLink['type'], string> = {
  Guide: '📖',
  Template: '📄',
  Checklist: '✅',
  Playbook: '📋',
};

const typeAccentBg: Record<ResourceLink['type'], string> = {
  Guide: 'bg-[#dbeafe]',
  Template: 'bg-success-soft',
  Checklist: 'bg-warning-soft',
  Playbook: 'bg-accent-soft',
};

export default function FreeResources({
  resources,
}: {
  resources: ResourceLink[];
}) {
  if (resources.length === 0) return null;

  return (
    <Section className="!pt-6">
      <div className="rounded-3xl bg-subtle p-8 sm:p-12 lg:p-16">
      <SectionHeader
        heading="Free resources"
        subheading="Guides, templates, and checklists to help you get the most out of this feature."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {resources.map((r) => (
          <a
            key={r.href}
            href={r.href}
            className="group flex flex-col bg-raised rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <div className={`${typeAccentBg[r.type]} flex items-center justify-center py-8`}>
              <span className="text-5xl group-hover:scale-110 transition-transform duration-200">
                {typeIcons[r.type]}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <Badge variant="status" color={typeBadgeColor[r.type]} className="self-start">
                {r.type}
              </Badge>

              <h3 className="font-display text-lg font-bold text-heading leading-snug mt-4 group-hover:text-accent transition-colors">
                {r.title}
              </h3>

              <p className="text-sm text-body mt-2 leading-relaxed flex-1">
                {r.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent mt-5 group-hover:gap-2.5 transition-all">
                Read more
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="secondary" shape="pill" href="/resources">
          View all resources
        </Button>
      </div>
      </div>
    </Section>
  );
}
