import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import ProcessSection from "@/components/ProcessSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { TrustIndicators, IndustryCard, TestimonialCard, ContactStrip } from "@/components/Cards";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { packages, pricingDisclaimer, rankingDisclaimer } from "@/data/packages";
import { homepageFaqs } from "@/data/faqs";
import { industries, trustPoints, whyChooseUs, seoBenefits } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { faqJsonLd, JsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "GobalCareSolutions | Professional SEO Services & SEO Packages",
  description:
    "Grow your online visibility with professional SEO services from GobalCareSolutions. Explore SEO packages starting at $1,000, including local SEO, technical SEO, e-commerce SEO, keyword research, content SEO, and more.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={faqJsonLd(homepageFaqs)} />
      <Hero
        title="Grow Your Business With Professional SEO Services"
        description="GobalCareSolutions helps businesses improve search visibility, attract qualified organic traffic, and build sustainable online growth through strategic SEO services tailored to their goals."
        primaryCta={{ text: "View SEO Packages", href: "/seo-packages" }}
        secondaryCta={{ text: "Get Free SEO Consultation", href: "/contact" }}
        showContact
        showDashboard
      />
      <TrustIndicators items={trustPoints} />

      <section className="section">
        <div className="container">
          <SectionHeading label="Services" title="Professional SEO Services" description="Comprehensive search engine optimization services designed to improve your visibility, traffic, and conversions." />
          <ServicesGrid services={services.slice(0, 6)} />
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/seo-services" className="btn btn-secondary">View All SEO Services</Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading label="Pricing" title="SEO Packages Starting at $1,000" description="Transparent pricing with packages designed for businesses at every stage of growth." />
          <div className="grid-3">
            {packages.slice(0, 3).map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)}
          </div>
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/seo-packages" className="btn btn-primary">View All SEO Packages</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading label="Why Us" title="Why Choose GobalCareSolutions" description="We combine ethical practices, transparent reporting, and data-driven strategies to deliver sustainable SEO results." />
          <div className="grid-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading label="Industries" title="SEO for Every Industry" description="Tailored SEO strategies for businesses across diverse sectors and markets." />
          <div className="grid-3">
            {industries.slice(0, 6).map((ind) => (
              <IndustryCard key={ind.slug} name={ind.name} description={ind.description} slug={ind.slug} />
            ))}
          </div>
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/industries" className="btn btn-secondary">View All Industries</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading label="Benefits" title="Benefits of SEO for Your Business" description="Investing in SEO delivers compounding returns that strengthen your online presence over time." />
          <div className="grid-3">
            {seoBenefits.map((b) => (
              <div key={b.title} className="card">
                <h3>{b.title}</h3>
                <p className="text-muted">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading label="Case Studies" title="Sample Case Studies" description="Explore example SEO strategies and approaches. Replace sample case studies with verified client projects before production launch." />
          <div className="grid-3">
            {[
              { title: "Local SEO Strategy", desc: "A structured approach to improving local search visibility, Google Maps rankings, and citation consistency for a service-area business." },
              { title: "E-commerce SEO Strategy", desc: "Product page optimization, category structure improvements, and technical SEO for an online store with a large product catalog." },
              { title: "Technical SEO Improvement", desc: "Site-wide technical audit, crawl optimization, and Core Web Vitals improvements for a business website experiencing indexing issues." },
            ].map((cs) => (
              <div key={cs.title} className="card">
                <span className="sample-badge">Sample Case Study</span>
                <h3>{cs.title}</h3>
                <p className="text-muted">{cs.desc}</p>
                <Link href="/case-studies">View Case Study &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`.sample-badge { display: inline-block; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: var(--color-primary-light); color: var(--color-primary); padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 0.75rem; }`}</style>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading label="Testimonials" title="What Clients Say" description="Feedback from businesses that have worked with GobalCareSolutions." />
          <div className="grid-3">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" description="Common questions about SEO services, pricing, and getting started." />
          <FAQ items={homepageFaqs} />
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/faq">View All FAQs &rarr;</Link>
          </p>
        </div>
      </section>

      <CTASection />
      <ContactStrip />
    </>
  );
}
