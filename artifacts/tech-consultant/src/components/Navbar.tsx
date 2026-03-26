import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo & Status */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            Graviens Jorgh
          </a>
          <div className="hidden md:flex items-center gap-2 bg-card border border-border/50 rounded-full px-3 py-1 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] py-6 shadow-soft" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] w-full bg-border"></div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center font-medium bg-primary text-primary-foreground px-5 py-3 rounded-lg hover:bg-primary/90 transition-all"
          >
            Let's Talk
          </a>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
