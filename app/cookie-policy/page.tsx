/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for the GobalCareSolutions website.",
  path: "/cookie-policy",
});

export default function CookiePage() {
  return (
    <LegalPageLayout title="Cookie Policy" breadcrumbLabel="Cookie Policy" breadcrumbPath="/cookie-policy">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information about how visitors use the site.</p>

      <h2>2. Necessary Cookies</h2>
      <p>These cookies are essential for the website to function. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.</p>

      <h2>3. Analytics Cookies</h2>
      <p>Analytics cookies help us understand how visitors interact with our website by collecting anonymous usage data. This information helps us improve the website experience.</p>

      <h2>4. Functional Cookies</h2>
      <p>Functional cookies enable enhanced functionality such as remembering preferences or form data. These cookies may be set by us or by third-party providers.</p>

      <h2>5. Third-Party Cookies</h2>
      <p>Some cookies may be placed by third-party services integrated into our website, such as analytics providers or embedded content. These third parties have their own cookie policies.</p>

      <h2>6. Browser Controls</h2>
      <p>Most browsers allow you to control cookies through settings. You can set your browser to refuse cookies or alert you when cookies are being sent. Disabling cookies may affect website functionality.</p>

      <h2>7. Policy Updates</h2>
      <p>We may update this Cookie Policy periodically. Changes will be posted on this page with an updated date.</p>

      <h2>8. Contact</h2>
      <p>For questions about our use of cookies, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPageLayout>
  );
}
