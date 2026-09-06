import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { serviceNavItems } from "@/data/navigation";
import { packages } from "@/data/packages";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Service Agreement", href: "/service-agreement" },
  { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
];

export default function Footer() {
  const footerServices = serviceNavItems.slice(0, 6);
  const footerPackages = packages.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <h3>{siteConfig.name}</h3>
            <p>Professional SEO services to help businesses improve search visibility, attract qualified traffic, and build sustainable online growth.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>{companyLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>SEO Services</h4>
            <ul>{footerServices.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>SEO Packages</h4>
            <ul>{footerPackages.map((p) => <li key={p.id}><Link href="/seo-packages">{p.name}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>{legalLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
      <style>{`
        .site-footer { background: var(--color-bg-dark); color: rgba(255,255,255,0.8); padding: 4rem 0 0; }
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .footer-col h3, .footer-col h4 { color: #fff; margin-bottom: 1rem; font-size: 1rem; }
        .footer-col h3 { font-size: 1.25rem; }
        .footer-col p { font-size: 0.875rem; line-height: 1.7; }
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col li { margin-bottom: 0.5rem; }
        .footer-col a { color: rgba(255,255,255,0.7); font-size: 0.875rem; }
        .footer-col a:hover { color: #fff; }
        .footer-contact a { font-size: 0.9375rem; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 3rem; padding: 1.5rem 0; text-align: center; font-size: 0.8125rem; }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 1.5fr repeat(5, 1fr); } }
      `}</style>
    </footer>
  );
}
