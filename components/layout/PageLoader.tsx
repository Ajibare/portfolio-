"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface PageLoaderProps {
  onDone: () => void;
}

/**
 * Short branded loading sequence: the name masks up, a hairline fills, then
 * the panel slides away. Never blocks for more than ~1.5s, and collapses to
 * near-instant when the user prefers reduced motion.
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
        gsap.set(".loader-line-fill", { scaleX: 1 });
        tl.to(root, { yPercent: -100, duration: 0.35, ease: "power2.inOut" });
        return;
      }

      tl.fromTo(
        ".loader-line",
        { yPercent: 120 },
        { yPercent: 0, duration: 0.6 },
      )
        .fromTo(
          ".loader-line-2",
          { yPercent: 120 },
          { yPercent: 0, duration: 0.6 },
          "-=0.42",
        )
        .fromTo(
          ".loader-meta",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.5",
        )
        .fromTo(
          ".loader-bar-fill",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.85, ease: "power3.inOut" },
          "=-0.1",
        )
        .to(root, { yPercent: -100, duration: 0.7, ease: "power4.inOut" });
    }, root);

    const fallback = window.setTimeout(onDone, 2500);

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
        <div className="mt-10 h-px w-40 overflow-hidden bg-line">
          <div className="loader-bar-fill h-full w-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </div>
  );
}