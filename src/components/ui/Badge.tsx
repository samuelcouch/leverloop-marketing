interface BadgeProps {
  variant?: 'default' | 'pill' | 'status' | 'numbered';
  color?: 'gray' | 'indigo' | 'green' | 'yellow' | 'blue';
  children: React.ReactNode;
  className?: string;
}

const statusColors = {
  gray: 'bg-subtle text-muted border border-edge-light',
  indigo: 'bg-accent-soft text-accent',
  green: 'bg-success-soft text-heading',
  yellow: 'bg-warning-soft text-heading',
  blue: 'bg-info-soft text-heading',
};

const softColors = {
  gray: 'bg-subtle text-muted',
  indigo: 'bg-accent-soft text-accent',
  green: 'bg-success-soft text-success-dark',
  yellow: 'bg-warning-soft text-warning-dark',
  blue: 'bg-info-soft text-info',
};

const variantStyles = {
  default: 'px-3 py-1.5 rounded-full bg-white text-body',
  pill: 'px-4 py-2 rounded-full border border-heading text-sm text-heading',
  status: 'px-2.5 py-1 rounded-md text-xs font-semibold',
  numbered: 'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
};

export function Badge({
  variant = 'default',
  color = 'indigo',
  children,
  className = '',
}: BadgeProps) {
  const base = 'inline-flex items-center text-xs font-medium';
  const variantClass = variantStyles[variant];

  let colorClass = '';
  if (variant === 'status') {
    colorClass = statusColors[color] || statusColors.gray;
  } else if (variant === 'numbered') {
    colorClass = softColors[color] || softColors.indigo;
  }

  return (
    <span className={`${base} ${variantClass} ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
