import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "6rem 0" }}>
      <div className="container">
        <h1>Page Not Found</h1>
        <p style={{ color: "var(--color-text-muted)", margin: "1rem 0 2rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
