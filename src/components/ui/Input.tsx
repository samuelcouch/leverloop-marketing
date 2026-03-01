interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'dark';
  label?: string;
}

const variantStyles: Record<string, string> = {
  default:
    'w-full px-4 py-3 rounded-full border border-interactive-secondary bg-background-screen text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:border-interactive-primary focus:ring-2 focus:ring-interactive-accent/35',
  dark:
    'w-full px-4 py-3 rounded-full border border-interactive-secondary bg-background-overlay text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:border-interactive-primary focus:ring-2 focus:ring-interactive-accent/35',
};

const labelStyles: Record<string, string> = {
  default: 'block text-sm font-medium text-content-primary mb-2',
  dark: 'block text-sm font-medium text-content-primary mb-2',
};

export default function Input({
  variant = 'default',
  label,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className={labelStyles[variant]}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${variantStyles[variant]} ${className}`}
        {...props}
      />
    </div>
  );
}
