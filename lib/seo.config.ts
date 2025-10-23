import type { Metadata } from "next";

/**
 * SEO Configuration for Nicholas Vidal
 */

export const siteConfig = {
  name: "Nicholas James Vidal",
  title: "Nicholas Vidal | Cybersecurity Leader & DFIR Expert",
  description:
    "15 years of experience leading cyber defense strategy, incident response, and secure infrastructure design across complex enterprise environments. Proficient in DFIR, malware analysis, vulnerability management, and securing hybrid cloud systems in alignment with NIST, RMF, and FedRAMP frameworks.",
  url: "https://nicholasvidal.tech",
  ogImage: "https://nicholasvidal.tech/og-image.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/NicholasVidal/",
    github: "https://github.com/nicholasvidal",
    twitter: "https://twitter.com/nicholasvidal",
    email: "mailto:Vidal@NicholasVidal.tech",
  },
  contact: {
    email: "Vidal@NicholasVidal.tech",
    phone: "(618) 799-3850",
    location: "Portales, NM 88130",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nicholas Vidal",
    "cybersecurity",
    "DFIR",
    "digital forensics",
    "incident response",
    "threat intelligence",
    "AI security",
    "cloud security",
    "cybersecurity leader",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nicholasvidal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Senior Cybersecurity Director",
  description: siteConfig.description,
  url: siteConfig.url,
  sameAs: [
    siteConfig.links.linkedin,
    siteConfig.links.github,
    siteConfig.links.twitter,
  ],
};

