import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'none';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill';
  fullWidth?: boolean;
  arrow?: boolean;
  icon?: LucideIcon | React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconBubble?: boolean;
  iconBubbleClassName?: string;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  primary: 'bg-ink text-white hover:bg-ink-hover',
  secondary: 'border border-divider text-heading hover:border-muted',
  accent: 'bg-accent text-white hover:bg-accent-hover',
  ghost: 'text-accent hover:text-accent-hover',
  none: '',
};

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-6 py-3.5',
  lg: 'w-full px-6 py-3.5 text-sm',
};

const bubbleSizeStyles: Record<string, string> = {
  sm: 'text-xs pl-3 pr-1 py-1',
  md: 'text-sm pl-5 pr-1.5 py-1.5',
  lg: 'text-sm pl-6 pr-1.5 py-1.5 w-full',
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

const bubbleIconSizes: Record<string, number> = {
  sm: 12,
  md: 14,
  lg: 14,
};

const bubbleContainerSizes: Record<string, string> = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-7 h-7',
};

function resolveIcon(icon: LucideIcon | React.ReactNode, iconSize: number) {
  if (typeof icon === 'function') {
    const Icon = icon as LucideIcon;
    return <Icon size={iconSize} aria-hidden="true" />;
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
  iconBubble = false,
  iconBubbleClassName,
  href,
  children,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const hasIcon = arrow || !!icon;
  const effectiveIconBubble = iconBubble && hasIcon;

  const classes = [
    'group/btn inline-flex items-center justify-center font-semibold transition-colors',
    variantStyles[variant],
    effectiveIconBubble ? bubbleSizeStyles[size] : sizeStyles[size],
    shapeStyles[shape],
    fullWidth && 'w-full',
    hasIcon && (effectiveIconBubble ? 'gap-2.5' : 'gap-2'),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconSize = effectiveIconBubble ? bubbleIconSizes[size] : iconSizes[size];

  const rawIconEl = arrow
    ? <ArrowRight className={effectiveIconBubble ? '' : 'transition-transform group-hover/btn:translate-x-0.5'} size={iconSize} aria-hidden="true" />
    : icon ? resolveIcon(icon, iconSize) : null;

  const iconEl = effectiveIconBubble && rawIconEl ? (
    <span
      className={[
        bubbleContainerSizes[size],
        'rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110',
        iconBubbleClassName || 'bg-white/20 text-white',
      ].join(' ')}
    >
      {rawIconEl}
    </span>
  ) : rawIconEl;

  const content = (
    <>
      {iconEl && iconPosition === 'left' && iconEl}
      {children}
      {iconEl && iconPosition === 'right' && iconEl}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
