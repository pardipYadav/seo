import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Pick<Service, "slug" | "name" | "shortDescription" | "benefits">;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card service-card">
      <h3>{service.name}</h3>
      <p className="service-desc">{service.shortDescription}</p>
      <ul className="service-benefits">
        {service.benefits.slice(0, 3).map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Link href={`/seo-services/${service.slug}`} className="service-link">
        Learn More &rarr;
      </Link>
      <style>{`
        .service-card { display: flex; flex-direction: column; height: 100%; }
        .service-card h3 { margin-bottom: 0.75rem; font-size: 1.25rem; }
        .service-desc { color: var(--color-text-muted); font-size: 0.9375rem; flex: 1; }
        .service-benefits { margin: 1rem 0; font-size: 0.875rem; color: var(--color-text); }
        .service-link { font-weight: 600; font-size: 0.9375rem; margin-top: auto; }
      `}</style>
    </div>
  );
}

export function ServicesGrid({ services }: { services: ServiceCardProps["service"][] }) {
  return (
    <div className="grid-3">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
