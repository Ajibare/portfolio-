"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/projects";
import { cn, stripPending } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, ArrowRight } from "lucide-react";

function Cover({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      data-cursor="view"
      className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface md:aspect-auto md:h-full []
[&_img]:size-full [&_img]:object-cover"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="transition-all duration-500 [filter:grayscale(1)_brightness(0.7)] hover:[filter:none]"
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isLast,
}: {
  project: (typeof projects)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (!isLast) {
        gsap.fromTo(
          card,
          { scale: 1, opacity: 1 },
          {
            scale: 0.9,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          },
        );
      }
    }, card);
    return () => ctx.revert();
  }, [isLast]);

  return (
    <div
      ref={ref}
      className={cn(
        "project-card sticky top-0 flex h-svh items-center",
      )}
    >
      <article className="group mx-auto w-full max-w-[1400px] px-5 py-6 md:px-8">
        <div className="relative grid min-h-[calc(100svh-3rem)] overflow-hidden border border-line bg-ink md:grid-cols-2">
          <div
            className={cn(
              "flex flex-col justify-between gap-10 p-6 md:p-12",
              index % 2 === 1 ? "md:order-2" : "",
            )}
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-xs text-faint">
                {project.number}
                <span className="text-accent"> / {index + 1}</span>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {project.category}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-display mb-0 text-paper">
                {project.name}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted">
                {stripPending(project.summary)}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="link"
                  className="group/link inline-flex items-center gap-2 font-mono text-sm text-paper transition-colors hover:text-accent"
                >
                  View case study
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="text-accent transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    Live
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-faint"
                    title="Live URL pending"
                  >
                    Live{" "}
                    <span aria-hidden className="text-[10px] uppercase">
                      pending
                    </span>
                  </span>
                )}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    Source
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-faint"
                    title="Source URL pending"
                  >
                    Source{" "}
                    <span aria-hidden className="text-[10px] uppercase">
                      pending
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative hidden md:block",
              index % 2 === 1 ? "md:order-1" : "",
            )}
          >
            <Cover src={project.cover.src} alt={project.cover.alt} />
          </div>
        </div>
      </article>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative">
      <div className="shell pb-24 pt-40 md:pt-56">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built."
          description="A few products that shipped — from initial problem through to deployed software."
        />
      </div>

      <div className="relative">
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}