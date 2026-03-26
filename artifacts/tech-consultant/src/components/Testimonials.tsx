import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./FadeIn";

const testimonials = [
  {
    quote: "Alex completely changed how we think about our tools. What felt overwhelming is now simple. The clarity he brought was worth more than any software.",
    author: "Sarah K.",
    role: "Head of Operations, Meridian Group"
  },
  {
    quote: "I've worked with a lot of consultants. Alex is different — he actually listens before he speaks. The plan he put together was exactly what we needed.",
    author: "James T.",
    role: "Co-founder, Volta Studio"
  },
  {
    quote: "We thought we had a tech problem. Turns out we had a process problem. Alex helped us see that, then helped us fix it.",
    author: "Lena M.",
    role: "CEO, Blanco Agency"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          number="05" 
          title="Testimonials" 
          subtitle="What clients say" 
        />
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <StaggerItem key={index}>
              <div className="h-full bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm flex flex-col">
                <div className="text-4xl font-serif text-primary/20 mb-4">"</div>
                <p className="text-lg text-foreground leading-relaxed flex-grow mb-8">
                  {test.quote}
                </p>
                <div>
                  <div className="font-medium text-foreground">{test.author}</div>
                  <div className="text-sm text-muted-foreground">{test.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
