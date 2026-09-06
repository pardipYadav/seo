import Breadcrumbs from "./Breadcrumbs";
import CTASection from "./CTASection";

type LegalPageLayoutProps = {
  title: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  breadcrumbLabel,
  breadcrumbPath,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      {/* Review this legal document with a qualified legal professional before commercial use. */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: breadcrumbLabel, href: breadcrumbPath }]} />
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: January 2026</p>
        </div>
      </section>
      <section className="section legal-content">
        <div className="container">
          <div className="legal-prose">{children}</div>
        </div>
      </section>
      <CTASection />
      <style>{`
        .page-hero { padding: 2rem 0 3rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin-top: 1rem; }
        .legal-updated { color: var(--color-text-muted); font-size: 0.875rem; margin-top: 0.5rem; }
        .legal-prose { max-width: 800px; margin: 0 auto; }
        .legal-prose h2 { font-size: 1.375rem; margin: 2rem 0 1rem; }
        .legal-prose h3 { font-size: 1.125rem; margin: 1.5rem 0 0.75rem; }
        .legal-prose p, .legal-prose li { color: var(--color-text-muted); line-height: 1.8; font-size: 0.9375rem; }
        .legal-prose ul, .legal-prose ol { margin-bottom: 1rem; }
      `}</style>
    </>
  );
}
