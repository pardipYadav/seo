import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

type HeroProps = {
  label?: string;
  title: string;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  showContact?: boolean;
};

export default function Hero({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  showContact = false,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            {label && <span className="section-label">{label}</span>}
            <h1>{title}</h1>
            <p className="hero-desc">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="hero-ctas">
                {primaryCta && <Link href={primaryCta.href} className="btn btn-primary">{primaryCta.text}</Link>}
                {secondaryCta && <Link href={secondaryCta.href} className="btn btn-secondary">{secondaryCta.text}</Link>}
              </div>
            )}
            {showContact && (
              <div className="hero-contact">
                <div>Toll Free: <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a></div>
                <div>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .hero { padding: 4rem 0 5rem; background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%); }
        .hero-inner { max-width: 100%; }
        .hero-content { max-width: 640px; }
        .hero-content h1 { margin-bottom: 1.25rem; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); margin-bottom: 2rem; line-height: 1.7; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
        .hero-contact { display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9375rem; color: var(--color-text-muted); }
        .hero-contact a { font-weight: 600; }
        @media (min-width: 1024px) { .hero { padding: 5rem 0 6rem; } }
      `}</style>
    </section>
  );
}
