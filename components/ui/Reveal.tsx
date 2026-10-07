"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface RevealProps {
  className?: string;
  children: ReactNode;
  delay?: number;
  y?: number;
  start?: string;
  duration?: number;
}

/**
 * Fade-up reveal driven by ScrollTrigger. Instantly visible when the user
 * prefers reduced motion.
 */
export function Reveal({
  className,
  children,
  delay = 0,
  y = 36,
  start = "top 88%",
  duration = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start, once: true },
          overwrite: "auto",
        },
      );
    });
    return () => ctx.revert();
  }, [delay, y, start, duration]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}