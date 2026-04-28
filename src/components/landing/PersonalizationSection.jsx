import { useNavigate } from 'react-router-dom';
import { usePreferenceStore } from '../../store/preferenceStore';
import { useIntersection } from '../../hooks/useIntersection';
import { PREFERENCES } from '../../utils/constants';
import PreferenceCard from './PreferenceCard';
import { ArrowRight } from 'lucide-react';

export default function PersonalizationSection() {
  const navigate = useNavigate();
  const { selectedPreferences } = usePreferenceStore();
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section 
      className="personalization-section" 
      ref={ref}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'none' : 'translateY(40px)', 
        transition: 'all 0.8s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,108,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,91,149,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="personalization-header">
          <div style={{
            display: 'inline-block',
            padding: '6px 20px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px',
            marginBottom: 'var(--space-4)'
          }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-body-xs)',
              fontWeight: 'var(--font-weight-medium)',
              letterSpacing: 'var(--letter-spacing-wider)',
              textTransform: 'uppercase',
              color: 'var(--aura-gold-accent)'
            }}>
              Curated for You
            </span>
          </div>
          <h2>Personalize Your Experience</h2>
          <p>
            Select the perspectives that resonate with you. We'll curate content 
            that aligns with your preferences.
          </p>
        </div>

        <div className="preference-grid">
          {PREFERENCES.map((pref, i) => (
            <PreferenceCard key={pref.id} {...pref} delay={i * 0.1} />
          ))}
        </div>

        <div className="personalization-cta" style={{ marginTop: 'var(--space-10)' }}>
          <button 
            className="btn btn-lg"
            onClick={() => navigate(selectedPreferences.length > 0 ? '/signup' : '/login')}
            style={{ 
              background: 'linear-gradient(135deg, #C49A6C, #D4B896)',
              color: 'var(--aura-deep-black)',
              border: 'none',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            {selectedPreferences.length > 0 ? 'Continue with Selection' : 'Get Started'}
            <ArrowRight size={18} />
          </button>
          {selectedPreferences.length > 0 && (
            <p style={{ 
              marginTop: 'var(--space-3)', 
              fontSize: 'var(--font-size-body-sm)', 
              color: 'rgba(255,255,255,0.5)' 
            }}>
              {selectedPreferences.length} perspective{selectedPreferences.length > 1 ? 's' : ''} selected
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
