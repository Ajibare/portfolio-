"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  /** Animate immediately on mount once `play` is true instead of on scroll. */
  play?: boolean;
  stagger?: number;
  start?: string;
}

/**
 * Word-by-word masked text reveal. Meant to sit inside a semantic heading or
 * paragraph element chosen by the consumer. Each word slides up out of an
 * overflow-hidden mask when the trigger enters the viewport (or on mount when
 * `play` is provided). Respects prefers-reduced-motion by skipping the slide.
 */
export function WordReveal({
  text,
  className,
  play,
  stagger = 0.045,
  start = "top 86%",
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const words = text.split(" ");

  useEffect(() => {
    if (play === undefined) return;
    if (!play || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-word",
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1,
          stagger,
          ease: "power4.out",
          overwrite: "auto",
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [play, stagger, text]);

  useEffect(() => {
    if (play !== undefined || !ref.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = ref.current.querySelectorAll(".reveal-word");
    if (reduceMotion) {
      gsap.set(targets, { yPercent: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-word",
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
          overwrite: "auto",
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [play, stagger, start, text]);

  return (
    <span
      ref={ref}
      className={cn("block", className)}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em] align-top"
        >
          <span className="reveal-word inline-block will-change-transform">
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}