"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  /** How strongly the element is pulled toward the cursor. 0 disables. */
  strength?: number;
  className?: string;
}

/**
 * Wraps children in a subtle magnetic field that eases the element toward the
 * pointer and snaps it back on leave. Reduced-motion respects the preference
 * by disabling the effect.
 */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const relX = event.clientX - (bounds.left + bounds.width / 2);
    const relY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}