"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { about } from "@/data/about";
import { stats } from "@/data/stats";
import { WordReveal } from "@/components/ui/WordReveal";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad shell relative">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">
          <span className="text-accent">{"// "}</span>
          {about.eyebrow}
        </p>
        <h2 className="max-w-5xl">
          <span className="text-display block text-paper">
            <WordReveal text="I'm a full-stack software engineer who enjoys turning" />
          </span>
          <span className="text-display block text-paper">
            <WordReveal text="complex problems into" />
          </span>
          <span className="text-display block">
            <span className="text-serif-accent text-accent">
              <WordReveal text={about.highlight} />
            </span>
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-14 border-t border-line pt-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8 max-w-2xl">
          {about.bio.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 32)}>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal delay={0.15}>
            <p className="eyebrow mb-6">Areas of focus</p>
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <span className="font-display text-lg font-medium text-paper uppercase tracking-tight">
                    {item}
                  </span>
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatNumber({ value, suffix }: { value: number | "∞"; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (value === "∞") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.textContent = `${value}${suffix ?? ""}`;
      return;
    }
    const state = { current: 0 };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        current: value,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = `${Math.round(state.current)}${suffix ?? ""}`;
        },
      });
    });
    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span
      ref={ref}
      className="font-display text-5xl font-bold tracking-tight text-paper tabular-nums md:text-6xl"
    >
      {value === "∞" ? "∞" : "0"}
    </span>
  );
}

export function Stats() {
  return (
    <div className="shell border-y border-line">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className="border-b border-line py-10 [&:nth-child(even)]:border-l lg:border-b-0 [&:not(:first-child)]:lg:border-l lg:py-8"
          >
            <div className="flex flex-col gap-3 px-6 first:pl-0 lg:px-10">
              <StatNumber value={stat.value} suffix={stat.suffix} />
              <p className="eyebrow">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}