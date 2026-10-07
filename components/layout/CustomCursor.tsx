"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorMode = "dot" | "link" | "click" | "view" | "text";

const CURSOR_MODES = ["link", "click", "view", "text"] as const;

function subscribeFinePointer(onChange: () => void): () => void {
  const query = window.matchMedia("(pointer: fine)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getFinePointer(): boolean {
  return window.matchMedia("(pointer: fine)").matches;
}

/** True only on devices with a fine pointer (mouse/trackpad), never touch. */
function useFinePointer(): boolean {
  return useSyncExternalStore(subscribeFinePointer, getFinePointer, () => false);
}

function detectMode(target: EventTarget | null): CursorMode {
  const element = target as HTMLElement | null;
  if (!element || typeof element.closest !== "function") return "dot";

  const tagged = element.closest("[data-cursor]");
  if (tagged) {
    const mode = tagged.getAttribute("data-cursor");
    if (CURSOR_MODES.some((m) => m === mode)) return mode as CursorMode;
  }

  if (element.closest("input, textarea, select, [contenteditable='true']")) {
    return "text";
  }
  if (element.closest("button, [role='button']")) return "click";
  if (element.closest("a")) return "link";
  return "dot";
}

function modeLabel(mode: CursorMode): string | null {
  switch (mode) {
    case "link":
      return "↗";
    case "click":
      return "CLICK";
    case "view":
      return "VIEW";
    default:
      return null;
  }
}

/**
 * Bespoke cursor for fine pointers only. A small dot trails the pointer; a
 * pill swaps in labelled help state over links, buttons and project cards.
 * Never rendered on touch/coarse pointers.
 */
export function CustomCursor() {
  const enabled = useFinePointer();
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("dot");
  const reduced = useReducedMotion();
  const hoveringWindow = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const stiffness = reduced ? 900 : 520;
  const damping = reduced ? 60 : 46;
  const dotX = useSpring(x, { stiffness, damping, mass: 0.45 });
  const dotY = useSpring(y, { stiffness, damping, mass: 0.45 });
  const pillX = useSpring(x, { stiffness: 300, damping: 34 });
  const pillY = useSpring(y, { stiffness: 300, damping: 34 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: PointerEvent) => {
      hoveringWindow.current = true;
      setVisible(true);
      x.set(event.clientX);
      y.set(event.clientY);
      setMode(detectMode(event.target));
    };

    const onLeaveWindow = () => {
      hoveringWindow.current = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
    };
  }, [x, y]);

  if (!enabled) return null;

  const label = modeLabel(mode);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[130]"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-paper mix-blend-difference"
          animate={{
            scale: visible ? (mode === "dot" ? 1 : 2.6) : 0,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          style={{ width: 8, height: 8 }}
        />
      </motion.div>

      {label ? (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[131]"
          style={{ x: pillX, y: pillY }}
        >
          <motion.div
            initial={false}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6, x: 16, y: 12 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            className="flex h-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent px-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-ink"
          >
            {label}
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}