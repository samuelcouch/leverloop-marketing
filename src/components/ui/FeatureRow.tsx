import Button from './Button';

interface FeatureRowProps {
  label: string;
  headline: string;
  description: string;
  cta: string;
  ctaHref?: string;
  reversed?: boolean;
  mockup: React.ReactNode;
  children?: React.ReactNode;
}

export function FeatureRow({
  label,
  headline,
  description,
  cta,
  ctaHref = '#',
  reversed = false,
  mockup,
  children,
}: FeatureRowProps) {
  return (
    <div className="bg-warm rounded-3xl p-6 sm:p-10 lg:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={reversed ? 'lg:order-2' : ''}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-success-soft text-success-dark text-xs font-semibold">
            {label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-heading leading-[1.15] mt-5">
            {headline}
          </h2>
          <p className="mt-5 text-base lg:text-lg text-body leading-relaxed">
            {description}
          </p>
          <Button href={ctaHref} shape="pill" arrow className="mt-8">
            {cta}
          </Button>
          {children}
        </div>

        <div className={`relative ${reversed ? 'lg:order-1' : ''}`}>
          <div className="bg-white/60 rounded-2xl border border-white/80 shadow-sm overflow-hidden">
            {mockup}
          </div>
        </div>
      </div>
    </div>
  );
}
