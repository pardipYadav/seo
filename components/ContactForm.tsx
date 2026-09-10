"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { siteConfig } from "@/lib/siteConfig";

const budgetOptions = [
  "$100 - $250",
  "$250 - $500",
  "$500 - $1,000",
  "$1,000+",
];

function getDefaultPackageValue(packageParam: string | null): string {
  if (!packageParam) return "";
  if (packageParam === "custom") return "custom";
  const match = packages.find((p) => p.id === packageParam);
  return match?.name ?? "";
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultPackage = getDefaultPackageValue(searchParams.get("package"));

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-blur" aria-hidden="true">
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" disabled tabIndex={-1} />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" name="companyName" disabled tabIndex={-1} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" disabled tabIndex={-1} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" disabled tabIndex={-1} />
            </div>
            <div className="form-group full-width">
              <label htmlFor="website">Website URL</label>
              <input type="url" id="website" name="website" placeholder="https://" disabled tabIndex={-1} />
            </div>
            <div className="form-group">
              <label htmlFor="seoService">Marketing Service</label>
              <select id="seoService" name="seoService" disabled tabIndex={-1}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="seoPackage">Marketing Package</label>
              <select id="seoPackage" name="seoPackage" defaultValue={defaultPackage} disabled tabIndex={-1}>
                <option value="">Select a package</option>
                {packages.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                <option value="custom">Custom Digital Marketing</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="budget">Monthly Budget</label>
              <select id="budget" name="budget" disabled tabIndex={-1}>
                <option value="">Select budget range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows={5} disabled tabIndex={-1} />
            </div>
          </div>
          <button type="button" className="btn btn-primary" disabled tabIndex={-1}>
            Send Message
          </button>
        </form>
      </div>

      <div className="coming-soon-overlay">
        <div className="coming-soon-card">
          <span className="coming-soon-badge">Coming Soon</span>
          <h3>Contact Form Coming Soon</h3>
          <p>
            Our online contact form is launching shortly. In the meantime, reach us directly by
            email or phone.
          </p>
          <div className="coming-soon-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-form-wrapper { position: relative; min-height: 420px; }
        .contact-form-blur {
          filter: blur(4px);
          opacity: 0.55;
          pointer-events: none;
          user-select: none;
        }
        .contact-form { max-width: 100%; }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-group label { font-size: 0.875rem; font-weight: 600; color: var(--color-heading); }
        .form-group input, .form-group select, .form-group textarea {
          padding: 0.75rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);
          font-size: 0.9375rem; font-family: inherit; background: var(--color-bg); color: var(--color-text);
        }
        .coming-soon-overlay {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          padding: 1.5rem; z-index: 1;
        }
        .coming-soon-card {
          background: rgba(255, 255, 255, 0.95); border: 1px solid var(--color-border);
          border-radius: var(--radius-lg); padding: 2rem; text-align: center; max-width: 400px;
          box-shadow: var(--shadow-lg); backdrop-filter: blur(8px);
        }
        .coming-soon-badge {
          display: inline-block; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.05em; background: var(--color-primary-light); color: var(--color-primary);
          padding: 0.35rem 0.875rem; border-radius: 999px; margin-bottom: 1rem;
        }
        .coming-soon-card h3 { margin-bottom: 0.75rem; color: var(--color-heading); font-size: 1.25rem; }
        .coming-soon-card p { color: var(--color-text-muted); font-size: 0.9375rem; line-height: 1.6; margin-bottom: 1.25rem; }
        .coming-soon-contact { display: flex; flex-direction: column; gap: 0.5rem; }
        .coming-soon-contact a { font-weight: 600; font-size: 0.9375rem; color: var(--color-primary); }
        .coming-soon-contact a:hover { text-decoration: underline; }
        @media (min-width: 768px) { .form-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<p>Loading form...</p>}>
      <ContactFormInner />
    </Suspense>
  );
}
