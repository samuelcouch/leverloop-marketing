interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'dark';
  label?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

const variantStyles: Record<string, string> = {
  default:
    "w-full px-4 py-3 rounded-full border border-heading text-sm text-body bg-white focus:outline-none focus:border-heading appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat",
  dark: "w-full px-4 py-3 rounded-full border bg-white/10 border-white/60 text-white text-sm focus:outline-none focus:border-white appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat",
};

const labelStyles: Record<string, string> = {
  default: 'block text-sm font-medium text-heading mb-2',
  dark: 'block text-sm font-medium text-white mb-2',
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
    </div>
  );
}
