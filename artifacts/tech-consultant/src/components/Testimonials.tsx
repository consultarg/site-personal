import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Graviens completely changed how we think about our tools. What felt overwhelming is now simple. The clarity he brought was worth more than any software.",
    author: "Sarah K.",
    role: "Head of Operations, Meridian Group"
  },
  {
    quote: "I've worked with a lot of consultants. Graviens is different — he actually listens before he speaks. The plan he put together was exactly what we needed.",
    author: "James T.",
    role: "Co-founder, Volta Studio"
  },
  {
    quote: "We thought we had a tech problem. Turns out we had a process problem. Graviens helped us see that, then helped us fix it.",
    author: "Lena M.",
    role: "CEO, Blanco Agency"
  },
  {
    quote: "Working with Graviens felt less like hiring a consultant and more like having a thoughtful partner. He understood our goals before we did.",
    author: "Marcus D.",
    role: "VP Product, Northfleet"
  },
  {
    quote: "The audit alone saved us hours every week. But the bigger win was finally having a system we all understood and actually used.",
    author: "Amara O.",
    role: "Founder, Kindly Labs"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX.current < -50) next();
    else if (dragDeltaX.current > 50) prev();
  };

  return (
    <section className="py-24 md:py-32 bg-card/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="05"
          title="Testimonials"
          subtitle="What clients say"
        />

        <FadeIn>
          <div
            className="relative mt-4 select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            style={{ touchAction: "pan-y" }}
          >
            {/* Card */}
            <div className="overflow-hidden">
              <div
                className="transition-all duration-500 ease-in-out"
                style={{ minHeight: "280px" }}
              >
                <div className="bg-background border border-border rounded-2xl p-10 md:p-14 shadow-sm max-w-3xl mx-auto">
                  <div className="text-5xl font-serif text-primary/15 mb-6 leading-none">"</div>
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium mb-10">
                    {testimonials[current].quote}
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[current].author}</div>
                    <div className="text-sm text-muted-foreground mt-1">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between max-w-3xl mx-auto mt-8">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      i === current
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-muted-foreground"
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
