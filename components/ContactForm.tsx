"use client";

import { useState, FormEvent } from "react";
import { services } from "@/data/services";
import { packages } from "@/data/packages";

const budgetOptions = [
  "$1,000 - $1,500",
  "$1,500 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Future form integration: connect to email provider (e.g., Resend, Formspree, SendGrid)
    // or CRM webhook here before showing success message.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank You for Your Inquiry</h3>
        <p>
          Your message has been received. Please note: this contact form is currently a frontend
          demonstration. To enable live form submissions, integrate an email or form service
          provider before production launch.
        </p>
        <p>
          For immediate assistance, email us at{" "}
          <a href="mailto:gobalcaresolutions@outlook.com">gobalcaresolutions@outlook.com</a>{" "}
          or call <a href="tel:+18583319355">1-858-331-9355</a>.
        </p>
        <style>{`
          .form-success { background: var(--color-primary-light); border-radius: var(--radius-lg); padding: 2rem; text-align: center; }
          .form-success h3 { margin-bottom: 1rem; color: var(--color-primary); }
        `}</style>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group full-width">
          <label htmlFor="website">Website URL</label>
          <input type="url" id="website" name="website" placeholder="https://" />
        </div>
        <div className="form-group">
          <label htmlFor="seoService">SEO Service</label>
          <select id="seoService" name="seoService">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="seoPackage">SEO Package</label>
          <select id="seoPackage" name="seoPackage">
            <option value="">Select a package</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
            <option value="custom">Custom SEO</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label htmlFor="budget">Monthly Budget</label>
          <select id="budget" name="budget">
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows={5} required />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
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
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none; border-color: var(--color-primary);
        }
        @media (min-width: 768px) { .form-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </form>
  );
}
