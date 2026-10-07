"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Download, MoveDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { useSiteReady } from "@/lib/site-context";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

const Scene3D = dynamic(() => import("@/components/hero/Scene3D"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const ready = useSiteReady();
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ready || !rootRef.current) return;
    // Respect prefers-reduced-motion: skip the choreography, show everything.
    if (reduced) {
      gsap.set(".hero-line, .hero-fade", { clearProps: "all" });
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-line",
        { yPercent: 120 },
        { yPercent: 0, duration: 1.15, stagger: 0.12 },
      )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.09 },
          "-=0.6",
        )
        .fromTo(
          ".hero-scene",
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
          "-=0.9",
        );
    }, rootRef);
    return () => ctx.revert();
  }, [ready, reduced]);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-ink"
    >
      {/* Depth & technical grid, kept extremely subtle */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_72%_18%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="hero-scene absolute inset-0 opacity-0 [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(85%_70%_at_50%_38%,black,transparent)]" />
      </div>

      {/* Lazy 3D stage */}
      <div
        aria-hidden
        className="hero-scene pointer-events-none absolute inset-y-0 right-0 z-[1] w-[62%] opacity-0 [mask-image:linear-gradient(90deg,transparent_0%,black_38%)] sm:w-[52%] lg:w-[46%]"
      >
        {ready && !reduced ? <Scene3D /> : null}
      </div>

      <div className="shell relative z-10 flex flex-1 flex-col justify-center pt-24 pb-10 md:pt-36">
        {/* Availability */}
        <div className="hero-fade mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 opacity-0 md:mb-12">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {site.availability}
          </p>
          <span className="hidden size-1 rounded-full bg-line sm:block" aria-hidden />
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:block">
            {site.location} — 2026
          </p>
        </div>

        {/* Name */}
        <h1 className="text-hero text-paper" aria-label={`${site.firstName} ${site.lastName}`}>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line block will-change-transform">
              {site.firstName.toUpperCase()}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <span className="hero-line block will-change-transform">
              {site.lastName.toUpperCase()}
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        {/* Role */}
        <div className="hero-fade mt-8 flex items-center gap-4 opacity-0 md:mt-10">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
            {site.role}
          </span>
          <span className="h-px w-16 bg-line" aria-hidden />
          <span className="hidden font-mono text-[12px] uppercase tracking-[0.2em] text-muted min-[420px]:block">
            Frontend · Full-stack
          </span>
        </div>

        {/* Statement + actions */}
        <div className="mt-8 flex flex-col gap-10 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-base leading-relaxed text-muted opacity-0 md:text-lg">
            {site.tagline}
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4 opacity-0">
            <Magnetic strength={0.25}>
              <Button href="#contact" variant="primary" size="md">
                Hire Me
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href="#work" variant="ghost" size="md">
                View My Work
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button
                href={site.resumePath}
                variant="text"
                size="md"
                download
                aria-label={`Download ${site.name} resume (PDF)`}
              >
                <Download size={14} aria-hidden />
                Download Resume
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade shell relative z-10 mb-8 flex items-center gap-4 opacity-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-faint">
          Scroll
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-line" aria-hidden>
          <span className="absolute left-0 top-0 h-4 w-px animate-[cue-drop_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
        <MoveDown
          size={13}
          className="text-faint"
          aria-hidden
        />
      </div>
    </section>
  );
}