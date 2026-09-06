import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

type HeroProps = {
  label?: string;
  title: string;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  showContact?: boolean;
  showDashboard?: boolean;
};

export default function Hero({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  showContact = false,
  showDashboard = false,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className={`hero-inner ${showDashboard ? "hero-split" : ""}`}>
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
          {showDashboard && <SEODashboard />}
        </div>
      </div>
      <style>{`
        .hero { padding: 4rem 0 5rem; background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%); }
        .hero-inner { max-width: 100%; }
        .hero-split { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
        .hero-content { max-width: 640px; }
        .hero-content h1 { margin-bottom: 1.25rem; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); margin-bottom: 2rem; line-height: 1.7; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
        .hero-contact { display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9375rem; color: var(--color-text-muted); }
        .hero-contact a { font-weight: 600; }
        @media (min-width: 1024px) { .hero-split { grid-template-columns: 1fr 1fr; } .hero { padding: 5rem 0 6rem; } }
      `}</style>
    </section>
  );
}

function SEODashboard() {
  return (
    <div className="seo-dashboard" aria-hidden="true">
      <div className="dash-header">
        <span className="dash-dot red" /><span className="dash-dot yellow" /><span className="dash-dot green" />
        <span className="dash-title">Digital Marketing Dashboard</span>
      </div>
      <div className="dash-stats">
        <div className="dash-stat"><span className="dash-stat-label">Organic Traffic</span><span className="dash-stat-value">+24%</span></div>
        <div className="dash-stat"><span className="dash-stat-label">Keywords Ranked</span><span className="dash-stat-value">156</span></div>
        <div className="dash-stat"><span className="dash-stat-label">Avg. Position</span><span className="dash-stat-value">12.4</span></div>
      </div>
      <div className="dash-chart">
        <div className="chart-bar" style={{ height: "40%" }} /><div className="chart-bar" style={{ height: "55%" }} />
        <div className="chart-bar" style={{ height: "45%" }} /><div className="chart-bar" style={{ height: "65%" }} />
        <div className="chart-bar" style={{ height: "70%" }} /><div className="chart-bar" style={{ height: "60%" }} />
        <div className="chart-bar active" style={{ height: "85%" }} /><div className="chart-bar" style={{ height: "75%" }} />
      </div>
      <div className="dash-keywords">
        <div className="kw-row"><span>local seo services</span><span className="kw-pos">#3</span></div>
        <div className="kw-row"><span>seo packages</span><span className="kw-pos">#5</span></div>
        <div className="kw-row"><span>technical seo audit</span><span className="kw-pos">#8</span></div>
      </div>
      <style>{`
        .seo-dashboard {
          background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg); padding: 1.5rem; max-width: 480px; width: 100%; margin: 0 auto;
        }
        .dash-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .dash-dot { width: 10px; height: 10px; border-radius: 50%; }
        .dash-dot.red { background: #ef4444; } .dash-dot.yellow { background: #f59e0b; } .dash-dot.green { background: #22c55e; }
        .dash-title { font-size: 0.8125rem; font-weight: 600; color: var(--color-text-muted); margin-left: 0.5rem; }
        .dash-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem; }
        .dash-stat { background: var(--color-bg-alt); border-radius: var(--radius-sm); padding: 0.75rem; text-align: center; }
        .dash-stat-label { display: block; font-size: 0.6875rem; color: var(--color-text-muted); margin-bottom: 0.25rem; }
        .dash-stat-value { font-size: 1.125rem; font-weight: 700; color: var(--color-primary); }
        .dash-chart { display: flex; align-items: flex-end; gap: 6px; height: 100px; margin-bottom: 1.25rem; padding: 0 0.25rem; }
        .chart-bar { flex: 1; background: var(--color-primary-light); border-radius: 4px 4px 0 0; transition: height 0.3s ease; }
        .chart-bar.active { background: var(--color-primary); }
        .dash-keywords { display: flex; flex-direction: column; gap: 0.5rem; }
        .kw-row { display: flex; justify-content: space-between; font-size: 0.8125rem; padding: 0.5rem 0.75rem; background: var(--color-bg-alt); border-radius: var(--radius-sm); }
        .kw-pos { font-weight: 700; color: var(--color-success); }
      `}</style>
    </div>
  );
}
