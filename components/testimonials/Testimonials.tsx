"use client";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Testimonials are only ever real — quotes are never invented. Until the owner
 * supplies endorsements this section renders an explicit empty-state so the
 * promise stays visible instead of faking social proof.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words."
        description="Endorsements from people I've built software with."
      />

      {testimonials.length === 0 ? (
        <div
          data-cursor="default"
          className="mt-16 flex min-h-64 flex-col items-start justify-center gap-4 border border-dashed border-line bg-surface p-8 md:mt-24"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {`// `}In progress
          </p>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Testimonials will appear here once the owner shares real
            endorsements. This section intentionally never carries invented
            quotes.
          </p>
        </div>
      ) : (
        <div className="mt-16 grid gap-4 md:mt-24 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col justify-between gap-8 border border-line bg-surface p-8 md:p-10"
            >
              <blockquote className="font-display text-2xl font-medium leading-snug text-paper">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-mono text-sm text-paper">
                  {testimonial.author}
                </span>
                <span className="font-mono text-xs text-muted">
                  {testimonial.role}, {testimonial.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}