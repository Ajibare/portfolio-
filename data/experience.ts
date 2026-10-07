import type { ExperienceItem } from "@/types";

/** Real résumé content — confirmed by the owner. */
export const experience: ExperienceItem[] = [
  {
    id: "bigstack",
    company: "Bigstack Technologies",
    role: "Software Engineer II",
    period: "2025 — Present",
    location: "Remote",
    summary:
      "Contributing to architecture and technical decisions for full-stack web applications built with React.js, Next.js, Node.js, Express.js and TypeScript — designing RESTful APIs for fintech and e-commerce platforms, and leading code reviews and developer training.",
    highlights: [
      "Designing and implementing RESTful APIs for fintech and e-commerce platforms.",
      "Integrating payment gateways (Paystack, Flutterwave) with transaction verification and secure workflows, plus JWT-based authentication and authorization.",
      "Designing database schemas and CRUD operations for users, orders and transactions — error handling, validation and performance optimization.",
      "Developing responsive, high-performance interfaces from UI/UX designs into clean, reusable, scalable components.",
      "Leading code reviews across the team and delivering hands-on training and mentorship.",
      "Collaborating with designers, backend developers and stakeholders in an agile environment.",
    ],
  },
  {
    id: "carrotsuite",
    company: "Carrotsuite",
    role: "Frontend Developer",
    period: "2025 — Present",
    location: "Remote",
    summary:
      "Building and debugging frontend features across a multi-module CRM/healthcare platform in an admin-shell architecture, including a React/TypeScript component library.",
    highlights: [
      "Built and debugged frontend features across quotations, approvals, tariff management and remittance reconciliation using jQuery, Bootstrap 4 and Select2.",
      "Diagnosed and fixed a DOMContentLoaded initialization bug in a tariff matrix page caused by AJAX-injected content.",
      "Integrated Paystack into a subscription and payment management flow via the platform's analytical API.",
      "Resolved layered UI bugs (Select2 z-index conflicts, nested API response paths, incorrect endpoints) with an appendTo(document.body) portal pattern, applied across modules including a React/TypeScript ActionMenu via ReactDOM.createPortal.",
    ],
  },
  {
    id: "independent",
    company: "Independent Projects",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    location: "Remote · Global clients",
    summary:
      "Designing and building full-stack applications end-to-end — React/Next.js on the frontend, Node.js/Express on the backend — with a 100% on-time freelance delivery record.",
    highlights: [
      "Building full-stack applications with React/Next.js frontends and Node.js/Express backends.",
      "Designing MongoDB and SQL data models and building REST APIs, including third-party API integration.",
      "Delivered 10+ freelance projects for global clients — business websites, portfolios and e-commerce platforms — including payment gateway integrations, with 100% on-time delivery.",
      "Optimizing sites for SEO, boosting client rankings and organic traffic.",
    ],
  },
  {
    id: "omnific",
    company: "Omnific Works",
    role: "Web Developer & Technical Education Instructor",
    period: "2024",
    summary:
      "Developing responsive NGO and business websites while designing and delivering a structured front-end curriculum for junior developer cohorts.",
    highlights: [
      "Developed responsive NGO and business websites, increasing user satisfaction by 25%.",
      "Led an e-commerce redesign that produced a 30% rise in donations.",
      "Collaborated directly with NGO and business stakeholders to turn requirements into functional, mobile-first designs.",
      "Built and maintained WordPress and custom-coded sites — contact forms, donation flows and analytics tracking.",
      "Designed and delivered a structured front-end curriculum (HTML, CSS, JavaScript, Git fundamentals).",
      "Trained 50+ junior developers, improving their technical skills and delivery speed.",
    ],
  },
  {
    id: "avitech",
    company: "Avitech International",
    role: "Frontend Developer",
    period: "2025",
    location: "Remote",
    summary:
      "Building a responsive legal document platform from Figma designs with a fully remote, distributed team.",
    highlights: [
      "Built a responsive legal document platform from Figma designs using HTML and Bootstrap.",
      "Collaborated remotely with designers and stakeholders to translate Figma prototypes into pixel-accurate, cross-browser-compatible pages.",
      "Debugged and resolved layout and responsiveness issues across devices.",
      "Ensured accessibility compliance, improving usability for all users.",
    ],
  },
];