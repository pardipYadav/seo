import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug, services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle.replace(" | GobalCareSolutions", ""),
    description: service.metaDescription,
    path: `/seo-services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
