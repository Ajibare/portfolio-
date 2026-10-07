"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { experience } from "@/data/experience";
import { cn, isPending } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-rail",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        },
      );
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 46 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 82%", once: true },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="experience" className="section-pad shell">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked."
        description="A short record of the teams and products I've been building with."
      />

      <div className="relative mt-16 md:mt-24">
        <span
          aria-hidden
          className="timeline-rail absolute left-[3px] top-0 h-full w-px bg-line md:left-[180px]"
        />
        <ol className="flex flex-col">
          {experience.map((item) => (
            <li
              key={item.id}
              className="timeline-item relative border-b border-line py-12 first:border-t md:grid md:grid-cols-[180px_1fr] md:gap-12"
            >
              <span
                aria-hidden
                className="absolute left-0 top-12 size-[7px] rounded-full border border-accent bg-ink"
              />
              <div className="mb-5 flex flex-col gap-2 md:mb-0 md:pt-1">
                <p className="font-mono text-sm text-paper">{item.period}</p>
                {item.location ? (
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {item.location}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-5 md:pl-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-paper md:text-[2rem]">
                    {item.company}
                  </h3>
                  <p className="eyebrow">
                    <span className="text-accent">{item.role}</span>
                  </p>
                </div>
                <p
                  className={cn(
                    "max-w-2xl text-base leading-relaxed",
                    isPending(item.summary)
                      ? "italic text-faint"
                      : "text-muted",
                  )}
                >
                  {item.summary}
                </p>
                {item.highlights.length > 0 ? (
                  <ul className="flex max-w-2xl flex-col gap-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={cn(
                          "flex gap-3 text-sm leading-relaxed",
                          isPending(highlight) ? "italic text-faint" : "text-muted",
                        )}
                      >
                        <span aria-hidden className="text-accent">
                          —
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}