export type Industry = {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "local-businesses",
    name: "Local Businesses",
    description:
      "Local businesses depend on nearby customers finding them online. SEO strategies focus on map visibility, local keywords, and community-focused content.",
    challenges: ["Limited local search visibility", "Inconsistent business listings", "Few online reviews"],
    solutions: ["Local SEO and Google Business Profile optimization", "Citation building", "Location page creation"],
  },
  {
    slug: "small-businesses",
    name: "Small Businesses",
    description:
      "Small businesses need cost-effective SEO that delivers measurable results without enterprise-level budgets.",
    challenges: ["Limited marketing budget", "Competing with larger brands", "No in-house SEO expertise"],
    solutions: ["SEO Starter and Growth packages", "Focused keyword targeting", "Monthly performance reporting"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Online stores face unique SEO challenges including product catalogs, duplicate content, and faceted navigation.",
    challenges: ["Large product catalogs", "Duplicate content issues", "Low organic conversion rates"],
    solutions: ["Product and category SEO", "Technical e-commerce optimization", "Conversion-focused keyword strategy"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Healthcare providers need trustworthy, compliant SEO that helps patients find services while maintaining E-E-A-T standards.",
    challenges: ["High competition for medical keywords", "YMYL content requirements", "Local patient acquisition"],
    solutions: ["E-E-A-T focused content strategy", "Local SEO for practices", "Service page optimization"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Real estate professionals compete for high-intent local and property-related search terms.",
    challenges: ["Hyper-local competition", "Seasonal search patterns", "Listing page optimization"],
    solutions: ["Location-based SEO", "Neighborhood content strategy", "Google Business Profile for agents"],
  },
  {
    slug: "legal-services",
    name: "Legal Services",
    description:
      "Law firms require authoritative content and strong local presence to attract clients searching for legal help.",
    challenges: ["Competitive practice-area keywords", "YMYL trust requirements", "Multi-location visibility"],
    solutions: ["Practice area page optimization", "Local SEO for law offices", "Authority-building content"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Plumbers, electricians, HVAC companies, and other home service providers rely on local search to generate leads.",
    challenges: ["Emergency and local search intent", "Service area coverage", "Review-dependent rankings"],
    solutions: ["Service-area page optimization", "Google Business Profile management", "Local citation building"],
  },
  {
    slug: "saas",
    name: "SaaS",
    description:
      "Software companies need SEO strategies that target informational, commercial, and comparison keywords across the buyer journey.",
    challenges: ["Long sales cycles", "Competitive software keywords", "Content at scale"],
    solutions: ["Topic cluster content strategy", "Comparison and feature page SEO", "Technical SEO for web apps"],
  },
  {
    slug: "technology",
    name: "Technology",
    description:
      "Technology companies benefit from thought leadership content, technical documentation SEO, and product visibility.",
    challenges: ["Rapidly changing topics", "Technical audience expectations", "Global competition"],
    solutions: ["Technical content optimization", "Product page SEO", "Developer-focused keyword research"],
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Educational institutions and training providers use SEO to attract students searching for programs and courses.",
    challenges: ["Seasonal enrollment cycles", "Program-specific keywords", "Local and online competition"],
    solutions: ["Program page optimization", "Informational content strategy", "Local SEO for campuses"],
  },
  {
    slug: "fitness",
    name: "Fitness",
    description:
      "Gyms, studios, and fitness brands compete for local and niche fitness-related search terms.",
    challenges: ["Local membership acquisition", "Seasonal search trends", "Class and program visibility"],
    solutions: ["Local SEO for gyms and studios", "Class schedule page optimization", "Review management"],
  },
  {
    slug: "travel",
    name: "Travel",
    description:
      "Travel businesses target destination, experience, and booking-intent keywords across competitive search landscapes.",
    challenges: ["Highly competitive keywords", "Seasonal demand fluctuations", "Multi-destination targeting"],
    solutions: ["Destination content strategy", "Booking page optimization", "Schema markup for travel listings"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description:
      "Consultants, accountants, and agencies need SEO that establishes expertise and attracts high-intent clients.",
    challenges: ["Building online authority", "Service-specific keyword targeting", "Lead generation through content"],
    solutions: ["Thought leadership content", "Service page optimization", "Local and national keyword strategy"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your website, competitors, and current search visibility to identify opportunities and challenges.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Based on audit findings, we create a customized SEO strategy aligned with your business goals and budget.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Our team executes technical fixes, on-page optimization, content improvements, and authority-building initiatives.",
  },
  {
    step: "04",
    title: "Monitoring & Reporting",
    description:
      "We track keyword rankings, traffic, and conversions with transparent monthly reports and strategy reviews.",
  },
  {
    step: "05",
    title: "Optimization & Growth",
    description:
      "Continuous refinement based on performance data, algorithm updates, and evolving business objectives.",
  },
];

export const trustPoints = [
  "Ethical Marketing Practices",
  "Transparent Strategy",
  "Data-Driven Campaigns",
  "Long-Term Growth",
];

export const whyChooseUs = [
  {
    title: "Ethical Approach",
    description:
      "We follow platform and search engine guidelines, focusing on sustainable strategies — never spam tactics or manipulative marketing.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly reports show exactly what work was done, how performance changed across channels, and what is planned for the next cycle.",
  },
  {
    title: "Customized Strategy",
    description:
      "Every business is different. We tailor digital marketing packages and strategies to your industry, competition, and goals.",
  },
  {
    title: "Full-Service Digital Marketing",
    description:
      "From SEO and content to social media and brand visibility, we cover every dimension of your online marketing needs.",
  },
];

export const seoBenefits = [
  {
    title: "More Online Visibility",
    description: "Reach customers across search engines, social media, and the web.",
  },
  {
    title: "Higher Trust",
    description: "Strong online presence builds credibility and customer confidence.",
  },
  {
    title: "Cost-Effective Growth",
    description: "Digital marketing delivers compounding returns as your online presence grows.",
  },
  {
    title: "Competitive Edge",
    description: "Stay ahead of competitors with strategic SEO and multi-channel marketing.",
  },
  {
    title: "Brand Authority",
    description: "Consistent marketing positions your brand as a leader in your industry.",
  },
  {
    title: "Measurable Results",
    description: "Track traffic, engagement, rankings, and conversions with clear analytics.",
  },
];
