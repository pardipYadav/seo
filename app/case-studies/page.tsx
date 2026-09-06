import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "SEO Case Studies | GobalCareSolutions",
  description:
    "Explore sample SEO case study layouts from GobalCareSolutions covering local SEO, e-commerce SEO, and technical SEO strategies.",
  path: "/case-studies",
});

const caseStudies = [
  {
    title: "Local SEO Strategy",
    category: "Local SEO",
    challenge: "A local service business needed to improve visibility in Google Maps and local search results across multiple service areas.",
    approach: [
      "Conducted a comprehensive local SEO audit including NAP consistency review",
      "Optimized Google Business Profile with accurate categories, services, and photos",
      "Created location-specific service area pages with unique content",
      "Built local citations on relevant directories and industry platforms",
      "Implemented a review generation strategy with response guidelines",
    ],
    services: ["Local SEO", "Google Business Profile Optimization", "On-Page SEO"],
  },
  {
    title: "E-commerce SEO Strategy",
    category: "E-commerce SEO",
    challenge: "An online store with a large product catalog faced duplicate content issues, poor category visibility, and low organic conversion rates.",
    approach: [
      "Audited product and category pages for on-page SEO opportunities",
      "Resolved duplicate content through canonical tags and unique descriptions",
      "Optimized faceted navigation to prevent crawl waste",
      "Implemented product schema markup across key product pages",
      "Developed a product keyword research and content mapping strategy",
    ],
    services: ["E-commerce SEO", "Technical SEO", "Keyword Research"],
  },
  {
    title: "Technical SEO Improvement",
    category: "Technical SEO",
    challenge: "A business website experienced declining organic traffic due to crawl errors, slow page speed, and indexing issues after a platform migration.",
    approach: [
      "Performed a full technical SEO audit identifying crawl and index issues",
      "Fixed broken links, redirect chains, and orphaned pages",
      "Improved Core Web Vitals through image optimization and caching",
      "Submitted updated XML sitemap and resolved Search Console errors",
      "Restructured internal linking to improve page authority distribution",
    ],
    services: ["Technical SEO", "SEO Audit", "Website SEO Optimization"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Replace sample case studies with verified client projects before production launch. */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <h1>SEO Case Studies</h1>
          <p className="hero-desc">Sample case study layouts demonstrating our SEO approach across different business types and challenges.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {caseStudies.map((cs) => (
            <article key={cs.title} className="card case-study">
              <span className="sample-badge">Sample Case Study</span>
              <span className="case-category">{cs.category}</span>
              <h2>{cs.title}</h2>
              <div className="case-section">
                <h3>The Challenge</h3>
                <p>{cs.challenge}</p>
              </div>
              <div className="case-section">
                <h3>Our Approach</h3>
                <ol>{cs.approach.map((step) => <li key={step}>{step}</li>)}</ol>
              </div>
              <div className="case-section">
                <h3>Services Used</h3>
                <div className="case-tags">
                  {cs.services.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
        .case-study { margin-bottom: 2rem; }
        .sample-badge { display: inline-block; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: var(--color-primary-light); color: var(--color-primary); padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 0.75rem; }
        .case-category { display: block; font-size: 0.8125rem; color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem; }
        .case-study h2 { margin-bottom: 1.5rem; }
        .case-section { margin-bottom: 1.5rem; }
        .case-section h3 { font-size: 1rem; margin-bottom: 0.5rem; }
        .case-section p, .case-section li { color: var(--color-text-muted); font-size: 0.9375rem; line-height: 1.7; }
        .case-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag { background: var(--color-bg-alt); border: 1px solid var(--color-border); padding: 0.375rem 0.875rem; border-radius: 999px; font-size: 0.8125rem; }
      `}</style>
    </>
  );
}
