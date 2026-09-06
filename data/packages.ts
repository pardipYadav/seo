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
    id: "dm-starter",
    name: "Digital Marketing Starter",
    price: "Starting at $100/month",
    description: "Best for small businesses getting started with online marketing.",
    features: [
      "Basic SEO setup and optimization",
      "Google Business Profile setup",
      "Social media profile setup",
      "Up to 5 target keywords",
      "On-page SEO basics",
      "Monthly performance snapshot",
      "Email support",
    ],
    cta: "Get Started",
    ctaHref: "/contact?package=dm-starter",
  },
  {
    id: "dm-growth",
    name: "Digital Marketing Growth",
    price: "Starting at $250/month",
    description: "Ideal for businesses ready to grow their online presence.",
    features: [
      "Everything in Starter",
      "SEO audit and keyword research",
      "Up to 15 target keywords",
      "Local SEO optimization",
      "Social media content planning",
      "Google Search Console monitoring",
      "Content optimization",
      "Monthly performance report",
    ],
    cta: "Choose Growth",
    ctaHref: "/contact?package=dm-growth",
    popular: true,
  },
  {
    id: "dm-pro",
    name: "Digital Marketing Pro",
    price: "Starting at $500/month",
    description: "Advanced digital marketing for growing brands.",
    features: [
      "Everything in Growth",
      "Up to 30 target keywords",
      "Technical SEO review",
      "Content strategy and creation",
      "Social media management",
      "Competitor analysis",
      "Link building research",
      "Conversion-focused recommendations",
      "Detailed monthly reporting",
    ],
    cta: "Choose Pro",
    ctaHref: "/contact?package=dm-pro",
  },
  {
    id: "dm-business",
    name: "Digital Marketing Business",
    price: "Starting at $750/month",
    description: "Comprehensive marketing for established businesses.",
    features: [
      "Everything in Pro",
      "Advanced SEO and content SEO",
      "E-commerce SEO support",
      "Paid ads strategy guidance",
      "Email marketing setup",
      "Brand reputation monitoring",
      "Google Business Profile optimization",
      "Priority support",
    ],
    cta: "Choose Business",
    ctaHref: "/contact?package=dm-business",
  },
  {
    id: "dm-enterprise",
    name: "Digital Marketing Enterprise",
    price: "Starting at $1,500/month",
    description: "Custom digital marketing for large businesses and multi-location brands.",
    features: [
      "Custom SEO and marketing strategy",
      "Large-scale technical SEO",
      "Multi-channel campaign planning",
      "Advanced competitor tracking",
      "Enterprise content strategy",
      "Multi-location SEO",
      "Dedicated account strategy",
      "Custom reporting dashboard",
    ],
    cta: "Request Custom Proposal",
    ctaHref: "/contact?package=dm-enterprise",
  },
];

export const customPackage = {
  name: "Custom Digital Marketing",
  price: "Starting at $100+",
  description:
    "Custom packages can be created based on your specific needs:",
  factors: [
    "Business goals",
    "Website size",
    "Industry",
    "Competition",
    "Target locations",
    "Marketing channels needed",
    "Project scope",
  ],
};

export const pricingDisclaimer =
  "Package pricing is shown as a starting point. Final pricing may vary depending on website size, competition, target locations, services required, current marketing condition, content needs, and overall project scope.";

export const rankingDisclaimer =
  "SEO rankings, traffic, leads, sales, ad performance, or revenue cannot be guaranteed.";
