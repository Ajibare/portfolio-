import type { Testimonial } from "@/types";

/**
 * Testimonials intentionally left empty — only real, verifiable testimonials
 * are shown here. Add entries as they are collected:
 *
 *   {
 *     id: "client-1",
 *     quote: "The actual quote from the client.",
 *     author: "Client Name",
 *     role: "Role",
 *     company: "Company",
 *   }
 *
 * The section renders a discreet pending state until real entries exist.
 */
export const testimonials: Testimonial[] = [];

export const testimonialsPending = testimonials.length === 0;