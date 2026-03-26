import { useState } from "react";
import { Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Form */}
          <div>
            <SectionHeading 
              number="07" 
              title="Contact" 
              subtitle="Let's talk." 
            />
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                Whether you have a specific challenge or just want to explore what's possible — I'm happy to hear from you.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Right: Direct Contact Info */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                <h3 className="text-xl font-medium text-foreground mb-8">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <a href="mailto:alex@alexmorgan.co" className="text-lg font-medium text-foreground hover:text-primary/70 transition-colors">
                        alex@alexmorgan.co
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                      <a href="tel:+15550123456" className="text-lg font-medium text-foreground hover:text-primary/70 transition-colors">
                        +1 (555) 012-3456
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <div className="text-sm text-muted-foreground mb-4">
                    I typically respond within 24 hours.
                  </div>
                  <div className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Currently available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
