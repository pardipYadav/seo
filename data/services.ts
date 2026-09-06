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
    slug: "seo",
    name: "SEO",
    shortDescription:
      "Improve organic search visibility and attract qualified traffic through strategic search engine optimization.",
    description:
      "SEO helps your website rank higher in Google and other search engines for keywords your customers search for. GobalCareSolutions delivers ethical, data-driven SEO including technical optimization, on-page improvements, keyword research, and content strategy.",
    benefits: [
      "Higher rankings for target keywords",
      "Sustainable organic traffic growth",
      "Better visibility without paying per click",
      "Long-term compounding online presence",
    ],
    includes: [
      "SEO audit and strategy",
      "Keyword research",
      "On-page optimization",
      "Technical SEO review",
      "Content optimization",
      "Google Search Console monitoring",
      "Monthly performance reporting",
    ],
    process: [
      "Audit your website and competitive landscape",
      "Develop a keyword and content strategy",
      "Implement on-page and technical improvements",
      "Monitor rankings, traffic, and conversions",
      "Refine strategy monthly based on data",
    ],
    whoNeedsIt: [
      "Businesses wanting organic growth",
      "Websites with low search visibility",
      "Companies competing for industry keywords",
      "Brands building long-term online authority",
    ],
    relatedSlugs: ["local-seo", "content-marketing", "analytics-reporting"],
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer: "Most businesses see measurable improvements within three to six months. SEO is a long-term strategy that compounds over time.",
      },
      {
        question: "Can you guarantee #1 rankings?",
        answer: "No legitimate agency can guarantee specific rankings. We focus on ethical strategies designed for sustainable growth.",
      },
    ],
    metaTitle: "SEO Services | GobalCareSolutions",
    metaDescription: "Professional SEO services from GobalCareSolutions to improve rankings, organic traffic, and online visibility.",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    shortDescription:
      "Drive immediate traffic and leads with targeted Google Search, Display, and Shopping ad campaigns.",
    description:
      "Google Ads puts your business in front of customers actively searching for your products or services. GobalCareSolutions creates and manages paid search campaigns focused on relevant keywords, efficient budgets, and measurable conversions.",
    benefits: [
      "Immediate visibility in search results",
      "Target high-intent customers",
      "Control budget and targeting precisely",
      "Measurable ROI and conversion tracking",
    ],
    includes: [
      "Campaign strategy and setup",
      "Keyword research for paid search",
      "Ad copy creation",
      "Landing page recommendations",
      "Bid and budget management",
      "Conversion tracking setup",
      "Monthly performance reporting",
    ],
    process: [
      "Define campaign goals and target audience",
      "Research keywords and competitor ads",
      "Build and launch optimized campaigns",
      "Monitor performance and adjust bids",
      "Report on clicks, conversions, and ROI",
    ],
    whoNeedsIt: [
      "Businesses needing immediate leads",
      "Companies launching new products",
      "E-commerce stores promoting products",
      "Local businesses targeting service-area customers",
    ],
    relatedSlugs: ["seo", "lead-generation", "analytics-reporting"],
    faqs: [
      {
        question: "Google Ads vs SEO — which is better?",
        answer: "Google Ads delivers immediate results while SEO builds long-term organic traffic. Most businesses benefit from using both together.",
      },
      {
        question: "What budget do I need for Google Ads?",
        answer: "Budget depends on your industry and goals. We help you start with a manageable budget and scale based on performance.",
      },
    ],
    metaTitle: "Google Ads Management | GobalCareSolutions",
    metaDescription: "Professional Google Ads management from GobalCareSolutions. Drive targeted traffic and leads with optimized paid search campaigns.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    shortDescription:
      "Build brand awareness, engage your audience, and grow your following across social platforms.",
    description:
      "Social media marketing helps you connect with customers where they spend time online. GobalCareSolutions develops platform-specific strategies, content plans, and community engagement to strengthen your brand presence on Facebook, Instagram, LinkedIn, and more.",
    benefits: [
      "Stronger brand awareness and recognition",
      "Direct engagement with your audience",
      "Increased website traffic from social channels",
      "Community building and customer loyalty",
    ],
    includes: [
      "Social media strategy",
      "Platform profile optimization",
      "Content planning and calendar",
      "Post creation and scheduling",
      "Community engagement guidance",
      "Hashtag and trend research",
      "Monthly analytics reporting",
    ],
    process: [
      "Audit current social presence and competitors",
      "Define brand voice and content pillars",
      "Create and schedule platform-specific content",
      "Engage with audience and monitor comments",
      "Analyze performance and refine strategy",
    ],
    whoNeedsIt: [
      "Brands building online community",
      "Businesses targeting younger demographics",
      "Companies with visual products or services",
      "Professionals establishing thought leadership",
    ],
    relatedSlugs: ["social-media-ads", "content-marketing", "branding"],
    faqs: [
      {
        question: "Which social platforms should my business use?",
        answer: "It depends on your audience. B2B companies often focus on LinkedIn, while B2C brands may prioritize Instagram and Facebook.",
      },
      {
        question: "How often should we post on social media?",
        answer: "Consistency matters more than frequency. We recommend a sustainable posting schedule tailored to your resources and platform best practices.",
      },
    ],
    metaTitle: "Social Media Marketing Services | GobalCareSolutions",
    metaDescription: "Grow your brand on social media with professional marketing services from GobalCareSolutions including strategy, content, and engagement.",
  },
  {
    slug: "social-media-ads",
    name: "Social Media Ads",
    shortDescription:
      "Reach targeted audiences with paid advertising on Facebook, Instagram, LinkedIn, and other platforms.",
    description:
      "Social media ads allow precise targeting by demographics, interests, and behavior. GobalCareSolutions creates paid social campaigns designed to generate leads, drive traffic, and increase conversions across Meta, LinkedIn, and other ad platforms.",
    benefits: [
      "Highly targeted audience reach",
      "Scalable lead generation",
      "Retargeting website visitors",
      "Detailed audience insights",
    ],
    includes: [
      "Ad campaign strategy",
      "Audience research and targeting",
      "Ad creative and copy development",
      "Campaign setup and management",
      "A/B testing and optimization",
      "Pixel and conversion tracking",
      "Performance reporting",
    ],
    process: [
      "Define campaign objectives and audience",
      "Create ad creatives and compelling copy",
      "Launch campaigns with proper tracking",
      "Optimize based on performance data",
      "Scale winning ads and refine targeting",
    ],
    whoNeedsIt: [
      "Businesses needing fast lead generation",
      "E-commerce brands promoting products",
      "Local businesses targeting nearby customers",
      "B2B companies reaching decision-makers on LinkedIn",
    ],
    relatedSlugs: ["social-media-marketing", "google-ads", "lead-generation"],
    faqs: [
      {
        question: "What's the difference between social media marketing and social media ads?",
        answer: "Social media marketing focuses on organic content and community building. Social media ads are paid campaigns to reach specific audiences faster.",
      },
      {
        question: "Which platform is best for social ads?",
        answer: "Facebook and Instagram work well for B2C. LinkedIn is strong for B2B. We recommend platforms based on where your customers are active.",
      },
    ],
    metaTitle: "Social Media Ads Services | GobalCareSolutions",
    metaDescription: "Drive leads and sales with social media advertising from GobalCareSolutions on Facebook, Instagram, LinkedIn, and more.",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    shortDescription:
      "Create valuable content that attracts, educates, and converts your target audience.",
    description:
      "Content marketing builds trust and authority by delivering helpful information your audience needs. GobalCareSolutions develops blog posts, guides, landing page copy, and multimedia content aligned with your SEO and brand strategy.",
    benefits: [
      "Establishes industry authority",
      "Supports SEO and organic rankings",
      "Educates prospects through the buyer journey",
      "Generates shares and backlinks naturally",
    ],
    includes: [
      "Content strategy and planning",
      "Blog post creation",
      "Website copy optimization",
      "Content calendar management",
      "Topic and keyword research",
      "Content performance analysis",
      "Content refresh and updates",
    ],
    process: [
      "Research audience needs and search intent",
      "Build a content calendar aligned with goals",
      "Create and publish optimized content",
      "Promote content across channels",
      "Measure engagement and refine topics",
    ],
    whoNeedsIt: [
      "Businesses building thought leadership",
      "Companies with long sales cycles",
      "Brands targeting informational keywords",
      "Websites needing fresh, relevant content",
    ],
    relatedSlugs: ["seo", "social-media-marketing", "email-marketing"],
    faqs: [
      {
        question: "How does content marketing help SEO?",
        answer: "Quality content targets keywords, earns backlinks, and keeps your site fresh — all signals that support higher search rankings.",
      },
      {
        question: "How often should we publish content?",
        answer: "Quality over quantity. We recommend a consistent schedule — often 2–4 pieces per month for small businesses, more for competitive niches.",
      },
    ],
    metaTitle: "Content Marketing Services | GobalCareSolutions",
    metaDescription: "Professional content marketing from GobalCareSolutions including strategy, blog writing, and SEO-optimized content creation.",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    shortDescription:
      "Nurture leads and retain customers with targeted email campaigns and automation.",
    description:
      "Email marketing delivers one of the highest ROIs in digital marketing. GobalCareSolutions helps you build subscriber lists, design campaigns, set up automation sequences, and drive repeat business through strategic email communication.",
    benefits: [
      "Direct communication with your audience",
      "High ROI compared to other channels",
      "Automated nurture sequences",
      "Customer retention and repeat sales",
    ],
    includes: [
      "Email strategy development",
      "List building guidance",
      "Campaign design and copywriting",
      "Automation workflow setup",
      "Newsletter creation",
      "A/B testing",
      "Open rate and conversion reporting",
    ],
    process: [
      "Define email goals and audience segments",
      "Set up or optimize your email platform",
      "Create welcome, nurture, and promotional sequences",
      "Design and send regular campaigns",
      "Analyze metrics and improve performance",
    ],
    whoNeedsIt: [
      "Businesses with existing customer lists",
      "E-commerce stores driving repeat purchases",
      "Service businesses nurturing leads",
      "Companies launching new products or offers",
    ],
    relatedSlugs: ["content-marketing", "lead-generation", "analytics-reporting"],
    faqs: [
      {
        question: "Which email platform do you use?",
        answer: "We work with popular platforms like Mailchimp, Klaviyo, HubSpot, and others depending on your business needs.",
      },
      {
        question: "How do I grow my email list?",
        answer: "We use lead magnets, website opt-in forms, landing pages, and ethical list-building strategies to grow your subscriber base.",
      },
    ],
    metaTitle: "Email Marketing Services | GobalCareSolutions",
    metaDescription: "Drive leads and sales with professional email marketing from GobalCareSolutions including campaigns, automation, and list building.",
  },
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    shortDescription:
      "Build a professional, mobile-friendly website that converts visitors into customers.",
    description:
      "Your website is the foundation of your digital marketing. GobalCareSolutions creates modern, responsive websites optimized for speed, user experience, and conversions — built to support your SEO and marketing goals.",
    benefits: [
      "Professional first impression",
      "Mobile-responsive design",
      "Fast loading and SEO-friendly structure",
      "Conversion-focused layouts",
    ],
    includes: [
      "Website design and wireframing",
      "Responsive development",
      "Landing page creation",
      "SEO-friendly site structure",
      "Contact forms and CTAs",
      "Speed and performance optimization",
      "Ongoing maintenance guidance",
    ],
    process: [
      "Understand your brand, goals, and audience",
      "Design mockups and gather feedback",
      "Develop and test across devices",
      "Launch with SEO and analytics setup",
      "Provide training and maintenance support",
    ],
    whoNeedsIt: [
      "Businesses without a website",
      "Outdated websites needing redesign",
      "Companies launching new brands",
      "Sites with poor mobile experience or slow speed",
    ],
    relatedSlugs: ["seo", "branding", "lead-generation"],
    faqs: [
      {
        question: "Do you build on WordPress or custom code?",
        answer: "We work with various platforms including WordPress and modern frameworks depending on your project requirements and budget.",
      },
      {
        question: "Will my website be SEO-friendly?",
        answer: "Yes. All websites we build include SEO best practices — clean code, fast loading, mobile responsiveness, and proper site structure.",
      },
    ],
    metaTitle: "Web Design & Development | GobalCareSolutions",
    metaDescription: "Professional web design and development from GobalCareSolutions. Mobile-friendly, SEO-ready websites built to convert.",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    shortDescription:
      "Improve visibility in local search results and Google Maps for businesses serving specific areas.",
    description:
      "Local SEO helps businesses appear when nearby customers search for relevant products or services. GobalCareSolutions builds location-focused strategies including Google Business Profile optimization, citations, and local content.",
    benefits: [
      "Increased visibility in Google Maps",
      "More leads from nearby customers",
      "Stronger local brand presence",
      "Better review and reputation signals",
    ],
    includes: [
      "Google Business Profile optimization",
      "Local keyword research",
      "NAP consistency and citations",
      "Location page optimization",
      "Review generation guidance",
      "Local competitor research",
      "Monthly local ranking reports",
    ],
    process: [
      "Audit local search presence and citations",
      "Optimize Google Business Profile",
      "Improve location pages and local content",
      "Build citations and manage reviews",
      "Monitor local rankings and performance",
    ],
    whoNeedsIt: [
      "Local service businesses",
      "Multi-location companies",
      "Retail stores with physical locations",
      "Professionals serving defined areas",
    ],
    relatedSlugs: ["seo", "reputation-management", "lead-generation"],
    faqs: [
      {
        question: "How is local SEO different from regular SEO?",
        answer: "Local SEO focuses on geographic relevance, map visibility, and location-based search intent.",
      },
      {
        question: "Do I need a physical address for local SEO?",
        answer: "Many local strategies benefit from a verifiable location or clearly defined service area.",
      },
    ],
    metaTitle: "Local SEO Services | GobalCareSolutions",
    metaDescription: "Improve local search visibility with professional local SEO from GobalCareSolutions including Google Maps and citation optimization.",
  },
  {
    slug: "ecommerce-marketing",
    name: "E-commerce Marketing",
    shortDescription:
      "Drive online sales through SEO, paid ads, and conversion-focused strategies for online stores.",
    description:
      "E-commerce marketing combines SEO, paid advertising, content, and email to grow online store revenue. GobalCareSolutions helps e-commerce brands attract buyers, optimize product pages, and increase conversion rates across channels.",
    benefits: [
      "More traffic to product pages",
      "Higher conversion rates",
      "Better product visibility in search",
      "Integrated multi-channel sales strategy",
    ],
    includes: [
      "Product page SEO",
      "Category optimization",
      "Google Shopping ads setup",
      "E-commerce email campaigns",
      "Cart abandonment strategies",
      "Conversion rate optimization",
      "Sales and traffic reporting",
    ],
    process: [
      "Audit store SEO and marketing channels",
      "Optimize high-priority product and category pages",
      "Launch paid and organic campaigns",
      "Implement email and retargeting flows",
      "Track sales, ROAS, and organic growth",
    ],
    whoNeedsIt: [
      "Online retailers and DTC brands",
      "Shopify and WooCommerce stores",
      "Marketplace sellers with owned websites",
      "Stores with large product catalogs",
    ],
    relatedSlugs: ["seo", "google-ads", "email-marketing"],
    faqs: [
      {
        question: "Do you work with Shopify stores?",
        answer: "Yes. We provide e-commerce marketing for Shopify, WooCommerce, and other major platforms.",
      },
      {
        question: "Can e-commerce marketing help my product rankings?",
        answer: "Yes. Product SEO, combined with paid ads and content, improves visibility for commercial search terms.",
      },
    ],
    metaTitle: "E-commerce Marketing Services | GobalCareSolutions",
    metaDescription: "Grow online store sales with e-commerce marketing from GobalCareSolutions including SEO, ads, email, and conversion optimization.",
  },
  {
    slug: "youtube-marketing",
    name: "YouTube Marketing",
    shortDescription:
      "Grow your brand on YouTube with video strategy, optimization, and channel management.",
    description:
      "YouTube is the second largest search engine. GobalCareSolutions helps businesses build a YouTube presence through video SEO, channel optimization, content strategy, and YouTube advertising to reach and engage your audience.",
    benefits: [
      "Visibility on the world's #2 search engine",
      "Long-form content builds deep trust",
      "Video content repurposable across channels",
      "YouTube ads reach engaged viewers",
    ],
    includes: [
      "YouTube channel setup and optimization",
      "Video SEO and title/description optimization",
      "Content strategy and topic planning",
      "Thumbnail and metadata guidance",
      "YouTube ads campaign setup",
      "Analytics and growth tracking",
      "Cross-platform content promotion",
    ],
    process: [
      "Audit channel and define video goals",
      "Develop content pillars and upload schedule",
      "Optimize videos for search and engagement",
      "Promote videos across social and email",
      "Analyze watch time, subscribers, and conversions",
    ],
    whoNeedsIt: [
      "Brands with educational or demo content",
      "Businesses building personal brand authority",
      "Companies targeting video search results",
      "E-commerce brands showcasing products",
    ],
    relatedSlugs: ["content-marketing", "social-media-marketing", "seo"],
    faqs: [
      {
        question: "Do I need professional video equipment?",
        answer: "Not necessarily. Many successful channels start with smartphones. We focus on strategy, optimization, and consistency.",
      },
      {
        question: "Can YouTube videos help my SEO?",
        answer: "Yes. YouTube videos can rank in Google search results and drive traffic back to your website.",
      },
    ],
    metaTitle: "YouTube Marketing Services | GobalCareSolutions",
    metaDescription: "Grow your YouTube channel with professional marketing from GobalCareSolutions including video SEO, strategy, and YouTube ads.",
  },
  {
    slug: "reputation-management",
    name: "Reputation Management",
    shortDescription:
      "Monitor, protect, and improve your online reputation across review sites and search results.",
    description:
      "Your online reputation directly impacts customer trust and sales. GobalCareSolutions helps you manage reviews, respond to feedback, suppress negative content where possible, and build a positive digital reputation across Google, Yelp, and social platforms.",
    benefits: [
      "Improved customer trust and credibility",
      "Higher conversion from positive reviews",
      "Proactive response to negative feedback",
      "Stronger local and brand search presence",
    ],
    includes: [
      "Review monitoring across platforms",
      "Review response strategy and templates",
      "Google Business Profile review management",
      "Reputation audit and baseline report",
      "Review generation guidance",
      "Negative content mitigation strategies",
      "Monthly reputation reporting",
    ],
    process: [
      "Audit current online reputation and reviews",
      "Set up monitoring across key platforms",
      "Implement review generation strategies",
      "Respond to reviews professionally",
      "Track sentiment and reputation trends",
    ],
    whoNeedsIt: [
      "Local businesses dependent on reviews",
      "Companies with negative online feedback",
      "Multi-location brands needing consistency",
      "Professional services building trust",
    ],
    relatedSlugs: ["local-seo", "social-media-marketing", "branding"],
    faqs: [
      {
        question: "Can you remove negative reviews?",
        answer: "We cannot remove legitimate reviews, but we help respond professionally and implement strategies to earn more positive reviews.",
      },
      {
        question: "Which platforms do you monitor?",
        answer: "Google, Yelp, Facebook, industry-specific review sites, and social media mentions relevant to your business.",
      },
    ],
    metaTitle: "Reputation Management Services | GobalCareSolutions",
    metaDescription: "Protect and improve your online reputation with GobalCareSolutions review management and reputation monitoring services.",
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    shortDescription:
      "Attract and capture qualified leads through SEO, ads, landing pages, and conversion funnels.",
    description:
      "Lead generation combines multiple digital marketing channels to fill your sales pipeline. GobalCareSolutions builds lead gen systems using SEO, paid ads, landing pages, forms, and email nurture sequences to deliver consistent qualified leads.",
    benefits: [
      "Steady flow of qualified prospects",
      "Multi-channel lead capture",
      "Lower cost per lead over time",
      "Scalable systems as you grow",
    ],
    includes: [
      "Lead generation strategy",
      "Landing page design and optimization",
      "Form and CTA optimization",
      "Paid ads for lead capture",
      "SEO for lead-focused keywords",
      "Lead nurture email sequences",
      "Lead tracking and reporting",
    ],
    process: [
      "Define ideal customer and lead criteria",
      "Build landing pages and capture forms",
      "Launch ads and SEO for lead keywords",
      "Set up tracking and CRM integration guidance",
      "Optimize cost per lead and conversion rates",
    ],
    whoNeedsIt: [
      "B2B companies needing sales pipeline",
      "Service businesses booking consultations",
      "Real estate, legal, and healthcare providers",
      "Any business relying on inbound leads",
    ],
    relatedSlugs: ["google-ads", "seo", "email-marketing"],
    faqs: [
      {
        question: "How many leads can I expect?",
        answer: "Lead volume depends on budget, industry, competition, and offer quality. We focus on qualified leads, not just volume.",
      },
      {
        question: "Do you integrate with my CRM?",
        answer: "We provide guidance on connecting forms and ad platforms to popular CRMs. Direct CRM development is outside standard packages.",
      },
    ],
    metaTitle: "Lead Generation Services | GobalCareSolutions",
    metaDescription: "Generate qualified leads with professional lead generation services from GobalCareSolutions using SEO, ads, and landing pages.",
  },
  {
    slug: "analytics-reporting",
    name: "Analytics & Reporting",
    shortDescription:
      "Track, measure, and understand your marketing performance with clear data and actionable reports.",
    description:
      "You can't improve what you don't measure. GobalCareSolutions sets up analytics tracking, builds custom dashboards, and delivers transparent monthly reports so you understand exactly how your digital marketing is performing.",
    benefits: [
      "Clear visibility into marketing ROI",
      "Data-driven decision making",
      "Identify top-performing channels",
      "Transparent accountability",
    ],
    includes: [
      "Google Analytics setup and configuration",
      "Google Search Console monitoring",
      "Conversion and goal tracking",
      "Custom monthly performance reports",
      "Traffic source analysis",
      "Campaign performance breakdowns",
      "Recommendations based on data",
    ],
    process: [
      "Audit existing tracking and data gaps",
      "Set up or fix analytics and conversion tracking",
      "Define KPIs aligned with business goals",
      "Deliver monthly reports with insights",
      "Recommend optimizations based on trends",
    ],
    whoNeedsIt: [
      "Businesses unsure of marketing ROI",
      "Companies running multiple campaigns",
      "Teams needing executive-ready reports",
      "Websites without proper tracking setup",
    ],
    relatedSlugs: ["seo", "google-ads", "lead-generation"],
    faqs: [
      {
        question: "What metrics do you report on?",
        answer: "Traffic, rankings, conversions, ad spend, cost per lead, email performance, and social engagement — tailored to your services.",
      },
      {
        question: "Can you set up Google Analytics 4?",
        answer: "Yes. We configure GA4, set up events, conversions, and connect it to your marketing channels.",
      },
    ],
    metaTitle: "Analytics & Reporting Services | GobalCareSolutions",
    metaDescription: "Measure marketing performance with analytics and reporting from GobalCareSolutions including GA4 setup and monthly reports.",
  },
  {
    slug: "branding",
    name: "Branding",
    shortDescription:
      "Build a strong, consistent brand identity that resonates with your target audience.",
    description:
      "Strong branding sets you apart from competitors and builds customer loyalty. GobalCareSolutions helps define your brand voice, visual identity guidelines, messaging, and consistent presence across all digital marketing channels.",
    benefits: [
      "Memorable and professional brand identity",
      "Consistent messaging across channels",
      "Stronger customer recognition and trust",
      "Foundation for all marketing efforts",
    ],
    includes: [
      "Brand strategy and positioning",
      "Brand voice and messaging guidelines",
      "Visual identity direction",
      "Logo usage guidance",
      "Brand consistency across web and social",
      "Competitive brand analysis",
      "Brand guidelines document",
    ],
    process: [
      "Research audience, competitors, and market",
      "Define brand positioning and personality",
      "Develop voice, messaging, and visual direction",
      "Apply branding across digital touchpoints",
      "Maintain consistency in all marketing materials",
    ],
    whoNeedsIt: [
      "New businesses establishing identity",
      "Companies rebranding or repositioning",
      "Businesses with inconsistent messaging",
      "Brands preparing for growth marketing",
    ],
    relatedSlugs: ["web-design-development", "social-media-marketing", "content-marketing"],
    faqs: [
      {
        question: "Do you design logos?",
        answer: "We provide brand strategy and visual direction. Logo design may be included in higher-tier packages or referred to design specialists.",
      },
      {
        question: "How does branding help marketing?",
        answer: "Consistent branding makes all marketing more effective — ads, content, and social posts perform better when your brand is recognizable and trusted.",
      },
    ],
    metaTitle: "Branding Services | GobalCareSolutions",
    metaDescription: "Build a strong brand identity with professional branding services from GobalCareSolutions including strategy, messaging, and visual direction.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
