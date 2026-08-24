// Story highlights repurpose Instagram's highlight bubbles as service categories.
// Each highlight has a cover image + a series of "slides" shown in the story viewer.

import socialCover from "../assets/images/highlights/social-media-marketing-services.svg";
import paidAdsCover from "../assets/images/highlights/paid-ads-ppc-management-services.svg";
import seoCover from "../assets/images/highlights/seo-search-engine-optimization-services.svg";
import brandingCover from "../assets/images/highlights/brand-identity-design-services.svg";
import strategyCover from "../assets/images/highlights/digital-marketing-strategy-services.svg";
import credentialsCover from "../assets/images/highlights/certifications-credentials.svg";
import digitalMarketingCertificate from "../assets/images/bahaa-harmoush-digital-marketing-certificate-gradezilla.jpg";

export const highlights = [
  {
    id: "social-media",
    label: "Social Media",
    coverImage: socialCover,
    slides: [
      {
        id: 1,
        type: "stat",
        heading: "150K+ Followers Grown",
        body: "Across client accounts using content pillar systems and consistent community engagement.",
      },
      {
        id: 2,
        type: "tool",
        heading: "Tools I Use",
        body: "Meta Business Suite, Canva, CapCut, Sprout Social",
      },
      {
        id: 3,
        type: "quote",
        heading: "Client Says",
        body: "\"Our engagement rate tripled within two months of working together.\" — Boutique Fitness Studio",
      },
    ],
  },
  {
    id: "paid-ads",
    label: "Paid Ads",
    coverImage: paidAdsCover,
    slides: [
      {
        id: 1,
        type: "stat",
        heading: "$25k+ Ad Spend Managed",
        body: "Across Meta, Google, and TikTok Ads with an average blended ROAS of 4x+.",
      },
      {
        id: 2,
        type: "tool",
        heading: "Platforms I Run",
        body: "Meta Ads Manager, Google Ads, TikTok Ads Manager, Google Analytics 4",
      },
      {
        id: 3,
        type: "quote",
        heading: "Client Says",
        body: "\"He doubled our ROAS in two months and actually explained why.\" — D2C Skincare Brand",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    coverImage: seoCover,
    slides: [
      {
        id: 1,
        type: "stat",
        heading: "300%+ Organic Traffic Wins",
        body: "Delivered for local service businesses and e-commerce catalogs alike.",
      },
      {
        id: 2,
        type: "tool",
        heading: "Tools I Use",
        body: "Ahrefs, Google Search Console, Screaming Frog, Surfer SEO",
      },
      {
        id: 3,
        type: "quote",
        heading: "Client Says",
        body: "\"We finally rank #1 for the searches that actually bring in jobs.\" — Regional HVAC Company",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    coverImage: brandingCover,
    slides: [
      {
        id: 1,
        type: "stat",
        heading: "15+ Brand Identities Built",
        body: "From early-stage startups to multi-market retail chains.",
      },
      {
        id: 2,
        type: "tool",
        heading: "What I Deliver",
        body: "Brand strategy, visual identity systems, messaging frameworks, guidelines",
      },
      {
        id: 3,
        type: "quote",
        heading: "Client Says",
        body: "\"Our new identity finally matches how good the product actually is.\" — B2B SaaS Startup",
      },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    coverImage: strategyCover,
    slides: [
      {
        id: 1,
        type: "stat",
        heading: "30+ GTM & Growth Plans",
        body: "Built for product launches, market expansions, and full-funnel growth.",
      },
      {
        id: 2,
        type: "tool",
        heading: "How I Work",
        body: "Discovery → roadmap → coordinated execution across paid, organic, and content",
      },
      {
        id: 3,
        type: "quote",
        heading: "Client Says",
        body: "\"He gave us a plan the whole team could actually execute against.\" — Consumer Tech Startup",
      },
    ],
  },
  {
    id: "credentials",
    label: "Credentials",
    coverImage: credentialsCover,
    slides: [
      {
        id: 1,
        type: "credential",
        image: digitalMarketingCertificate,
        imageAlt:
          "Bahaa Harmoush's Certificate of Achievement for the Digital Marketing Intensive Course (60 Hours) from Gradezilla",
        heading: "Digital Marketing Intensive Course",
        body: "60-hour intensive course completed through Gradezilla, CPD-accredited (60 CPD credits). Certificate #912240479, issued 28 July 2026.",
      },
    ],
  },
];
