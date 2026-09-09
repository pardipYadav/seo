import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { getCompleteBlogPosts } from "@/data/blog";

export const metadata: Metadata = createMetadata({
  title: "SEO Blog | Tips, Guides & Insights",
  description:
    "Read SEO guides, checklists, and insights from GobalCareSolutions covering local SEO, technical SEO, keyword research, pricing, and more.",
  path: "/blog",
});

export default function BlogPage() {
  const blogPosts = getCompleteBlogPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1>SEO Blog</h1>
          <p className="hero-desc">Practical SEO guides, checklists, and insights to help you understand and improve your search engine optimization.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 4rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 1rem 0; }
        .hero-desc { font-size: 1.125rem; color: var(--color-text-muted); max-width: 700px; line-height: 1.7; }
      `}</style>
    </>
  );
}
