export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  includes: string[];
  process: string[];
  whoNeedsIt: string[];
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "local-seo",
    name: "Local SEO",
    shortDescription:
      "Improve visibility in local search results and Google Maps for businesses serving specific areas.",
    description:
      "Local SEO helps businesses appear when nearby customers search for relevant products or services. GobalCareSolutions builds location-focused strategies that strengthen your presence in map packs, local packs, and geo-targeted organic results.",
    benefits: [
      "Increased visibility in Google Maps and local search",
      "More qualified leads from nearby customers",
      "Stronger brand presence in your service area",
      "Better alignment between online and offline discovery",
    ],
    includes: [
      "Google Maps visibility optimization",
      "Local keyword research",
      "Google Business Profile optimization",
      "NAP consistency review",
      "Local citation strategy",
      "Review generation guidance",
      "Location and service-area page optimization",
      "Local competitor research",
      "Local SEO audit",
    ],
    process: [
      "Audit your current local search presence and citations",
      "Research location-based keywords and search intent",
      "Optimize Google Business Profile and on-site local signals",
      "Improve location pages, internal links, and local content",
      "Monitor rankings, reviews, and local performance monthly",
    ],
    whoNeedsIt: [
      "Local service businesses",
      "Multi-location companies",
      "Retail stores with physical locations",
      "Professionals serving defined geographic areas",
    ],
    relatedSlugs: ["google-business-profile", "on-page-seo", "seo-audit"],
    faqs: [
      {
        question: "How is local SEO different from regular SEO?",
        answer:
          "Local SEO focuses on geographic relevance, map visibility, and location-based search intent, while general SEO targets broader organic rankings.",
      },
      {
        question: "Do I need a physical address for local SEO?",
        answer:
          "Many local SEO strategies benefit from a verifiable business location or clearly defined service area, depending on your business model.",
      },
    ],
    metaTitle: "Local SEO Services | GobalCareSolutions",
    metaDescription:
      "Improve local search visibility with professional local SEO services from GobalCareSolutions, including Google Maps, citations, and location page optimization.",
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    shortDescription:
      "Fix crawlability, indexing, site speed, and structural issues that prevent search engines from ranking your site.",
    description:
      "Technical SEO ensures search engines can efficiently crawl, index, and understand your website. GobalCareSolutions identifies and resolves technical barriers that limit organic visibility and user experience.",
    benefits: [
      "Improved crawlability and index coverage",
      "Better page speed and Core Web Vitals performance",
      "Cleaner site architecture for search engines",
      "Reduced technical errors affecting rankings",
    ],
    includes: [
      "Crawling and indexing analysis",
      "XML sitemap optimization",
      "robots.txt review",
      "Canonical URL implementation guidance",
      "Core Web Vitals assessment",
      "Mobile SEO review",
      "Page speed optimization recommendations",
      "Broken link and redirect audit",
      "Schema markup recommendations",
      "Site architecture review",
      "JavaScript SEO evaluation",
      "Internal linking structure analysis",
    ],
    process: [
      "Conduct a comprehensive technical SEO audit",
      "Prioritize issues by impact and implementation effort",
      "Provide actionable fixes for developers and content teams",
      "Validate improvements through monitoring tools",
      "Maintain ongoing technical health checks",
    ],
    whoNeedsIt: [
      "Websites with indexing or crawl issues",
      "Large or complex websites",
      "Sites undergoing redesign or migration",
      "Businesses with slow page performance",
    ],
    relatedSlugs: ["seo-audit", "website-seo", "on-page-seo"],
    faqs: [
      {
        question: "What are Core Web Vitals?",
        answer:
          "Core Web Vitals are Google metrics measuring loading performance, interactivity, and visual stability — all of which influence user experience and SEO.",
      },
      {
        question: "Can technical SEO alone improve rankings?",
        answer:
          "Technical SEO removes barriers to visibility, but sustainable rankings also require strong content, relevance, and authority.",
      },
    ],
    metaTitle: "Technical SEO Services | GobalCareSolutions",
    metaDescription:
      "Resolve crawl, indexing, speed, and architecture issues with expert technical SEO services from GobalCareSolutions.",
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    shortDescription:
      "Optimize titles, content, headings, and page structure to match search intent and improve rankings.",
    description:
      "On-page SEO aligns your website content and HTML elements with what searchers are looking for. GobalCareSolutions optimizes individual pages to improve relevance, click-through rates, and organic performance.",
    benefits: [
      "Better keyword targeting and search intent alignment",
      "Improved title tags and meta descriptions for higher CTR",
      "Stronger content structure and readability",
      "Enhanced internal linking between key pages",
    ],
    includes: [
      "Title tag optimization",
      "Meta description optimization",
      "Heading structure (H1–H6) review",
      "Keyword targeting and search intent analysis",
      "Content optimization recommendations",
      "Internal link improvements",
      "Image alt text and compression guidance",
      "URL structure optimization",
      "Click-through rate (CTR) optimization",
    ],
    process: [
      "Analyze target pages and keyword opportunities",
      "Map search intent to page content and structure",
      "Optimize titles, meta tags, headings, and body content",
      "Improve internal links and on-page user experience",
      "Track performance and refine based on data",
    ],
    whoNeedsIt: [
      "Businesses with underperforming landing pages",
      "Websites launching new products or services",
      "Companies targeting competitive keywords",
      "Sites needing content structure improvements",
    ],
    relatedSlugs: ["content-seo", "keyword-research", "website-seo"],
    faqs: [
      {
        question: "How often should on-page SEO be updated?",
        answer:
          "On-page elements should be reviewed when launching new pages, targeting new keywords, or when performance data indicates declining rankings or CTR.",
      },
      {
        question: "Is keyword density still important?",
        answer:
          "Modern on-page SEO prioritizes search intent, helpful content, and natural language over arbitrary keyword density targets.",
      },
    ],
    metaTitle: "On-Page SEO Services | GobalCareSolutions",
    metaDescription:
      "Optimize titles, content, headings, and page structure with professional on-page SEO services from GobalCareSolutions.",
  },
  {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    shortDescription:
      "Build authority through ethical link earning, brand mentions, and digital PR — not spam tactics.",
    description:
      "Off-page SEO strengthens your website's authority and reputation across the web. GobalCareSolutions focuses on quality, relevance, and authority — not manipulative link schemes or spam backlink blasts.",
    benefits: [
      "Increased domain authority through earned links",
      "Stronger brand visibility across relevant websites",
      "Better competitive positioning in search results",
      "Sustainable authority growth over time",
    ],
    includes: [
      "Authority-building strategy",
      "Digital PR outreach planning",
      "Link earning campaigns",
      "Brand mention monitoring",
      "Relevant outreach to industry publications",
      "Competitor backlink research",
    ],
    process: [
      "Analyze your current backlink profile and competitors",
      "Identify high-quality link and mention opportunities",
      "Create link-worthy content and outreach assets",
      "Execute ethical outreach and digital PR",
      "Monitor acquired links and adjust strategy monthly",
    ],
    whoNeedsIt: [
      "Businesses in competitive industries",
      "Websites with strong content but low authority",
      "Brands seeking broader online recognition",
      "Companies ready for long-term authority building",
    ],
    relatedSlugs: ["link-building", "competitor-analysis", "content-seo"],
    faqs: [
      {
        question: "Are more backlinks always better?",
        answer:
          "No. Quality, relevance, and authority are more important than backlink quantity. A few links from trusted, relevant sites outweigh hundreds of low-quality links.",
      },
      {
        question: "Does GobalCareSolutions use PBNs or spam links?",
        answer:
          "No. We do not recommend spam links, automated backlink blasts, private blog network abuse, or manipulative link schemes.",
      },
    ],
    metaTitle: "Off-Page SEO Services | GobalCareSolutions",
    metaDescription:
      "Build authority with ethical off-page SEO strategies from GobalCareSolutions, including link earning, digital PR, and brand mentions.",
  },
  {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    shortDescription:
      "Drive organic traffic and sales for online stores through product, category, and technical optimization.",
    description:
      "E-commerce SEO targets the unique challenges of online stores — from product pages and category structures to faceted navigation and duplicate content. GobalCareSolutions helps e-commerce brands attract buyers through organic search.",
    benefits: [
      "More organic traffic to product and category pages",
      "Better visibility for commercial and transactional keywords",
      "Improved crawl efficiency for large product catalogs",
      "Higher conversion rates from search-driven visitors",
    ],
    includes: [
      "Product page SEO optimization",
      "Category and collection page optimization",
      "Product schema markup",
      "Duplicate content review",
      "Faceted navigation assessment",
      "Crawl optimization for large catalogs",
      "Internal linking strategy",
      "Product keyword research",
      "Search intent mapping for buyers",
      "Conversion-focused SEO recommendations",
    ],
    process: [
      "Audit your store's technical and on-page SEO foundation",
      "Research product and category keyword opportunities",
      "Optimize high-priority pages and site architecture",
      "Implement schema, internal links, and content improvements",
      "Monitor rankings, traffic, and organic revenue trends",
    ],
    whoNeedsIt: [
      "Online retailers and DTC brands",
      "Marketplace sellers with owned websites",
      "Stores with large product catalogs",
      "E-commerce sites experiencing organic traffic declines",
    ],
    relatedSlugs: ["keyword-research", "technical-seo", "content-seo"],
    faqs: [
      {
        question: "How do you handle duplicate content in e-commerce?",
        answer:
          "We address duplicate content through canonical tags, unique product descriptions, parameter handling, and strategic use of noindex where appropriate.",
      },
      {
        question: "Can SEO help my Shopify or WooCommerce store?",
        answer:
          "Yes. E-commerce SEO applies to all platforms. We tailor strategies to your CMS, theme, and catalog structure.",
      },
    ],
    metaTitle: "E-commerce SEO Services | GobalCareSolutions",
    metaDescription:
      "Grow organic sales with e-commerce SEO services from GobalCareSolutions, including product SEO, category optimization, and technical store improvements.",
  },
  {
    slug: "seo-audit",
    name: "SEO Audit",
    shortDescription:
      "Get a comprehensive review of your website's SEO health across technical, on-page, content, and off-page factors.",
    description:
      "An SEO audit reveals what's helping and hindering your organic performance. GobalCareSolutions delivers a detailed, prioritized assessment covering every major SEO dimension so you know exactly where to focus.",
    benefits: [
      "Clear picture of your current SEO strengths and weaknesses",
      "Prioritized action plan based on impact",
      "Identification of quick wins and long-term improvements",
      "Benchmark against competitors and industry standards",
    ],
    includes: [
      "Technical SEO review",
      "On-page SEO analysis",
      "Content quality assessment",
      "Indexing and crawlability check",
      "Site architecture evaluation",
      "Internal link analysis",
      "Backlink profile review",
      "Keyword performance review",
      "Competitor comparison",
      "Page speed and mobile usability testing",
    ],
    process: [
      "Gather data from analytics, Search Console, and crawl tools",
      "Analyze technical, on-page, content, and off-page factors",
      "Identify and prioritize issues by severity and impact",
      "Deliver a detailed audit report with recommendations",
      "Discuss findings and next steps in a strategy session",
    ],
    whoNeedsIt: [
      "Businesses starting SEO for the first time",
      "Websites experiencing traffic drops",
      "Companies evaluating SEO agencies",
      "Sites preparing for redesign or migration",
    ],
    relatedSlugs: ["technical-seo", "on-page-seo", "competitor-analysis"],
    faqs: [
      {
        question: "How long does an SEO audit take?",
        answer:
          "A comprehensive audit typically takes one to two weeks depending on website size and complexity.",
      },
      {
        question: "What happens after the audit?",
        answer:
          "You receive a prioritized report with actionable recommendations. We can implement fixes through one of our SEO packages or provide guidance for your team.",
      },
    ],
    metaTitle: "SEO Audit Services | GobalCareSolutions",
    metaDescription:
      "Request a comprehensive SEO audit from GobalCareSolutions covering technical, on-page, content, and off-page factors.",
  },
  {
    slug: "keyword-research",
    name: "Keyword Research",
    shortDescription:
      "Discover the search terms your audience uses and build a data-driven keyword strategy.",
    description:
      "Keyword research is the foundation of effective SEO. GobalCareSolutions identifies high-value search terms aligned with your business goals, search intent, and competitive landscape.",
    benefits: [
      "Target keywords that match buyer intent",
      "Discover untapped long-tail opportunities",
      "Understand competitive keyword difficulty",
      "Build a content roadmap based on search demand",
    ],
    includes: [
      "Search intent classification",
      "Informational keyword discovery",
      "Commercial keyword identification",
      "Transactional keyword mapping",
      "Navigational keyword analysis",
      "Long-tail keyword opportunities",
      "Search volume and difficulty assessment",
      "SERP analysis for target terms",
      "Competitor keyword research",
      "Keyword clustering",
      "Content mapping to keyword groups",
    ],
    process: [
      "Understand your business goals and target audience",
      "Analyze seed keywords and expand into topic clusters",
      "Evaluate search volume, difficulty, and intent",
      "Map keywords to existing and planned content",
      "Deliver a prioritized keyword strategy document",
    ],
    whoNeedsIt: [
      "Businesses launching new websites",
      "Companies expanding into new markets",
      "Content teams needing direction",
      "Sites targeting competitive search terms",
    ],
    relatedSlugs: ["content-seo", "on-page-seo", "competitor-analysis"],
    faqs: [
      {
        question: "How many keywords should I target?",
        answer:
          "It depends on your website size, competition, and goals. Our packages include 20 to 75+ target keywords based on the plan you choose.",
      },
      {
        question: "Do you research local keywords too?",
        answer:
          "Yes. We include location-modified and service-area keywords for businesses targeting local search visibility.",
      },
    ],
    metaTitle: "Keyword Research Services | GobalCareSolutions",
    metaDescription:
      "Build a data-driven keyword strategy with professional keyword research services from GobalCareSolutions.",
  },
  {
    slug: "link-building",
    name: "Link Building",
    shortDescription:
      "Earn high-quality backlinks through ethical outreach, digital PR, and content promotion.",
    description:
      "Link building strengthens your website's authority when done ethically. GobalCareSolutions focuses on earning links from relevant, authoritative sources — never spam, PBNs, or automated blasts.",
    benefits: [
      "Higher domain authority from quality backlinks",
      "Increased referral traffic from relevant sites",
      "Stronger competitive positioning in SERPs",
      "Long-term authority that supports all SEO efforts",
    ],
    includes: [
      "Link earning strategy development",
      "Digital PR campaign planning",
      "Resource and guest content outreach",
      "Relevant authority website targeting",
      "Competitor backlink gap analysis",
      "Brand mention identification and outreach",
      "Content promotion for link acquisition",
    ],
    process: [
      "Analyze your backlink profile and competitor links",
      "Identify link-worthy content and outreach targets",
      "Create outreach assets and pitch relevant publications",
      "Earn links through value-driven content and relationships",
      "Monitor link quality and disavow harmful links if needed",
    ],
    whoNeedsIt: [
      "Websites with low domain authority",
      "Businesses in competitive niches",
      "Brands with strong content needing distribution",
      "Companies seeking sustainable authority growth",
    ],
    relatedSlugs: ["off-page-seo", "content-seo", "competitor-analysis"],
    faqs: [
      {
        question: "How many links will I get per month?",
        answer:
          "We focus on quality over quantity. The number of earned links varies based on your niche, content assets, and outreach success — we never guarantee a specific link count.",
      },
      {
        question: "What link building tactics do you avoid?",
        answer:
          "We do not use spam links, automated backlink blasts, private blog networks, or any manipulative link schemes that violate search engine guidelines.",
      },
    ],
    metaTitle: "Link Building Services | GobalCareSolutions",
    metaDescription:
      "Earn quality backlinks with ethical link building services from GobalCareSolutions, including digital PR and content outreach.",
  },
  {
    slug: "content-seo",
    name: "Content SEO",
    shortDescription:
      "Create and optimize content that ranks in search engines and genuinely helps your audience.",
    description:
      "Content SEO bridges keyword strategy and helpful, search-optimized content. GobalCareSolutions develops content that satisfies search intent, builds topical authority, and supports long-term organic growth.",
    benefits: [
      "Content that ranks for target keywords",
      "Stronger topical authority in your niche",
      "Better engagement and time on page",
      "Foundation for internal linking and link earning",
    ],
    includes: [
      "Search intent analysis",
      "Topic and content research",
      "SEO content briefs",
      "Content creation and optimization",
      "Content refreshing for existing pages",
      "Topic cluster development",
      "Internal linking within content",
      "Content gap identification",
      "Helpful content guidelines",
      "E-E-A-T considerations",
    ],
    process: [
      "Research topics and keywords aligned with business goals",
      "Create detailed content briefs with SEO requirements",
      "Write or optimize content for search intent and readability",
      "Implement internal links and on-page SEO elements",
      "Monitor content performance and refresh as needed",
    ],
    whoNeedsIt: [
      "Businesses without a content strategy",
      "Websites with thin or outdated content",
      "Companies targeting informational keywords",
      "Brands building thought leadership",
    ],
    relatedSlugs: ["keyword-research", "on-page-seo", "link-building"],
    faqs: [
      {
        question: "Do you write content or just optimize it?",
        answer:
          "We provide both SEO content briefs for your team and full content creation or optimization services depending on your package.",
      },
      {
        question: "What is E-E-A-T?",
        answer:
          "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — qualities Google evaluates when assessing content quality.",
      },
    ],
    metaTitle: "Content SEO Services | GobalCareSolutions",
    metaDescription:
      "Create search-optimized content with professional content SEO services from GobalCareSolutions, including briefs, writing, and optimization.",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile Optimization",
    shortDescription:
      "Maximize your Google Business Profile to attract local customers and improve map pack visibility.",
    description:
      "Your Google Business Profile is often the first impression local searchers have of your business. GobalCareSolutions optimizes every element of your profile to improve completeness, relevance, and local rankings.",
    benefits: [
      "Higher visibility in Google Maps and local pack",
      "More complete and compelling business profile",
      "Increased engagement from profile views and actions",
      "Better alignment with local search algorithms",
    ],
    includes: [
      "Business category optimization",
      "Business description writing",
      "Services and products listing",
      "Photo optimization and upload guidance",
      "Google Posts strategy",
      "Review management guidance",
      "Q&A monitoring and responses",
      "NAP information verification",
      "Profile completeness audit",
      "Local relevance signal improvement",
    ],
    process: [
      "Audit your current Google Business Profile",
      "Optimize categories, description, and service listings",
      "Improve photos, posts, and engagement elements",
      "Implement review and Q&A best practices",
      "Monitor profile insights and local ranking changes",
    ],
    whoNeedsIt: [
      "Local businesses with incomplete profiles",
      "Multi-location businesses needing consistency",
      "Companies losing map pack visibility",
      "New businesses establishing local presence",
    ],
    relatedSlugs: ["local-seo", "on-page-seo", "seo-audit"],
    faqs: [
      {
        question: "Can you manage my Google Business Profile ongoing?",
        answer:
          "Yes. Profile optimization is included in our SEO Growth plan and above, with ongoing posts, review guidance, and monitoring.",
      },
      {
        question: "How do reviews affect local SEO?",
        answer:
          "Reviews influence local rankings, click-through rates, and customer trust. We provide strategies to encourage genuine reviews without violating platform policies.",
      },
    ],
    metaTitle: "Google Business Profile Optimization | GobalCareSolutions",
    metaDescription:
      "Optimize your Google Business Profile with GobalCareSolutions to improve local visibility, reviews, and map pack rankings.",
  },
  {
    slug: "competitor-analysis",
    name: "Competitor Analysis",
    shortDescription:
      "Understand what competitors are doing in search and identify opportunities to outperform them.",
    description:
      "Competitor analysis reveals the SEO strategies driving your rivals' visibility. GobalCareSolutions maps competitor keywords, content, backlinks, and technical strengths to find gaps you can exploit.",
    benefits: [
      "Clear view of competitive SEO landscape",
      "Identification of keyword and content gaps",
      "Backlink opportunities competitors have earned",
      "Data-driven strategy to gain competitive advantage",
    ],
    includes: [
      "Competitor keyword analysis",
      "Top-performing page identification",
      "Content gap analysis",
      "Backlink gap research",
      "SERP competition mapping",
      "Technical SEO comparison",
      "Search visibility benchmarking",
      "Opportunity prioritization report",
    ],
    process: [
      "Identify your primary organic competitors",
      "Analyze their keywords, content, and backlink profiles",
      "Compare technical SEO and site architecture",
      "Identify gaps and opportunities in your favor",
      "Deliver actionable competitive strategy recommendations",
    ],
    whoNeedsIt: [
      "Businesses entering competitive markets",
      "Companies losing rankings to competitors",
      "Brands planning SEO budget allocation",
      "Teams needing data-driven SEO direction",
    ],
    relatedSlugs: ["keyword-research", "link-building", "seo-audit"],
    faqs: [
      {
        question: "How many competitors do you analyze?",
        answer:
          "We typically analyze three to five direct organic competitors, focusing on those ranking for your target keywords.",
      },
      {
        question: "Is competitor analysis a one-time service?",
        answer:
          "Initial analysis provides a foundation, but ongoing competitor tracking is included in higher-tier SEO packages for continuous insight.",
      },
    ],
    metaTitle: "SEO Competitor Analysis Services | GobalCareSolutions",
    metaDescription:
      "Uncover competitor SEO strategies and opportunities with professional competitor analysis from GobalCareSolutions.",
  },
  {
    slug: "seo-consulting",
    name: "SEO Consulting",
    shortDescription:
      "Get expert SEO guidance for strategy, migrations, redesigns, and in-house team support.",
    description:
      "SEO consulting provides strategic direction without full-service implementation. GobalCareSolutions advises on SEO strategy, website redesigns, migrations, traffic recovery, and supporting internal teams.",
    benefits: [
      "Expert guidance without full-service commitment",
      "Strategic direction for complex SEO challenges",
      "Support for in-house marketing and dev teams",
      "Risk mitigation during migrations and redesigns",
    ],
    includes: [
      "SEO strategy development",
      "Website redesign SEO planning",
      "SEO migration support",
      "New website SEO setup",
      "Traffic drop analysis and recovery",
      "Content strategy consulting",
      "Technical SEO advisory",
      "Internal SEO team support and training",
    ],
    process: [
      "Understand your business goals and current SEO state",
      "Diagnose challenges or plan for upcoming changes",
      "Develop a strategic roadmap with prioritized actions",
      "Provide ongoing advisory sessions and documentation",
      "Support implementation through your team or our services",
    ],
    whoNeedsIt: [
      "Companies with in-house marketing teams",
      "Businesses planning website redesigns",
      "Organizations undergoing SEO migrations",
      "Teams needing expert second opinions",
    ],
    relatedSlugs: ["seo-audit", "technical-seo", "keyword-research"],
    faqs: [
      {
        question: "How is consulting different from managed SEO?",
        answer:
          "Consulting provides strategic guidance and recommendations. Managed SEO packages include hands-on implementation, monitoring, and reporting.",
      },
      {
        question: "Can you help during a website migration?",
        answer:
          "Yes. We provide pre-migration audits, redirect mapping, post-migration monitoring, and traffic recovery strategies.",
      },
    ],
    metaTitle: "SEO Consulting Services | GobalCareSolutions",
    metaDescription:
      "Get expert SEO consulting from GobalCareSolutions for strategy, migrations, redesigns, and in-house team support.",
  },
  {
    slug: "website-seo",
    name: "Website SEO Optimization",
    shortDescription:
      "Holistic website-level SEO covering technical foundation, on-page elements, and site-wide strategy.",
    description:
      "Website SEO optimization takes a comprehensive view of your entire site — from architecture and technical health to page-level content and internal linking. GobalCareSolutions ensures every layer of your website supports organic growth.",
    benefits: [
      "Cohesive SEO strategy across your entire website",
      "Improved site-wide crawlability and indexation",
      "Consistent on-page optimization standards",
      "Stronger internal linking and topical structure",
    ],
    includes: [
      "Full-site technical SEO review",
      "Site-wide on-page optimization",
      "URL structure and navigation improvements",
      "Internal linking architecture",
      "Content hierarchy and silo structure",
      "Mobile and page speed optimization",
      "Schema markup implementation",
      "Ongoing site-wide performance monitoring",
    ],
    process: [
      "Audit the entire website for SEO opportunities and issues",
      "Prioritize fixes across technical, on-page, and content layers",
      "Implement site-wide optimizations systematically",
      "Establish ongoing monitoring and maintenance protocols",
      "Report on site-wide organic performance trends",
    ],
    whoNeedsIt: [
      "Websites never optimized for search",
      "Businesses with multiple site sections needing alignment",
      "Companies launching new websites",
      "Sites with inconsistent SEO across pages",
    ],
    relatedSlugs: ["technical-seo", "on-page-seo", "seo-audit"],
    faqs: [
      {
        question: "Is website SEO different from page-level SEO?",
        answer:
          "Website SEO addresses site-wide factors like architecture, crawlability, and internal linking, while page-level SEO focuses on individual page optimization. Both are essential.",
      },
      {
        question: "How long does full website optimization take?",
        answer:
          "Timeline depends on site size and current condition. Most sites see meaningful progress within three to six months of ongoing optimization.",
      },
    ],
    metaTitle: "Website SEO Optimization Services | GobalCareSolutions",
    metaDescription:
      "Optimize your entire website for search with comprehensive website SEO services from GobalCareSolutions.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
