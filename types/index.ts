export interface NavItem {
  label: string;
  href: string;
  target?: string;
}

export interface SocialLink {
  label: "GitHub" | "LinkedIn" | "WhatsApp" | "Instagram" | "X (Twitter)";
  href: string | null;
  note?: string;
}

export interface Stat {
  value: number | "∞";
  suffix?: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface Skill {
  name: string;
}

export interface SkillIntro {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface SkillShowcaseRow {
  index: string;
  label: string;
  skills: string[];
  variant: "marquee" | "showcase";
  direction?: "ltr" | "rtl";
}

export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export type ProjectContentStatus = "pending" | "final";

export interface ProjectScreenshots {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  /** One-line summary shown on project cards. */
  summary: string;
  stack: string[];
  cover: {
    src: string;
    alt: string;
  };
  contentStatus: ProjectContentStatus;
  /** Data fields that have not been finalised yet are prefixed with "[PENDING]". */
  overview: string;
  role: string;
  problem: string;
  solution: string;
  technology: string;
  architecture: string;
  features: string[];
  /** Intentionally never invented — verified metrics are added by the owner. */
  results: string[];
  links: {
    live: string | null;
    github: string | null;
  };
}