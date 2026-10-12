type SectionIntroProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };

export default function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>
    </div>
  );
}
