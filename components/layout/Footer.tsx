import Link from "next/link";
import { ArrowUp, AtSign, GitFork, MessageCircle } from "lucide-react";
import { navItems, site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

const socialIcons = {
  GitHub: GitFork,
  LinkedIn: AtSign,
  WhatsApp: MessageCircle,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell section-pad !pb-0">
        <div className="flex flex-col gap-10 border-b border-line pb-10 md:flex-row md:items-start md:justify-between">
          <p className="text-display max-w-2xl text-paper">
            Ajibare
            <br />
            Babajide<span className="text-accent">.</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {site.availability}
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="u-link font-mono text-sm text-muted transition-colors hover:text-paper"
                    data-cursor="link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="u-link w-fit font-mono text-sm text-muted transition-colors hover:text-paper"
              data-cursor="link"
            >
              {site.email}
            </a>
            <a
              href={site.resumePath}
              download
              className="u-link mt-3 inline-block w-fit font-mono text-sm text-muted transition-colors hover:text-paper"
              data-cursor="link"
            >
              Download résumé <span aria-hidden>→</span>
            </a>
            <p className="mt-3 font-mono text-sm text-muted">{site.location}</p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {socials.map((social) => {
                const Icon = socialIcons[social.label];
                return !social.href ? (
                  <li
                    key={social.label}
                    className="flex cursor-default items-center gap-2 text-muted"
                    title={social.note}
                  >
                    <Icon size={16} aria-hidden className="text-faint" />
                    <span className="font-mono text-sm">{social.label}</span>
                    <span
                      aria-hidden
                      className="rounded-full border border-line px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-faint"
                    >
                      URL pending
                    </span>
                  </li>
                ) : (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="link"
                      className="group flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Icon size={16} aria-hidden />
                      {social.label}
                      <ArrowUp
                        size={12}
                        aria-hidden
                        className="-rotate-45 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Open to selected full-time and contract opportunities in software
              engineering and product development.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
            © {site.copyrightYear} {site.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
            Designed &amp; built by {site.name}
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            data-cursor="click"
            aria-label="Back to top"
          >
            Back to top
            <span aria-hidden className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:border-accent">
              <ArrowUp size={14} className={cn("rotate-0")} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}