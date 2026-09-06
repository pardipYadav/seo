/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Service Agreement",
  description: "General SEO service agreement information from GobalCareSolutions.",
  path: "/service-agreement",
});

export default function ServiceAgreementPage() {
  return (
    <LegalPageLayout title="Service Agreement" breadcrumbLabel="Service Agreement" breadcrumbPath="/service-agreement">
      <p><strong>Note:</strong> This page provides general service information and should be customized and reviewed by a qualified legal professional before being used as a binding agreement.</p>

      <h2>1. Service Scope</h2>
      <p>This agreement governs SEO services provided by {siteConfig.name}. Services include search engine optimization activities as defined in the selected package or custom proposal, including technical SEO, on-page optimization, keyword research, content strategy, and reporting.</p>

      <h2>2. Package Selection</h2>
      <p>The client selects an SEO package (Starter, Growth, Pro, E-commerce, Enterprise, or Custom) as described on our website or in a custom proposal. Package features and pricing are as stated at the time of agreement.</p>

      <h2>3. Client Responsibilities</h2>
      <p>The client agrees to provide timely access to websites, hosting, CMS, analytics, Google Search Console, Google Business Profile, and other necessary accounts. The client must provide accurate business information and respond to requests for approval within reasonable timeframes.</p>

      <h2>4. Payment</h2>
      <p>Payment terms, billing cycles, and accepted payment methods are specified in the proposal or invoice. Monthly services are billed in advance. Late payments may result in service suspension.</p>

      <h2>5. Reporting</h2>
      <p>{siteConfig.name} provides monthly performance reports detailing work completed, keyword ranking trends, traffic data, and planned activities for the upcoming period.</p>

      <h2>6. SEO Implementation</h2>
      <p>We implement SEO recommendations using ethical, white-hat practices aligned with search engine guidelines. Implementation scope is defined by the selected package. Additional work outside scope may require a separate agreement.</p>

      <h2>7. Website Access</h2>
      <p>The client grants {siteConfig.name} necessary access to perform agreed services. Access credentials should be shared securely and may be revoked upon service termination.</p>

      <h2>8. Content</h2>
      <p>Content created or optimized by {siteConfig.name} is subject to client review and approval. The client retains ownership of their brand content. We retain rights to our methodologies, tools, and proprietary processes.</p>

      <h2>9. Third-Party Tools</h2>
      <p>We may use third-party SEO tools and platforms to deliver services. Tool costs included in package pricing are specified in the agreement. Additional tool subscriptions may incur extra fees.</p>

      <h2>10. Termination</h2>
      <p>Either party may terminate this agreement in accordance with our Cancellation Policy. Upon termination, the client is responsible for fees associated with work completed through the termination date.</p>

      <h2>11. Results Disclaimer</h2>
      <p>{siteConfig.name} does not guarantee specific rankings, traffic levels, leads, sales, or revenue. SEO outcomes depend on many factors including competition, algorithm changes, and website condition.</p>

      <h2>12. Confidentiality</h2>
      <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement.</p>

      <h2>13. Intellectual Property</h2>
      <p>Deliverables become the client&apos;s property upon full payment. {siteConfig.name} retains ownership of its processes, templates, and proprietary methodologies.</p>

      <h2>14. Contact</h2>
      <p>For service agreement inquiries, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.</p>
    </LegalPageLayout>
  );
}
