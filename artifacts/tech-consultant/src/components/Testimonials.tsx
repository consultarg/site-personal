import { useState, useRef } from "react";
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
  },
  {
    quote: "Straightforward, honest, and thorough. Graviens told us what we needed to hear, not just what we wanted. That made all the difference.",
    author: "Tom R.",
    role: "Operations Lead, Faro Digital"
  }
];

// Number of cards visible per breakpoint
const CARDS_DESKTOP = 3;
const CARDS_TABLET = 2;
const CARDS_MOBILE = 1;

function useVisibleCount() {
  if (typeof window === "undefined") return CARDS_DESKTOP;
  if (window.innerWidth < 640) return CARDS_MOBILE;
  if (window.innerWidth < 1024) return CARDS_TABLET;
  return CARDS_DESKTOP;
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragging = useRef(false);

  // Responsive: determine cols by screen width on client
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return CARDS_DESKTOP;
    if (window.innerWidth < 640) return CARDS_MOBILE;
    if (window.innerWidth < 1024) return CARDS_TABLET;
    return CARDS_DESKTOP;
  });

  // Listen for resize
  useState(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      if (window.innerWidth < 640) setVisibleCount(CARDS_MOBILE);
      else if (window.innerWidth < 1024) setVisibleCount(CARDS_TABLET);
      else setVisibleCount(CARDS_DESKTOP);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  const totalPages = Math.ceil(testimonials.length / visibleCount);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const delta = e.clientX - dragStartX.current;
    if (delta < -60) next();
    else if (delta > 60) prev();
  };

  const translateX = -(page * 100);

  return (
    <section className="py-24 md:py-32 bg-card/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="05"
          title="Testimonials"
          subtitle="What clients say"
        />

        <FadeIn>
          <div className="relative overflow-hidden">
            {/* Sliding track */}
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(${translateX}%)` }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {/* Pages */}
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${visibleCount}, 1fr)`
                  }}
                >
                  {testimonials
                    .slice(pageIndex * visibleCount, pageIndex * visibleCount + visibleCount)
                    .map((t, i) => (
                      <div
                        key={i}
                        className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col h-full select-none"
                      >
                        <div className="text-4xl font-serif text-primary/15 mb-4 leading-none">"</div>
                        <p className="text-foreground leading-relaxed flex-grow mb-8 text-base md:text-lg">
                          {t.quote}
                        </p>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{t.author}</div>
                          <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === page
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={page === 0}
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={page === totalPages - 1}
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
