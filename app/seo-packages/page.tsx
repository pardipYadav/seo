import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { packages, customPackage, pricingDisclaimer, rankingDisclaimer } from "@/data/packages";

export const metadata: Metadata = createMetadata({
  title: "SEO Packages Starting at $1,000 | GobalCareSolutions",
  description:
    "Explore SEO packages starting at $1,000/month from GobalCareSolutions. Choose from Starter, Growth, Pro, E-commerce, Enterprise, or Custom SEO plans.",
  path: "/seo-packages",
});

export default function SEOPackagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "SEO Packages" }]} />
          <h1>SEO Packages Starting at $1,000</h1>
          <p className="hero-desc">Transparent, professional SEO packages designed for businesses at every stage. All packages include ethical practices, monthly reporting, and dedicated strategy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {packages.map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card custom-package">
            <h2>{customPackage.name}</h2>
            <p className="custom-price">{customPackage.price}</p>
            <p>{customPackage.description}</p>
            <ul>
              {customPackage.factors.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link href="/contact?package=custom" className="btn btn-primary">Request Custom Proposal</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-disclaimer">
          <p><strong>Pricing Disclaimer:</strong> {pricingDisclaimer}</p>
          <p><strong>Important:</strong> {rankingDisclaimer}</p>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
        .custom-package { max-width: 700px; margin: 0 auto; text-align: center; }
        .custom-price { font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin: 0.5rem 0 1rem; }
        .custom-package ul { text-align: left; max-width: 400px; margin: 1.5rem auto; }
        .pricing-disclaimer { max-width: 800px; margin: 0 auto; }
        .pricing-disclaimer p { color: var(--color-text-muted); font-size: 0.9375rem; line-height: 1.7; margin-bottom: 1rem; }
      `}</style>
    </>
  );
}
