import type { ExpertiseCategory, ExpertisePanel } from "@/types";

/**
 * Verified industry categories and panels.
 * Only include features that match actual work — no invented capabilities.
 */
export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "healthcare",
    title: "Healthcare Management Systems",
    description:
      "Experience with healthcare-oriented applications, structured workflows, administrative dashboards, patient-related processes, and healthcare data management.",
    icon: "/icons/healthcare.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    panels: [
      {
        title: "Patient Record Management",
        description:
          "Structured patient data storage, visit tracking, and record organization for clinical workflows.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Appointment Scheduling",
        description:
          "Booking systems with role-based access, reminders, and conflict prevention for care teams.",
        tags: ["React", "Node.js", "Express"],
      },
      {
        title: "Billing & Payments",
        description:
          "Integrated payment workflows and invoice generation for healthcare providers.",
        tags: ["React", "Node.js", "Express", "Paystack", "Flutterwave"],
      },
    ],
  },
  {
    id: "investor",
    title: "Investor and Investment Management",
    description:
      "Platforms for investor records, project profitability tracking, reporting dashboards, and investment workflow management.",
    icon: "/icons/investor.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
    panels: [
      {
        title: "Investor Records",
        description:
          "Centralized database of investor information, investment amounts, and contact history.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Project Profitability",
        description:
          "Dashboards showing ROI, project performance, and financial metrics over time.",
        tags: ["React", "Node.js", "Express", "PostgreSQL"],
      },
      {
        title: "Reporting Dashboards",
        description:
          "Custom reporting for investment performance, fund distribution, and compliance.",
        tags: ["React", "Node.js", "Express", "D3", "Chart.js"],
      },
    ],
  },
  {
    id: "inventory",
    title: "Inventory and Enterprise Stock Management",
    description:
      "Inventory management concepts including stock levels, stock movements, low-stock alerts, availability, product records, and inventory reporting.",
    icon: "/icons/inventory.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    panels: [
      {
        title: "Stock Level Tracking",
        description:
          "Real-time monitoring of stock quantities across multiple locations or warehouses.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Low-Stock Alerts",
        description:
          "Automated notifications when stock falls below configured thresholds.",
        tags: ["React", "Node.js", "Express"],
      },
      {
        title: "Stock Movements",
        description:
          "Record of incoming and outgoing stock, transfers, and adjustments.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Availability Reporting",
        description:
          "Customer-facing and internal reports on product availability and fulfillment status.",
        tags: ["React", "Node.js", "Express", "PostgreSQL"],
      },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Management Systems",
    description:
      "Internal business platforms and management dashboards for monitoring operations, managing records, handling workflows, and presenting business data.",
    icon: "/icons/enterprise.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "Bootstrap", "jQuery"],
    panels: [
      {
        title: "Operations Dashboard",
        description:
          "Centralized view of key business metrics, operational health, and performance KPIs.",
        tags: ["React", "Node.js", "Express"],
      },
      {
        title: "Workflow Management",
        description:
          "Automated approval processes, task assignment, and cross-departmental coordination.",
        tags: ["React", "Node.js", "Express", "jQuery", "Bootstrap"],
      },
      {
        title: "Record Management",
        description:
          "Structured storage and retrieval of business records, documents, and compliance files.",
        tags: ["React", "Node.js", "Express"],
      },
    ],
  },
  {
    id: "fintech",
    title: "Fintech and Payment Systems",
    description:
      "Payment gateway integration, transaction verification, payment workflows, authentication, financial dashboards, and API integrations. Mentions Paystack and Flutterwave where appropriate.",
    icon: "/icons/fintech.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Paystack", "Flutterwave"],
    panels: [
      {
        title: "Payment Gateway Integration",
        description:
          "Integration of Paystack and Flutterwave for transaction processing and verification.",
        tags: ["React", "Node.js", "Express", "Paystack", "Flutterwave"],
      },
      {
        title: "Transaction Verification",
        description:
          "Real-time verification of payments, confirmation status, and fraud checking.",
        tags: ["React", "Node.js", "Express", "PostgreSQL"],
      },
      {
        title: "Financial Dashboards",
        description:
          "Revenue tracking, transaction histories, and payout summaries for fintech products.",
        tags: ["React", "Node.js", "Express", "D3", "Chart.js"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI-Powered Applications",
    description:
      "Integrating AI capabilities into software products through APIs, automating workflows, and improving user experiences. Does not imply training custom AI models.",
    icon: "/icons/ai.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "OpenAI API", "Anthropic API"],
    panels: [
      {
        title: "AI API Integration",
        description:
          "Connecting AI services through REST APIs for intelligent features and workflow automation.",
        tags: ["React", "Node.js", "Express", "OpenAI API"],
      },
      {
        title: "Workflow Automation",
        description:
          "Using AI to automate repetitive tasks, data processing, and decision routing.",
        tags: ["React", "Node.js", "Express"],
      },
      {
        title: "Intelligent Features",
        description:
          "AI-enhanced search, recommendation, and personalization within existing software products.",
        tags: ["React", "Node.js", "Express"],
      },
    ],
  },
  {
    id: "construction",
    title: "Construction and Project Management",
    description:
      "Project tracking, operational dashboards, documentation, progress reporting, and workflow management in the construction sector where applicable.",
    icon: "/icons/construction.svg",
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
    panels: [
      {
        title: "Project Tracking",
        description:
          "Monitoring project milestones, timelines, resource allocation, and progress status.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: "Progress Reporting",
        description:
          "Regular reporting on construction progress, costs, and resource utilization.",
        tags: ["React", "Node.js", "Express"],
      },
      {
        title: "Operational Dashboards",
        description:
          "Overview of site operations, workforce management, and equipment tracking.",
        tags: ["React", "Node.js", "Express"],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce and Business Websites",
    description:
      "Product catalogues, customer-facing websites, responsive interfaces, payment integrations, and conversion-focused user experiences.",
    icon: "/icons/ecommerce.svg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Flutterwave"],
    panels: [
      {
        title: "Product Catalogues",
        description:
          "Organized product displays with search, filtering, and category browsing.",
        tags: ["React", "Next.js", "TypeScript"],
      },
      {
        title: "Checkout & Payment",
        description:
          "Order workflows, cart management, and payment gateway integrations.",
        tags: ["React", "Next.js", "TypeScript", "Paystack", "Flutterwave"],
      },
      {
        title: "Conversion-Focused UX",
        description:
          "Responsive interfaces designed to maximize engagement and conversion rates.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
];