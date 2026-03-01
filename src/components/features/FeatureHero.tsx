import Button from "../ui/Button";
import { Badge } from "../ui/Badge";

export interface FeatureHeroProps {
  badge?: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  mockup: React.ReactNode;
}

export default function FeatureHero({
  badge,
  headline,
  description,
  ctaLabel,
  ctaHref,
  mockup,
}: FeatureHeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden hero-radial">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – copy */}
          <div className="max-w-xl">
            {badge && (
              <Badge variant="pill" className="mb-6">{badge}</Badge>
            )}

            <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-content-primary">
              {headline}
            </h1>

            <p className="mt-5 text-base lg:text-lg text-content-secondary leading-relaxed max-w-md">
              {description}
            </p>

            <div className="mt-8">
              <Button href={ctaHref} size="lg" shape="pill" arrow className="!w-auto px-8">
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right – product mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {mockup}
          </div>
        </div>
      </div>
    </section>
  );
}
