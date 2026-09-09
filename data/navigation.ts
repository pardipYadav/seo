export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/seo-services", hasDropdown: true },
  { label: "Packages", href: "/seo-packages" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceNavItems = [
  { label: "SEO", href: "/seo-services/seo" },
  { label: "Google Ads", href: "/seo-services/google-ads" },
  { label: "Social Media Marketing", href: "/seo-services/social-media-marketing" },
  { label: "Social Media Ads", href: "/seo-services/social-media-ads" },
  { label: "Content Marketing", href: "/seo-services/content-marketing" },
  { label: "Email Marketing", href: "/seo-services/email-marketing" },
  { label: "Web Design & Development", href: "/seo-services/web-design-development" },
  { label: "Local SEO", href: "/seo-services/local-seo" },
  { label: "E-commerce Marketing", href: "/seo-services/ecommerce-marketing" },
  { label: "YouTube Marketing", href: "/seo-services/youtube-marketing" },
  { label: "Reputation Management", href: "/seo-services/reputation-management" },
  { label: "Lead Generation", href: "/seo-services/lead-generation" },
  { label: "Analytics & Reporting", href: "/seo-services/analytics-reporting" },
  { label: "Branding", href: "/seo-services/branding" },
] as const;
