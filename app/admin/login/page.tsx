import { isAdminConfigured } from "@/lib/adminAuth";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  if (!isAdminConfigured()) {
    return (
      <div className="admin-card">
        <h1>Admin Not Configured</h1>
        <p>
          Set <code>ADMIN_PASSWORD</code> and <code>ADMIN_SECRET</code> in your environment
          variables, then restart the site to enable the admin dashboard.
        </p>
        <style>{`
          .admin-card {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            padding: 2rem;
          }
          .admin-card p { color: var(--color-text-muted); margin-top: 0.75rem; }
          code {
            background: var(--color-bg-alt);
            padding: 0.1rem 0.35rem;
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }

  const params = await searchParams;
  const nextPath = params.next?.startsWith("/admin") ? params.next : "/admin";

  return <LoginForm nextPath={nextPath} />;
}
