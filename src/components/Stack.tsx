import { FadeIn } from "./FadeIn";

const tools = [
  "Notion", "Google Workspace", "Linear", "Slack", "Loom", 
  "Zapier", "Figma", "Airtable", "Superhuman", "GitHub"
];

export function Stack() {
  return (
    <section className="py-24 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Tools I Use
          </span>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12">
            The stack I recommend most often
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
          {tools.map((tool) => (
            <div 
              key={tool}
              className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium shadow-sm hover:border-primary/30 hover:shadow-soft transition-all duration-300 cursor-default"
            >
              {tool}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
