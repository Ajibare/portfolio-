"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { SiteContext } from "@/lib/site-context";
import { PageLoader } from "@/components/layout/PageLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GrainOverlay } from "@/components/layout/GrainOverlay";

export function SiteFrame({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);

  const value = useMemo(() => ({ ready }), [ready]);

  useEffect(() => {
    // The custom cursor only activates on fine pointers (desktop/laptop).
    if (window.matchMedia("(pointer: fine)").matches) {
      document.documentElement.classList.add("custom-cursor");
    }
  }, []);

  return (
    <SiteContext.Provider value={value}>
      <PageLoader onDone={handleReady} />
      <ScrollProgress />
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      {children}
      <Footer />
    </SiteContext.Provider>
  );
}