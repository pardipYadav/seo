export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the practice of improving a website's visibility in organic search engine results. It involves optimizing technical elements, content, and authority signals so search engines can understand, index, and rank your pages for relevant queries.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "SEO costs vary based on website size, competition, and scope. GobalCareSolutions offers packages starting at $1,000 per month. Custom packages are available for businesses with unique requirements.",
  },
  {
    question: "Why do your SEO packages start at $1,000?",
    answer:
      "Effective SEO requires dedicated research, implementation, monitoring, and reporting. Our starting price reflects the level of professional work needed to deliver meaningful, sustainable results rather than superficial optimizations.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within three to six months, with continued growth over time. Timelines depend on competition, website condition, and the scope of work.",
  },
  {
    question: "Can SEO guarantee #1 Google rankings?",
    answer:
      "No legitimate SEO company can guarantee specific rankings. Search engine algorithms change frequently, and rankings depend on many factors outside any agency's control. GobalCareSolutions focuses on ethical, data-driven strategies designed for sustainable growth.",
  },
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO addresses the backend and structural elements of your website — crawlability, indexing, page speed, mobile usability, site architecture, and structured data — to ensure search engines can access and understand your content.",
  },
  {
    question: "What is local SEO?",
    answer:
      "Local SEO optimizes your online presence for location-based searches. It includes Google Business Profile optimization, local citations, review management, and location-specific content to help you appear in map packs and local search results.",
  },
  {
    question: "What is e-commerce SEO?",
    answer:
      "E-commerce SEO focuses on optimizing online stores for organic search. It covers product pages, category structures, faceted navigation, product schema, and conversion-focused keyword targeting to drive sales through search.",
  },
  {
    question: "Do you provide keyword research?",
    answer:
      "Yes. Keyword research is included in all GobalCareSolutions SEO packages. We identify search terms aligned with your business goals, analyze search intent, and map keywords to your content strategy.",
  },
  {
    question: "Are backlinks included?",
    answer:
      "Backlink research and opportunity identification are included in our Growth plan and above. We focus on ethical link earning and digital PR — never spam links or manipulative schemes.",
  },
  {
    question: "How do monthly SEO services work?",
    answer:
      "Monthly SEO services include ongoing optimization, monitoring, reporting, and strategy adjustments. Each month we implement improvements, track performance, and refine our approach based on data and search engine changes.",
  },
  {
    question: "Can I cancel my SEO package?",
    answer:
      "Yes. You may cancel your monthly SEO package by providing written notice as outlined in our Cancellation Policy. Completed work and the current billing cycle terms apply upon cancellation.",
  },
  {
    question: "What is included in an SEO audit?",
    answer:
      "Our SEO audit covers technical SEO, on-page optimization, content quality, indexing, crawlability, site architecture, internal links, backlinks, keyword performance, competitor comparison, and mobile usability.",
  },
  {
    question: "How are SEO results measured?",
    answer:
      "We measure SEO results through keyword ranking trends, organic traffic growth, click-through rates, index coverage, backlink quality, and conversion metrics where applicable. Monthly reports provide transparent performance data.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact GobalCareSolutions for a free SEO consultation. We'll discuss your goals, review your website, and recommend the best SEO package or custom strategy for your business.",
  },
];

export const homepageFaqs = faqs.slice(0, 6);
