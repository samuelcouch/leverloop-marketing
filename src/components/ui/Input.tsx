interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'dark';
  label?: string;
}

const variantStyles: Record<string, string> = {
  default:
    'w-full px-4 py-3 rounded-full border border-heading text-sm placeholder:text-muted focus:outline-none focus:border-heading',
  dark: 'w-full px-4 py-3 rounded-full border bg-white/10 border-white/60 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white',
};

const labelStyles: Record<string, string> = {
  default: 'block text-sm font-medium text-heading mb-2',
  dark: 'block text-sm font-medium text-white mb-2',
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
