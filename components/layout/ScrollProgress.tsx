"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent progress bar across the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[110] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}