export const siteConfig = {
  name: "GobalCareSolutions",
  email: "gobalcaresolutions@outlook.com",
  phone: "1-858-331-9355",
  phoneTel: "+18583319355",
  url: "https://gobalcaresolutions.vercel.app",
  description:
    "Professional digital marketing services including SEO, social media, content marketing, and digital marketing packages starting at $100.",
  address: "[Business Address]",
} as const;

export type SiteConfig = typeof siteConfig;
