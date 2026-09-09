"use client";

import { Suspense, useState, FormEvent } from "react";
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank You for Your Inquiry</h3>
        <p>
          Your message has been received. We&apos;ll review your inquiry and get back to you within
          one business day.
        </p>
        <p>
          For immediate assistance, email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
          <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
          Send Another Message
        </button>
        <style>{`
          .form-success { background: var(--color-primary-light); border-radius: var(--radius-lg); padding: 2rem; text-align: center; }
          .form-success h3 { margin-bottom: 1rem; color: var(--color-primary); }
          .form-success .btn { margin-top: 1.5rem; }
        `}</style>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" required disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" disabled={loading} />
        </div>
        <div className="form-group full-width">
          <label htmlFor="website">Website URL</label>
          <input type="url" id="website" name="website" placeholder="https://" disabled={loading} />
        </div>
        <div className="form-group">
          <label htmlFor="seoService">Marketing Service</label>
          <select id="seoService" name="seoService" disabled={loading}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="seoPackage">Marketing Package</label>
          <select id="seoPackage" name="seoPackage" defaultValue={defaultPackage} disabled={loading}>
            <option value="">Select a package</option>
            {packages.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
            <option value="custom">Custom Digital Marketing</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label htmlFor="budget">Monthly Budget</label>
          <select id="budget" name="budget" disabled={loading}>
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows={5} required disabled={loading} />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website_url">Website</label>
          <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      <style>{`
        .contact-form { max-width: 100%; }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-group label { font-size: 0.875rem; font-weight: 600; color: var(--color-heading); }
        .form-group input, .form-group select, .form-group textarea {
          padding: 0.75rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);
          font-size: 0.9375rem; font-family: inherit; background: var(--color-bg); color: var(--color-text);
          transition: border-color 0.2s ease;
        }
        .form-group input:disabled, .form-group select:disabled, .form-group textarea:disabled { opacity: 0.7; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none; border-color: var(--color-primary);
        }
        .form-error { color: #dc2626; font-size: 0.875rem; margin-bottom: 1rem; }
        .honeypot { position: absolute; left: -9999px; opacity: 0; height: 0; overflow: hidden; }
        .btn:disabled { opacity: 0.7; cursor: not-allowed; }
        @media (min-width: 768px) { .form-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<p>Loading form...</p>}>
      <ContactFormInner />
    </Suspense>
  );
}
