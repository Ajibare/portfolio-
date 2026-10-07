import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const OUT = resolve(ROOT, "public", "resume", "Ajibare-Babajide-Resume.pdf");

const CONTENT = {
  name: "Ajibare Babajide Blessing",
  role: "Full-Stack Software Engineer",
  tagline: "React · Next.js · Node.js",
  line1: "Email: babajideajibare@gmail.com | Phone: +234 813 858 1834",
  line2: "LinkedIn: linkedin.com/in/ajibare-babajide-94452a248",
  line3: "GitHub: github.com/Ajibare | Portfolio: portfolio-bay-seven-73.vercel.app",
  summary:
    "Full-Stack Software Engineer with 2+ years shipping production applications end-to-end using React, Next.js, Node.js, and Express, plus enterprise jQuery-based systems at scale. Comfortable working async and collaborating with distributed, cross-functional teams. Experienced designing RESTful APIs, integrating third-party and payment gateway services (Paystack, Flutterwave), and implementing JWT-based authentication and authorization. Currently a Software Engineer II contributing to architecture decisions, backend/API work, and code review. Track record of measurable impact — 30% lift in user engagement, 100% on-time freelance delivery — and experience mentoring 20+ junior developers.",
  skills: [
    { label: "Frontend", value: "React.js, Next.js, JavaScript (ES6+), TypeScript, jQuery, HTML5, CSS3, Bootstrap 4, Tailwind CSS" },
    { label: "Backend", value: "Node.js, Express.js, RESTful API Design, JWT Authentication & Authorization, MongoDB, SQL, Database Schema Design" },
    { label: "Integrations & Practice", value: "Payment Gateways (Paystack, Flutterwave), Technical Decision-Making, Code Review, Agile, Git/GitHub, CI/CD, Docker" },
    { label: "Other", value: "SEO Optimization, Responsive & Accessible Design, WordPress, Cross-Browser Debugging" },
    { label: "Remote Collaboration", value: "Async communication, distributed team workflows, self-directed delivery across time zones" },
  ],
  experience: [
    {
      role: "Software Engineer II — BigStack Technologies",
      period: "2025 – Present",
      bullets: [
        "Contributes to architecture and technical decisions for full-stack web applications (React/Next.js, Node/Express, TypeScript), designing RESTful APIs for fintech and e-commerce platforms.",
        "Integrates payment gateways (Paystack, Flutterwave) with transaction verification and secure workflows; implements JWT-based authentication and authorization.",
        "Designs database schemas and CRUD for users, orders, and transactions — error handling, validation, performance optimization.",
        "Develops responsive, high-performance interfaces and translates UI/UX designs into clean, reusable, scalable components.",
        "Leads code reviews across the team and delivers hands-on training and mentorship.",
        "Collaborates with designers, backend developers, and stakeholders in an agile environment.",
      ],
    },
    {
      role: "Frontend Developer — CarrotSuite",
      period: "2025 – Present",
      bullets: [
        "Builds and debugs frontend features across a multi-module CRM/healthcare platform — quotations, approvals, tariff management, and remittance reconciliation — using jQuery, Bootstrap 4, and Select2.",
        "Diagnosed and fixed a DOMContentLoaded initialization bug in a tariff matrix page caused by AJAX-injected content.",
        "Integrated Paystack into a subscription and payment management flow via the platform's analytical API.",
        "Resolved layered UI bugs (Select2 z-index conflicts, nested API response paths, incorrect endpoints) using an appendTo(document.body) portal pattern across modules.",
      ],
    },
    {
      role: "Full-Stack Developer — Independent Projects",
      period: "2023 – Present",
      bullets: [
        "Designs and builds full-stack applications end-to-end — React/Next.js frontends, Node.js/Express backends.",
        "Designs MongoDB and SQL data models and builds REST APIs, handling API design and third-party API integration.",
        "Delivered 8+ freelance projects for global clients (business websites, portfolios, e-commerce) including payment gateway integrations, with 100% on-time delivery.",
        "Optimizes sites for SEO, boosting client rankings and organic traffic.",
      ],
    },
    {
      role: "Web Developer & Technical Education Instructor — Omnific Works",
      period: "2024",
      bullets: [
        "Developed responsive NGO and business websites, increasing user satisfaction by 25%.",
        "Led an e-commerce redesign that produced a 30% rise in donations.",
        "Built and maintained WordPress and custom-coded sites — contact forms, donation flows, analytics tracking.",
        "Trained 20+ junior developers, improving their technical skills and delivery speed.",
      ],
    },
    {
      role: "Frontend Developer — Avitech International",
      period: "2025",
      bullets: [
        "Built a responsive legal document platform from Figma designs (HTML, Bootstrap), fully remote with a distributed team.",
        "Translated Figma prototypes into pixel-accurate, cross-browser-compatible pages.",
        "Debugged and resolved layout and responsiveness issues across devices.",
        "Ensured accessibility compliance, improving usability for all users.",
      ],
    },
  ],
  projects:
    "IBM Capstone (Cloud-native React + Node.js app with MongoDB, auth and REST APIs; Docker/CI/CD) · Cardily (NFC-enabled smart business card platform with analytics dashboard) · ExceFort Environmental (responsive geotechnical services website, +20% inquiries).",
  education:
    "B.Sc. Biology — University of Nigeria, Nsukka (2019 – 2023). Applied research and analytical rigor to logical problem-solving in software development.",
  certifications:
    "IBM Full-Stack JavaScript Developer (Coursera/IBM, 2025) · CS50's Understanding Technology (Harvard, 2024) · Kaggle Python (2024) · Frontend Development & Web Technologies (Incubator and Utiva) · Frontend Fundamentals (Pirple).",
  achievements:
    "Increased website engagement by 30% via responsive design and SEO · Delivered 6+ live websites for NGOs, businesses, and advocacy groups · Improved junior developer productivity by 40% through structured training.",
};

