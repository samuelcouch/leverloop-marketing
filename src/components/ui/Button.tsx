import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill';
  fullWidth?: boolean;
  arrow?: boolean;
  icon?: LucideIcon | React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-interactive-primary text-interactive-contrast hover:bg-interactive-primary/90',
  secondary:
    'border border-interactive-secondary bg-background-screen text-content-primary hover:bg-background-neutral',
  accent:
    'bg-interactive-accent text-interactive-control hover:bg-interactive-accent/85',
  ghost: 'text-content-link hover:text-interactive-primary',
};

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-6 py-3.5',
  lg: 'w-full px-6 py-3.5 text-sm',
};

const shapeStyles: Record<string, string> = {
  rounded: 'rounded-xl',
  pill: 'rounded-full',
};

const iconSizes: Record<string, number> = {
  sm: 14,
  md: 16,
  lg: 16,
};

function resolveIcon(icon: LucideIcon | React.ReactNode, size: string) {
  if (typeof icon === 'function') {
    const Icon = icon as LucideIcon;
    return <Icon size={iconSizes[size]} aria-hidden="true" />;
  }
  return icon;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  fullWidth = false,
  arrow = false,
  icon,
  iconPosition = 'right',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const hasIcon = arrow || !!icon;

  const classes = [
    'group/btn inline-flex items-center justify-center font-semibold transition-colors',
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    fullWidth && 'w-full',
    hasIcon && 'gap-2',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconEl = arrow
    ? <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" size={iconSizes[size]} aria-hidden="true" />
    : icon ? resolveIcon(icon, size) : null;

  const content = (
    <>
      {iconEl && iconPosition === 'left' && iconEl}
      {children}
      {iconEl && iconPosition === 'right' && iconEl}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
