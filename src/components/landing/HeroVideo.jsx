import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroVideo({ onSkip, onScroll }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-video-section">
      {/* Real background image */}
      <img 
        src="/images/hero-bg.png" 
        alt="" 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          transition: 'transform 20s ease',
          transform: loaded ? 'scale(1.08)' : 'scale(1)',
        }}
      />
      
      <div className="hero-overlay" />
      
      {/* Animated particles overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        background: 'radial-gradient(circle at 20% 80%, rgba(196,154,108,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(107,91,149,0.12) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="hero-content" style={{ zIndex: 5 }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 24px',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '100px',
          marginBottom: 'var(--space-5)',
          animation: 'fadeInUp 1s var(--ease-smooth) 0.1s both'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-body-xs)',
            fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing-wider)',
            textTransform: 'uppercase',
            color: 'var(--aura-gold-accent)'
          }}>
            ✦ &nbsp; Premium Mental Health Platform &nbsp; ✦
          </span>
        </div>

        <h1 style={{ animation: 'fadeInUp 1s var(--ease-smooth) 0.3s both' }}>
          Your Journey to<br />
          <span style={{ 
            background: 'linear-gradient(135deg, #FFFFFF 0%, #C49A6C 50%, #D4B896 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Mental Wellness
          </span>
        </h1>
        <p style={{ animation: 'fadeInUp 1s var(--ease-smooth) 0.6s both' }}>
          AuraWell empowers students with professional mental health support, 
          personalized resources, and a compassionate community.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: 'var(--space-3)', 
          justifyContent: 'center',
          animation: 'fadeInUp 1s var(--ease-smooth) 0.9s both' 
        }}>
          <button className="btn btn-white btn-lg" onClick={onScroll}>
            Begin Your Journey
          </button>
          <button 
            className="btn btn-lg"
            onClick={onScroll}
            style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)'
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <button className="hero-skip-button" onClick={onSkip}>
        Skip
      </button>
      
      <div className="hero-scroll-indicator" onClick={onScroll}>
        <span className="scroll-indicator-text">Discover More</span>
        <ChevronDown className="scroll-indicator-icon animate-bounce" size={24} />
      </div>
    </section>
  );
}
