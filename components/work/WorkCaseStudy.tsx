"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { cn, isPending, stripPending } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function Block({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="eyebrow">
        <span className="text-accent">{"// "}</span>
        {label}
      </p>
      {children}
    </div>
  );
}

function pendingClass(text: string) {
  return isPending(text) ? "italic text-faint" : "text-muted";
}

export function WorkCaseStudy({
  project,
  next,
  prev,
}: {
  project: Project;
  next: Project;
  prev: Project;
}) {
  return (
    <article className="shell section-pad">
      <Reveal>
        <Link
          href="/#work"
          data-cursor="link"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft
            size={16}
            aria-hidden
            className="text-accent transition-transform group-hover:-translate-x-1"
          />
          All work
        </Link>
      </Reveal>

      <header className="mt-14 border-y border-line py-14 md:mt-20">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-sm text-faint">
              {project.number}
              <span className="text-accent"> / case study</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {project.category}
            </p>
          </div>
        </Reveal>

        <h1 className="text-hero mt-10 text-paper">
          <WordReveal text={project.name} />
        </h1>

        <Reveal>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg text-muted">
            {stripPending(project.summary)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="group/link inline-flex items-center gap-2 font-mono text-sm text-paper transition-colors hover:text-accent"
              >
                Visit live site
                <ArrowUpRight size={16} aria-hidden className="text-accent" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-sm text-faint">
                Live URL pending
              </span>
            )}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="group/link inline-flex items-center gap-2 font-mono text-sm text-paper transition-colors hover:text-accent"
              >
                View source
                <ArrowUpRight size={16} aria-hidden className="text-accent" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-sm text-faint">
                Source URL pending
              </span>
            )}
          </div>
        </Reveal>
      </header>

      <Reveal className="mt-14 md:mt-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-surface">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[1fr_1fr]">
        <Block label="Overview">
          <p className={cn("max-w-xl text-base leading-relaxed md:text-lg", pendingClass(project.overview))}>
            {project.overview}
          </p>
        </Block>

        <Block label="My role">
          <p className={cn("max-w-xl text-base leading-relaxed md:text-lg", pendingClass(project.role))}>
            {project.role}
          </p>
        </Block>

        <Block label="Problem">
          <p className={cn("max-w-xl text-base leading-relaxed", pendingClass(project.problem))}>
            {project.problem}
          </p>
        </Block>

        <Block label="Solution">
          <p className={cn("max-w-xl text-base leading-relaxed", pendingClass(project.solution))}>
            {project.solution}
          </p>
        </Block>
      </div>

      <div className="mt-16 border-t border-line pt-12 md:mt-24">
        <Block label="Architecture & scale">
          <p className={cn("max-w-3xl text-base leading-relaxed", pendingClass(project.architecture))}>
            {project.architecture}
          </p>
        </Block>
      </div>

      <div className="mt-16 border-t border-line pt-12 md:mt-24">
        <Block label="Key features">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="grid items-baseline gap-4 py-5 md:grid-cols-[72px_1fr]"
              >
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-xl font-medium text-paper md:text-2xl",
                    isPending(feature) && "italic text-faint",
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div className="mt-16 border-t border-line pt-12 md:mt-24">
        <Block label="Results">
          {project.results.length > 0 ? (
            <ul className="flex flex-col gap-4">
              {project.results.map((result) => (
                <li
                  key={result}
                  className={cn(
                    "flex gap-3 text-base leading-relaxed",
                    pendingClass(result),
                  )}
                >
                  <span aria-hidden className="text-accent">
                    —
                  </span>
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-xl text-sm italic leading-relaxed text-faint">
              Metrics are never invented — verified results will be added by the
              owner once the project is released.
            </p>
          )}
        </Block>
      </div>

      <nav className="mt-24 grid gap-4 border-t border-line pt-14 sm:grid-cols-2 md:mt-32">
        <Link
          href={`/work/${prev.slug}`}
          data-cursor="link"
          className="group flex flex-col gap-3 border border-line bg-surface p-6 transition-colors hover:border-accent"
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            ← Previous
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-tight text-paper transition-colors group-hover:text-accent md:text-2xl">
            {prev.name}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          data-cursor="link"
          className="group flex flex-col items-end gap-3 border border-line bg-surface p-6 text-right transition-colors hover:border-accent"
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            Next →
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-tight text-paper transition-colors group-hover:text-accent md:text-2xl">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  );
}