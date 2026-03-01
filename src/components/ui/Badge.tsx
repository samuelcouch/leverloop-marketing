interface BadgeProps {
  variant?: 'default' | 'pill' | 'status' | 'numbered';
  color?: 'gray' | 'indigo' | 'green' | 'yellow' | 'blue';
  children: React.ReactNode;
  className?: string;
}

const statusColors = {
  gray: 'bg-background-neutral text-content-secondary border border-border-neutral',
  indigo: 'bg-secondary-bright-pink text-secondary-dark-maroon',
  green: 'bg-core-bright-green text-core-forest-green',
  yellow: 'bg-secondary-bright-yellow text-secondary-dark-gold',
  blue: 'bg-secondary-bright-blue text-core-forest-green',
};

const softColors = {
  gray: 'bg-background-neutral text-content-secondary',
  indigo: 'bg-secondary-bright-pink text-secondary-dark-maroon',
  green: 'bg-core-bright-green text-core-forest-green',
  yellow: 'bg-secondary-bright-yellow text-secondary-dark-gold',
  blue: 'bg-secondary-bright-blue text-core-forest-green',
};

const variantStyles = {
  default: 'px-3 py-1.5 rounded-full bg-background-elevated text-content-secondary',
  pill: 'px-4 py-2 rounded-full border border-interactive-secondary text-sm text-content-primary',
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
