/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for GobalCareSolutions explaining how we collect, use, and protect your information.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" breadcrumbLabel="Privacy Policy" breadcrumbPath="/privacy-policy">
      <h2>1. Introduction</h2>
      <p>{siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.</p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Contact form information (name, email, phone, company, website URL, message)</li>
        <li>Email correspondence</li>
        <li>Phone communication records</li>
        <li>Website usage data through cookies and analytics</li>
      </ul>

      <h2>3. Contact Form Information</h2>
      <p>When you submit our contact form, we collect the information you provide including your name, company name, email address, phone number, website URL, service preferences, budget range, and message content.</p>

      <h2>4. How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Respond to inquiries and provide SEO consultations</li>
        <li>Deliver and manage SEO services</li>
        <li>Send service-related communications</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>5. Communications</h2>
      <p>By contacting us, you consent to receiving responses via email or phone regarding your inquiry. We do not send unsolicited marketing communications without your consent.</p>

      <h2>6. Cookies</h2>
      <p>Our website may use cookies and similar technologies. See our <a href="/cookie-policy">Cookie Policy</a> for details on cookie types and how to manage them.</p>

      <h2>7. Analytics</h2>
      <p>We may use analytics services to understand website usage patterns. Analytics data is typically aggregated and does not personally identify individual visitors.</p>

      <h2>8. Data Security</h2>
      <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

      <h2>9. Third-Party Services</h2>
      <p>We may use third-party services for hosting, analytics, email, and form processing. These providers have their own privacy policies governing their use of your data.</p>

      <h2>10. Data Retention</h2>
      <p>We retain contact and service-related information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.</p>

      <h2>11. External Links</h2>
      <p>Our website may contain links to external websites. We are not responsible for the privacy practices of third-party sites.</p>

      <h2>12. Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to reasonable requests in accordance with applicable law.</p>

      <h2>13. Policy Changes</h2>
      <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date.</p>

      <h2>14. Contact</h2>
      <p>For privacy-related questions, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
    </LegalPageLayout>
  );
}
