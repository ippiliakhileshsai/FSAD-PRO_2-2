export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-layout" style={{
      display: 'flex',
      minHeight: '100vh',
    }}>
      {/* Left: Image panel (hidden on mobile) */}
      <div style={{
        flex: '0 0 45%',
        position: 'relative',
        overflow: 'hidden',
        display: 'none',
      }}
      className="auth-image-panel"
      >
        <img 
          src="/images/hero-bg.png" 
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(13,44,84,0.85) 0%, rgba(74,107,92,0.75) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-10)'
        }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '48px', 
              fontWeight: 'var(--font-weight-light)',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--space-4)',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C49A6C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AuraWell
            </h1>
            <p style={{ 
              fontSize: 'var(--font-size-body-lg)', 
              fontWeight: 'var(--font-weight-light)',
              opacity: 0.8,
              maxWidth: '350px',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Your premium companion on the journey to mental wellness
            </p>
            <div style={{
              marginTop: 'var(--space-8)',
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-6)',
            }}>
              {[
                { value: '2.8K+', label: 'Students' },
                { value: '156+', label: 'Therapists' },
                { value: '98%', label: 'Satisfaction' }
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-weight-light)', color: 'var(--aura-gold-accent)' }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-body-xs)', opacity: 0.6 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form panel */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-6)',
        background: 'var(--aura-cream)',
        minHeight: '100vh'
      }}>
        <div className="auth-card">
          <div className="auth-logo">
            <h1 style={{
              background: 'linear-gradient(135deg, var(--aura-navy-deep) 0%, var(--aura-sage-deep) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AuraWell
            </h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .auth-image-panel {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
