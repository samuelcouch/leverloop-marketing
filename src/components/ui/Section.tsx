interface SectionProps {
  children: React.ReactNode;
  padding?: "default" | "compact";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "default" | "muted" | "dark";
  className?: string;
  id?: string;
}

const paddingMap = {
  default: "py-20 lg:py-28",
  compact: "py-16 lg:py-20",
};

const maxWidthMap = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  full: "max-w-7xl",
};

const backgroundMap = {
  default: "",
  muted: "bg-background-neutral",
  dark: "bg-core-forest-green text-core-bright-green",
};

export function Section({
  children,
  padding = "default",
  maxWidth = "full",
  background = "default",
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${paddingMap[padding]} ${backgroundMap[background]} ${className ?? ""}`.trim()}
    >
      <div className={`${maxWidthMap[maxWidth]} mx-auto px-5 lg:px-8`}>
        {children}
      </div>
    </section>
  );
}
