import { processSteps } from "@/data/industries";
import SectionHeading from "./SectionHeading";

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Our Process"
          title="How We Deliver Digital Marketing Results"
          description="A structured, transparent approach to improving your online visibility and business growth."
        />
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="process-step">
              <span className="process-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .process-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .process-step { padding: 2rem; border: 1px solid var(--color-border); border-radius: var(--radius-lg); position: relative; }
        .process-number { font-size: 2rem; font-weight: 800; color: var(--color-primary-light); display: block; margin-bottom: 0.5rem; }
        .process-step h3 { margin-bottom: 0.75rem; font-size: 1.125rem; }
        .process-step p { color: var(--color-text-muted); font-size: 0.9375rem; }
        @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(5, 1fr); } .process-step { padding: 1.5rem; } }
      `}</style>
    </section>
  );
}
