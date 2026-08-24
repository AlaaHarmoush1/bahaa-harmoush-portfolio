// Grid content: each entry is a "post" repurposed as a campaign/case-study card.
// To swap in a real project: replace `image`, update `altText`, and fill in `fullCaseStudy`.
// `type: "reel"` renders under the Reels tab instead of Posts.

import post01 from "../assets/images/posts/local-seo-hvac-company-case-study.svg";
import post02 from "../assets/images/posts/meta-ads-d2c-skincare-brand-case-study.svg";
import post03 from "../assets/images/posts/social-media-growth-fitness-studio-case-study.svg";
import post04 from "../assets/images/posts/brand-identity-saas-startup-case-study.svg";
import post05 from "../assets/images/posts/go-to-market-strategy-consumer-tech-case-study.svg";
import post06 from "../assets/images/posts/google-ads-roas-furniture-retailer-case-study.svg";
import post07 from "../assets/images/posts/ecommerce-seo-home-goods-retailer-case-study.svg";
import post09 from "../assets/images/posts/brand-identity-system-multi-market-retailer-case-study.svg";

import reel01Video from "../assets/videos/web/rolex-ai-generated-concept-ad.mp4";
import reel01Poster from "../assets/videos/web/rolex-ai-generated-concept-ad-poster.jpg";
import reel02Video from "../assets/videos/web/aurum-media-ai-generated-marketing-video.mp4";
import reel02Poster from "../assets/videos/web/aurum-media-ai-generated-marketing-video-poster.jpg";
import reel03Video from "../assets/videos/web/cilas-coffee-roastery-ai-generated-brand-video.mp4";
import reel03Poster from "../assets/videos/web/cilas-coffee-roastery-ai-generated-brand-video-poster.jpg";
import reel04Video from "../assets/videos/web/aurum-media-ai-generated-brand-explainer-video.mp4";
import reel04Poster from "../assets/videos/web/aurum-media-ai-generated-brand-explainer-video-poster.jpg";

import reel05Video from "../assets/videos/web/cilas-roastery-ethiopian-coffee-story-reel.mp4";
import reel05Poster from "../assets/videos/web/cilas-roastery-ethiopian-coffee-story-reel-poster.jpg";
import reel06Video from "../assets/videos/web/cilas-roastery-gift-box-product-reel.mp4";
import reel06Poster from "../assets/videos/web/cilas-roastery-gift-box-product-reel-poster.jpg";
import reel07Video from "../assets/videos/web/cilas-roastery-storefront-brand-reel.mp4";
import reel07Poster from "../assets/videos/web/cilas-roastery-storefront-brand-reel-poster.jpg";
import reel08Video from "../assets/videos/web/matheos-restaurant-burger-reel.mp4";
import reel08Poster from "../assets/videos/web/matheos-restaurant-burger-reel-poster.jpg";
import reel09Video from "../assets/videos/web/velo-melo-playground-lebanon-reel.mp4";
import reel09Poster from "../assets/videos/web/velo-melo-playground-lebanon-reel-poster.jpg";

