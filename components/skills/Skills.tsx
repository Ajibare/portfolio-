"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { skillIntro, skillRows } from "@/data/skills";
import { socials } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

function MarqueeRow({
  row,
  paused,
}: {
  row: (typeof skillRows)[number];
  paused: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ref.current;
    if (!track || paused) return;
    const direction = (row.direction ?? "ltr") === "rtl" ? -1 : 1;
    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: 50 * direction,
        duration: 42,
        ease: "none",
        repeat: -1,
      });
    }, ref);
    return () => ctx.revert();
  }, [row.direction, paused]);

  const group = (
    <div className="flex shrink-0 items-center">
      {row.skills.map((skill) => (
        <span
          key={skill}
          className="font-display text-2xl font-bold uppercase tracking-tight text-muted transition-colors hover:text-accent md:text-4xl"
        >
          {skill}
          <span aria-hidden className="text-accent">
            {"  //  "}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div ref={ref} className="flex w-max">
        {group}
        {group}
      </div>
    </div>
  );
}

function ShowcaseRow({ row }: { row: (typeof skillRows)[number] }) {
  const isCta = row.index === "06";
  const github = socials.find((social) => social.label === "GitHub")?.href;

  return (
    <div className="border-t border-line py-12">
      <div className="flex items-baseline justify-between gap-6">
        <p className="eyebrow">
          <span className="text-accent">{"// "}</span>
          {row.index}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          {row.label}
        </p>
      </div>

      {isCta ? (
        <Reveal className="mt-10">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group inline-flex items-center gap-4 font-display text-3xl font-bold uppercase tracking-tight text-paper transition-colors hover:text-accent md:text-5xl"
            >
              View the rest on GitHub
              <ArrowUpRight
                size={28}
                aria-hidden
                className="text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ) : (
            <span className="inline-flex max-w-xl items-center gap-3 font-display text-3xl font-bold uppercase tracking-tight text-paper md:text-5xl">
              View the rest on GitHub
              <span
                aria-hidden
                className="rounded-full border border-line px-2 py-1 font-mono text-[10px] font-normal uppercase tracking-wider text-faint"
                title="GitHub URL pending"
              >
                URL pending
              </span>
            </span>
          )}
        </Reveal>
      ) : (
        <ul className="mt-8 border-y border-line">
          {row.skills.map((skill, index) => (
            <li
              key={skill}
              className="border-b border-line last:border-b-0"
            >
              <Reveal className="group">
                <div className="grid items-baseline gap-4 py-5 md:grid-cols-[72px_1fr]">
                  <span className="font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl font-bold uppercase tracking-tight text-paper transition-colors duration-300 group-hover:text-accent md:text-5xl">
                    {skill}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Skills() {
  const paused =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section id="skills" className="section-pad shell">
      <SectionHeading
        eyebrow={skillIntro.eyebrow}
        title={skillIntro.title}
        description={skillIntro.description}
      />

      <div className="mt-16 flex flex-col md:mt-24">
        {skillRows.map((row) =>
          row.variant === "marquee" ? (
            <div key={row.index} className="border-t border-line py-6">
              <p className="eyebrow">
                <span className="text-accent">{"// "}</span>
                {row.index}
                <span className="ml-3 text-faint">{row.label}</span>
              </p>
              <MarqueeRow row={row} paused={paused} />
            </div>
          ) : (
            <ShowcaseRow key={row.index} row={row} />
          ),
        )}
      </div>
    </section>
  );
}