/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Acceptable Use Policy",
  description: "Acceptable Use Policy for the GobalCareSolutions website and services.",
  path: "/acceptable-use-policy",
});

export default function AcceptableUsePage() {
  return (
    <LegalPageLayout title="Acceptable Use Policy" breadcrumbLabel="Acceptable Use Policy" breadcrumbPath="/acceptable-use-policy">
      <h2>1. Purpose</h2>
      <p>This Acceptable Use Policy defines the rules and guidelines for using the {siteConfig.name} website and services. By using our website or engaging our services, you agree to comply with this policy.</p>

      <h2>2. Prohibited Activities</h2>
      <p>Users may not engage in the following activities:</p>

      <h3>Fraud</h3>
      <p>Providing false information, misrepresenting your identity or business, or attempting to deceive {siteConfig.name} or search engines.</p>

      <h3>Illegal Activities</h3>
      <p>Using our website or services for any unlawful purpose or in connection with illegal products, services, or content.</p>

      <h3>Abuse</h3>
      <p>Harassing, threatening, or abusing {siteConfig.name} staff or representatives through any communication channel.</p>

      <h3>Spam</h3>
      <p>Submitting spam through contact forms, sending unsolicited bulk messages, or using our services to distribute spam content.</p>

      <h3>Malicious Code</h3>
      <p>Attempting to introduce viruses, malware, or other harmful code to our website, systems, or client websites.</p>

      <h3>Unauthorized Access</h3>
      <p>Attempting to gain unauthorized access to our systems, client accounts, or any restricted areas of our website or infrastructure.</p>

      <h3>Intellectual Property Misuse</h3>
      <p>Using, copying, or distributing {siteConfig.name} content, branding, or deliverables without authorization. Requesting SEO services for websites that infringe on third-party intellectual property rights.</p>

      <h2>3. SEO-Specific Guidelines</h2>
      <p>Clients must not request or direct {siteConfig.name} to engage in manipulative SEO practices including spam link building, keyword stuffing, cloaking, private blog network usage, or any tactics that violate search engine guidelines.</p>

      <h2>4. Enforcement</h2>
      <p>Violation of this policy may result in immediate termination of services, removal of website access, and refusal of future service without refund.</p>

      <h2>5. Reporting</h2>
      <p>To report violations of this policy, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>

      <h2>6. Changes</h2>
      <p>We may update this Acceptable Use Policy at any time. Changes will be posted on this page with an updated date.</p>
    </LegalPageLayout>
  );
}
