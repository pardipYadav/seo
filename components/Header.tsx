"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Breadcrumbs";
import { mainNav, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <span className="header-phone">
            Toll Free: <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
          </span>
          <a href={`mailto:${siteConfig.email}`} className="header-email">{siteConfig.email}</a>
        </div>
      </div>
      <div className="header-main">
        <div className="container header-main-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {mainNav.map((item) =>
                item.hasDropdown ? (
                  <li
                    key={item.href}
                    className="nav-item-dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link href={item.href} className="nav-link">
                      {item.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                    </Link>
                    {dropdownOpen && (
                      <div className="dropdown-menu" role="menu">
                        {serviceNavItems.map((svc) => (
                          <Link key={svc.href} href={svc.href} className="dropdown-link" role="menuitem">
                            {svc.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-link">{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-primary header-cta desktop-only">Get Free Consultation</Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`hamburger ${mobileOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ul className="mobile-subnav">
                      {serviceNavItems.map((svc) => (
                        <li key={svc.href}>
                          <Link href={svc.href} className="mobile-subnav-link" onClick={() => setMobileOpen(false)}>
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu-footer">
            <a href={`tel:${siteConfig.phoneTel}`} className="mobile-contact">{siteConfig.phone}</a>
            <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
      <style>{`
        .site-header { position: sticky; top: 0; z-index: 1000; background: var(--color-bg); box-shadow: var(--shadow-sm); }
        .header-top { background: var(--color-bg-dark); color: rgba(255,255,255,0.85); font-size: 0.8125rem; padding: 0.4rem 0; }
        .header-top-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        .header-top a { color: rgba(255,255,255,0.85); }
        .header-top a:hover { color: #fff; }
        .header-main { padding: 1rem 0; }
        .header-main-inner { display: flex; align-items: center; gap: 1.5rem; }
        .desktop-nav { flex: 1; display: none; }
        .nav-list { display: flex; align-items: center; gap: 0.25rem; list-style: none; padding: 0; flex-wrap: wrap; }
        .nav-link { display: flex; align-items: center; gap: 0.25rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: var(--color-text); border-radius: var(--radius-sm); }
        .nav-link:hover { color: var(--color-primary); background: var(--color-primary-light); }
        .nav-item-dropdown { position: relative; }
        .dropdown-menu {
          position: absolute; top: 100%; left: 0; min-width: 280px;
          background: var(--color-bg); border: 1px solid var(--color-border);
          border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
          padding: 0.5rem; z-index: 100; max-height: 70vh; overflow-y: auto;
        }
        .dropdown-link { display: block; padding: 0.625rem 0.875rem; font-size: 0.875rem; color: var(--color-text); border-radius: var(--radius-sm); }
        .dropdown-link:hover { background: var(--color-primary-light); color: var(--color-primary); }
        .header-cta { white-space: nowrap; font-size: 0.875rem; padding: 0.625rem 1.25rem; }
        .desktop-only { display: none; }
        .mobile-toggle { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: none; border: none; cursor: pointer; margin-left: auto; }
        .hamburger, .hamburger::before, .hamburger::after {
          display: block; width: 22px; height: 2px; background: var(--color-heading); transition: all 0.3s ease; position: relative;
        }
        .hamburger::before, .hamburger::after { content: ''; position: absolute; left: 0; }
        .hamburger::before { top: -7px; }
        .hamburger::after { top: 7px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { top: 0; transform: rotate(45deg); }
        .hamburger.open::after { top: 0; transform: rotate(-45deg); }
        .mobile-menu {
          position: fixed; inset: 0; top: var(--header-height, 110px);
          background: var(--color-bg); z-index: 999; overflow-y: auto; padding: 1.5rem;
        }
        .mobile-nav-list { list-style: none; padding: 0; }
        .mobile-nav-link { display: block; padding: 0.875rem 0; font-size: 1.0625rem; font-weight: 600; color: var(--color-heading); border-bottom: 1px solid var(--color-border); }
        .mobile-subnav { list-style: none; padding: 0.5rem 0 0.5rem 1rem; }
        .mobile-subnav-link { display: block; padding: 0.5rem 0; font-size: 0.9375rem; color: var(--color-text-muted); }
        .mobile-menu-footer { margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
        .mobile-contact { font-size: 1.125rem; font-weight: 600; color: var(--color-primary); text-align: center; }
        @media (min-width: 1024px) {
          .desktop-nav { display: block; }
          .desktop-only { display: inline-flex; }
          .mobile-toggle { display: none; }
          .mobile-menu { display: none; }
        }
      `}</style>
    </header>
  );
}
