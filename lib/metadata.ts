import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
