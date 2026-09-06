import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "Ready to Grow Your Business Online?",
  description = "Get a free consultation and discover how GobalCareSolutions can help your business with digital marketing, SEO, and online growth.",
  primaryText = "Get Free Consultation",
  primaryHref = "/contact",
  secondaryText = "View Marketing Packages",
  secondaryHref = "/seo-packages",
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cta-buttons">
            <Link href={primaryHref} className="btn btn-white">
              {primaryText}
            </Link>
            <Link href={secondaryHref} className="btn btn-secondary cta-btn-secondary">
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: #fff;
        }
        .cta-inner {
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
        }
        .cta-inner h2 { color: #fff; margin-bottom: 1rem; }
        .cta-inner p { color: rgba(255,255,255,0.9); font-size: 1.125rem; margin-bottom: 2rem; }
        .cta-buttons { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
        .cta-btn-secondary { border-color: #fff; color: #fff; }
        .cta-btn-secondary:hover { background: #fff; color: var(--color-primary); }
      `}</style>
    </section>
  );
}
