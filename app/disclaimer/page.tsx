/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description: "Disclaimer for GobalCareSolutions website and SEO services.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" breadcrumbLabel="Disclaimer" breadcrumbPath="/disclaimer">
      <h2>1. General Disclaimer</h2>
      <p>The information on this website is provided for general informational purposes only. While {siteConfig.name} strives to keep information accurate and up to date, we make no warranties about the completeness, reliability, or accuracy of website content.</p>

      <h2>2. SEO Disclaimer</h2>
      <p>SEO is a complex, ongoing process influenced by many factors including search engine algorithms, competition, website condition, and market dynamics. Results vary significantly between businesses and industries.</p>

      <h2>3. Ranking Disclaimer</h2>
      <p>{siteConfig.name} does not guarantee specific search engine rankings, positions, or first-page placement. No legitimate SEO company can guarantee particular ranking outcomes.</p>

      <h2>4. Traffic Disclaimer</h2>
      <p>We do not guarantee specific levels of organic traffic, impressions, or website visitors. Traffic outcomes depend on numerous variables beyond our control.</p>

      <h2>5. Revenue Disclaimer</h2>
      <p>We do not guarantee specific revenue, sales, leads, or conversion outcomes from SEO services. Business results depend on factors including product quality, pricing, market demand, and sales processes.</p>

      <h2>6. Business Results Disclaimer</h2>
      <p>Past performance, sample case studies, and example strategies do not guarantee future results. Each business situation is unique and outcomes cannot be predicted with certainty.</p>

      <h2>7. Search Engine Algorithm Changes</h2>
      <p>Search engines frequently update their algorithms. These changes may affect rankings and traffic regardless of SEO efforts. We adapt strategies to changes but cannot control algorithm updates.</p>

      <h2>8. External Links</h2>
      <p>Our website may contain links to external websites. We are not responsible for the content, accuracy, or practices of third-party sites linked from our website.</p>

      <h2>9. Accuracy Disclaimer</h2>
      <p>SEO best practices and search engine guidelines evolve over time. Information on this website reflects our understanding at the time of publication and may not reflect the most current recommendations.</p>

      <h2>10. Contact</h2>
      <p>For questions about this disclaimer, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPageLayout>
  );
}
