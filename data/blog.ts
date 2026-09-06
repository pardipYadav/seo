export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  complete: boolean;
  content?: BlogSection[];
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
};

export type BlogSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-seo-and-how-does-it-work",
    title: "What Is SEO and How Does It Work?",
    excerpt:
      "Learn the fundamentals of search engine optimization and how it helps businesses attract organic traffic from Google and other search engines.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "SEO Basics",
    complete: true,
    relatedSlugs: ["seo-pricing-guide-for-businesses", "common-seo-mistakes-to-avoid"],
    faqs: [
      {
        question: "Is SEO free?",
        answer:
          "Organic search traffic itself is free, but effective SEO requires investment in strategy, content, and optimization — either through an agency or in-house resources.",
      },
      {
        question: "How is SEO different from paid ads?",
        answer:
          "SEO focuses on earning organic visibility over time, while paid ads provide immediate placement that stops when you stop paying.",
      },
    ],
    content: [
      {
        id: "introduction",
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "Search Engine Optimization (SEO) is the process of improving a website so it appears more prominently in organic (non-paid) search engine results. When someone searches on Google, Bing, or other search engines, SEO helps your website be among the results they see.",
          "For businesses, SEO is one of the most sustainable channels for attracting qualified visitors. Unlike paid advertising, organic traffic can continue flowing long after initial optimization work is done — though ongoing effort is needed to maintain and grow results.",
        ],
      },
      {
        id: "how-search-engines-work",
        heading: "How Search Engines Work",
        level: 2,
        paragraphs: [
          "Search engines use automated programs called crawlers to discover pages across the web. These crawlers follow links, read page content, and store information in a massive index.",
          "When a user enters a query, the search engine retrieves relevant pages from its index and ranks them using hundreds of signals. These signals evaluate relevance, quality, authority, and user experience to determine which pages best answer the query.",
        ],
      },
      {
        id: "three-pillars",
        heading: "The Three Pillars of SEO",
        level: 2,
        paragraphs: [
          "Modern SEO rests on three interconnected pillars: technical SEO, on-page SEO, and off-page SEO.",
        ],
        list: [
          "Technical SEO — Ensures search engines can crawl, index, and render your site efficiently. It covers site speed, mobile usability, site architecture, and structured data.",
          "On-Page SEO — Optimizes individual page elements including titles, headings, content, internal links, and images to match search intent.",
          "Off-Page SEO — Builds authority through backlinks, brand mentions, and digital PR from other reputable websites.",
        ],
      },
      {
        id: "why-seo-matters",
        heading: "Why SEO Matters for Businesses",
        level: 2,
        paragraphs: [
          "Most online experiences begin with a search engine. Businesses that invest in SEO gain visibility at the exact moment potential customers are looking for their products or services.",
          "SEO also compounds over time. Each optimized page, earned backlink, and improved ranking contributes to a stronger organic foundation that supports long-term growth.",
        ],
      },
      {
        id: "getting-started",
        heading: "Getting Started with SEO",
        level: 2,
        paragraphs: [
          "Start with an SEO audit to understand your current visibility, technical health, and competitive landscape. From there, prioritize keyword research, on-page optimization, and content creation aligned with your business goals.",
          "GobalCareSolutions offers SEO packages starting at $1,000 per month, including audits, keyword research, and ongoing optimization tailored to your needs.",
        ],
      },
    ],
  },
  {
    slug: "seo-pricing-guide-for-businesses",
    title: "SEO Pricing Guide for Businesses",
    excerpt:
      "Understand what influences SEO costs and how to evaluate SEO packages for your business budget and goals.",
    date: "2026-02-01",
    readTime: "7 min read",
    category: "SEO Strategy",
    complete: true,
    relatedSlugs: ["what-is-seo-and-how-does-it-work", "seo-vs-google-ads"],
    faqs: [
      {
        question: "Why is SEO so expensive?",
        answer:
          "SEO requires ongoing research, implementation, content work, and monitoring by skilled professionals. The investment reflects the sustained effort needed for meaningful results.",
      },
      {
        question: "Is cheap SEO worth it?",
        answer:
          "Very low-cost SEO often relies on shortcuts, spam tactics, or minimal effort that can harm your site. Quality SEO requires adequate resources to deliver sustainable value.",
      },
    ],
    content: [
      {
        id: "introduction",
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "SEO pricing varies widely across the industry, and understanding what drives those costs helps you make informed decisions. This guide explains common pricing models, factors that influence cost, and how to evaluate SEO packages.",
        ],
      },
      {
        id: "pricing-models",
        heading: "Common SEO Pricing Models",
        level: 2,
        paragraphs: ["SEO services are typically priced in one of these formats:"],
        list: [
          "Monthly retainers — Ongoing optimization, monitoring, and reporting. Most common for sustained SEO growth.",
          "Project-based — One-time engagements like SEO audits, migrations, or site-wide optimization.",
          "Hourly consulting — Strategic advisory for specific challenges or in-house team support.",
        ],
      },
      {
        id: "cost-factors",
        heading: "Factors That Influence SEO Cost",
        level: 2,
        paragraphs: ["Several variables affect how much SEO costs for your business:"],
        list: [
          "Website size and complexity",
          "Industry competition level",
          "Number of target keywords and locations",
          "Current website SEO condition",
          "Content creation requirements",
          "Technical complexity and platform",
          "Scope of off-page and link building work",
        ],
      },
      {
        id: "gcs-packages",
        heading: "GobalCareSolutions SEO Packages",
        level: 2,
        paragraphs: [
          "GobalCareSolutions offers transparent packages starting at $1,000 per month. Our SEO Starter plan covers audits, keyword research, and on-page optimization for small businesses. Growth and Pro plans add advanced research, content strategy, and authority building for competitive markets.",
          "Final pricing may vary based on your specific requirements. We provide custom proposals for enterprise and e-commerce clients with unique needs.",
        ],
      },
      {
        id: "evaluating-roi",
        heading: "Evaluating SEO ROI",
        level: 2,
        paragraphs: [
          "When evaluating SEO pricing, consider the long-term value of organic traffic rather than comparing monthly costs alone. SEO builds cumulative value — each month of work strengthens your site's foundation.",
          "Request clear reporting on keyword rankings, organic traffic, and conversions to assess whether your investment is delivering meaningful returns.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-guide-for-small-businesses",
    title: "Local SEO Guide for Small Businesses",
    excerpt:
      "A practical guide to improving local search visibility, Google Maps rankings, and attracting nearby customers.",
    date: "2026-02-15",
    readTime: "9 min read",
    category: "Local SEO",
    complete: true,
    relatedSlugs: ["technical-seo-checklist", "on-page-seo-checklist"],
    faqs: [
      {
        question: "How long does local SEO take to work?",
        answer:
          "Local SEO improvements often show results within one to three months for Google Business Profile optimization, with broader local ranking gains building over three to six months.",
      },
      {
        question: "Do I need a website for local SEO?",
        answer:
          "A website strengthens local SEO significantly, though a well-optimized Google Business Profile alone can generate visibility for some businesses.",
      },
    ],
    content: [
      {
        id: "introduction",
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "Local SEO helps small businesses appear when nearby customers search for products or services. Whether someone searches 'plumber near me' or 'best coffee shop in [city],' local SEO determines whether your business shows up.",
        ],
      },
      {
        id: "google-business-profile",
        heading: "Optimize Your Google Business Profile",
        level: 2,
        paragraphs: [
          "Your Google Business Profile is the foundation of local SEO. Claim and verify your listing, choose accurate business categories, write a compelling description, add photos, and keep your hours and contact information current.",
          "Regularly post updates, respond to reviews, and answer questions in the Q&A section to signal activity and engagement to Google.",
        ],
      },
      {
        id: "nap-consistency",
        heading: "Ensure NAP Consistency",
        level: 2,
        paragraphs: [
          "NAP stands for Name, Address, and Phone number. These details must be identical across your website, Google Business Profile, and all online directories. Inconsistencies confuse search engines and can hurt local rankings.",
        ],
      },
      {
        id: "local-citations",
        heading: "Build Local Citations",
        level: 2,
        paragraphs: [
          "Citations are mentions of your business on directories, review sites, and local platforms. Submit your business to relevant directories like Yelp, Bing Places, Apple Maps, and industry-specific listings.",
        ],
      },
      {
        id: "location-pages",
        heading: "Create Location and Service Pages",
        level: 2,
        paragraphs: [
          "If you serve multiple areas, create dedicated location or service-area pages with unique content for each region. Include local keywords naturally, embed maps, and add location-specific testimonials or case details.",
        ],
      },
      {
        id: "reviews",
        heading: "Encourage Genuine Reviews",
        level: 2,
        paragraphs: [
          "Reviews influence both local rankings and customer decisions. Ask satisfied customers to leave reviews on Google. Respond professionally to all reviews — positive and negative — to demonstrate engagement.",
        ],
      },
    ],
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist",
    excerpt:
      "A comprehensive checklist covering crawlability, indexing, page speed, mobile usability, and structured data.",
    date: "2026-03-01",
    readTime: "10 min read",
    category: "Technical SEO",
    complete: true,
    relatedSlugs: ["on-page-seo-checklist", "common-seo-mistakes-to-avoid"],
    faqs: [
      {
        question: "How often should I run a technical SEO audit?",
        answer:
          "Run a full technical audit at least quarterly, or immediately after any site migration, redesign, or major platform change.",
      },
      {
        question: "Can I fix technical SEO issues myself?",
        answer:
          "Many issues like meta tags and alt text can be fixed without developers. Structural issues like redirects, site architecture, and JavaScript rendering may require developer support.",
      },
    ],
    content: [
      {
        id: "introduction",
        heading: "Introduction",
        level: 2,
        paragraphs: [
          "Technical SEO ensures search engines can efficiently access, crawl, and index your website. Use this checklist to identify and resolve common technical issues that limit organic visibility.",
        ],
      },
      {
        id: "crawlability",
        heading: "Crawlability and Indexing",
        level: 2,
        paragraphs: ["Verify these crawl and index fundamentals:"],
        list: [
          "Submit and maintain an XML sitemap",
          "Review robots.txt for unintended blocks",
          "Check index coverage in Google Search Console",
          "Fix crawl errors and broken links",
          "Implement proper canonical tags",
          "Ensure important pages are not set to noindex",
        ],
      },
      {
        id: "page-speed",
        heading: "Page Speed and Core Web Vitals",
        level: 2,
        paragraphs: ["Optimize performance metrics:"],
        list: [
          "Measure Largest Contentful Paint (LCP)",
          "Reduce Cumulative Layout Shift (CLS)",
          "Improve Interaction to Next Paint (INP)",
          "Compress and optimize images",
          "Minimize render-blocking resources",
          "Enable browser caching",
        ],
      },
      {
        id: "mobile",
        heading: "Mobile SEO",
        level: 2,
        paragraphs: [
          "Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site. Ensure responsive design, readable text without zooming, and tap-friendly navigation on all devices.",
        ],
      },
      {
        id: "architecture",
        heading: "Site Architecture",
        level: 2,
        paragraphs: ["Review your site structure:"],
        list: [
          "Keep important pages within three clicks of the homepage",
          "Use logical URL structures",
          "Implement breadcrumb navigation",
          "Maintain a clean internal linking hierarchy",
          "Avoid orphan pages with no internal links",
        ],
      },
      {
        id: "structured-data",
        heading: "Structured Data and Schema",
        level: 2,
        paragraphs: [
          "Implement relevant schema markup (Organization, LocalBusiness, Product, FAQ, etc.) to help search engines understand your content. Validate markup using Google's Rich Results Test.",
        ],
      },
    ],
  },
  {
    slug: "on-page-seo-checklist",
    title: "On-Page SEO Checklist",
    excerpt:
      "Optimize titles, meta descriptions, headings, content, and internal links with this actionable on-page SEO checklist.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "On-Page SEO",
    complete: false,
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads",
    excerpt:
      "Compare organic SEO and paid search advertising to determine the right mix for your business marketing strategy.",
    date: "2026-04-01",
    readTime: "7 min read",
    category: "SEO Strategy",
    complete: false,
  },
  {
    slug: "keyword-research-guide",
    title: "Keyword Research Guide",
    excerpt:
      "Learn how to find, analyze, and prioritize keywords that drive qualified organic traffic to your website.",
    date: "2026-04-15",
    readTime: "9 min read",
    category: "Keyword Research",
    complete: false,
  },
  {
    slug: "common-seo-mistakes-to-avoid",
    title: "Common SEO Mistakes to Avoid",
    excerpt:
      "Avoid these frequent SEO pitfalls that waste budget, harm rankings, and prevent sustainable organic growth.",
    date: "2026-05-01",
    readTime: "8 min read",
    category: "SEO Strategy",
    complete: false,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCompleteBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.complete);
}
