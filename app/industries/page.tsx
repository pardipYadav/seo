import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { industries } from "@/data/industries";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing for Every Industry | GobalCareSolutions",
  description:
    "GobalCareSolutions provides tailored digital marketing services including SEO for local businesses, e-commerce, healthcare, legal, SaaS, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <h1>Digital Marketing by Industry</h1>
          <p className="hero-desc">Every industry has unique marketing challenges. GobalCareSolutions develops tailored digital marketing strategies based on your sector, competition, and target audience.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((ind) => (
              <div key={ind.slug} className="card industry-detail">
                <h2>{ind.name}</h2>
                <p>{ind.description}</p>
                <div className="industry-cols">
                  <div>
                    <h3>Common Challenges</h3>
                    <ul>{ind.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
                  </div>
                  <div>
                    <h3>Our Solutions</h3>
                    <ul>{ind.solutions.map((s) => <li key={s}>{s}</li>)}</ul>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-secondary">Discuss Your Industry</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
        .industries-grid { display: flex; flex-direction: column; gap: 2rem; }
        .industry-detail h2 { font-size: 1.375rem; margin-bottom: 0.75rem; }
        .industry-detail > p { color: var(--color-text-muted); margin-bottom: 1.5rem; }
        .industry-cols { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
        .industry-cols h3 { font-size: 0.9375rem; margin-bottom: 0.5rem; }
        .industry-cols li { font-size: 0.875rem; color: var(--color-text-muted); }
        @media (min-width: 768px) { .industry-cols { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
