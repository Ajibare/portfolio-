"use client";

import Link from "next/link";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  active?: string;
  onNavigate?: () => void;
}

/** Desktop header links with a subtle active state. */
export function NavLinks({ active, onNavigate }: NavLinksProps) {
  return (
    <ul className="flex items-center gap-9">
      {navItems.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "u-link font-mono text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 motion-reduce:transition-none",
                isActive ? "text-paper" : "text-muted hover:text-paper",
              )}
              aria-current={isActive ? "true" : undefined}
              data-cursor="link"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}