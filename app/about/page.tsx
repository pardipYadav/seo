import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "About GobalCareSolutions | Professional SEO Agency",
  description:
    "Learn about GobalCareSolutions, our SEO philosophy, ethical approach, and commitment to helping businesses achieve sustainable organic growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1>About GobalCareSolutions</h1>
          <p className="hero-desc">A professional SEO agency focused on ethical strategies, transparent reporting, and long-term organic growth for businesses.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>Who We Are</h2>
            <p>GobalCareSolutions is a professional SEO agency dedicated to helping businesses improve their search engine visibility and attract qualified organic traffic. We work with businesses of all sizes — from local service providers to e-commerce brands and enterprise organizations.</p>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>Our mission is to deliver strategic, ethical SEO services that create sustainable online growth for our clients. We believe in transparency, data-driven decision-making, and building long-term partnerships based on trust and measurable progress.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>We envision a digital landscape where businesses of all sizes can compete fairly in search results through quality content, technical excellence, and genuine authority — not manipulative shortcuts or spam tactics.</p>
          </div>
          <div>
            <h2>Our SEO Philosophy</h2>
            <p>SEO is a long-term investment, not a quick fix. We focus on building foundations that compound over time: strong technical health, relevant content, ethical authority building, and continuous optimization based on real performance data.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            {[
              { title: "Research First", desc: "Every engagement begins with a thorough audit and competitive analysis to understand your current position and opportunities." },
              { title: "Strategy Before Execution", desc: "We develop a customized SEO roadmap aligned with your business goals before implementing any changes." },
              { title: "Transparent Communication", desc: "Monthly reports detail exactly what work was completed, what changed, and what is planned for the next cycle." },
              { title: "Continuous Optimization", desc: "SEO is never finished. We monitor performance, adapt to algorithm changes, and refine strategies based on data." },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Integrity:</strong> We follow search engine guidelines and never use manipulative or spam tactics.</li>
            <li><strong>Transparency:</strong> Clear reporting, honest communication, and realistic expectations.</li>
            <li><strong>Excellence:</strong> Meticulous attention to technical details, content quality, and strategy.</li>
            <li><strong>Partnership:</strong> We work alongside your team as a trusted advisor, not just a vendor.</li>
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Why Ethical SEO Matters</h2>
          <p>Search engines continuously improve their algorithms to reward websites that provide genuine value to users. Tactics like keyword stuffing, spam backlinks, and private blog networks may produce short-term gains but ultimately risk penalties and long-term damage to your online presence.</p>
          <p>GobalCareSolutions is committed to white-hat SEO practices that build durable authority and protect your brand reputation. We do not guarantee specific rankings, traffic levels, or revenue — because no legitimate SEO agency can. Instead, we focus on strategies designed for sustainable, compounding growth.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How We Work</h2>
          <ol className="work-list">
            <li><strong>Discovery:</strong> We learn about your business, goals, target audience, and competitive landscape.</li>
            <li><strong>Audit & Analysis:</strong> Comprehensive review of your website&apos;s technical health, content, and search visibility.</li>
            <li><strong>Strategy Development:</strong> Custom SEO roadmap with prioritized actions and clear timelines.</li>
            <li><strong>Implementation:</strong> Hands-on optimization across technical, on-page, content, and off-page dimensions.</li>
            <li><strong>Reporting & Refinement:</strong> Monthly performance reports and ongoing strategy adjustments.</li>
          </ol>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </p>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
        .about-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        .about-grid h2 { margin-bottom: 0.75rem; font-size: 1.375rem; }
        .about-grid p { color: var(--color-text-muted); line-height: 1.8; }
        .values-list { padding-left: 1.25rem; }
        .values-list li { margin-bottom: 0.75rem; color: var(--color-text-muted); line-height: 1.7; }
        .work-list { padding-left: 1.25rem; }
        .work-list li { margin-bottom: 0.75rem; color: var(--color-text-muted); line-height: 1.7; }
        @media (min-width: 768px) { .about-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
