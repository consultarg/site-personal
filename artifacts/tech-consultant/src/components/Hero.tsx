import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center border border-border/60 bg-card/50 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Tech Consultant & Systems Architect
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              I help businesses work smarter with technology.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Clarity over complexity. I map, simplify, and improve the systems that power your work, so your team can focus on what actually matters.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 hover:shadow-soft-hover transition-all active:scale-[0.98]"
            >
              Work With Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work"
              className="w-full sm:w-auto flex items-center justify-center bg-card border border-border px-8 py-4 rounded-xl font-medium text-foreground hover:bg-secondary transition-all active:scale-[0.98]"
            >
              See My Work
            </a>
          </FadeIn>
        </div>

        {/* Image/Visual Right Side */}
        <div className="lg:col-span-5 relative w-full h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-soft border border-border/40">
          <FadeIn delay={0.5} direction="left" className="w-full h-full">
            {/* Using the generated image we requested in requirements.yaml */}
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-abstract.png`}
              alt="Abstract professional workspace concept" 
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay gradient to ensure it blends nicely with the background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent mix-blend-overlay"></div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
