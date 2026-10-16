import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <header className="admin-top">
        <Link href="/admin" className="admin-brand">{siteConfig.name} Admin</Link>
      </header>
      <div className="admin-body">{children}</div>
      <style>{`
        .admin-shell {
          min-height: 100vh;
          background: var(--color-bg-alt);
        }
        .admin-top {
          background: var(--color-bg-dark);
          padding: 1rem 1.5rem;
        }
        .admin-brand {
          color: #fff;
          font-weight: 700;
          font-family: var(--font-manrope), sans-serif;
        }
        .admin-brand:hover { color: #fff; }
        .admin-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 4rem;
        }
      `}</style>
    </div>
  );
}
