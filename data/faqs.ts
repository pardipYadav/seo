export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing encompasses all online strategies to promote your business — including SEO, social media, content marketing, email marketing, and paid advertising. GobalCareSolutions helps businesses grow through integrated digital marketing with SEO at the core.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "Digital marketing costs vary based on your goals, industry, and scope. GobalCareSolutions offers packages starting at $100 per month. Custom packages are available for businesses with unique requirements.",
  },
  {
    question: "Why do your packages start at $100?",
    answer:
      "We believe every business deserves access to professional digital marketing. Our Starter package at $100/month provides essential SEO setup, social media profile setup, and foundational online marketing to help small businesses get started.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Results vary by channel. SEO typically shows measurable improvements within three to six months, while social media and content marketing can generate engagement sooner. Digital marketing is a long-term strategy that compounds over time.",
  },
  {
    question: "Can you guarantee #1 Google rankings?",
    answer:
      "No legitimate marketing company can guarantee specific rankings. Search engine algorithms change frequently, and rankings depend on many factors outside any agency's control. GobalCareSolutions focuses on ethical, data-driven strategies designed for sustainable growth.",
  },
  {
    question: "Is SEO included in your digital marketing packages?",
    answer:
      "Yes. All GobalCareSolutions digital marketing packages include SEO services — from basic setup in our Starter plan to advanced technical SEO, keyword research, and content optimization in higher-tier packages.",
  },
  {
    question: "What is local SEO?",
    answer:
      "Local SEO optimizes your online presence for location-based searches. It includes Google Business Profile optimization, local citations, review management, and location-specific content to help you appear in map packs and local search results.",
  },
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer SEO (local, technical, on-page, off-page, e-commerce), content marketing, social media marketing, Google Business Profile optimization, keyword research, link building, competitor analysis, and marketing consulting.",
  },
  {
    question: "Do you provide keyword research?",
    answer:
      "Yes. Keyword research is included in our Growth plan and above. We identify search terms aligned with your business goals, analyze search intent, and map keywords to your content and SEO strategy.",
  },
  {
    question: "Are backlinks included?",
    answer:
      "Backlink research and opportunity identification are included in our Pro plan and above. We focus on ethical link earning and digital PR — never spam links or manipulative schemes.",
  },
  {
    question: "How do monthly digital marketing services work?",
    answer:
      "Monthly services include ongoing optimization, content support, monitoring, reporting, and strategy adjustments. Each month we implement improvements, track performance across channels, and refine our approach based on data.",
  },
  {
    question: "Can I cancel my package?",
    answer:
      "Yes. You may cancel your monthly package by providing written notice as outlined in our Cancellation Policy. Completed work and the current billing cycle terms apply upon cancellation.",
  },
  {
    question: "What is included in an SEO audit?",
    answer:
      "Our SEO audit covers technical SEO, on-page optimization, content quality, indexing, crawlability, site architecture, internal links, backlinks, keyword performance, competitor comparison, and mobile usability.",
  },
  {
    question: "How are marketing results measured?",
    answer:
      "We measure results through keyword ranking trends, organic traffic growth, social engagement, click-through rates, and conversion metrics where applicable. Monthly reports provide transparent performance data.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact GobalCareSolutions for a free consultation. We'll discuss your goals, review your current online presence, and recommend the best digital marketing package for your business.",
  },
];

export const homepageFaqs = faqs.slice(0, 6);
