import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "SEO Services | Local, Technical, On-Page & E-commerce SEO",
  description:
    "Explore professional SEO services from GobalCareSolutions including local SEO, technical SEO, on-page SEO, e-commerce SEO, keyword research, link building, and more.",
  path: "/seo-services",
});

export default function SEOServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "SEO Services" }]} />
          <h1>Professional SEO Services</h1>
          <p className="hero-desc">Comprehensive search engine optimization services to improve your visibility, attract qualified traffic, and drive sustainable business growth.</p>
          <Link href="/seo-packages" className="btn btn-primary">View SEO Packages</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Our SEO Services" description="Each service is designed to address a specific dimension of search engine optimization." align="left" />
          <ServicesGrid services={services} />
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; margin-bottom: 2rem; line-height: 1.7; }
      `}</style>
    </>
  );
}
