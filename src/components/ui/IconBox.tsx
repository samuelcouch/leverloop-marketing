interface IconBoxProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'colored';
  color?: string;
  children: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  sm: 'w-7 h-7 rounded',
  md: 'w-10 h-10 rounded-lg',
  lg: 'w-14 h-14 rounded-2xl',
};

export function IconBox({
  size = 'md',
  variant = 'default',
  color,
  children,
  className = '',
}: IconBoxProps) {
  const base = 'flex items-center justify-center';
  const sizeClass = sizeStyles[size];
  const variantClass =
    variant === 'colored' ? '' : 'bg-subtle border border-edge text-body';
  const style = variant === 'colored' && color ? { backgroundColor: color } : undefined;

  return (
    <div className={`${base} ${sizeClass} ${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
