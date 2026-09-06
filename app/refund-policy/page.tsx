/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description: "Refund Policy for SEO services provided by GobalCareSolutions.",
  path: "/refund-policy",
});

export default function RefundPage() {
  return (
    <LegalPageLayout title="Refund Policy" breadcrumbLabel="Refund Policy" breadcrumbPath="/refund-policy">
      <h2>1. Overview</h2>
      <p>This Refund Policy outlines the terms under which refunds may be issued for SEO services provided by {siteConfig.name}.</p>

      <h2>2. Service Cancellation</h2>
      <p>Clients may cancel monthly SEO services in accordance with our Cancellation Policy. Cancellation does not automatically entitle the client to a refund for the current billing period.</p>

      <h2>3. Work Already Completed</h2>
      <p>Fees for work already completed, including SEO audits, keyword research, on-page optimization, and reporting, are non-refundable. Completed work deliverables remain the property of the client upon payment.</p>

      <h2>4. SEO Setup Work</h2>
      <p>Initial setup work performed during the first billing cycle, including account configuration, baseline audits, and strategy development, is non-refundable once work has commenced.</p>

      <h2>5. Monthly Services</h2>
      <p>Monthly SEO service fees cover ongoing work for the billing period. Refunds for partial months are generally not provided unless otherwise agreed in writing.</p>

      <h2>6. Third-Party Expenses</h2>
      <p>Third-party tool subscriptions, paid directory listings, or other external costs incurred on behalf of the client are non-refundable once purchased.</p>

      <h2>7. Content Expenses</h2>
      <p>Fees for content creation, copywriting, or content optimization that has been delivered and approved are non-refundable.</p>

      <h2>8. Custom Services</h2>
      <p>Custom project fees and one-time engagements follow the refund terms specified in the applicable proposal or service agreement.</p>

      <h2>9. Refund Requests</h2>
      <p>Refund requests must be submitted in writing to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We will review each request and respond within a reasonable timeframe.</p>

      <h2>10. Disputes</h2>
      <p>If you have a concern about billing or service quality, please contact us before initiating a payment dispute. We are committed to resolving issues fairly and promptly.</p>

      <h2>11. Contact</h2>
      <p>For refund inquiries, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.</p>
    </LegalPageLayout>
  );
}
