interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`mb-4 text-3xl lg:text-4xl tracking-tight ${className}`}>
      {children}
    </h2>
  );
} 