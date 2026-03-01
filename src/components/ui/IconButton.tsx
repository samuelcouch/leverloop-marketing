interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'soft';
  href?: string;
  label: string;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<IconButtonProps['variant']>, string> = {
  outline:
    'border border-border-neutral bg-background-elevated text-content-tertiary hover:text-content-primary hover:border-interactive-primary',
  ghost: 'text-content-tertiary hover:text-content-secondary',
  primary:
    'bg-interactive-primary text-interactive-contrast hover:bg-interactive-primary/90',
};

const sizeStyles: Record<NonNullable<IconButtonProps['size']>, string> = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
};

const shapeStyles: Record<NonNullable<IconButtonProps['shape']>, string> = {
  circle: 'rounded-full',
  soft: 'rounded-lg',
};

export default function IconButton({
  variant = 'outline',
  size = 'md',
  shape = 'circle',
  href,
  label,
  children,
  className = '',
  type = 'button',
  ...props
}: IconButtonProps) {
  const classes = [
    'inline-flex items-center justify-center transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-accent/35',
    'disabled:pointer-events-none disabled:opacity-40',
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} aria-label={label}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={label} {...props}>
      {children}
    </button>
  );
}
