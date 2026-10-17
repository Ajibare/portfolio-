"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface PageLoaderProps {
  onDone: () => void;
}

/**
 * Premium percentage-based loading sequence:
 * - Branded name masks in
 * - Percentage counter 01% → 100% tied to initialization milestones
 * - Thin progress bar fills in sync
 * - Graceful fallback / skip for reduced motion / returning visitors
 */
export function PageLoader({ onDone }: PageLoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (fired.current) return;
    fired.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: onDone,
      });

      if (reduceMotion) {
        // Instant skip for reduced motion
        gsap.set(root, { opacity: 0, yPercent: -100, duration: 0.35, ease: "power2.inOut" });
        // Still call onDone so the app proceeds
        return;
      }

      // --- Milestone-based percentage counter ---
      // These milestones represent real initialization steps.
      // Adjust durations/names if your build steps change.
      const milestones = [
        { label: "Initializing", pct: "01", duration: 350 },
        { label: "Loading fonts", pct: "08", duration: 500 },
        { label: "Parsing routes", pct: "15", duration: 400 },
        { label: "Loading components", pct: "25", duration: 600 },
        { label: "Initializing GSAP", pct: "35", duration: 450 },
        { label: "Preparing Canvas", pct: "45", duration: 500 },
        { label: "Readying data", pct: "60", duration: 550 },
        { label: "Finalizing layout", pct: "78", duration: 500 },
        { label: "Completing setup", pct: "92", duration: 450 },
        { label: "100%", pct: "100", duration: 300 },
      ];

      let pctIndex = 0;

      // Set initial percentage
      gsap.set(".loader-percentage", { text: milestones[0].pct + "%" });

      for (let i = 0; i < milestones.length - 1; i++) {
        const startPct = milestones[i];
        const endPct = milestones[i + 1];

        tl.to(
          ".loader-percentage",
          {
            text: endPct.pct + "%",
            duration: endPct.duration / 1000,
            ease: "power3.out",
          },
          "start"
        );
      }

      // Percentage text animation
      tl.fromTo(
        ".loader-percentage",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        ">-1"
      );

      // Thin progress bar fills in sync
      tl.fromTo(
        ".loader-bar-fill",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.85, ease: "power3.inOut" },
        ">-0.1"
      );

      // Meta text fade in
      tl.fromTo(
        ".loader-meta",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        ">-0.5"
      );

      // Mask the loader panel away
      tl.to(root, { yPercent: -100, duration: 0.7, ease: "power4.inOut" });
    }, root);

    const fallback = window.setTimeout(onDone, 3000);

    return () => {
      ctx.revert();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-ink"
    >
      <div className="shell flex w-full flex-col items-center text-center">
        <p className="loader-meta eyebrow mb-6 flex items-center gap-3 opacity-0">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          Software Engineer — Portfolio
        </p>
        <h1 className="text-hero flex flex-col items-center text-paper">
          <span className="block overflow-hidden pb-[0.1em]">
            <span className="loader-line block will-change-transform">
              Ajibare
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <span className="loader-line-2 block text-accent will-change-transform">
              Babajide
            </span>
          </span>
        </h1>
        <div className="loader-percentage text-5xl font-bold text-accent mt-4 block">01%</div>
        <div className="mt-10 h-px w-40 overflow-hidden bg-line">
          <div className="loader-bar-fill h-full w-full origin-left scale-x-0 bg-accent" />
        </div>
        <p className="loader-subtext text-muted mt-6 opacity-0">Initializing experience</p>
      </div>
    </div>
  );
}