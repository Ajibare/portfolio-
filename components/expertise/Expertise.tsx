"use client";

import { expertiseCategories } from "@/data/expertise";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Expertise() {
  return (
    <section id="expertise" className="section-pad shell relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="eyebrow text-accent">// Industry Expertise</p>
          <h2 className="text-display max-w-2xl mt-4">
            MORE THAN CODE. I BUILD SOLUTIONS.
          </h2>
          <p className="text-muted mt-2 max-w-xl">
            I work across the software development lifecycle — from understanding business
            requirements and designing interfaces to building APIs, modelling databases,
            integrating third-party services, and deploying production applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-surface border border-line rounded-lg p-6 md:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Icon placeholder */}
                <div
                  className="w-12 h-12 rounded-lg bg-ink/50 flex items-center justify-center flex-shrink-0"
                  aria-label={category.title}
                >
                  {/* Icon SVG would go here */}
                  <svg
                    className="w-6 h-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-paper mb-1">
                    {category.title}
                  </h3>
                  <p className="text-muted line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {category.panels.map((panel) => (
                  <div
                    key={panel.title}
                    className="group-hover:text-accent transition-colors duration-200 text-sm text-muted"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">{panel.title}</span>
                    <p className="mt-1 line-clamp-2 text-[10px] text-muted/70">
                      {panel.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}