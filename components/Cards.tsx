import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({
  post,
}: {
  post: Pick<BlogPost, "slug" | "title" | "excerpt" | "date" | "category" | "readTime" | "complete">;
}) {
  const isComplete = post.complete !== false;

  return (
    <article className="card blog-card">
      <span className="blog-category">{post.category}</span>
      {!isComplete && <span className="blog-soon">Coming Soon</span>}
      <h3>
        {isComplete ? (
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        ) : (
          post.title
        )}
      </h3>
      <p>{post.excerpt}</p>
      <div className="blog-meta">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        <span>{post.readTime}</span>
      </div>
      {isComplete ? (
        <Link href={`/blog/${post.slug}`} className="blog-link">Read Article &rarr;</Link>
      ) : (
        <span className="blog-link blog-link-muted">Article coming soon</span>
      )}
      <style>{`
        .blog-card { display: flex; flex-direction: column; height: 100%; }
        .blog-category { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); margin-bottom: 0.75rem; }
        .blog-soon { display: inline-block; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: var(--color-bg-alt); color: var(--color-text-muted); padding: 0.2rem 0.6rem; border-radius: 999px; margin-bottom: 0.5rem; }
        .blog-card h3 { font-size: 1.125rem; margin-bottom: 0.75rem; }
        .blog-card h3 a { color: var(--color-heading); }
        .blog-card h3 a:hover { color: var(--color-primary); }
        .blog-card p { color: var(--color-text-muted); font-size: 0.9375rem; flex: 1; }
        .blog-meta { display: flex; gap: 1rem; font-size: 0.8125rem; color: var(--color-text-muted); margin: 1rem 0; }
        .blog-link { font-weight: 600; font-size: 0.9375rem; margin-top: auto; }
        .blog-link-muted { color: var(--color-text-muted); }
      `}</style>
    </article>
  );
}

export function IndustryCard({ name, description, slug }: { name: string; description: string; slug: string }) {
  return (
    <div className="card industry-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href="/industries" className="industry-link">Learn More &rarr;</Link>
      <style>{`
        .industry-card h3 { font-size: 1.125rem; margin-bottom: 0.75rem; }
        .industry-card p { color: var(--color-text-muted); font-size: 0.9375rem; margin-bottom: 1rem; }
        .industry-link { font-weight: 600; font-size: 0.875rem; }
      `}</style>
    </div>
  );
}

export function TestimonialCard({ quote, role, company }: { quote: string; role: string; company: string }) {
  return (
    <div className="card testimonial-card">
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <cite>{role}, {company}</cite>
      <style>{`
        .testimonial-card blockquote { font-size: 0.9375rem; line-height: 1.7; color: var(--color-text); margin-bottom: 1.25rem; font-style: italic; }
        .testimonial-card cite { font-size: 0.8125rem; font-weight: 600; color: var(--color-text-muted); font-style: normal; }
      `}</style>
    </div>
  );
}

export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="container contact-strip-inner">
        <div>
          <h3>Get in Touch</h3>
          <p>Ready to discuss your SEO goals? Contact GobalCareSolutions today.</p>
        </div>
        <div className="contact-strip-info">
          <a href="mailto:gobalcaresolutions@outlook.com">gobalcaresolutions@outlook.com</a>
          <a href="tel:+18583319355">1-858-331-9355</a>
        </div>
      </div>
      <style>{`
        .contact-strip { background: var(--color-bg-dark); color: #fff; padding: 3rem 0; }
        .contact-strip-inner { display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start; }
        .contact-strip h3 { color: #fff; margin-bottom: 0.5rem; }
        .contact-strip p { color: rgba(255,255,255,0.8); }
        .contact-strip-info { display: flex; flex-direction: column; gap: 0.5rem; }
        .contact-strip-info a { color: #fff; font-weight: 600; font-size: 1.0625rem; }
        .contact-strip-info a:hover { color: var(--color-accent); }
        @media (min-width: 768px) {
          .contact-strip-inner { flex-direction: row; justify-content: space-between; align-items: center; }
        }
      `}</style>
    </section>
  );
}

export function TrustIndicators({ items }: { items: string[] }) {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {items.map((item) => (
            <div key={item} className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="var(--color-primary)" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="10" stroke="var(--color-primary)" strokeWidth="2" fill="none"/></svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .trust-section { padding: 2rem 0; border-bottom: 1px solid var(--color-border); }
        .trust-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .trust-item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9375rem; font-weight: 600; color: var(--color-heading); }
        @media (min-width: 768px) { .trust-grid { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </section>
  );
}
