import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    name: "Sync",
    tag: "Operations team, 40-person company",
    problem: "Multiple disconnected tools creating duplicate work and missed deadlines.",
    solution: "Unified project tracking and communication into a single Notion-based system.",
    result: "40% reduction in status meetings. Team shipped 2x faster within 6 weeks."
  },
  {
    name: "Clarity",
    tag: "E-commerce business",
    problem: "No visibility into what technology was costing or actually being used.",
    solution: "Full audit of 23 tools. Cancelled 11, consolidated 6, negotiated better rates on 4.",
    result: "€2,400/month in savings. Leaner, faster stack."
  },
  {
    name: "Foundation",
    tag: "Pre-revenue startup",
    problem: "Founders needed a reliable, scalable tech setup from day one without burning budget.",
    solution: "Designed a minimal but professional stack: Google Workspace, Notion, Linear, Loom, Superhuman.",
    result: "Fully operational in 4 days. Zero IT overhead for 18 months."
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-widest">
                04
              </span>
              <div className="h-[1px] w-12 bg-primary-foreground/20"></div>
              <span className="text-sm font-medium text-primary-foreground tracking-wide">
                Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-2xl leading-tight">
              Selected projects
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1} fullWidth>
              <div className="group h-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-colors duration-300 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{project.name}</h3>
                  <span className="inline-block px-3 py-1 bg-primary-foreground/10 rounded-md text-xs font-medium text-primary-foreground/80">
                    {project.tag}
                  </span>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-2">Problem</h4>
                    <p className="text-primary-foreground/90">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-2">Solution</h4>
                    <p className="text-primary-foreground/90">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-2">Result</h4>
                    <p className="font-medium text-green-400">{project.result}</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex items-center gap-2 text-sm font-medium group-hover:text-primary-foreground transition-colors cursor-pointer">
                  View Details
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
