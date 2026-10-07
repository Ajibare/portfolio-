"use client";

import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-pad shell">
      <SectionHeading
        eyebrow="Services"
        title="What I can do for you."
        description="Clear scope, honest effort, and software that survives contact with the real world."
      />

      <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.index} delay={index * 0.06}>
            <article
              data-cursor="view"
              className="group flex h-full flex-col justify-between gap-14 border border-line bg-surface p-8 transition-colors duration-300 hover:border-accent md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-xs text-faint">
                  <span className="text-accent">{service.index}</span>
                  {" / service"}
                </p>
                <ArrowUpRight
                  size={20}
                  aria-hidden
                  className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-paper md:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}