import { useState, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
  CloseButton,
} from "@headlessui/react";

const navLinks = ["Features", "Use Cases", "Pricing", "Resources"];

/* ── Navigation data ── */

type NavFeature = {
  title: string;
  description: string;
  href: string;
  gradient?: string;
  icon?: string;
};

type NavCategory = {
  heading: string;
  links: { label: string; href: string }[];
};

type NavItemConfig =
  | { label: string; type: "featured"; features: NavFeature[]; categories?: NavCategory[] }
  | { label: string; type: "simple"; links: { label: string; href: string }[] }
  | { label: string; type: "highlight"; features: NavFeature[] }
  | { label: string; type: "link"; href: string };

const navigation: NavItemConfig[] = [
  {
    label: "Features",
    type: "featured",
    features: [
      {
        title: "Search",
        description: "Find any deal, contact, note, or email instantly",
        href: "/features/search",
        gradient: "from-sky-300 via-blue-200 to-emerald-200",
      },
      {
        title: "Pipeline",
        description: "Drag-and-drop pipeline management for every deal",
        href: "/features/pipeline",
        gradient: "from-amber-300 via-yellow-200 to-lime-200",
      },
      {
        title: "AI Assistants",
        description: "Automate follow-ups, enrich contacts, and surface insights",
        href: "/features/assistants",
        gradient: "from-emerald-400 via-green-300 to-lime-200",
      },
    ],
  },
  {
    label: "Use Cases",
    type: "simple",
    links: [
      { label: "Ecommerce", href: "#ecommerce" },
      { label: "Financial Services", href: "#financial-services" },
      { label: "Gaming", href: "#gaming" },
      { label: "Health Insurance", href: "#health-insurance" },
      { label: "Property & Casualty Insurance", href: "#pci" },
      { label: "SaaS", href: "#saas" },
      { label: "Travel", href: "#travel" },
    ],
  },
  { label: "Pricing", type: "link", href: "#pricing" },
  {
    label: "Resources",
    type: "highlight",
    features: [
      {
        title: "Customer stories",
        description: "See how 350+ businesses delivered exceptional customer service",
        href: "#customer-stories",
        gradient: "from-orange-400 via-rose-300 to-amber-200",
      },
      {
        title: "Documentation",
        description: "Guides, references, and tutorials to get started quickly",
        href: "#docs",
      },
      {
        title: "Community",
        description: "Join the conversation and connect with other users",
        href: "#community",
        icon: "💬",
      },
    ],
  },
];

/* ── Chevron SVG ── */

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Feature card variants ── */

function FeatureCard({ feature }: { feature: NavFeature }) {
  const hasGradient = !!feature.gradient;
  const hasIcon = !!feature.icon;
  const isTextOnly = !hasGradient && !hasIcon;

  return (
    <CloseButton
      as="a"
      href={feature.href}
      className={`flex items-start group/card ${isTextOnly ? "gap-0" : "gap-4"}`}
    >
      {/* Gradient image variant */}
      {hasGradient && (
        <div
          className={`w-24 h-20 rounded-xl bg-gradient-to-br ${feature.gradient} shrink-0`}
        />
      )}

      {/* Icon / emoji variant */}
      {hasIcon && (
        <div className="w-10 h-10 rounded-lg bg-raised flex items-center justify-center shrink-0 text-lg">
          {feature.icon}
        </div>
      )}

      <div className={hasGradient ? "py-0.5" : hasIcon ? "py-1" : ""}>
        <p className="text-sm font-semibold text-heading group-hover/card:text-black">
          {feature.title}
        </p>
        <p className="text-sm text-body mt-0.5 leading-snug">
          {feature.description}
        </p>
      </div>
    </CloseButton>
  );
}

/* ── Panel renderers per type ── */

