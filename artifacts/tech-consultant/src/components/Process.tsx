import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "I listen first. Understanding your current state, your frustrations, and your goals before making any recommendations."
  },
  {
    num: "02",
    title: "Plan",
    desc: "A clear, written plan. What will change, why it will change, and what success looks like."
  },
  {
    num: "03",
    title: "Execute",
    desc: "Careful, methodical implementation. I work alongside your team or independently, depending on what's needed."
  },
  {
    num: "04",
    title: "Refine",
    desc: "After the dust settles, we review. Systems need tuning. I stay involved until the result is right."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          number="03" 
          title="Process" 
          subtitle="How I work" 
        />
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-border/60 z-0"></div>
          
          {steps.map((step, index) => (
            <StaggerItem key={index} className="relative z-10">
              <div className="flex flex-col">
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center text-lg font-semibold text-foreground mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
