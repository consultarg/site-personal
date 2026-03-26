import { Lightbulb, Settings, Monitor, GitMerge } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./FadeIn";

const services = [
  {
    Icon: Lightbulb,
    title: "Tech Consulting",
    description: "Helping you understand your technology landscape and make decisions with confidence. No jargon, no upsell."
  },
  {
    Icon: Settings,
    title: "System Optimization",
    description: "Auditing existing tools and workflows to eliminate friction, reduce cost, and improve reliability."
  },
  {
    Icon: Monitor,
    title: "Digital Setup",
    description: "Building the foundational tech stack for teams that are just getting started or need a clean reset."
  },
  {
    Icon: GitMerge,
    title: "Workflow Improvement",
    description: "Mapping and redesigning how your team works day-to-day, from tools to processes to documentation."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="02"
          title="Services"
          subtitle="What I do"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map(({ Icon, title, description }, index) => (
            <StaggerItem key={index}>
              <div className="group h-full bg-background border border-border rounded-2xl p-8 shadow-sm hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
