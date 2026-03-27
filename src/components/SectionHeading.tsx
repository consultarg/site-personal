import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="mb-12 md:mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {number}
          </span>
          <div className="h-[1px] w-12 bg-border"></div>
          <span className="text-sm font-medium text-foreground tracking-wide">
            {title}
          </span>
        </div>
        {subtitle && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground max-w-2xl leading-tight">
            {subtitle}
          </h2>
        )}
      </div>
    </FadeIn>
  );
}
