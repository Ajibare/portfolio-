"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site, navItems } from "@/data/site";
import { useSiteReady } from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/components/layout/NavLinks";

export function Navbar() {
  const ready = useSiteReady();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const read = () => setScrolled(window.scrollY > 32);
    read();
    window.addEventListener("scroll", read, { passive: true });
    return () => window.removeEventListener("scroll", read);
  }, []);

  useEffect(() => {
    const ids = ["work", "about", "experience", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 60);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [open]);

  function close() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  const menu = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: -24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduced ? i * 0 : i * 0.06, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-300 motion-reduce:transition-none",
        scrolled && !open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent",
        !ready && "pointer-events-none",
      )}
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Main navigation"
        className="shell flex h-16 items-center justify-between md:h-20"
      >
        <Link
          href="/"
          onClick={close}
          className="u-link font-display text-sm font-bold uppercase tracking-[0.08em] text-paper md:text-[15px]"
          data-cursor="link"
        >
          <span className="text-muted">A</span>
          <span className="text-paper">JIBARE</span>
          <span className="mx-1.5 text-accent">·</span>
          <span className="text-muted">B</span>
          <span className="text-paper">ABAJIDE</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          <NavLinks active={active} onNavigate={close} />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-line px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-accent hover:text-accent motion-reduce:transition-none md:inline-flex"
            data-cursor="click"
          >
            Hire Me
            <span aria-hidden className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor="click"
            className="grid size-11 place-items-center rounded-full border border-line text-paper transition-colors duration-300 hover:border-accent hover:text-accent motion-reduce:transition-none lg:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-[95] flex flex-col justify-between bg-ink lg:hidden md:top-20"
          >
            <div className="shell flex flex-1 flex-col justify-center gap-2 py-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={menu}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    data-cursor="link"
                    className={cn(
                      "group flex items-baseline gap-4 font-display text-[13vw] font-bold uppercase leading-[1.02] tracking-tight",
                      active === item.href.slice(1) ? "text-paper" : "text-muted",
                    )}
                  >
                    <span className="eyebrow text-xs">0{index + 1}</span>
                    <span className="transition-colors duration-300 group-hover:text-accent motion-reduce:transition-none">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              custom={navItems.length}
              variants={menu}
              initial="hidden"
              animate="visible"
              className="shell border-t border-line py-8"
            >
              <p className="eyebrow mb-4">Contact</p>
              <a
                href={`mailto:${site.email}`}
                onClick={close}
                className="font-mono text-sm text-paper underline-offset-4 hover:underline"
                data-cursor="link"
              >
                {site.email}
              </a>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {site.availability}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}