import { Hero } from "@/components/hero/Hero";
import { About, Stats } from "@/components/about/About";
import { Expertise } from "@/components/expertise/Expertise";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Work } from "@/components/projects/Work";
import { Services } from "@/components/services/Services";
import { TechStackShowcase } from "@/components/skills/TechStackShowcase";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Expertise />
      <Experience />
      <Work />
      <TechStackShowcase />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}