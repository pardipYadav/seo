export type Package = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
};

export const packages: Package[] = [
  {
    id: "seo-starter",
    name: "SEO Starter",
    price: "Starting at $1,000/month",
    description: "Best for small businesses and local businesses.",
    features: [
      "Initial SEO audit",
      "Up to 20 target keywords",
      "On-page optimization",
      "Title and meta optimization",
      "Technical SEO review",
      "Google Search Console review",
      "Basic competitor research",
      "Internal linking recommendations",
      "Local SEO basics",
      "Monthly performance report",
    ],
    cta: "Get Started",
    ctaHref: "/contact?package=seo-starter",
  },
  {
    id: "seo-growth",
    name: "SEO Growth",
    price: "Starting at $1,500/month",
    description: "Ideal for businesses ready to accelerate organic growth.",
    features: [
      "Everything in SEO Starter",
      "Up to 40 target keywords",
      "Advanced keyword research",
      "Competitor gap analysis",
      "Technical SEO monitoring",
      "Content strategy",
      "Existing page optimization",
      "Local SEO improvements",
      "Google Business Profile optimization",
      "Backlink opportunity research",
      "Monthly strategy review",
    ],
    cta: "Choose Growth",
    ctaHref: "/contact?package=seo-growth",
    popular: true,
  },
  {
    id: "seo-pro",
    name: "SEO Pro",
    price: "Starting at $2,500/month",
    description: "Advanced SEO for competitive markets and growing brands.",
    features: [
      "Everything in SEO Growth",
      "Up to 75 target keywords",
      "Advanced technical SEO",
      "Content gap analysis",
      "SEO content planning",
      "Schema recommendations",
      "Advanced competitor tracking",
      "Authority-building strategy",
      "Digital PR opportunities",
      "Conversion-focused SEO recommendations",
      "Detailed monthly reporting",
    ],
    cta: "Choose Pro",
    ctaHref: "/contact?package=seo-pro",
  },
  {
    id: "ecommerce-seo",
    name: "E-commerce SEO",
    price: "Starting at $3,000/month",
    description: "Specialized SEO for online stores and product catalogs.",
    features: [
      "Product page SEO",
      "Category optimization",
      "Product keyword research",
      "E-commerce technical SEO",
      "Faceted navigation review",
      "Internal linking strategy",
      "Product schema",
      "Duplicate content review",
      "Competitor analysis",
      "Organic conversion strategy",
    ],
    cta: "Choose E-commerce",
    ctaHref: "/contact?package=ecommerce-seo",
  },
  {
    id: "enterprise-seo",
    name: "Enterprise SEO",
    price: "Starting at $5,000/month",
    description: "Custom SEO for large websites and multi-location businesses.",
    features: [
      "Custom keyword strategy",
      "Large-scale technical SEO",
      "Advanced site architecture",
      "SEO migration support",
      "Enterprise content strategy",
      "Advanced competitor analysis",
      "Multi-location SEO",
      "Digital authority strategy",
      "Custom reporting",
      "Dedicated SEO strategy",
    ],
    cta: "Request Custom Proposal",
    ctaHref: "/contact?package=enterprise-seo",
  },
];

export const customPackage = {
  name: "Custom SEO",
  price: "Starting at $1,000+",
  description:
    "Custom packages can be created based on your specific needs:",
  factors: [
    "Business goals",
    "Website size",
    "Industry",
    "Competition",
    "Target locations",
    "SEO condition",
    "Project scope",
  ],
};

export const pricingDisclaimer =
  "Package pricing is shown as a starting point. Final pricing may vary depending on website size, competition, target locations, keyword scope, current website condition, content requirements, technical complexity, and overall project scope.";

export const rankingDisclaimer =
  "SEO rankings, traffic, leads, sales, or revenue cannot be guaranteed.";
