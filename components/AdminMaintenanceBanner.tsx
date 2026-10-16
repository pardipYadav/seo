import Link from "next/link";

export default function AdminMaintenanceBanner() {
  return (
    <div className="admin-banner">
      <span>Maintenance mode is on. Visitors see a maintenance page. You can browse the site because you are signed in as admin.</span>
      <Link href="/admin">Open dashboard</Link>
      <style>{`
        .admin-banner {
          background: #0f172a;
          color: #fff;
          padding: 0.75rem 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.25rem;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          text-align: center;
        }
        .admin-banner a {
          color: #7dd3fc;
          font-weight: 700;
        }
        .admin-banner a:hover { color: #fff; }
      `}</style>
    </div>
  );
}
