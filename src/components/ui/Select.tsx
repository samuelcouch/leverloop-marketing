interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'dark';
  label?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

const variantStyles: Record<string, string> = {
  default:
    'w-full px-4 py-3 pr-10 rounded-full border border-interactive-secondary bg-background-screen text-sm text-content-secondary focus:outline-none focus:border-interactive-primary focus:ring-2 focus:ring-interactive-accent/35 appearance-none',
  dark:
    'w-full px-4 py-3 pr-10 rounded-full border border-interactive-secondary bg-background-overlay text-sm text-content-primary focus:outline-none focus:border-interactive-primary focus:ring-2 focus:ring-interactive-accent/35 appearance-none',
};

const labelStyles: Record<string, string> = {
  default: 'block text-sm font-medium text-content-primary mb-2',
  dark: 'block text-sm font-medium text-content-primary mb-2',
};

const iconStyles: Record<string, string> = {
  default: 'text-content-tertiary',
  dark: 'text-content-secondary',
};

export default function Select({
  variant = 'default',
  label,
  options,
  placeholder,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {label && (
        <label htmlFor={selectId} className={labelStyles[variant]}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={`${variantStyles[variant]} ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 ${iconStyles[variant]}`}
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
