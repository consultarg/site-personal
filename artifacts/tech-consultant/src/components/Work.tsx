import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    name: "Sync",
    tag: "Operations · 40-person company",
    problem: "Multiple disconnected tools creating duplicate work and missed deadlines.",
    solution: "Unified project tracking and communication into a single Notion-based system.",
    result: "40% reduction in status meetings. Team shipped 2× faster within 6 weeks."
  },
  {
    name: "Clarity",
    tag: "E-commerce · Retail",
    problem: "No visibility into what technology was costing or actually being used.",
    solution: "Full audit of 23 tools. Cancelled 11, consolidated 6, negotiated better rates on 4.",
    result: "€2,400/month in savings. Leaner, faster stack."
  },
  {
    name: "Foundation",
    tag: "Startup · Pre-revenue",
    problem: "Founders needed a reliable, scalable tech setup from day one without burning budget.",
    solution: "Designed a minimal but professional stack: Google Workspace, Notion, Linear, Loom.",
    result: "Fully operational in 4 days. Zero IT overhead for 18 months."
  },
  {
    name: "Signal",
    tag: "SaaS · 15-person team",
    problem: "Engineering and product teams working in silos — decisions were slow and misaligned.",
    solution: "Redesigned the team's communication flow and tooling around a single async-first process.",
    result: "Decision cycle cut from 5 days to under 24 hours. Two fewer recurring syncs per week."
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                04
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-sm font-medium text-white/70 tracking-wide">
                Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-2xl leading-tight">
              Selected projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.08} fullWidth>
              <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.name}</h3>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/60">
                    {project.tag}
                  </span>
                </div>

                <div className="space-y-5 flex-grow">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-white/40 mb-2 font-medium">Problem</h4>
                    <p className="text-white/80 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-white/40 mb-2 font-medium">Solution</h4>
                    <p className="text-white/80 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-white/40 mb-2 font-medium">Result</h4>
                    <p className="text-emerald-400 font-medium leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors cursor-pointer">
                  View Details
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