function FeaturedPanel({ item }: { item: Extract<NavItemConfig, { type: "featured" }> }) {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-5 flex-1 min-w-[340px]">
        {item.features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
      {item.categories && (
        <div className="flex flex-col gap-6 min-w-[160px] border-l border-[#f0f0f0] pl-8">
          {item.categories.map((cat) => (
            <div key={cat.heading}>
              <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">
                {cat.heading}
              </p>
              <ul className="flex flex-col gap-1.5">
                {cat.links.map((link) => (
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

function SimplePanel({ item }: { item: Extract<NavItemConfig, { type: "simple" }> }) {
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

function HighlightPanel({ item }: { item: Extract<NavItemConfig, { type: "highlight" }> }) {
  return (
    <div className="flex flex-col gap-5 min-w-[340px]">
      {item.features.map((f) => (
        <FeatureCard key={f.title} feature={f} />
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop overlay when mobile menu is open */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ padding: scrolled ? "8px 16px 0" : "0" }}
      >
        {/* On mobile, override scrolled padding to 0 */}
        <style>{`
          @media (max-width: 767px) {
            header.fixed { padding: 0 !important; }
          }
        `}</style>

        <nav
          className={[
            `mx-auto flex items-center justify-between ${mobileOpen ? "max-md:[transition:none] md:transition-all md:duration-500 md:ease-[cubic-bezier(0.4,0,0.2,1)]" : "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"}`,
            // Desktop: scrolled morphs to pill. Mobile: always use non-scrolled style.
            scrolled
              ? "md:max-w-5xl md:h-14 md:rounded-full md:bg-white md:backdrop-blur-xl md:shadow-[0_2px_24px_-4px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.04)] max-w-7xl h-16 px-5 lg:px-8 max-md:bg-white max-md:backdrop-blur-lg"
              : `max-w-7xl h-16 px-5 lg:px-8 ${mobileOpen ? "max-md:bg-white max-md:backdrop-blur-lg" : "bg-transparent"}`,
          ].join(" ")}
        >
          {/* Mobile: hamburger + logo grouped together; Desktop: logo only */}
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

            {/* Logo */}
            <a href="/" className="font-display font-bold text-xl tracking-tight text-heading">
              LeverLoop
            </a>
          </div>

          {/* Center nav links — desktop popover menu */}
          <PopoverGroup className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.type === "link" ? (
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
                    anchor={{ to: "bottom start", gap: "16px" }}
                    transition
                    className="z-[60] bg-white rounded-2xl shadow-[0_4px_32px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-6 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    {item.type === "featured" && <FeaturedPanel item={item} />}
                    {item.type === "simple" && <SimplePanel item={item} />}
                    {item.type === "highlight" && <HighlightPanel item={item} />}
                  </PopoverPanel>
                </Popover>
              )
            )}
          </PopoverGroup>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#signin"
              className="text-body hover:text-heading transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
            <a
              href="#demo"
              className={[
                "group text-sm font-medium pl-5 pr-1.5 py-1.5 rounded-full flex items-center gap-2.5 transition-all duration-300",
                scrolled
                  ? "bg-accent-soft text-heading hover:bg-[#e0e7ff]"
                  : "bg-ink text-white hover:bg-ink-hover",
              ].join(" ")}
            >
              Get a demo
              <span className={[
                "w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-115",
                scrolled ? "bg-accent text-white" : "bg-white/20 text-white",
              ].join(" ")}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Get a demo */}
          <div className="md:hidden flex items-center">
            <a
              href="#demo"
              className="group text-sm font-medium pl-5 pr-2 py-2.5 rounded-full flex items-center gap-3 transition-all duration-300 bg-ink text-white hover:bg-ink-hover"
            >
              Get a demo
              <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </nav>

        {/* Mobile menu — flush against navbar, no gap */}
        {mobileOpen && (
          <div className="md:hidden bg-white backdrop-blur-lg border-t border-edge/50">
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-body hover:text-heading transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <hr className="border-edge" />
              <a
                href="#signin"
                className="text-sm font-medium text-body hover:text-heading transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
