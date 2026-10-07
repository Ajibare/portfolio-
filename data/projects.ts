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
      "A web-based trading platform that pairs real-time market data with fast order flow — giving traders a clear, dependable view of positions at any moment.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    cover: { src: "/work/trading-bolt.webp", alt: "Trading Bolt — interface preview" },
    contentStatus: "pending",
    overview:
      "Trading Bolt is a trading platform focused on live market visibility and reliable order execution. A React/Next.js frontend talks to a Node.js API backed by PostgreSQL, with real-time updates across the dashboard.",
    role: "Full-Stack Developer — frontend build, real-time dashboard and API integration.",
    problem:
      "Money is hard to trade well when data lags and position details live in separate places — users wanted a single, fast view of the market and their balances.",
    solution:
      "Built a real-time dashboard on a single source of truth, with REST APIs for orders and balances and a UI designed to stay responsive under heavy tick traffic.",
    technology:
      "React, TypeScript and Next.js on the frontend; Node.js and Express for the API; PostgreSQL for transactional order and balance data.",
    architecture:
      "Next.js app serving the dashboard → Node/Express REST API → PostgreSQL, with websockets for live updates and a clear separation between read and write paths.",
    features: [
      "Live quotes & dashboard",
      "Order entry with validation",
      "Position & balance history",
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
      "Epilux is a digital product built from first principles: a web application that makes its core workflow faster and more intuitive than the alternatives.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB"],
    cover: { src: "/work/epilux.webp", alt: "Epilux — interface preview" },
    contentStatus: "pending",
    overview:
      "Epilux solves a [PENDING: describe the problem it addresses]. It was designed and shipped as a full-stack web application — a React/Next.js frontend, a Node.js API and MongoDB persistence.",
    role: "Full-Stack Developer — product build from design through to delivery.",
    problem: "[PENDING: what was wrong before Epilux existed].",
    solution:
      "A focused, fast interface backed by a clean, typed API — the product acts as the single place to get the job done.",
    technology:
      "React, TypeScript and Next.js on the frontend; Node.js and Express on the API; MongoDB as the data store.",
    architecture:
      "Next.js app → Node/Express API → MongoDB, with a typed schema and straightforward feature modules.",
    features: [
      "[PENDING] Headline capability one.",
      "[PENDING] Headline capability two.",
      "[PENDING] Headline capability three.",
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
      "VastCare Pharmacy is a healthcare e-commerce platform that makes ordering medicines and managing pharmacy logistics simple — for customers and operators alike.",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    cover: { src: "/work/vastcare.webp", alt: "VastCare Pharmacy — interface preview" },
    contentStatus: "pending",
    overview:
      "VastCare Pharmacy provides an online storefront for medicines and health products, with catalog, ordering and fulfillment workflows running on a React/Next.js frontend and a Node.js API over PostgreSQL.",
    role: "Full-Stack Developer — frontend, product workflows and API.",
    problem:
      "Ordering pharmacy items often meant phone calls and guesswork — customers had no reliable online path, and operators struggled to track orders.",
    solution:
      "An e-commerce experience with product search, cart and checkout, plus an operator view for order management grounded in a shared order model.",
    technology:
      "React, TypeScript and Next.js; Node.js and Express APIs; PostgreSQL for products, orders and stock.",
    architecture:
      "Storefront and admin built in the Next.js app, both consuming one Node/Express API backed by PostgreSQL.",
    features: [
      "Product catalog & search",
      "Cart to checkout",
      "Order tracking for customers & staff",
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
      "A healthcare management system that organizes clinics around scheduling, records and billing — so care teams spend less time on paperwork.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    cover: { src: "/work/hms.webp", alt: "Healthcare Management System — interface preview" },
    contentStatus: "pending",
    overview:
      "The system gives healthcare providers tools to manage appointments, patient records and payments from one place, built on a React/TypeScript frontend and a Node/Express API over PostgreSQL.",
    role: "Full-Stack Developer — core modules across frontend and API.",
    problem:
      "Clinics juggled appointments, records and billing across spreadsheets and paper — prone to errors and slow for staff and patients.",
    solution:
      "Centralized modules for scheduling, records, and billing sharing one patient and visit model, with role-based access for staff.",
    technology:
      "React, TypeScript, Node.js, Express and PostgreSQL.",
    architecture:
      "Modular SPA + REST API; per-module data flows over a shared PostgreSQL schema.",
    features: [
      "Appointment scheduling",
      "Patient records",
      "Billing & payments",
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