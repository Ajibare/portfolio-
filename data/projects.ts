import type { Project } from "@/types";

/**
 * The write-up fields below are intentionally marked "[PENDING]" everywhere a
 * fact about the project is not yet confirmed by the owner. No results,
 * metrics, links or testimonials are invented here.
 *
 * When final copy is supplied, replace a "[PENDING] ..." string with the real
 * text and (optionally) flip `contentStatus` to "final". `results` stays empty
 * until verified metrics exist. `links` stay `null` until real URLs exist.
 */
export const projects: Project[] = [
  {
    slug: "trading-bolt",
    number: "01",
    name: "Trading Bolt",
    category: "Trading Platform",
    summary:
      "[PENDING] One-line description of Trading Bolt — the problem it solves and who it is for.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    cover: { src: "/work/trading-bolt.webp", alt: "Trading Bolt — interface preview" },
    contentStatus: "pending",
    overview:
      "[PENDING] A short overview of Trading Bolt: what the product does, who it serves and the shape of the system.",
    role: "[PENDING] Your role on this project — e.g. Lead Frontend Developer.",
    problem:
      "[PENDING] The problem Trading Bolt was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "[PENDING] Technology rationale: languages, frameworks, data stores and infrastructure choices.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Feature one — short, concrete description.",
      "[PENDING] Feature two — short, concrete description.",
      "[PENDING] Feature three — short, concrete description.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "epilux",
    number: "02",
    name: "Epilux",
    category: "Digital Product",
    summary:
      "[PENDING] One-line description of Epilux — the problem it solves and who it is for.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB"],
    cover: { src: "/work/epilux.webp", alt: "Epilux — interface preview" },
    contentStatus: "pending",
    overview:
      "[PENDING] A short overview of Epilux: what the product does, who it serves and the shape of the system.",
    role: "[PENDING] Your role on this project — e.g. Frontend Developer.",
    problem:
      "[PENDING] The problem Epilux was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "[PENDING] Technology rationale: languages, frameworks, data stores and infrastructure choices.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Feature one — short, concrete description.",
      "[PENDING] Feature two — short, concrete description.",
      "[PENDING] Feature three — short, concrete description.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "vastcare-pharmacy",
    number: "03",
    name: "VastCare Pharmacy",
    category: "Healthcare E-commerce",
    summary:
      "[PENDING] One-line description of VastCare Pharmacy — the problem it solves and who it is for.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    cover: { src: "/work/vastcare.webp", alt: "VastCare Pharmacy — interface preview" },
    contentStatus: "pending",
    overview:
      "[PENDING] A short overview of VastCare Pharmacy: what the product does, who it serves and the shape of the system.",
    role: "[PENDING] Your role on this project — e.g. Frontend Developer.",
    problem:
      "[PENDING] The problem VastCare Pharmacy was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "[PENDING] Technology rationale: languages, frameworks, data stores and infrastructure choices.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Feature one — short, concrete description.",
      "[PENDING] Feature two — short, concrete description.",
      "[PENDING] Feature three — short, concrete description.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "healthcare-management-system",
    number: "04",
    name: "Healthcare Management System",
    category: "Healthcare SaaS",
    summary:
      "[PENDING] One-line description of the Healthcare Management System — the problem it solves and who it is for.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    cover: { src: "/work/hms.webp", alt: "Healthcare Management System — interface preview" },
    contentStatus: "pending",
    overview:
      "[PENDING] A short overview of the system: what it does, who it serves and the shape of the software.",
    role: "[PENDING] Your role on this project — e.g. Full-stack Developer.",
    problem:
      "[PENDING] The problem the system was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "[PENDING] Technology rationale: languages, frameworks, data stores and infrastructure choices.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Feature one — short, concrete description.",
      "[PENDING] Feature two — short, concrete description.",
      "[PENDING] Feature three — short, concrete description.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "ibm-capstone",
    number: "05",
    name: "IBM Capstone",
    category: "Cloud-Native Full-stack",
    summary:
      "Cloud-native full-stack application built with React and Node.js — MongoDB, authentication and REST APIs — containerized with Docker and shipped through a CI/CD pipeline.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Docker", "CI/CD"],
    cover: {
      src: "/work/ibm-capstone.webp",
      alt: "IBM Capstone — cloud-native application",
    },
    contentStatus: "pending",
    overview:
      "A cloud-native application built and deployed end-to-end as the IBM full-stack capstone: a React frontend, a Node.js API, MongoDB persistence and JWT authentication, wrapped in Docker and released through a CI/CD pipeline.",
    role: "Full-stack developer — from application design through to deployment.",
    problem:
      "[PENDING] The problem this capstone was built to solve, and what the app does for its users.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "React + Node.js with MongoDB for persistence and JWT-based authentication; Docker and CI/CD used for the deployment pipeline.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Feature one — short, concrete description.",
      "[PENDING] Feature two — short, concrete description.",
      "[PENDING] Feature three — short, concrete description.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "cardily",
    number: "06",
    name: "Cardily",
    category: "Smart Business Card Platform",
    summary:
      "NFC-enabled smart business card platform with customizable card designs and an analytics dashboard — boosting adoption through seamless contact sharing.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    cover: {
      src: "/work/cardily.webp",
      alt: "Cardily — smart business card platform",
    },
    contentStatus: "pending",
    overview:
      "A smart business card platform with NFC-enabled sharing, customizable card designs and an analytics dashboard — making contact exchange seamless and improving client adoption.",
    role: "Full-stack developer — product design through to delivery.",
    problem:
      "[PENDING] The problem Cardily was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology:
      "[PENDING] Technology rationale: languages, frameworks, data stores and infrastructure choices.",
    architecture:
      "[PENDING] System shape: how the pieces fit together — frontend, API, data, deployment.",
    features: [
      "[PENDING] Customizable card designs.",
      "[PENDING] NFC-enabled contact sharing.",
      "[PENDING] Analytics dashboard.",
    ],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "excefort",
    number: "07",
    name: "ExceFort Environmental",
    category: "Business Website",
    summary:
      "Interactive, responsive website for a geotechnical services company — driving a 20% increase in inquiries.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    cover: {
      src: "/work/excefort.webp",
      alt: "ExceFort Environmental — company website",
    },
    contentStatus: "pending",
    overview:
      "An interactive, responsive website for ExceFort, a geotechnical services company, built to make their services clear and easy to investigate — with outcomes that measurable.",
    role: "Web developer — design, build and SEO.",
    problem:
      "[PENDING] The problem the ExceFort website was built to solve, and what was wrong before.",
    solution:
      "[PENDING] The approach that addressed the problem and the key decisions behind it.",
    technology: "[PENDING] Technology rationale for the build.",
    architecture: "[PENDING] Site structure and content strategy.",
    features: [
      "[PENDING] Responsive, interactive service pages.",
      "[PENDING] Contact and enquiry flow.",
      "[PENDING] SEO and performance fundamentals.",
    ],
    results: ["20% increase in inquiries after relaunch."],
    links: { live: null, github: null },
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}