import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <FadeIn>
              <div className="relative">
                <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-border/50 shadow-soft bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80&fit=crop&crop=faces"
                    alt="Graviens Jorgh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Availability badge on the photo */}
                <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">Available for projects</span>
                </div>
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

            <div className="space-y-7 text-lg md:text-xl text-muted-foreground leading-relaxed">
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

              <FadeIn delay={0.4} className="pt-6">
                <div className="text-2xl font-serif text-foreground italic">
                  Graviens Jorgh
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
