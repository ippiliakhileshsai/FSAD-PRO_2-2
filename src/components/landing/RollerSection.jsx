import { useState, useRef } from 'react';
import RollerCard from './RollerCard';
import { FEATURES } from '../../utils/constants';
import { useIntersection } from '../../hooks/useIntersection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function RollerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.clientWidth * 0.8;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, FEATURES.length - 1));
  };

  const scrollToCard = (index) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.clientWidth * 0.8;
      trackRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const prev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const next = () => scrollToCard(Math.min(FEATURES.length - 1, activeIndex + 1));

  return (
    <section 
      className="roller-section" 
      ref={sectionRef}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transition: 'opacity 0.8s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle decorative background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,108,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="roller-header" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 18px',
          background: 'rgba(13,44,84,0.06)',
          borderRadius: '100px',
          marginBottom: 'var(--space-3)',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-body-xs)',
            fontWeight: 'var(--font-weight-semibold)',
            letterSpacing: 'var(--letter-spacing-wider)',
            textTransform: 'uppercase',
            color: 'var(--aura-navy-deep)',
          }}>
            Explore Our Features
          </span>
        </div>
        <h2 className="roller-title">Your Journey to Wellness</h2>
        <p className="roller-subtitle">
          Explore personalized mental health support tailored to your needs
        </p>
      </div>

      <div className="roller-track" ref={trackRef} onScroll={handleScroll}>
        {FEATURES.map((feature) => (
          <RollerCard key={feature.id} {...feature} />
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 'var(--space-4)',
        marginTop: 'var(--space-6)' 
      }}>
        {/* Arrow navigation */}
        <button 
          onClick={prev}
          disabled={activeIndex === 0}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid var(--aura-border-medium)',
            background: 'var(--aura-pure-white)',
            cursor: activeIndex === 0 ? 'default' : 'pointer',
            opacity: activeIndex === 0 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
          aria-label="Previous"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Dots */}
        <div className="roller-navigation">
          {FEATURES.map((_, index) => (
            <button
              key={index}
              className={`roller-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          disabled={activeIndex === FEATURES.length - 1}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid var(--aura-border-medium)',
            background: 'var(--aura-pure-white)',
            cursor: activeIndex === FEATURES.length - 1 ? 'default' : 'pointer',
            opacity: activeIndex === FEATURES.length - 1 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
          aria-label="Next"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
