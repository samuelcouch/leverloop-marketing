interface SectionHeaderProps {
  heading: string;
  subheading?: string;
  headingSize?: "sm" | "md" | "lg";
  align?: "center" | "left";
  children?: React.ReactNode;
}

const headingSizeMap = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl lg:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1]",
};

export function SectionHeader({
  heading,
  subheading,
  headingSize = "md",
  align = "center",
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : ""}>
      <h2
        className={`font-display font-bold tracking-tight text-content-primary ${headingSizeMap[headingSize]}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`text-lg text-content-secondary mt-6 leading-relaxed ${isCenter ? "max-w-2xl mx-auto" : ""}`}
        >
          {subheading}
        </p>
      )}
      {children && (
        <div
          className={`mt-8 flex flex-wrap items-center gap-3 ${isCenter ? "justify-center" : "justify-start"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
