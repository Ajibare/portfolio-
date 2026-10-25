"use client";

import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(1);
  const total = testimonials.length;

  const prev = () => {
    if (slideIndex <= 1) return;
    setSlideIndex(slideIndex - 1);
  };
  const next = () => {
    if (slideIndex >= total) return;
    setSlideIndex(slideIndex + 1);
  };

  const current = testimonials[slideIndex - 1];
  const prevT = testimonials[slideIndex - 2 >= 0 ? slideIndex - 2 : total - 1];
  const nextT = testimonials[slideIndex % total];

  return (
    <section id="testimonials" className="section-pad shell">
      <SectionHeading eyebrow="Testimonials" title="Kind words" description="Endorsements" />

      <div className="mt-16 overflow-hidden">
        <div className="relative w-full md:w-[max-content] mx-auto h-[300px] md:h-[350px]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className={`flex-shrink-0 md:w-[200px] group-transform group-hover:scale-105 transition-opacity duration-500 opacity-${slideIndex === 1 ? "100" : "50"}`}>
              <blockquote>
                " {prevT.quote} "
                <figcaption>
                  <span>{prevT.author}</span>
                  {prevT.role && <span>{prevT.role}</span>}
                  {prevT.company && <span>at {prevT.company}</span>}
                </figcaption>
              </blockquote>
            </div>
            <div className="flex-shrink-0 md:w-[400px] group-transform group-hover:scale-105 transition-opacity duration-500 opacity-100">
              <blockquote>
                " {current.quote} "
                <figcaption>
                  <span>{current.author}</span>
                  {current.role && <span>{current.role}</span>}
                  {current.company && <span>at {current.company}</span>}
                </figcaption>
              </blockquote>
            </div>
            <div className={`flex-shrink-0 md:w-[200px] group-transform group-hover:scale-105 transition-opacity duration-500 opacity-${slideIndex === total ? "100" : "50"}`}>
              <blockquote>
                " {nextT.quote} "
                <figcaption>
                  <span>{nextT.author}</span>
                  {nextT.role && <span>{nextT.role}</span>}
                  {nextT.company && <span>at {nextT.company}</span>}
                </figcaption>
              </blockquote>
            </div>
          </div>
        </div>

        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 px-4 py-2 text-white sr-only">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 px-4 py-2 text-white sr-only">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: total }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            role="button"
            className="rounded-full w-3 h-3 bg-transparent border-2 border-paper"
            style={{ backgroundColor: slideIndex === num ? "#A6B92D" : "transparent" }}
            aria-label={`Go to testimonial ${num}`}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}
