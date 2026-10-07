import type { Service } from "@/types";

export const services: Service[] = [
  {
    index: "01",
    title: "Web Applications",
    description:
      "Fast, accessible web apps built with React and Next.js — interfaces that load quickly, feel precise, and scale with the product.",
    tags: ["React", "Next.js"],
  },
  {
    index: "02",
    title: "Backend Systems",
    description:
      "Robust APIs and data layers with Node.js, Express and PostgreSQL — clean contracts, sane performance, and code that is easy to reason about.",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    index: "03",
    title: "Business Software",
    description:
      "Internal tools and operational software that remove friction from real workflows — dashboards, admin panels, and automation.",
    tags: ["Dashboards", "Tooling"],
  },
  {
    index: "04",
    title: "Product Development",
    description:
      "From problem framing to shipped software — helping teams move from an idea to a usable product without losing the plot.",
    tags: ["Product", "Delivery"],
  },
] as const;