const INK = "#050505";
const ACCENT = "#a6b92d";
const MUTED = "#555555";
const GRAY = "#8a8a8a";

const doc = new PDFDocument({ size: "A4", margin: 56, bufferPages: true });
mkdirSync(resolve(OUT, ".."), { recursive: true });
doc.pipe(createWriteStream(OUT));

// Header
doc.font("Helvetica-Bold").fontSize(24).fillColor(INK).text(CONTENT.name.toUpperCase());
doc.moveDown(0.35);
doc.font("Helvetica-Bold").fontSize(12).fillColor(ACCENT).text(CONTENT.role.toUpperCase(), { continued: true });
doc.font("Helvetica").fontSize(9.5).fillColor(GRAY).text(`   |  ${CONTENT.tagline}`);
doc.moveDown(0.1);
doc.font("Helvetica").fontSize(8.5).fillColor(MUTED).text(CONTENT.line1);
doc.text(CONTENT.line2);
doc.text(CONTENT.line3);
doc.moveDown(1);

function sectionTitle(label) {
  doc.moveDown(0.55).font("Helvetica-Bold").fontSize(10.5).fillColor(ACCENT).text(label.toUpperCase());
  doc.moveDown(0.3);
}

sectionTitle("Professional Summary");
doc.font("Helvetica").fontSize(9).fillColor(INK).text(CONTENT.summary, { lineGap: 2 });

sectionTitle("Key Skills");
for (const skill of CONTENT.skills) {
  doc.font("Helvetica-Bold").fontSize(9).fillColor(INK).text(`${skill.label}:`, { continued: true });
  doc.font("Helvetica").fillColor(INK).text(` ${skill.value}`);
}

sectionTitle("Professional Experience");
for (const job of CONTENT.experience) {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(job.role, { continued: true });
  doc.font("Helvetica").fontSize(8.5).fillColor(ACCENT).text(`      ${job.period}`);
  doc.moveDown(0.15);
  for (const bullet of job.bullets) {
    doc.font("Helvetica").fontSize(8.7).fillColor(INK).text(`— ${bullet}`, { lineGap: 1.8 });
  }
  doc.moveDown(0.35);
}

sectionTitle("Projects");
doc.font("Helvetica").fontSize(8.7).fillColor(INK).text(CONTENT.projects, { lineGap: 2 });

sectionTitle("Education");
doc.font("Helvetica").fontSize(8.7).fillColor(INK).text(CONTENT.education, { lineGap: 2 });

sectionTitle("Certifications");
doc.font("Helvetica").fontSize(8.7).fillColor(INK).text(CONTENT.certifications, { lineGap: 2 });

sectionTitle("Achievements");
doc.font("Helvetica").fontSize(8.7).fillColor(INK).text(CONTENT.achievements, { lineGap: 2 });

doc.end();
console.log(`Wrote ${OUT}`);