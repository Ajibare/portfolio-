import type { SkillIntro, SkillShowcaseRow } from "@/types";

/** Canonical skill groups — keep the rendered rows in sync with the résumé. */
const frontend = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "jQuery",
  "Tailwind CSS",
];
const backend = [
  "Node.js",
  "Express",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "SQL",
];
const practice = [
  "Paystack",
  "Flutterwave",
  "Docker",
  "CI/CD",
  "Git & GitHub",
  "Code Review",
];
const remote = ["Async communication", "Distributed teams", "Self-directed delivery"];

export const skillIntro: SkillIntro = {
  eyebrow: "Technologies",
  title: "Built for impact, engineered to scale.",
  description:
    "A practical full-stack toolkit — from React and Next.js to Node.js, Express and MongoDB — plus the discipline to choose the right tool for the job.",
};

export const skillRows: SkillShowcaseRow[] = [
  {
    index: "01",
    label: "FRONTEND — I WORK BEST WITH",
    skills: frontend,
    variant: "showcase",
  },
  {
    index: "02",
    label: "BACKEND & APIs — I ALSO WORK WITH",
    skills: backend,
    variant: "marquee",
    direction: "rtl",
  },
  {
    index: "03",
    label: "INTEGRATIONS & PRACTICE",
    skills: practice,
    variant: "showcase",
  },
  {
    index: "04",
    label: "THE FULL-STACK TOOLKIT",
    skills: [...frontend, ...backend],
    variant: "marquee",
    direction: "ltr",
  },
  {
    index: "05",
    label: "REMOTE & SELF-DIRECTED",
    skills: remote,
    variant: "showcase",
  },
  {
    index: "06",
    label: "CHECK FULL SKILL SET",
    skills: ["View the rest on GitHub"],
    variant: "showcase",
  },
];