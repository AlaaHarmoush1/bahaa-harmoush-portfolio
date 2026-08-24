// Single import point for all editable portfolio content.
// To personalize this site: edit `profile` below, and edit posts.js / highlights.js /
// testimonials.js for the grid, story highlights, and testimonial cards.

import avatar from "../assets/images/bahaa-harmoush-digital-marketing-specialist.webp";

export const profile = {
  name: "Bahaa Harmoush",
  handle: "@bahaa.marketing",
  verified: true,
  verifiedLabel: "Certified Meta & Google Ads Partner",
  avatar,
  bio: {
    tagline: "Digital Marketing Expert — Social Media, Paid Ads, SEO, Branding & Strategy",
    specialties: ["Social Media", "Paid Ads", "SEO", "Branding", "Strategy"],
    location: "📍 Remote / Worldwide",
  },
  website: {
    label: "linktr.ee/BahaaHarmoush",
    url: "https://linktr.ee/BahaaHarmoush?utm_source=linktree_profile_share",
  },
  contact: {
    email: "Bahaaharmoush03@gmail.com",
    whatsapp: "https://wa.me/96181052989",
  },
  stats: [
    { label: "Campaigns", value: "47" },
    { label: "Clients Served", value: "32" },
    { label: "Avg. ROI", value: "312%" },
  ],
};

export { posts } from "./posts.js";
export { highlights } from "./highlights.js";
export { testimonials } from "./testimonials.js";