export const posts = [
  {
    id: "post-01",
    category: "SEO",
    type: "post",
    image: post01,
    altText: "Cover graphic for a local SEO campaign for an HVAC company",
    caption:
      "How we 3x'd organic traffic for a local HVAC company in 6 months 🔧📈 #SEO #LocalBusiness #Growth",
    metrics: {
      likeLabel: "340% Organic Traffic Growth",
      commentLabel: "6-Month Campaign",
    },
    fullCaseStudy: {
      client: "Regional HVAC Company",
      challenge:
        "Buried past page 3 on Google for every high-intent local search term, losing jobs to competitors with weaker service but stronger visibility.",
      approach:
        "Rebuilt on-page SEO and local citations, restructured service pages around real search intent, and launched a monthly content and Google Business Profile cadence.",
      results: [
        "340% increase in organic traffic",
        "#1 ranking for 12 target keywords",
        "2.4x increase in inbound service calls",
      ],
      timeframe: "6 months",
    },
  },
  {
    id: "post-02",
    category: "Paid Ads",
    type: "post",
    image: post02,
    altText: "Cover graphic for a Meta Ads scale-up campaign",
    caption:
      "Scaling a D2C brand from $8k to $60k/mo ad spend without losing ROAS 📊 #MetaAds #PaidMedia #Ecommerce",
    metrics: {
      likeLabel: "4.8x Average ROAS",
      commentLabel: "18 Creative Variants Tested",
    },
    fullCaseStudy: {
      client: "D2C Skincare Brand",
      challenge:
        "Ad performance was flattening as spend increased — CAC was climbing and the creative library was stale.",
      approach:
        "Rebuilt the account structure around a creative-testing framework, refreshed the hook library weekly, and layered in retargeting segments by funnel stage.",
      results: [
        "Scaled monthly ad spend from $8k to $60k",
        "Maintained a 4.8x average ROAS",
        "Cut cost-per-acquisition by 31%",
      ],
      timeframe: "4 months",
    },
  },
  {
    id: "post-03",
    category: "Social Media",
    type: "post",
    image: post03,
    altText: "Cover graphic for a community growth social media campaign",
    caption:
      "Grew an Instagram community from 2K to 48K real, engaged followers 🚀 #SocialMedia #CommunityGrowth #ContentStrategy",
    metrics: {
      likeLabel: "48K Followers Gained",
      commentLabel: "9.2% Avg. Engagement Rate",
    },
    fullCaseStudy: {
      client: "Boutique Fitness Studio",
      challenge:
        "A stagnant, inconsistent posting schedule with no clear content pillars or community strategy.",
      approach:
        "Designed a content pillar system, built a repeatable Reels format, and ran a consistent community-engagement routine (comments, DMs, collabs).",
      results: [
        "Grew from 2K to 48K followers",
        "9.2% average engagement rate, well above industry benchmark",
        "Class bookings attributed to social up 3x",
      ],
      timeframe: "8 months",
    },
  },
  {
    id: "post-04",
    category: "Branding",
    type: "post",
    image: post04,
    altText: "Cover graphic for a brand identity relaunch project",
    caption:
      "A full rebrand that finally matched the quality of the product 🎨 #Branding #RebrandLaunch #BrandStrategy",
    metrics: {
      likeLabel: "New Identity, 5 Touchpoints",
      commentLabel: "97% Positive Customer Feedback",
    },
    fullCaseStudy: {
      client: "B2B SaaS Startup",
      challenge:
        "A dated visual identity that undersold a genuinely strong product, hurting trust in enterprise sales conversations.",
      approach:
        "Led a brand refresh across logo, color system, typography, and messaging, then rolled it out across the website, deck, and social presence.",
      results: [
        "97% positive feedback from surveyed customers",
        "Consistent identity across 5+ touchpoints",
        "Sales team reported stronger first-call credibility",
      ],
      timeframe: "10 weeks",
    },
  },
  {
    id: "post-05",
    category: "Strategy",
    type: "post",
    image: post05,
    altText: "Cover graphic for a go-to-market strategy project",
    caption:
      "The 90-day go-to-market plan behind a successful product launch 🎯 #Strategy #GoToMarket #ProductLaunch",
    metrics: {
      likeLabel: "3 Channels, 1 Coordinated Launch",
      commentLabel: "90-Day Plan",
    },
    fullCaseStudy: {
      client: "Consumer Tech Startup",
      challenge:
        "A promising new product with no coordinated plan for launch across paid, organic, and PR channels.",
      approach:
        "Built and led a 90-day go-to-market roadmap aligning paid media, content, and press outreach around a single launch narrative.",
      results: [
        "Coordinated launch across 3 channels",
        "Hit first-month revenue target in 19 days",
        "Press coverage in 4 industry publications",
      ],
      timeframe: "90 days",
    },
  },
  {
    id: "post-06",
    category: "Paid Ads",
    type: "post",
    image: post06,
    altText: "Cover graphic for a Google Ads ROAS improvement campaign",
    caption:
      "Fixing a leaky Google Ads account and doubling ROAS in 60 days 📊 #GoogleAds #PPC #ROAS",
    metrics: {
      likeLabel: "2.1x ROAS Improvement",
      commentLabel: "60-Day Turnaround",
    },
    fullCaseStudy: {
      client: "Online Furniture Retailer",
      challenge:
        "A sprawling, poorly structured Google Ads account bleeding budget on irrelevant search terms.",
      approach:
        "Rebuilt campaign structure around intent tiers, overhauled negative keyword lists, and restructured Shopping feed data for better match quality.",
      results: [
        "Doubled ROAS in 60 days",
        "Cut wasted spend by roughly 40%",
        "Improved Quality Score across top campaigns",
      ],
      timeframe: "60 days",
    },
  },
  {
    id: "post-07",
    category: "SEO",
    type: "post",
    image: post07,
    altText: "Cover graphic for an e-commerce SEO project",
    caption:
      "Turning an e-commerce store's category pages into their #1 traffic source 🔍 #SEO #Ecommerce #ContentStrategy",
    metrics: {
      likeLabel: "210% Category Page Traffic",
      commentLabel: "40+ Pages Optimized",
    },
    fullCaseStudy: {
      client: "Online Home Goods Retailer",
      challenge:
        "Category pages were thin, duplicated across variants, and invisible in search despite strong product selection.",
      approach:
        "Rebuilt category page templates with unique content and structured data, and ran a targeted internal linking pass across the catalog.",
      results: [
        "210% increase in category page organic traffic",
        "40+ pages optimized and reindexed",
        "Category pages became the #1 organic entry point",
      ],
      timeframe: "5 months",
    },
  },
  {
    id: "post-08",
    category: "Branding",
    type: "reel",
    image: reel01Poster,
    video: reel01Video,
    altText: "AI-generated concept ad featuring a Rolex watch",
    caption:
      "A Rolex concept ad, generated entirely with AI — no watch, no set, no camera crew 🤖⌚ #AIVideo #ConceptAd #LuxuryMarketing",
    metrics: {
      likeLabel: "AI-Generated Concept Ad",
      commentLabel: "0 Production Budget",
    },
    fullCaseStudy: {
      client: "Personal / Spec Concept (not a client engagement)",
      challenge:
        "Prove out what AI video generation can do for high-end product marketing — no physical product, model, or set to shoot.",
      approach:
        "Built as a personal spec piece, entirely with AI video tools: photorealistic product rendering, lighting, and camera movement generated end-to-end.",
      results: [
        "Full concept spot delivered without booking a shoot",
        "Used as a live demo of AI-generated ad quality for prospective clients",
        "Shows the production-cost ceiling AI video can remove for premium creative",
      ],
      timeframe: "A few days",
    },
  },
  {
    id: "post-10",
    category: "Branding",
    type: "reel",
    image: reel02Poster,
    video: reel02Video,
    altText: "AI-generated marketing video for Bahaa's own company, Aurum Media",
    caption:
      "Marketing my own company, Aurum Media — this entire video, including me on camera, was generated fully by AI 🤖🎬 #AIVideo #AurumMedia #PersonalBrand",
    metrics: {
      likeLabel: "100% AI-Generated",
      commentLabel: "Zero Film Crew",
    },
    fullCaseStudy: {
      client: "Aurum Media (own company)",
      challenge:
        "Introduce Aurum with a presenter-led video without booking a studio, crew, or shoot day.",
      approach:
        "Generated entirely with AI video tools, including an AI-generated on-camera presence, as a real-world test of AI video as a production channel before pitching it to clients.",
      results: [
        "Full presenter-style video with no studio or crew",
        "Doubles as proof-of-concept for AI-generated video services",
        "Turnaround measured in hours, not weeks",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-11",
    category: "Social Media",
    type: "reel",
    image: reel03Poster,
    video: reel03Video,
    altText: "AI-generated brand video for Cilas, a coffee roastery",
    caption:
      "AI-generated brand story for Cilas, a coffee roastery — the kind of content that used to need a full shoot day ☕🎬 #AIVideo #Branding #CoffeeRoastery",
    metrics: {
      likeLabel: "AI-Generated Brand Video",
      commentLabel: "No Shoot Day Needed",
    },
    fullCaseStudy: {
      client: "Cila's Roastery",
      challenge:
        "Cilas needed warm, scroll-stopping brand content without the budget or time for a full on-site video shoot.",
      approach:
        "Produced entirely with AI video generation, capturing the craft and atmosphere of the roastery without a camera crew on location.",
      results: [
        "Full brand video delivered without an on-site shoot",
        "Ready-to-post content across Reels and Stories",
        "Repeatable format Cilas can reuse for future drops",
      ],
      timeframe: "A few days",
    },
  },
  {
    id: "post-12",
    category: "Branding",
    type: "reel",
    image: reel04Poster,
    video: reel04Video,
    altText: "AI-generated brand explainer video for Aurum Media, presented by an AI spokesperson",
    caption:
      "A second AI-generated piece for Aurum Media — a full brand explainer, presented by a fully AI-generated spokesperson 🤖🎥 #AIVideo #AurumMedia #BrandExplainer",
    metrics: {
      likeLabel: "100% AI-Generated",
      commentLabel: "AI-Generated Spokesperson",
    },
    fullCaseStudy: {
      client: "Aurum Media (own company)",
      challenge:
        "Explain what Aurum Media does in a way that's dynamic and precise, without booking an on-camera talent or studio day.",
      approach:
        "Scripted and generated end-to-end with AI video tools, including a fully AI-generated presenter delivering the pitch to camera.",
      results: [
        "Full explainer video with an AI-generated on-camera presenter",
        "No talent, studio, or shoot day required",
        "Reusable format for future Aurum Media service explainers",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-13",
    category: "Social Media",
    type: "reel",
    image: reel05Poster,
    video: reel05Video,
    altText: "Short-form video for Cila's Roastery telling the origin story of Ethiopian coffee",
    caption:
      "Shot and edited on-site at Cila's Roastery — the legend of Ethiopian coffee, told the fun way ☕🇪🇹 #ContentCreation #ShortForm #CoffeeRoastery",
    metrics: {
      likeLabel: "Filmed & Edited In-House",
      commentLabel: "On-Location Shoot",
    },
    fullCaseStudy: {
      client: "Cila's Roastery",
      challenge:
        "Turn a single-origin coffee (Ethiopia) into a short-form story people actually watch to the end, not just another product post.",
      approach:
        "Filmed and edited on location at the roastery, pairing an on-camera storyteller with fast-paced captions and visual gags to keep retention high.",
      results: [
        "Full storytelling reel shot and edited on-site",
        "Positioned Cila's Roastery's single-origin lineup as content, not just inventory",
        "Repeatable format for future origin-story content",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-14",
    category: "Social Media",
    type: "reel",
    image: reel06Poster,
    video: reel06Video,
    altText: "Product styling video for a Cila's Roastery curated nut and coffee gift box",
    caption:
      "Styling a Cila's Roastery gift box for the camera — the kind of product content that sells the gifting occasion, not just the product 🎁 #ProductContent #GiftBox #CoffeeRoastery",
    metrics: {
      likeLabel: "Filmed & Edited In-House",
      commentLabel: "Product Styling",
    },
    fullCaseStudy: {
      client: "Cila's Roastery",
      challenge:
        "Show off a curated gift box product in a way that feels premium and gift-worthy, not like a stock product photo.",
      approach:
        "Filmed and edited a hands-on styling video showcasing the assortment and packaging, built for Reels and Stories.",
      results: [
        "Ready-to-post product content for the gifting lineup",
        "Reusable format for future seasonal gift boxes",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-15",
    category: "Social Media",
    type: "reel",
    image: reel07Poster,
    video: reel07Video,
    altText: "Storefront brand video for Cila's Roastery",
    caption:
      "Bringing the Cila's Roastery storefront to life on camera — \"a flavor you can feel\" ☕📍 #BrandVideo #CoffeeRoastery #ContentCreation",
    metrics: {
      likeLabel: "Filmed & Edited In-House",
      commentLabel: "On-Location Shoot",
    },
    fullCaseStudy: {
      client: "Cila's Roastery",
      challenge:
        "Give people a reason to walk into the physical shop, not just browse the menu online.",
      approach:
        "Filmed and edited a storefront brand piece capturing the space and atmosphere, built to drive local foot traffic.",
      results: [
        "Storefront brand video ready for Reels and local promotion",
        "Reinforced the shop's tagline and visual identity on camera",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-16",
    category: "Social Media",
    type: "reel",
    image: reel08Poster,
    video: reel08Video,
    altText: "Food cinematography reel for Matheo's restaurant",
    caption:
      "Sometimes food isn't about hunger — at Matheo's, it's about unforgettable moments and feelings 🍔 #FoodContent #Restaurant #ContentCreation",
    metrics: {
      likeLabel: "Filmed & Edited In-House",
      commentLabel: "Food Cinematography",
    },
    fullCaseStudy: {
      client: "Matheo's",
      challenge:
        "Make a burger feel like an experience worth craving, not just another food photo in the feed.",
      approach:
        "Filmed and edited moody, close-up food cinematography paired with an emotion-led caption, built for scroll-stopping Reels.",
      results: [
        "Cinematic food reel ready for Reels and Stories",
        "Repeatable visual style for future menu features",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-17",
    category: "Social Media",
    type: "reel",
    image: reel09Poster,
    video: reel09Video,
    altText: "Promotional reel for Vèlo Mèlo, an indoor playground in Lebanon",
    caption:
      "The biggest playground in Lebanon 😍 — shot and edited on-site at Vèlo Mèlo #ContentCreation #ShortForm #FamilyEntertainment",
    metrics: {
      likeLabel: "Filmed & Edited In-House",
      commentLabel: "On-Location Shoot",
    },
    fullCaseStudy: {
      client: "Vèlo Mèlo",
      challenge:
        "Get parents to actually pick this playground over the competition — needed content that sold the scale and experience, not just a list of features.",
      approach:
        "Filmed and edited an on-location walkthrough with a bold, punchy hook (\"Biggest playground in Lebanon\") built for maximum share-ability.",
      results: [
        "High-energy walkthrough reel ready for Reels and Stories",
        "Positioned the venue on scale and experience, not just amenities",
      ],
      timeframe: "1 day",
    },
  },
  {
    id: "post-09",
    category: "Branding",
    type: "post",
    image: post09,
    altText: "Cover graphic for a visual identity system project",
    caption:
      "Designing a visual identity system flexible enough to scale across 12 markets 🎨 #Branding #VisualIdentity #DesignSystem",
    metrics: {
      likeLabel: "12 Markets, 1 Identity System",
      commentLabel: "Full Brand Guidelines Delivered",
    },
    fullCaseStudy: {
      client: "Multi-Market Retail Chain",
      challenge:
        "Inconsistent branding across regional teams was diluting recognition and trust.",
      approach:
        "Developed a flexible identity system with clear guardrails, and delivered a practical guidelines doc regional teams could actually use.",
      results: [
        "Unified visual identity across 12 markets",
        "Full guidelines system delivered and adopted",
        "Regional teams reported faster asset turnaround",
      ],
      timeframe: "12 weeks",
    },
  },
];
