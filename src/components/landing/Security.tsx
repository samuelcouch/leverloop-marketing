import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { IconBox } from '../ui/IconBox';

const badges = [
  {
    title: "SOC 2 Type I",
    subtitle: "Certified",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "GDPR",
    subtitle: "Compliant",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Google Security",
    subtitle: "Certified",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Security() {
  return (
    <Section padding="compact" maxWidth="md" className="text-center">
      <SectionHeader heading="Your data is safe with us" headingSize="sm" />
      <div className="mt-10">
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center gap-2"
            >
              <IconBox size="lg">
                {badge.icon}
              </IconBox>
              <span className="font-semibold text-sm text-heading">
                {badge.title}
              </span>
              <span className="text-xs text-muted uppercase tracking-wider font-medium">
                {badge.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
