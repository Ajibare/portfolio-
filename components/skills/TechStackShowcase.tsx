"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Technology stack grouped by category.
 * Presented as technologies I have used — not expert-level mastery of every item.
 */
function TechCategory({
  title,
  technologies,
  reduced,
}: {
  title: string;
  technologies: string[];
  reduced: boolean;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-sm font-medium uppercase tracking-wider text-accent mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors hover:text-accent hover:border-accent",
              reduced ? "group-hover:text-accent hover:border-accent" : "",
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStackShowcase() {
  const [reduced, setReduced] = useState(
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = () => setReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <section id="skills" className="section-pad shell">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-accent">// Technology Stack</p>
          <h2 className="text-display mt-4">Technologies I Work With</h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 mt-12">
          <TechCategory
            title="FRONTEND"
            technologies={["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"]}
            reduced={reduced}
          />
          <TechCategory
            title="BACKEND"
            technologies={["Node.js", "Express.js", "NestJS", "REST APIs", "Authentication", "Authorization", "Third-party API integration"]}
            reduced={reduced}
          />
          <TechCategory
            title="DATABASES & DATA"
            technologies={["PostgreSQL", "MongoDB", "SQL", "Prisma", "Schema design", "Data modelling"]}
            reduced={reduced}
          />
          <TechCategory
            title="DEVOPS & ENGINEERING"
            technologies={["Git", "GitHub", "Docker", "CI/CD", "Deployment workflows", "Debugging", "Performance optimization"]}
            reduced={reduced}
          />
          <TechCategory
            title="INTEGRATIONS"
            technologies={["Paystack", "Flutterwave", "External APIs", "AI service APIs", "Authentication providers", "Exchange APIs"]}
            reduced={reduced}
          />
        </div>
      </div>
    </section>
  );
}