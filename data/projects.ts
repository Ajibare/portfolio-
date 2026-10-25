import type { Project, ProjectScreenshot } from "@/types";

/** The write-up fields below are intentionally marked "[PENDING]" everywhere a fact about the project is not yet confirmed by the owner. No results, metrics, links or testimonials are invented here.

 * When final copy is supplied, replace a "[PENDING] ..." string with the real text and (optionally) flip `contentStatus` to "final". `results` stays empty until verified metrics exist. `links` stay `null` until real URLs exist.
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
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/trading-bolt/cover.webp", alt: "Trading Bolt — interface preview" },
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
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  // {
  //   slug: "epilux",
  //   number: "02",
  //   name: "Epilux",
  //   category: "Digital Product",
  //   summary:
  //     "Epilux is a digital product built from first principles: a web application that makes its core workflow faster and more intuitive than the alternatives.",
  //   stack: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB"],
  //   cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/epilux/cover.webp", alt: "Epilux — interface preview" },
  //   contentStatus: "pending",
  //   overview:
  //     "Epilux solves a [PENDING: describe the problem it addresses]. It was designed and shipped as a full-stack web application — a React/Next.js frontend, a Node.js API and MongoDB persistence.",
  //   role: "Full-Stack Developer — product build from design through to delivery.",
  //   problem: "[PENDING: what was wrong before Epilux existed].",
  //   solution:
  //     "A focused, fast interface backed by a clean, typed API — the product acts as the single place to get the job done.",
  //   technology:
  //     "React, TypeScript and Next.js on the frontend; Node.js and Express on the API; MongoDB as the data store.",
  //   architecture:
  //     "Next.js app → Node/Express API → MongoDB, with a typed schema and straightforward feature modules.",
  //   features: [
  //     "[PENDING] Headline capability one.",
  //     "[PENDING] Headline capability two.",
  //     "[PENDING] Headline capability three.",
  //   ],
  //   gallery: [] as ProjectScreenshot[],
  //   results: [],
  //   links: { live: null, github: null },
  // },
  {
    slug: "vastcare-pharmacy",
    number: "03",
    name: "VastCare Pharmacy",
    category: "Healthcare · Pharmacy · Digital Services",
    summary:
      "A pharmacy website experience focused on communicating healthcare services, presenting medication categories, and helping customers access pharmacy consultations, prescription refills, and delivery information.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/vastcare1_b4tn3t.png", alt: "VastCare Pharmacy — pharmacy website" },
    contentStatus: "pending",
    overview:
      "VastCare Pharmacy's supplied website content emphasises authentic medications, pharmacist guidance, prescription management, and convenient access to pharmacy services. The digital experience presents the organisation, its services, medication categories, branch locations, and customer contact options.",
    role: "Frontend Developer",
    problem:
      "Customers need access to pharmacy services, consultations, and prescription refills.",
    solution:
      "Present the platform's features for pharmacy introduction, service discovery, medication categories, prescription journey, branch information, responsive design, and customer contact as described in the supplied content.",
    technology: "",
    architecture: "",
    features: [
      "Pharmacy introduction: Communicate the organisation's healthcare focus and commitment to professional service.",
      "Service discovery: Present prescription refills, pharmacist consultations, delivery, health checks, and immunisation information.",
      "Medication categories: Organise the supplied categories, including prescription medicines, over-the-counter products, vitamins and supplements, baby and family care, and clinical screenings.",
      "Prescription journey: Present the advertised process of contacting the pharmacy or submitting prescription information, professional review, and pickup or delivery.",
      "Branch information: Help visitors locate the listed Ibadan branches and find contact information.",
      "Responsive design: Make healthcare information easy to navigate on mobile and desktop.",
      "Customer contact: Provide clear routes to pharmacy enquiries and consultation requests where supported by the actual implementation.",
    ],
    gallery: [] as ProjectScreenshot[],
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
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/healthcare-management-system/cover.webp", alt: "Healthcare Management System — interface preview" },
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
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "jesus-arena",
    number: "08",
    name: "Jesus Arena",
    category: "Church Website · Community & Ministry",
    summary:
      "A ministry website for Jesus Arena, presenting its Christ-centred mission, leadership, beliefs, media, blog content, service information, and opportunities for people to connect with the church community.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/jesus-arena/cover.webp", alt: "Jesus Arena — ministry website" },
    contentStatus: "pending",
    overview:
      "About the ministry: Communicate the vision of bringing hope, equipping lives, and affecting destinies. Mission and beliefs: Present the church's stated mission and Christian beliefs in an organised, readable format. Leadership: Provide dedicated content for Lead Pastor Oluranti Orioke and Co-Lead Pastor Taiwo Orioke, based on the supplied website content. Media and blog: Support ministry updates, articles, and other published content. Community engagement: Present service times, contact information, mailing-list signup, giving, and social channels where supported by the existing website. Content organisation: Make the church's information easy for visitors to navigate across desktop and mobile devices.",
    role: "Frontend Developer",
    problem:
      "The company needed a digital presence that communicates its services, professional approach, and construction and consultancy expertise.",
    solution:
      "Organise the supplied content into a clear company introduction, service overview, reasons to choose the firm, featured projects, delivery process, insights, and contact sections.",
    technology: "",
    architecture: "",
    features: [
      "About the ministry: Communicate the vision of bringing hope, equipping lives, and affecting destinies.",
      "Mission and beliefs: Present the church's stated mission and Christian beliefs in an organised, readable format.",
      "Leadership: Provide dedicated content for Lead Pastor Oluranti Orioke and Co-Lead Pastor Taiwo Orioke.",
      "Media and blog: Support ministry updates, articles, and other published content.",
      "Community engagement: Present service times, contact information, mailing-list signup, giving, and social channels.",
      "Content organisation: Make the church's information easy to navigate across desktop and mobile devices.",
    ],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "talent-tower",
    number: "09",
    name: "Talent Tower",
    category: "Career Technology · AI-Assisted Career Guidance",
    summary:
      "A career guidance platform concept designed to help students, graduates, professionals, and career changers explore career options through assessments, personalised recommendations, and career information.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/talent-tower/cover.webp", alt: "Talent Tower — career platform" },
    contentStatus: "pending",
    overview:
      "Purpose: Help people make more informed education and career decisions. Career prediction: Use onboarding information and assessment responses to support career-path recommendations. Personalisation: Present career suggestions informed by a person's background, interests, and aspirations. Personality assessments: Help users explore behavioural traits, work preferences, and potentially suitable career directions. Career exploration: Provide information about career paths, salary ranges, growth potential, and possible alternatives. User experience: Make it easy to understand the platform, take assessments, explore career options, and access account-related actions.",
    role: "Frontend Developer",
    problem:
      "Help people make more informed education and career decisions.",
    solution:
      "Present the platform's features for career prediction, personalisation, personality assessments, and career exploration as described in the supplied content.",
    technology: "",
    architecture: "",
    features: [
      "Career prediction: Use onboarding information and assessment responses to support career-path recommendations.",
      "Personalisation: Present career suggestions informed by a person's background, interests, and aspirations.",
      "Personality assessments: Help users explore behavioural traits, work preferences, and potentially suitable career directions.",
      "Career exploration: Provide information about career paths, salary ranges, growth potential, and possible alternatives.",
      "User experience: Make it easy to understand the platform, take assessments, explore career options, and access account-related actions.",
    ],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "gorro",
    number: "10",
    name: "Gorro",
    category: "Fintech · Savings & Digital Treasury",
    summary:
      "A savings and community treasury platform designed to support personal saving and more transparent management of shared funds, including structured savings products, group savings, and rotational savings.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/f_auto,q_auto,w_auto,c_limit/gorro/cover.webp", alt: "Gorro — savings platform" },
    contentStatus: "pending",
    overview:
      "Personal savings: Present fixed savings, target savings, Gorro Vault, and Smart Wallet as products described in the supplied material. Group savings: Explain how Circle Savings supports groups working towards shared financial goals. Rotational savings: Describe Ajo by Gorro as a digital approach to contribution tracking and scheduled rotational payouts. Community treasury: Explain Gorro Cluster's stated three-admin withdrawal approval model and transparent member ledger. Financial transparency: Highlight the product's emphasis on transaction records, visibility, shared governance, and dispute handling. Onboarding: Present the stated journey of downloading the app, creating an account, completing verification, funding a wallet, and selecting a savings or group product.",
    role: "Frontend Developer",
    problem:
      "Support personal saving and more transparent management of shared funds.",
    solution:
      "Present the product's user-facing purpose and major workflows as described in the supplied material without exposing confidential internal implementation details.",
    technology: "",
    architecture: "",
    features: [
      "Personal savings: Fixed savings, target savings, Gorro Vault, and Smart Wallet.",
      "Group savings: Circle Savings supports groups working towards shared financial goals.",
      "Rotational savings: Ajo by Gorro — digital approach to contribution tracking and scheduled rotational payouts.",
      "Community treasury: Gorro Cluster's three-admin withdrawal approval model and transparent member ledger.",
      "Financial transparency: Transaction records, visibility, shared governance, and dispute handling.",
      "Onboarding: Downloading the app, creating an account, completing verification, funding a wallet, and selecting a savings or group product.",
    ],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "saaj-partners-and-consult",
    number: "11",
    name: "SAAJ Partners and Consult",
    category: "Corporate Website · Construction & Consultancy",
    summary:
      "A corporate digital experience for a construction and consultancy firm, presenting its built-environment services, project delivery approach, company profile, and client enquiry journey.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/v1792961852/saaj1_duzsp0.png", alt: "SAAJ Partners and Consult — corporate website" },
    contentStatus: "pending",
    overview:
      "The supplied company content mentions a track record of 3+ projects, 5+ clients, 8 services, and 2+ years of experience. These figures belong to SAAJ's supplied website content. Do not use them as my personal achievements or portfolio-wide statistics. The supplied testimonials are labelled as sample testimonials. Do not present them as verified client endorsements without confirmation.",
    role: "Full-Stack Developer",
    problem:
      "The company needed a digital presence that communicates its services, professional approach, and construction and consultancy expertise.",
    solution:
      "Organise the supplied content into a clear company introduction, service overview, reasons to choose the firm, featured projects, delivery process, insights, and contact sections.",
    technology: "",
    architecture: "",
    features: [],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
  {
    slug: "epilux-water",
    number: "02.1",
    name: "Epilux Water",
    category: "E-commerce · Water Delivery · Referral Rewards",
    summary:
      "An online water-ordering and delivery platform connecting customers with local marketers for home and business deliveries, with product ordering, bulk sales, regular delivery options, customer wallets, and referral rewards.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/v1792961850/epilux3_klo0jg.png", alt: "Epilux Water — water delivery platform" },
    contentStatus: "final",
    overview:
      "Epilux Water provides a digital platform for ordering sachet and bottled water. Its website presents product listings, bulk-order options, regular deliveries, customer wallet services, referral rewards, and reseller opportunities. The platform aims to make water ordering more convenient for households and businesses while creating opportunities for customer referrals and local marketers.",
    role: "Backend Developer",
    problem:
      "Households and businesses need a convenient way to order drinking water and explore delivery options. The business also aims to encourage repeat purchases and customer referrals.",
    solution:
      "A digital water-ordering experience that brings product listings, bulk sales, regular deliveries, wallet services, referral rewards, and reseller information together in one place.",
    technology: "",
    architecture: "",
    features: [
      "Product ordering: Browse available water products and ordering options.",
      "Bulk sales: Information and ordering options for larger water requirements.",
      "Regular deliveries: Subscription-based delivery options presented on the website.",
      "Customer wallet: A wallet feature listed among the platform's customer services.",
      "Referral and rewards: A programme that rewards customers through qualifying orders and referrals.",
      "Reseller programme: Information for customers interested in reselling Epilux products.",
      "Local delivery: Water delivery through local marketers.",
    ],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: "https://www.epilux.com.ng/", github: null },
  },
  {
    slug: "future-homes-properties",
    number: "12",
    name: "Future Homes Properties",
    category: "Real Estate · Property Discovery",
    summary:
      "A real estate website experience for discovering properties across Nigeria, exploring property categories and locations, and learning about sales, rentals, property management, and investment services.",
    stack: [],
    cover: { src: "https://res.cloudinary.com/dhipowibc/image/upload/v1792961850/future_home1_pggdmw.png", alt: "Future Homes Properties — property discovery" },
    contentStatus: "pending",
    overview:
      "Future Homes Properties presents a digital property-discovery experience designed to help prospective buyers, renters, landlords, and investors explore real estate opportunities. The supplied content covers property search, featured listings, popular neighbourhoods, real estate services, and educational articles.",
    role: "Full-Stack Developer",
    problem:
      "Prospective buyers, renters, landlords, and investors need a digital platform to explore real estate opportunities.",
    solution:
      "Organise the supplied content into property search, featured listings, popular neighbourhoods, real estate services, and educational articles.",
    technology: "",
    architecture: "",
    features: [
      "Property discovery: Search for properties by location, type, or keyword.",
      "Property categories: Present houses, apartments, commercial properties, land, luxury properties, and offices.",
      "Location exploration: Organise listings around locations such as Lekki, Ikoyi, Victoria Island, Ajah, Eko Atlantic, and Ikeja GRA.",
      "Featured listings: Provide a dedicated presentation for selected properties.",
      "Real estate services: Present property sales, rentals, management, investment advisory, property development, and legal and conveyancing services.",
      "Content and insights: Organise property guides, market articles, and educational content.",
      "Contact journey: Make it straightforward for prospective customers to enquire about properties or services.",
    ],
    gallery: [] as ProjectScreenshot[],
    results: [],
    links: { live: null, github: null },
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}