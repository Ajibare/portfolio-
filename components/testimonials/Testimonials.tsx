"use client";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Testimonials are only ever real — quotes are never invented. The section
 * falls back to an explicit empty/pending state if the data file contains
 * unresolved placeholders.
 */
export function Testimonials() {
  const hasPending = testimonials.some(
    (t) => t.quote.startsWith("[PENDING]")
  );

  return (
    <section id="testimonials" className="section-pad shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words."
        description="Endorsements from people I've built software with."
      />

      {hasPending ? (
        <div className="mt-16 grid gap-4 md:mt-24 lg:grid-cols-2">
          {/* Approved testimonials only */}
          {testimonials
            .filter((t) => !t.quote.startsWith("[PENDING]"))
            .map((testimonial) => {
              const meta = [testimonial.role, testimonial.company]
                .filter(Boolean)
                .join(", ");

              return (
                <figure
                  key={testimonial.id}
                  className="flex flex-col justify-between gap-8 border border-line bg-surface p-8 md:p-10"
                >
                  <blockquote className="font-display text-base font-medium leading-relaxed text-paper md:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex flex-col gap-1">
                    <span className="font-mono text-sm text-paper">
                      {testimonial.author}
                    </span>
                    {meta && (
                      <span className="font-mono text-xs text-muted">{meta}</span>
                    )}
                  </figcaption>
                </figure>
              );
            })}
          {/* Pending slots */}
          {/* No pending placeholder - testimonials section only shows approved quotes */}
        </div>
      ) : (
        <div className="mt-16 grid gap-4 md:mt-24 lg:grid-cols-2">
          {testimonials.map((testimonial) => {
            const meta = [testimonial.role, testimonial.company]
              .filter(Boolean)
              .join(", ");

            return (
              <figure
                key={testimonial.id}
                className="flex flex-col justify-between gap-8 border border-line bg-surface p-8 md:p-10"
              >
                <blockquote className="font-display text-base font-medium leading-relaxed text-paper md:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex flex-col gap-1">
                  <span className="font-mono text-sm text-paper">
                    {testimonial.author}
                  </span>
                  {meta && (
                    <span className="font-mono text-xs text-muted">{meta}</span>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}
    </section>
  );
}