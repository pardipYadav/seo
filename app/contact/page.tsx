import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Contact GobalCareSolutions | Free SEO Consultation",
  description:
    "Contact GobalCareSolutions for a free SEO consultation. Email gobalcaresolutions@outlook.com or call 1-858-331-9355.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1>Contact GobalCareSolutions</h1>
          <p className="hero-desc">Get in touch for a free SEO consultation. Tell us about your business and SEO goals, and we&apos;ll recommend the best approach.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-detail">
              <h3>Email</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div className="contact-detail">
              <h3>Phone</h3>
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
            </div>
            <div className="contact-detail">
              <h3>Business</h3>
              <p>{siteConfig.name}</p>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
        .contact-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; }
        .contact-info h2, .contact-form-wrap h2 { margin-bottom: 1.5rem; font-size: 1.375rem; }
        .contact-detail { margin-bottom: 1.5rem; }
        .contact-detail h3 { font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 0.25rem; }
        .contact-detail a { font-size: 1.0625rem; font-weight: 600; }
        .contact-form-wrap { background: var(--color-bg-alt); border-radius: var(--radius-lg); padding: 2rem; }
        @media (min-width: 768px) { .contact-layout { grid-template-columns: 1fr 1.5fr; } }
      `}</style>
    </>
  );
}
