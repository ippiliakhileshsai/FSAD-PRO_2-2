import { useNavigate } from 'react-router-dom';
import { usePreferenceStore } from '../../store/preferenceStore';
import { useIntersection } from '../../hooks/useIntersection';
import { PREFERENCES } from '../../utils/constants';
import PreferenceCard from './PreferenceCard';

export default function PersonalizationSection() {
  const navigate = useNavigate();
  const { selectedPreferences } = usePreferenceStore();
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section 
      className="personalization-section" 
      ref={ref}
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(40px)', transition: 'all 0.8s ease' }}
    >
      <div className="container">
        <div className="personalization-header">
          <h2>Personalize Your Experience</h2>
          <p>
            Select the perspectives that resonate with you. We'll curate content 
            that aligns with your preferences.
          </p>
        </div>

        <div className="preference-grid">
          {PREFERENCES.map((pref) => (
            <PreferenceCard key={pref.id} {...pref} />
          ))}
        </div>

        <div className="personalization-cta">
          <button 
            className="btn btn-white btn-lg"
            onClick={() => navigate(selectedPreferences.length > 0 ? '/signup' : '/login')}
            style={{ marginTop: 'var(--space-8)' }}
          >
            {selectedPreferences.length > 0 ? 'Continue with Selection' : 'Get Started'}
          </button>
        </div>
      </div>
    </section>
  );
}
