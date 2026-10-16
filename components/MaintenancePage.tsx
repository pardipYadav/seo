import { siteConfig } from "@/lib/siteConfig";

export default function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <meta name="robots" content="noindex, nofollow" />
      <div className="maintenance-card">
        <p className="section-label">Temporarily Unavailable</p>
        <h1>We&apos;ll Be Back Shortly</h1>
        <p>
          {siteConfig.name} is currently undergoing scheduled maintenance. Please check back soon.
        </p>
        <div className="maintenance-contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
        </div>
      </div>
      <style>{`
        .maintenance-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.25rem;
          background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
        }
        .maintenance-card {
          max-width: 560px;
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 3rem 2rem;
          text-align: center;
        }
        .maintenance-card h1 { margin-bottom: 1rem; }
        .maintenance-card p { color: var(--color-text-muted); line-height: 1.7; }
        .maintenance-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.75rem;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
