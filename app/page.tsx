import { Hero } from "@/components/hero/Hero";
import { About, Stats } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Work } from "@/components/projects/Work";
import { Services } from "@/components/services/Services";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}