import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Stack } from "@/components/Stack";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Stack />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
