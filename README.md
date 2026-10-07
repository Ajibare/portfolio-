# Portfolio — Ajibare Babajide

Personal portfolio for **Ajibare Babajide** (Software Engineer, Nigeria) — a
dark, editorial, single-page site with case studies, built with Next.js 16,
TypeScript, Tailwind v4, GSAP, Framer Motion and React Three Fiber.

## Stack

- **Next.js 16** (App Router, Cache Components, Partial Prefetching, Turbopack)
- **TypeScript** · **Tailwind CSS v4**
- **GSAP** + ScrollTrigger animations
- **Framer Motion** (loader, mobile menu, reduced-motion aware)
- **Three.js / @react-three/fiber** (abstract hero wireframe)
- **react-hook-form + Zod** form validation, **Resend** for email
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command               | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `npm run dev`         | Development server                             |
| `npm run build`       | Production build (lint + typecheck + prerender)|
| `npm run start`       | Serve the production build                     |
| `npm run lint`        | ESLint                                         |
| `npm run cover-art`   | Regenerate project cover WebP art (sharp)      |
| `npm run resume`      | Regenerate `public/resume/…Resume.pdf` (pdfkit)|

## Environment

Copy `.env.example` to `.env.local` and configure:

| Variable                 | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Canonical URL for metadata, sitemap and robots             |
| `RESEND_API_KEY`         | Enables `/api/contact` email delivery                      |
| `CONTACT_RECIPIENT`      | Where contact-form messages are sent (default: site email) |

While `RESEND_API_KEY` is unset the contact form replies with a clear
"not configured" message so the site never fails silently.

## Content

Real content is supplied by the owner — nothing is invented.

- `data/projects.ts` holds the case-study copy. Fields prefixed `[PENDING]`
  are placeholders awaiting the owner's confirmation; `results[]` is only ever
  filled with verified metrics.
- `data/site.ts` `socials` are rendered as disabled "URL pending" entries until
  real profile links are added.
- `data/testimonials.ts` is empty by design and renders an explicit
  empty-state rather than invented praise.

## Deployment

Recommended: **Vercel** (zero config). Set the `NEXT_PUBLIC_SITE_URL` env var,
then `npm run build` passes with static prerender (PPR on case studies), and the
`/api/contact` route runs on Node.js.# portfolio-
