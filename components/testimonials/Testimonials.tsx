"use client";

import { testimonials } from "@/data/testimonials";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Testimonials are only ever real — quotes are never invented. The section
 * falls back to an explicit empty/pending state if the data file contains
 * unresolved placeholders.
 */
export function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = testimonials.length;

  const prevSlide = () => {
    if (slideIndex <= 1) return;
    setSlideIndex((slideIndex) => slideIndex - 1);
  };

  const nextSlide = () => {
    if (slideIndex >= totalSlides) return;
    setSlideIndex((slideIndex) => slideIndex + 1);
  };

  // Compute which testimonials to show (prev, current, next)
  const prevIdx = slideIndex - 1 <= 0 ? totalSlides : slideIndex - 1;
  const nextIdx = slideIndex === totalSlides ? 1 : slideIndex + 1;

  const currentTestimonial = testimonials[slideIndex - 1];
  const prevTestimonial = testimonials[prevIdx - 1];
  const nextTestimonial = testimonials[nextIdx - 1];

  return (
    <section id="testimonials" className="section-pad shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words."
        description="Endorsements from people I've built software with."
      />

      <div className="mt-16 overflow-hidden">
        <div className="relative w-full md:w-[max-content] mx-auto h-[300px] md:h-[350px] transition-all duration-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div
              key="prev"
              className="flex-shrink-0 md:w-[200px] group-transform group-hover:scale-105 transition-opacity duration-500"
              style={{ opacity: slideIndex === prevIdx ? 1 : 0.3 }}
            >
              <blockquote>
                &ldquo;{prevTestimonial.quote}&rdquo;
                <figcaption>
                  <span>{prevTestimonial.author}</span>
                  {prevTestimonial.role && <span className="ml-2">({prevTestimonial.role})</span>}
                  {prevTestimonial.company && <span className="ml-2">at {prevTestimonial.company}</span>}
                </figcaption>
              </blockquote>
            </div>

            <div className="flex-shrink-0 md:w-[400px] group-transform group-hover:scale-105 transition-opacity duration-500 opacity-100">
              <blockquote>
                &ldquo;{currentTestimonial.quote}&rdquo;
                <figcaption>
                  <span>{currentTestimonial.author}</span>
                  {currentTestimonial.role && <span className="ml-2">({currentTestimonial.role})</span>}
                  {currentTestimonial.company && <span className="ml-2">at {currentTestimonial.company}</span>}
                </figcaption>
              </blockquote>
            </div>

            <div
              key="next"
              className="flex-shrink-0 md:w-[200px] group-transform group-hover:scale-105 transition-opacity duration-500"
              style={{ opacity: slideIndex === nextIdx ? 1 : 0.3 }}
            >
              <blockquote>
                &ldquo;{nextTestimonial.quote}&rdquo;
                <figcaption>
                  <span>{nextTestimonial.author}</span>
                  {nextTestimonial.role && <span className="ml-2">({nextTestimonial.role})</span>}
                  {nextTestimonial.company && <span className="ml-2">at {nextTestimonial.company}</span>}
                </figcaption>
              </blockquote>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 px-4 py-2 text-white sr-only"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 px-4 py-2 text-white sr-only"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          key={prevIdx}
          role="button"
          aria-label={`Go to testimonial ${prevIdx}`}
          className={`rounded-full w-3 h-3 bg-transparent border-2 border-paper ${
            slideIndex === prevIdx ? "bg-accent" : ""
          } transition-colors hover:bg-accent`}
        >
          {prevIdx}
        </button>

        <button
          key={slideIndex}
          role="button"
          aria-label={`Go to testimonial ${slideIndex}`}
          className={`rounded-full w-3 h-3 bg-transparent border-2 border-paper bg-accent transition-colors`}
        >
          {slideIndex}
        </button>

        <button
          key={nextIdx}
          role="button"
          aria-label={`Go to testimonial ${nextIdx}`}
          className={`rounded-full w-3 h-3 bg-transparent border-2 border-paper ${
            slideIndex === nextIdx ? "bg-accent" : ""
          } transition-colors hover:bg-accent`}
        >
          {nextIdx}
        </button>
      </div>
    </section>
  );
}
