import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Large Number Background element */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <FadeIn>
              <div className="sticky top-32 text-[16rem] leading-none font-bold text-muted/30 tracking-tighter -ml-8">
                01
              </div>
            </FadeIn>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <SectionHeading 
              number="01" 
              title="About" 
              subtitle="Structured thinking. Clear outcomes." 
            />
            
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  I've spent the past decade helping teams and companies cut through technological noise. My work is about understanding systems at their core — finding what's broken, what's unnecessary, and what needs to change.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p>
                  I don't sell software. I help you understand your options, make better decisions, and put the right tools in place. The result is a technology environment that actually serves your work, rather than adding to it.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p>
                  Every engagement starts with listening. I ask the right questions before offering any answers.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="pt-8">
                <div className="text-2xl font-serif text-foreground italic">
                  Alex Morgan
                </div>
              </FadeIn>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
