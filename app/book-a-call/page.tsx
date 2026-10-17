"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

// Booking form schema
const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().optional(),
  appointmentType: z.enum([
    "discovery-call",
    "web-application",
    "enterprise-software",
    "technical-consultation",
    "mentorship",
  ]),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please select a valid date.",
  }),
  time: z.string().refine(
    (time) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time),
    "Please select a valid time in HH:MM format.",
  ),
  timezone: z.string().default("Local"),
  description: z
    .string()
    .trim()
    .min(10, "Give a little more detail — at least 10 characters.")
    .max(2000),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookACall() {
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [booking, setBooking] = useState<BookingFormValues | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      appointmentType: "discovery-call" as const,
      date: "",
      time: "",
      timezone: "Local",
      description: "",
    },
    // No resolver - validation handled by API
  });

  const onSubmit = async (values: BookingFormValues) => {
    setLoading(true);
    setError(null);
    setBooking(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.ok && data.booking) {
        setBooking(data.booking);
        setStep("confirmation");
        reset();
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong reaching the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (step === "confirmation" && booking) {
    return (
      <section className="min-h-dvh flex flex-col items-center justify-center bg-ink py-24">
        <div className="shell text-center max-w-2xl">
          <div className="mb-8 animate-spin border-4 border-accent border-t transparent" />
          <h2 className="text-hero text-paper mb-4">
            Booking confirmation
          </h2>
          <p className="text-muted mb-6">
            Thank you for your request. I'll read your message and get back to you within 48 hours.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div>
              <p className="font-mono text-sm text-accent">Date</p>
              <p className="font-display text-xl font-bold text-paper mt-1">
                {new Date(booking.date).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-accent">Time</p>
              <p className="font-display text-xl font-bold text-paper mt-1">
                {booking.time} {booking.timezone === "Local" ? "" : `(${booking.timezone})`}
              </p>
            </div>
          </div>
          <p className="text-muted mt-6">
            I'll read your request carefully and get back to you within 48 hours.
          </p>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="mt-8"
          >
            Send another message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="book-a-call" className="section-pad shell">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-display text-paper mb-4">
            Book a call
          </h2>
          <p className="text-muted mb-8">
            Let's discuss your project, team, or the problem you are trying to solve.
            I reply to everything I receive.
          </p>
        </Reveal>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-14 bg-surface border border-line rounded-lg p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="ebrow">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                {...register("name")}
                className="field"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="font-mono text-xs text-[#b3402f]">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="ebrow">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                {...register("email")}
                className="field"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="font-mono text-xs text-[#b3402f]">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="ebrow">
                Company (optional)
              </label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                placeholder="Your company or organization"
                {...register("company")}
                className="field" disabled={isSubmitting} />
              {errors.company && (
                <p className="font-mono text-xs text-[#b3402f]">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="appointmentType" className="ebrow">
                Appointment type
              </label>
              <select
                id="appointmentType"
                {...register("appointmentType")}
                className="field w-full"
                disabled={isSubmitting}
              >
                <option value="discovery-call" disabled>
                  Discovery Call
                </option>
                <option value="web-application">Website or Web Application Project</option>
                <option value="enterprise-software">Enterprise Software Consultation</option>
                <option value="technical-consultation">Technical Consultation</option>
                <option value="mentorship">Mentorship or Training Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="ebrow">
              Date
            </label>
            <div className="relative">
              <input
                id="date"
                type="date"
                {...register("date")}
                className="field"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="ebrow">
              Time
            </label>
            <div className="relative">
              <select
                id="time"
                {...register("time")}
                className="field w-full"
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select a time
                </option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timezone" className="ebrow">
              Timezone
            </label>
            <select
              id="timezone"
              {...register("timezone")}
              className="field w-full"
              disabled={isSubmitting}
            >
              <option value="Local">Local time</option>
              <option value="UTC">UTC</option>
              <option value="Africa/Lagos">Lagos (WAT)</option>
              <option value="Europe/London">London (BST/GMT)</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="ebrow">
              Project description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="What are you looking to build? Tell me about your project, team, or the problem you're trying to solve."
              {...register("description")}
              className="field resize-none"
              disabled={isSubmitting}
            />
            {errors.description && (
              <p className="font-mono text-xs text-[#b3402f]">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-fit items-center gap-3 border border-accent bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending…" : "Book a call"}
              <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// Export the component as the default export for Next.js App Router
export default BookACall;