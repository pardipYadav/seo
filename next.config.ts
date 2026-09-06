import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/seo-services/technical-seo", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/on-page-seo", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/off-page-seo", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/ecommerce-seo", destination: "/seo-services/ecommerce-marketing", permanent: true },
      { source: "/seo-services/seo-audit", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/keyword-research", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/link-building", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/content-seo", destination: "/seo-services/content-marketing", permanent: true },
      { source: "/seo-services/google-business-profile", destination: "/seo-services/local-seo", permanent: true },
      { source: "/seo-services/competitor-analysis", destination: "/seo-services/analytics-reporting", permanent: true },
      { source: "/seo-services/seo-consulting", destination: "/seo-services/seo", permanent: true },
      { source: "/seo-services/website-seo", destination: "/seo-services/seo", permanent: true },
    ];
  },
};

export default nextConfig;
