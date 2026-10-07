"use client";

import { createContext, useContext } from "react";

interface SiteContextValue {
  /** True once the branded loader has completed its sequence. */
  ready: boolean;
}

export const SiteContext = createContext<SiteContextValue>({ ready: false });

export function useSite(): SiteContextValue {
  return useContext(SiteContext);
}

export function useSiteReady(): boolean {
  return useContext(SiteContext).ready;
}