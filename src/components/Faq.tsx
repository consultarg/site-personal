import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do you work with small teams or only large companies?",
    a: "I work with both. Most of my clients are teams between 5 and 50 people, but I've also helped solo founders and companies with hundreds of employees. What matters is having a real problem to solve."
  },
  {
    q: "What does a typical engagement look like?",
    a: "It starts with a free 30-minute call. After that, most projects run 2–6 weeks depending on scope. I'm transparent about timelines and deliverables from the start."
  },
  {
    q: "Do you implement the tools yourself, or just advise?",
    a: "Both. I can be as hands-on or hands-off as you need. Some clients want strategy only. Others want me to set everything up from scratch."
  },
  {
    q: "How do you charge?",
    a: "Project-based pricing for most engagements. No hourly billing surprises. You'll know the cost before we start."
  },
  {
    q: "Can you work with our existing IT team?",
    a: "Yes. I complement internal teams rather than compete with them. I often work directly with your developers, IT staff, or operations team."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-card/30 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading 
          number="06" 
          title="FAQ" 
          subtitle="Common questions" 
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.1} fullWidth>
                <div className="border border-border bg-background rounded-2xl overflow-hidden shadow-sm">
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-medium text-foreground pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "text-muted-foreground transition-transform duration-300 flex-shrink-0",
                        isOpen && "rotate-180"
                      )} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
