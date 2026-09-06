import Link from "next/link";
import type { Package } from "@/data/packages";

type PricingCardProps = {
  pkg: Package;
};

export default function PricingCard({ pkg }: PricingCardProps) {
  return (
    <div className={`card pricing-card ${pkg.popular ? "popular" : ""}`}>
      {pkg.popular && <span className="popular-badge">Most Popular</span>}
      <h3>{pkg.name}</h3>
      <p className="pricing-price">{pkg.price}</p>
      <p className="pricing-desc">{pkg.description}</p>
      <ul className="pricing-features">
        {pkg.features.map((f) => (
          <li key={f}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8l3.5 3.5L13 5" stroke="var(--color-success)" strokeWidth="2" fill="none"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <Link href={pkg.ctaHref} className={`btn ${pkg.popular ? "btn-primary" : "btn-secondary"}`}>
        {pkg.cta}
      </Link>
      <style>{`
        .pricing-card { display: flex; flex-direction: column; height: 100%; position: relative; }
        .pricing-card.popular { border-color: var(--color-primary); box-shadow: var(--shadow-md); }
        .popular-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--color-primary); color: #fff; font-size: 0.75rem; font-weight: 600;
          padding: 0.25rem 1rem; border-radius: 999px; white-space: nowrap;
        }
        .pricing-card h3 { font-size: 1.375rem; margin-bottom: 0.5rem; }
        .pricing-price { font-size: 1.125rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem; }
        .pricing-desc { color: var(--color-text-muted); font-size: 0.9375rem; margin-bottom: 1.5rem; }
        .pricing-features { list-style: none; padding: 0; margin-bottom: 2rem; flex: 1; }
        .pricing-features li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.875rem; margin-bottom: 0.625rem; }
        .pricing-features svg { flex-shrink: 0; margin-top: 3px; }
      `}</style>
    </div>
  );
}
