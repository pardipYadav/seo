/* Review this legal document with a qualified legal professional before commercial use. */
import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and Conditions for SEO services provided by GobalCareSolutions.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" breadcrumbLabel="Terms & Conditions" breadcrumbPath="/terms-and-conditions">
      <h2>1. Introduction</h2>
      <p>These Terms and Conditions (&quot;Terms&quot;) govern your use of the website and SEO services provided by {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging our services, you agree to be bound by these Terms.</p>

      <h2>2. Acceptance</h2>
      <p>By using our website, submitting a contact form, or entering into a service agreement, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.</p>

      <h2>3. SEO Services</h2>
      <p>{siteConfig.name} provides search engine optimization services including but not limited to technical SEO, on-page optimization, keyword research, content strategy, link building, local SEO, and SEO consulting. Specific services are defined in your selected package or custom proposal.</p>

      <h2>4. Scope of Work</h2>
      <p>The scope of work for each engagement is defined in the applicable service agreement, proposal, or package description. Any work outside the agreed scope may require additional fees and a separate agreement.</p>

      <h2>5. Client Responsibilities</h2>
      <p>Clients are responsible for providing timely access to websites, analytics accounts, Google Search Console, Google Business Profile, and other necessary platforms. Clients must provide accurate business information and approve content and changes in a timely manner.</p>

      <h2>6. Pricing and Payments</h2>
      <p>Pricing is as stated on our website or in your custom proposal. Package pricing represents starting points and may vary based on project scope. Payments are due according to the billing schedule in your service agreement.</p>

      <h2>7. Recurring Services</h2>
      <p>Monthly SEO services renew automatically unless cancelled in accordance with our Cancellation Policy. Clients authorize recurring charges for the agreed billing period.</p>

      <h2>8. Late Payments</h2>
      <p>Late payments may result in suspension of services. We reserve the right to charge late fees as specified in your service agreement. Services will resume upon receipt of outstanding payments.</p>

      <h2>9. Timelines</h2>
      <p>We provide estimated timelines for deliverables, but timelines may vary based on client responsiveness, website complexity, and third-party dependencies. SEO is an ongoing process and specific result timelines cannot be guaranteed.</p>

      <h2>10. Client Approvals</h2>
      <p>Clients will have the opportunity to review and approve content, recommendations, and significant changes before implementation where applicable. Delays in approval may affect project timelines.</p>

      <h2>11. Content Responsibilities</h2>
      <p>Clients are responsible for the accuracy of business information provided. Content created by {siteConfig.name} is subject to client review and approval. Clients retain responsibility for ensuring content complies with applicable laws and regulations.</p>

      <h2>12. Third-Party Platforms</h2>
      <p>Our services may involve third-party platforms including Google, Bing, analytics tools, and SEO software. We are not responsible for changes, outages, or policy updates by third-party platforms.</p>

      <h2>13. Search Engine Changes</h2>
      <p>Search engines frequently update their algorithms. We adapt strategies accordingly but cannot control or predict algorithm changes and their impact on rankings or traffic.</p>

      <h2>14. SEO Ranking Disclaimer</h2>
      <p>{siteConfig.name} does not guarantee specific search engine rankings, positions, or placement in search results. Rankings depend on numerous factors including competition, algorithm changes, and website condition.</p>

      <h2>15. Traffic Disclaimer</h2>
      <p>We do not guarantee specific levels of organic traffic, impressions, or click-through rates. Traffic outcomes depend on many variables beyond our control.</p>

      <h2>16. Leads and Revenue Disclaimer</h2>
      <p>We do not guarantee specific numbers of leads, conversions, sales, or revenue resulting from SEO services. Business outcomes depend on factors including website quality, pricing, market conditions, and sales processes.</p>

      <h2>17. Intellectual Property</h2>
      <p>Reports, strategies, and original content created by {siteConfig.name} remain our intellectual property until full payment is received. Upon payment, clients receive a license to use deliverables for their business purposes.</p>

      <h2>18. Confidentiality</h2>
      <p>Both parties agree to maintain confidentiality of proprietary business information shared during the engagement, except as required by law or with written consent.</p>

      <h2>19. Website and Account Access</h2>
      <p>Clients grant {siteConfig.name} necessary access to websites, hosting, CMS, analytics, and search console accounts to perform agreed services. Access credentials must be provided securely.</p>

      <h2>20. Termination</h2>
      <p>Either party may terminate services in accordance with the Cancellation Policy. Upon termination, clients are responsible for fees associated with work completed through the termination date.</p>

      <h2>21. Suspension</h2>
      <p>We may suspend services for non-payment, breach of these Terms, or requests for unethical SEO practices. Suspended services will resume upon resolution of the underlying issue.</p>

      <h2>22. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, {siteConfig.name} shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the twelve months preceding the claim.</p>

      <h2>23. Indemnification</h2>
      <p>Clients agree to indemnify and hold {siteConfig.name} harmless from claims arising from client-provided content, inaccurate business information, or client-directed activities that violate search engine guidelines.</p>

      <h2>24. External Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of external sites.</p>

      <h2>25. Changes to Terms</h2>
      <p>We may update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of revised Terms.</p>

      <h2>26. Contact Information</h2>
      <p>For questions about these Terms, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.</p>
    </LegalPageLayout>
  );
}
