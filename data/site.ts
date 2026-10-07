import type { NavItem, SocialLink } from "@/types";

export const site = {
  name: "Ajibare Babajide",
  fullName: "Ajibare Babajide Blessing",
  firstName: "Ajibare",
  lastName: "Babajide",
  role: "Full-Stack Software Engineer",
  title: "Full-Stack Software Engineer",
  subtitle: "React · Next.js · Node.js",
  location: "Nigeria",
  email: "babajideajibare@gmail.com",
  phone: "+234 813 858 1834",
  phoneHref: "tel:+2348138581834",
  availability: "Available for selected projects",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-bay-seven-73.vercel.app",
  resumePath: "/resume/Ajibare-Babajide-Resume.pdf",
  contactApi: "/api/contact",
  /** Static to stay cache-compatible; adjust when the year changes. */
  copyrightYear: "2026",
  tagline:
    "Full-stack software engineer shipping production applications end-to-end with React, Next.js and Node.js.",
} as const;

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Social profiles — real URLs confirmed by the owner's résumé. */
export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Ajibare",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajibare-babajide-94452a248/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348138581834",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abstack_technologies/",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/SmartAbjob",
  },
];

export const anchors = {
  work: "work",
  about: "about",
  experience: "experience",
  contact: "contact",
} as const;