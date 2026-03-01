import { useEffect, useState } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  CloseButton,
} from '@headlessui/react';
import {
  announcementBar,
  navbarNavLinks,
  navbarNavigation,
  navbarPrimaryCta,
  type NavbarFeature,
  type NavbarItemConfig,
} from '../../data/landing';
import { Button } from '../ui';

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ feature }: { feature: NavbarFeature }) {
  const hasGradient = !!feature.gradient;
  const hasIcon = !!feature.icon;
  const isTextOnly = !hasGradient && !hasIcon;

  return (
    <CloseButton
      as="a"
      href={feature.href}
      className={`flex items-start group/card ${isTextOnly ? 'gap-0' : 'gap-4'}`}
    >
      {hasGradient && (
        <div
          className={`w-16 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} shrink-0`}
        />
      )}

      {hasIcon && (
        <div className="w-10 h-10 rounded-lg bg-raised flex items-center justify-center shrink-0 text-lg">
          {feature.icon}
        </div>
      )}

      <div className={hasGradient ? 'py-0.5' : hasIcon ? 'py-1' : ''}>
        <p className="text-sm font-semibold text-heading group-hover/card:text-black">
          {feature.title}
        </p>
        <p className="text-sm text-body mt-0.5 leading-snug">{feature.description}</p>
      </div>
    </CloseButton>
  );
}

function FeaturedPanel({
  item,
}: {
  item: Extract<NavbarItemConfig, { type: 'featured' }>;
}) {
  return (
    <div className="flex gap-8 max-w-5xl">
      <div className="flex flex-col gap-5 flex-1 min-w-[280px] max-w-[320px]">
        {item.features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
      {item.categories && (
        <div className="grid grid-cols-3 gap-x-6 gap-y-5 border-l border-[#f0f0f0] pl-6">
          {item.categories.map((category) => (
            <div key={category.heading}>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">
                {category.heading}
              </p>
              <ul className="flex flex-col gap-1.5">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <CloseButton
                      as="a"
                      href={link.href}
                      className="text-sm font-medium text-heading hover:text-accent transition-colors"
                    >
                      {link.label}
                    </CloseButton>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SimplePanel({
  item,
}: {
  item: Extract<NavbarItemConfig, { type: 'simple' }>;
}) {
  return (
    <div className="flex flex-col gap-1">
      {item.links.map((link) => (
        <CloseButton
          as="a"
          key={link.label}
          href={link.href}
          className="text-[15px] font-medium text-heading hover:text-accent transition-colors py-1.5"
        >
          {link.label}
        </CloseButton>
      ))}
    </div>
  );
}

function HighlightPanel({
  item,
}: {
  item: Extract<NavbarItemConfig, { type: 'highlight' }>;
}) {
  return (
    <div className="flex flex-col gap-5 min-w-[340px]">
      {item.features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ padding: scrolled ? '8px 16px 0' : '0' }}
      >
        <style>{`
          @media (max-width: 767px) {
            header.fixed { padding: 0 !important; }
          }
        `}</style>

        <div
          className={[
            'w-full bg-accent-soft text-heading text-center text-sm font-medium px-4 transition-all duration-300 ease-out overflow-hidden',
            scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-16 py-4 opacity-100',
          ].join(' ')}
        >
          <span>{announcementBar.message}</span>
          {announcementBar.linkText && (
            <>
              {' '}
              <a
                href={announcementBar.linkHref ?? '#'}
                className="underline underline-offset-2 text-accent hover:text-accent/80 transition-colors"
              >
                {announcementBar.linkText}
              </a>
            </>
          )}
        </div>

        <nav
          className={[
            `mx-auto flex items-center justify-between ${
              mobileOpen
                ? 'max-md:[transition:none] md:transition-all md:duration-500 md:ease-[cubic-bezier(0.4,0,0.2,1)]'
                : 'max-md:[transition:none] md:transition-all md:duration-500 md:ease-[cubic-bezier(0.4,0,0.2,1)]'
            }`,
            scrolled
              ? 'md:max-w-5xl md:h-14 md:rounded-full md:bg-white md:backdrop-blur-xl md:shadow-[0_2px_24px_-4px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.04)] max-w-7xl h-16 px-5 lg:px-8 max-md:bg-white max-md:backdrop-blur-lg'
              : `max-w-7xl h-16 px-5 lg:px-8 ${
                  mobileOpen ? 'max-md:bg-white max-md:backdrop-blur-lg' : 'bg-transparent'
                }`,
          ].join(' ')}
        >
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              className="md:hidden p-2 text-body hover:text-heading transition-colors -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>

            <a
              href="/"
              className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-heading"
            >
              <img
                src="/leverloop-mark-dark.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7"
              />
              LeverLoop
            </a>
          </div>

          <PopoverGroup className="hidden md:flex items-center gap-1">
            {navbarNavigation.map((item) =>
              item.type === 'link' ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-body hover:text-heading transition-colors flex items-center gap-1 px-4 py-2 rounded-full"
                >
                  {item.label}
                </a>
              ) : (
                <Popover key={item.label} className="relative">
                  <PopoverButton className="text-sm font-medium text-body hover:text-heading transition-colors flex items-center gap-1 px-4 py-2 rounded-full outline-none data-[open]:bg-ink data-[open]:text-white">
                    {item.label}
                    <ChevronIcon className="mt-px opacity-60 transition-transform duration-200 group-data-[open]:rotate-180 [[data-open]>&]:rotate-180" />
                  </PopoverButton>

                  <PopoverPanel
                    anchor={{ to: 'bottom', gap: 16, padding: 24 }}
                    transition
                    className="z-[60] bg-white rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-6 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 w-[min(800px,calc(100vw-2rem))]"
                  >
                    {item.type === 'featured' && <FeaturedPanel item={item} />}
                    {item.type === 'simple' && <SimplePanel item={item} />}
                    {item.type === 'highlight' && <HighlightPanel item={item} />}
                  </PopoverPanel>
                </Popover>
              )
            )}
          </PopoverGroup>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Button
              href={navbarPrimaryCta.href}
              variant="none"
              shape="pill"
              iconBubble
              arrow
              className={scrolled
                ? 'bg-accent-soft text-heading hover:bg-accent-soft/80'
                : 'bg-ink text-white hover:bg-ink-hover'}
              iconBubbleClassName={scrolled ? 'bg-accent text-white' : undefined}
            >
              {navbarPrimaryCta.label}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              href={navbarPrimaryCta.href}
              variant="primary"
              shape="pill"
              iconBubble
              arrow
            >
              {navbarPrimaryCta.label}
            </Button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-white backdrop-blur-lg border-t border-edge/50 max-h-[80vh] overflow-y-auto">
            <div className="px-5 py-6 flex flex-col gap-6">
              {navbarNavigation.map((item) => {
                if (item.type === 'link') {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-semibold text-heading hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                if (item.type === 'featured' && item.categories) {
                  return (
                    <div key={item.label} className="flex flex-col gap-4">
                      <span className="text-sm font-semibold text-heading">{item.label}</span>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 pl-2">
                        {item.categories.map((cat) => (
                          <div key={cat.heading} className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                              {cat.heading}
                            </span>
                            {cat.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-body hover:text-accent transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}

              <hr className="border-edge" />

              <a
                href={navbarPrimaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {navbarPrimaryCta.label}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
