import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <span className="breadcrumbs-sep" aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      <style>{`
        .breadcrumbs { padding: 1.25rem 0 0; }
        .breadcrumbs-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          padding: 0;
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .breadcrumbs-list li { display: flex; align-items: center; gap: 0.25rem; }
        .breadcrumbs-list a { color: var(--color-text-muted); }
        .breadcrumbs-list a:hover { color: var(--color-primary); }
        .breadcrumbs-sep { color: var(--color-border); margin: 0 0.25rem; }
      `}</style>
    </nav>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`logo-link ${className}`} aria-label={`${siteConfig.name} home`}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={280}
        height={84}
        priority
        className="logo-img"
      />
      <style>{`
        .logo-link { display: flex; align-items: center; flex-shrink: 0; }
        .logo-img {
          height: 52px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
        }
        @media (min-width: 768px) {
          .logo-img {
            height: 64px;
            max-width: 240px;
          }
        }
        @media (min-width: 1024px) {
          .logo-img {
            height: 72px;
            max-width: 280px;
          }
        }
      `}</style>
    </Link>
  );
}
