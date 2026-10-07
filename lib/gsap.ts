"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Refresh ScrollTrigger measurements after a layout/size change. */
export function refreshScrollTriggers(): void {
  ScrollTrigger.refresh();
}

/** Kills every ScrollTrigger created by this app. */
export function killScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}