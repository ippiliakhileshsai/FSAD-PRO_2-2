export default function FeatureHero({ title, subtitle, label, theme }) {
  const imageMap = {
    navy: '/images/mental-health.png',
    sage: '/images/therapy.png',
    gold: '/images/support.png',
    lavender: '/images/character.png',
    'sage-light': '/images/healing.png',
  };

  return (
    <section className={`feature-hero theme-${theme}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Real background image */}
      <img 
        src={imageMap[theme]}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.4) saturate(1.2)',
        }}
      />
      
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 100%)',
        zIndex: 1
      }} />

      <div className="feature-hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {label && (
          <div style={{
            display: 'inline-block',
            padding: '6px 20px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '100px',
            marginBottom: 'var(--space-4)',
            animation: 'fadeInUp 0.6s ease 0.1s both'
          }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-body-xs)',
              fontWeight: 'var(--font-weight-medium)',
              letterSpacing: 'var(--letter-spacing-wider)',
              textTransform: 'uppercase',
              color: 'var(--aura-gold-accent)',
            }}>
              ✦ &nbsp; {label} &nbsp; ✦
            </span>
          </div>
        )}
        <h1 style={{ animation: 'fadeInUp 0.8s ease 0.3s both' }}>{title}</h1>
        {subtitle && <p style={{ animation: 'fadeInUp 0.8s ease 0.5s both' }}>{subtitle}</p>}
      </div>
    </section>
  );
}
