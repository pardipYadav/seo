/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Cancellation Policy",
  description: "Cancellation Policy for monthly SEO services from GobalCareSolutions.",
  path: "/cancellation-policy",
});

export default function CancellationPage() {
  return (
    <LegalPageLayout title="Cancellation Policy" breadcrumbLabel="Cancellation Policy" breadcrumbPath="/cancellation-policy">
      <h2>1. Monthly SEO Cancellation</h2>
      <p>Clients enrolled in monthly SEO packages may cancel their service at any time by providing written notice to {siteConfig.name}.</p>

      <h2>2. Written Cancellation</h2>
      <p>Cancellation requests must be submitted in writing via email to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Verbal cancellation requests are not accepted.</p>

      <h2>3. Notice Period</h2>
      <p>A minimum of 30 days written notice is required before cancellation takes effect. This allows time to complete in-progress work and prepare final deliverables.</p>

      <h2>4. Upcoming Billing Cycle</h2>
      <p>Cancellation takes effect at the end of the current billing cycle or after the notice period, whichever is later. Clients remain responsible for fees during the notice period.</p>

      <h2>5. Completed Work</h2>
      <p>All work completed through the effective cancellation date must be paid in full. No refunds are issued for the current billing period unless otherwise agreed.</p>

      <h2>6. Third-Party Expenses</h2>
      <p>Any third-party costs incurred on behalf of the client before cancellation remain the client&apos;s responsibility.</p>

      <h2>7. Final Deliverables</h2>
      <p>Upon cancellation, we will provide final reports and deliverables for work completed through the cancellation date. Access to ongoing monitoring and optimization ceases upon cancellation.</p>

      <h2>8. Access Termination</h2>
      <p>Following cancellation, {siteConfig.name} will revoke access to client accounts and platforms within a reasonable timeframe. Clients should update passwords for any shared accounts.</p>

      <h2>9. Contact</h2>
      <p>To cancel your SEO package, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with your account details and cancellation request.</p>
    </LegalPageLayout>
  );
}
