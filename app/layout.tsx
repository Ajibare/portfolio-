import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { SiteFrame } from "@/components/layout/SiteFrame";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ajibare Babajide — Full-Stack Software Engineer",
    template: "%s — Ajibare Babajide",
  },
  description:
    "Full-Stack Software Engineer building and shipping production web applications end-to-end with React, Next.js, Node.js and Express.",
  keywords: [
    "Ajibare Babajide",
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Nigeria",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Ajibare Babajide — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building and shipping production web applications end-to-end with React, Next.js, Node.js and Express.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajibare Babajide — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building and shipping production web applications end-to-end with React, Next.js, Node.js and Express.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Paystack",
      "Flutterwave",
    ],
    workLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: site.location },
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <SiteFrame>{children}</SiteFrame>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}