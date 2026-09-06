import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { faqs } from "@/data/faqs";
import { faqJsonLd, JsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions About Digital Marketing",
  description:
    "Find answers to common digital marketing questions about pricing starting at $100, SEO, services, and getting started with GobalCareSolutions.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLdScript data={faqJsonLd(faqs)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <h1>Frequently Asked Questions</h1>
          <p className="hero-desc">Answers to common questions about digital marketing services, pricing, and how GobalCareSolutions can help your business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2>Still Have Questions?</h2>
          <p className="text-muted" style={{ margin: "1rem 0 2rem" }}>Contact us for a free digital marketing consultation and personalized answers.</p>
          <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
      `}</style>
    </>
  );
}
