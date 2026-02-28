const columns = [
  {
    heading: "Product",
    links: [
      "Migrate your CRM",
      "Browser Extension",
      "Desktop App",
      "Integrations",
      "Changelog",
    ],
  },
  {
    heading: "Use Cases",
    links: [
      "For Sales Teams",
      "For Agencies",
      "For Startups",
      "For Partnerships",
      "For Venture Capital",
    ],
  },
  {
    heading: "Resources",
    links: ["Help Center", "Tutorials", "Blog", "API Docs", "Free Tools"],
  },
  {
    heading: "Company",
    links: ["We're hiring", "Become an Affiliate", "Contact Us"],
  },
];

const bottomLinks = ["Terms of Service", "Privacy Policy", "Cookie Settings"];

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-edge">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <span className="font-display font-bold text-xl">LeverLoop</span>
            <p className="text-sm text-body mt-3">
              The CRM that adapts to your needs.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-semibold text-sm text-heading mb-4">
                {col.heading}
              </h3>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-body hover:text-heading transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-edge-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">
            © 2026 LeverLoop. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted hover:text-body transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
