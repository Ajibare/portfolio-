"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  projectTypes,
  type ContactInput,
  type ContactResponse,
} from "@/lib/schemas";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Web Application",
      message: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setServerMessage(null);
    try {
      const response = await fetch(site.contactApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as ContactResponse;
      if (data.ok) {
        setSent(true);
        reset();
      } else {
        setServerMessage(data.error);
      }
    } catch {
      setServerMessage(
        "Something went wrong reaching the server. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="section-pad shell">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="eyebrow">
              <span className="text-accent">{"// "}</span>
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-paper">
              <span className="block">Let&apos;s build</span>
              <span className="block">
                something{" "}
                <span className="text-serif-accent text-accent">real.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Tell me about your project, team, or the problem you are trying
              to solve. I reply to everything I receive.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                data-cursor="link"
                className="group/link u-link w-fit font-mono text-lg text-paper transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              <p className="inline-flex w-fit items-center gap-2 font-mono text-xs text-faint">
                <span
                  aria-hidden
                  className="size-2 rounded-full bg-accent"
                />
                {site.availability}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-line bg-surface p-6 md:p-10">
            {sent ? (
              <div className="flex min-h-72 flex-col items-start justify-center gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Message sent
                </p>
                <p className="max-w-md text-base leading-relaxed text-paper">
                  Thanks for reaching out. I&apos;ll read it carefully and get
                  back to you within 48 hours.
                </p>
                <button
                  type="button"
                  data-cursor="click"
                  onClick={() => setSent(false)}
                  className="mt-2 font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-7"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : undefined}
                    className="field"
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="font-mono text-xs text-[#b3402f]">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? "true" : undefined}
                    className="field"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="font-mono text-xs text-[#b3402f]">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="eyebrow">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    className="field"
                    {...register("projectType")}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-surface">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="eyebrow">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="What are you looking to build?"
                    aria-invalid={errors.message ? "true" : undefined}
                    className="field resize-none"
                    {...register("message")}
                  />
                  {errors.message ? (
                    <p className="font-mono text-xs text-[#b3402f]">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                {serverMessage ? (
                  <p className="font-mono text-xs leading-relaxed text-muted">
                    {serverMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="click"
                  className="group inline-flex w-fit items-center gap-3 border border-accent bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}