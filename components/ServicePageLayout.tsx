import Link from "next/link";
import type { Service } from "@/data/services";
import Breadcrumbs from "./Breadcrumbs";
import CTASection from "./CTASection";
import FAQ from "./FAQ";
import ServiceCard from "./ServiceCard";
import { getRelatedServices } from "@/data/services";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd";

type ServicePageLayoutProps = {
  service: Service;
};

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const related = getRelatedServices(service.relatedSlugs);
  const breadcrumbs = [
    { name: "Services", url: "/seo-services" },
    { name: service.name, url: `/seo-services/${service.slug}` },
  ];

  return (
    <>
      <JsonLdScript data={[
        serviceJsonLd(service.name, service.description, `/seo-services/${service.slug}`),
        breadcrumbJsonLd([{ name: "Home", url: "/" }, ...breadcrumbs]),
        faqJsonLd(service.faqs),
      ]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: "Digital Marketing Services", href: "/seo-services" },
            { label: service.name },
          ]} />
          <h1>{service.name}</h1>
          <p className="page-hero-desc">{service.description}</p>
          <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>What&apos;s Included</h2>
              <ul className="check-list">
                {service.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2>Benefits</h2>
              <ul className="check-list">
                {service.benefits.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Our {service.name} Process</h2>
          <ol className="process-list">
            {service.process.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who Needs {service.name}?</h2>
          <div className="grid-2">
            {service.whoNeedsIt.map((item) => (
              <div key={item} className="card"><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "2rem" }}>Related Services</h2>
          <div className="grid-3">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
          <FAQ items={service.faqs} />
        </div>
      </section>

      <CTASection
        title={service.slug === "seo-audit" ? "Request Your SEO Audit" : undefined}
        primaryText={service.slug === "seo-audit" ? "Request Your SEO Audit" : undefined}
      />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .page-hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; margin-bottom: 2rem; line-height: 1.7; }
        .content-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
        .content-grid h2 { margin-bottom: 1.25rem; font-size: 1.5rem; }
        .check-list { list-style: none; padding: 0; }
        .check-list li { padding: 0.5rem 0 0.5rem 1.75rem; position: relative; color: var(--color-text-muted); }
        .check-list li::before { content: '✓'; position: absolute; left: 0; color: var(--color-success); font-weight: 700; }
        .process-list { padding-left: 1.25rem; }
        .process-list li { margin-bottom: 0.75rem; color: var(--color-text-muted); line-height: 1.7; }
        @media (min-width: 768px) { .content-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
