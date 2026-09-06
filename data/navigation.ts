export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "SEO Services", href: "/seo-services", hasDropdown: true },
  { label: "SEO Packages", href: "/seo-packages" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const serviceNavItems = [
  { label: "Local SEO", href: "/seo-services/local-seo" },
  { label: "Technical SEO", href: "/seo-services/technical-seo" },
  { label: "On-Page SEO", href: "/seo-services/on-page-seo" },
  { label: "Off-Page SEO", href: "/seo-services/off-page-seo" },
  { label: "E-commerce SEO", href: "/seo-services/ecommerce-seo" },
  { label: "SEO Audit", href: "/seo-services/seo-audit" },
  { label: "Keyword Research", href: "/seo-services/keyword-research" },
  { label: "Link Building", href: "/seo-services/link-building" },
  { label: "Content SEO", href: "/seo-services/content-seo" },
  {
    label: "Google Business Profile Optimization",
    href: "/seo-services/google-business-profile",
  },
  { label: "Competitor Analysis", href: "/seo-services/competitor-analysis" },
  { label: "SEO Consulting", href: "/seo-services/seo-consulting" },
  { label: "Website SEO Optimization", href: "/seo-services/website-seo" },
] as const;
