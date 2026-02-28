import { footerCopy } from '../../data/landing';

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-edge" id="footer">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path
                  d="M6 6H34V30H58V58H30V34H6V6Z"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display font-bold text-xl">LeverLoop</span>
            </div>
            <p className="text-sm text-body mt-3">{footerCopy.tagline}</p>
          </div>

          {footerCopy.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-semibold text-sm text-heading mb-4">{column.heading}</h3>
              <div className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-body hover:text-heading transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-edge-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">{footerCopy.copyright}</span>
          <div className="flex items-center gap-6">
            {footerCopy.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-body transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
