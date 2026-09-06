type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`}>
      {label && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <style>{`
        .section-heading-left { text-align: left; margin-left: 0; }
      `}</style>
    </div>
  );
}
