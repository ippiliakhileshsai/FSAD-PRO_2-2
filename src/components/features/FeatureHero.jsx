export default function FeatureHero({ title, subtitle, label, theme }) {
  return (
    <section className={`feature-hero theme-${theme}`}>
      <div className="feature-hero-content">
        {label && <p className="feature-hero-label">{label}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
