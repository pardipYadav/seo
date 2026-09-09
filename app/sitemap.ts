import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/seo-services",
    "/seo-packages",
    "/industries",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/cancellation-policy",
    "/cookie-policy",
    "/disclaimer",
    "/service-agreement",
    "/acceptable-use-policy",
  ];

  const servicePages = services.map((s) => `/seo-services/${s.slug}`);
  const blogPages = blogPosts.filter((p) => p.complete).map((p) => `/blog/${p.slug}`);

  const allPages = [...staticPages, ...servicePages, ...blogPages];

  return allPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("seo-services") || path === "/seo-packages" ? 0.9 : 0.7,
  }));
}
