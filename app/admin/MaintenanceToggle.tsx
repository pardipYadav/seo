"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  enabled: boolean;
  updatedAt: string | null;
  forcedByEnv: boolean;
};

export default function MaintenanceToggle({ enabled, updatedAt, forcedByEnv }: Props) {
  const router = useRouter();
  const [isOn, setIsOn] = useState(enabled);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(updatedAt);

  async function toggle() {
    if (forcedByEnv) return;
    setSaving(true);
    setError("");
    const nextValue = !isOn;

    try {
      const response = await fetch("/api/admin/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: nextValue }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to update maintenance mode.");
        return;
      }

      setIsOn(data.enabled);
      setLastUpdated(data.updatedAt ?? null);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-card">
      <h1>Maintenance Mode</h1>
      <p>
        When this is on, regular visitors see a maintenance page. You can still use the full website
        while signed in as admin.
      </p>

      <div className={`status-pill ${isOn ? "on" : "off"}`}>
        {isOn ? "Maintenance is ON" : "Maintenance is OFF"}
      </div>

      {forcedByEnv && (
        <p className="admin-note">
          Maintenance is currently forced on by the <code>MAINTENANCE_MODE</code> environment
          variable. Remove that variable to control it from this dashboard.
        </p>
      )}

      <button
        type="button"
        className={`btn ${isOn ? "btn-secondary" : "btn-primary"}`}
        onClick={toggle}
        disabled={saving || forcedByEnv}
      >
        {saving ? "Saving..." : isOn ? "Turn Maintenance Off" : "Turn Maintenance On"}
      </button>

      {lastUpdated && (
        <p className="admin-meta">Last updated {new Date(lastUpdated).toLocaleString()}</p>
      )}
      {error && <p className="admin-error">{error}</p>}

      <div className="admin-actions">
        <Link href="/" className="btn btn-secondary">View website</Link>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Sign out
        </button>
      </div>

      <style>{`
        .admin-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-md);
        }
        .admin-card h1 { font-size: 1.75rem; margin-bottom: 0.75rem; }
        .admin-card p { color: var(--color-text-muted); }
        .status-pill {
          display: inline-block;
          margin: 1.25rem 0;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .status-pill.on { background: #fef3c7; color: #92400e; }
        .status-pill.off { background: #d1fae5; color: #065f46; }
        .admin-note { margin-bottom: 1rem; }
        .admin-meta { font-size: 0.8125rem; margin-top: 1rem; }
        .admin-error { color: #dc2626; margin-top: 0.75rem; }
        .admin-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.75rem; }
        code {
          background: var(--color-bg-alt);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
