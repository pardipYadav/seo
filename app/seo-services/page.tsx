import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Services | SEO, Google Ads, Social Media & More",
  description:
    "Explore all digital marketing services from GobalCareSolutions: SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing, Web Design, Local SEO, and more.",
  path: "/seo-services",
});

export default function SEOServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1>Digital Marketing Services</h1>
          <p className="hero-desc">Full-service digital marketing to grow your business online — including SEO, Google Ads, social media, content, email, web design, lead generation, and more.</p>
          <Link href="/seo-packages" className="btn btn-primary">View Marketing Packages</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="All Services" description="Choose a service below to learn more about how GobalCareSolutions can help your business grow." align="left" />
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
