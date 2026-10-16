"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ nextPath = "/admin" }: { nextPath?: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to sign in.");
        return;
      }

      const destination = nextPath.startsWith("/admin") ? nextPath : "/admin";
      router.replace(destination);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="admin-card" onSubmit={handleSubmit}>
      <h1>Admin Sign In</h1>
      <p>Enter the administrator password to manage maintenance mode.</p>
      <label htmlFor="admin-password">Password</label>
      <input
        id="admin-password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        disabled={loading}
      />
      {error && <p className="admin-error">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
      <style>{`
        .admin-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .admin-card h1 { font-size: 1.75rem; margin-bottom: 0.25rem; }
        .admin-card p { color: var(--color-text-muted); }
        .admin-card label { font-size: 0.875rem; font-weight: 600; }
        .admin-card input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-family: inherit;
        }
        .admin-error { color: #dc2626; font-size: 0.875rem; }
        .admin-card .btn { margin-top: 0.5rem; width: fit-content; }
      `}</style>
    </form>
  );
}
