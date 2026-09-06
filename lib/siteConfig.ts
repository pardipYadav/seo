export const siteConfig = {
  name: "GobalCareSolutions",
  email: "gobalcaresolutions@outlook.com",
  phone: "1-858-331-9355",
  phoneTel: "+18583319355",
  url: "https://gobalcaresolutions.vercel.app",
  description:
    "Professional SEO services including local SEO, technical SEO, e-commerce SEO, keyword research, content SEO, and SEO packages starting at $1,000.",
  address: "[Business Address]",
} as const;

export type SiteConfig = typeof siteConfig;
