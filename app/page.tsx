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
import { packages } from "@/data/packages";
import { homepageFaqs } from "@/data/faqs";
import { industries, trustPoints, whyChooseUs, seoBenefits } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { faqJsonLd, JsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "GobalCareSolutions | Professional Digital Marketing Services & Packages",
  description:
    "Grow your business online with professional digital marketing from GobalCareSolutions. Packages starting at $100/month including SEO, social media, content marketing, and more.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={faqJsonLd(homepageFaqs)} />
      <Hero
        title="Grow Your Business With Professional Digital Marketing"
        description="GobalCareSolutions helps businesses improve online visibility, attract qualified traffic, and build sustainable growth through strategic digital marketing services — including SEO, social media, and content marketing."
        primaryCta={{ text: "View Marketing Packages", href: "/seo-packages" }}
        secondaryCta={{ text: "Get Free Consultation", href: "/contact" }}
        showContact
        showDashboard
      />
      <TrustIndicators items={trustPoints} />

      <section className="section">
        <div className="container">
          <SectionHeading label="Services" title="Our Digital Marketing Services" description="Full-service digital marketing including SEO, paid ads, social media, content, email, web design, and more." />
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading label="Pricing" title="Digital Marketing Packages Starting at $100" description="Affordable, transparent packages with SEO included — designed for businesses at every stage." />
          <div className="grid-3">
            {packages.slice(0, 3).map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)}
          </div>
          <p className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/seo-packages" className="btn btn-primary">View All Packages</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading label="Why Us" title="Why Choose GobalCareSolutions" description="We combine ethical practices, transparent reporting, and data-driven strategies to deliver sustainable digital marketing results." />
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
          <SectionHeading label="Industries" title="Digital Marketing for Every Industry" description="Tailored marketing strategies for businesses across diverse sectors and markets." />
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
          <SectionHeading label="Benefits" title="Benefits of Digital Marketing for Your Business" description="Investing in digital marketing delivers compounding returns that strengthen your online presence over time." />
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
          <SectionHeading label="Case Studies" title="Sample Case Studies" description="Explore example digital marketing strategies and approaches. Replace sample case studies with verified client projects before production launch." />
          <div className="grid-3">
            {[
              { title: "Local Marketing Strategy", desc: "A structured approach to improving local search visibility, Google Maps rankings, and social presence for a service-area business." },
              { title: "E-commerce Marketing Strategy", desc: "Product page SEO, social media promotion, and content marketing for an online store with a large product catalog." },
              { title: "Digital Presence Improvement", desc: "Site-wide SEO audit, social media setup, and content strategy for a business building its online presence." },
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
          <SectionHeading label="FAQ" title="Frequently Asked Questions" description="Common questions about digital marketing services, pricing, and getting started." />
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
