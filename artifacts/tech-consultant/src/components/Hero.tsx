import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center border border-border/60 bg-card/50 rounded-full px-4 py-1.5 mb-10 shadow-sm">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Tech Consultant & Systems Architect
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
              I help businesses work smarter with technology.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Clarity over complexity. I map, simplify, and improve the systems that power your work.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 hover:shadow-soft-hover transition-all active:scale-[0.98]"
            >
              Work With Me
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center bg-card border border-border px-8 py-4 rounded-xl font-medium text-foreground hover:bg-secondary transition-all active:scale-[0.98]"
            >
              See My Work
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
