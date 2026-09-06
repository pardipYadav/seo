import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { BlogCard } from "@/components/Cards";
import { getBlogPost, blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.filter((p) => p.complete).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !post.complete || !post.content) notFound();

  const related = blogPosts.filter((p) => post.relatedSlugs?.includes(p.slug));

  return (
    <>
      <JsonLdScript data={[
        articleJsonLd({ title: post.title, description: post.excerpt, slug: post.slug, datePublished: post.date }),
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]),
        ...(post.faqs ? [faqJsonLd(post.faqs)] : []),
      ]} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <span className="blog-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-meta">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="container">
          <div className="article-layout">
            <nav className="toc" aria-label="Table of contents">
              <h2>Table of Contents</h2>
              <ol>
                {post.content.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>
                ))}
              </ol>
            </nav>
            <div className="article-content">
              {post.content.map((section) => (
                <section key={section.id} id={section.id}>
                  {section.level === 2 ? <h2>{section.heading}</h2> : <h3>{section.heading}</h3>}
                  {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
                </section>
              ))}

              {post.faqs && (
                <section>
                  <h2>Frequently Asked Questions</h2>
                  <FAQ items={post.faqs} />
                </section>
              )}

              {related.length > 0 && (
                <section>
                  <h2>Related Articles</h2>
                  <div className="grid-2">
                    {related.map((r) => <BlogCard key={r.slug} post={r} />)}
                  </div>
                </section>
              )}

              <div className="article-cta">
                <p>Ready to improve your SEO? <Link href="/contact">Get a free consultation</Link> or <Link href="/seo-packages">explore our SEO packages</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection />

      <style>{`
        .page-hero { padding: 2rem 0 3rem; background: var(--color-bg-alt); }
        .page-hero h1 { margin: 0.75rem 0; }
        .blog-category { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); }
        .blog-meta { display: flex; gap: 1rem; font-size: 0.875rem; color: var(--color-text-muted); }
        .article-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; max-width: 900px; margin: 0 auto; }
        .toc { background: var(--color-bg-alt); border-radius: var(--radius-lg); padding: 1.5rem; }
        .toc h2 { font-size: 1rem; margin-bottom: 1rem; }
        .toc ol { padding-left: 1.25rem; }
        .toc a { font-size: 0.9375rem; color: var(--color-text-muted); }
        .toc a:hover { color: var(--color-primary); }
        .article-content h2 { margin: 2.5rem 0 1rem; font-size: 1.5rem; }
        .article-content h3 { margin: 2rem 0 0.75rem; font-size: 1.25rem; }
        .article-content p, .article-content li { color: var(--color-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .article-cta { margin-top: 3rem; padding: 1.5rem; background: var(--color-primary-light); border-radius: var(--radius-lg); }
        @media (min-width: 1024px) { .article-layout { grid-template-columns: 240px 1fr; max-width: 1100px; } .toc { position: sticky; top: 100px; align-self: start; } }
      `}</style>
    </>
  );
}
