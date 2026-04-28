import { usePreferenceStore } from '../../store/preferenceStore';
import { Check } from 'lucide-react';

export default function PreferenceCard({ id, title, description, icon, delay = 0 }) {
  const { selectedPreferences, togglePreference } = usePreferenceStore();
  const isSelected = selectedPreferences.includes(id);

  return (
    <div 
      className={`preference-card ${isSelected ? 'selected' : ''}`}
      onClick={() => togglePreference(id)}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePreference(id);
        }
      }}
      style={{ 
        animationDelay: `${delay}s`,
        position: 'relative'
      }}
    >
      {/* Selection check indicator */}
      {isSelected && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--aura-gold-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'scaleIn 0.2s ease',
          zIndex: 2
        }}>
          <Check size={14} strokeWidth={3} style={{ color: 'var(--aura-deep-black)' }} />
        </div>
      )}
      <div className="preference-card-icon" style={{ fontSize: '36px' }}>{icon}</div>
      <div className="preference-card-title">{title}</div>
      <div className="preference-card-description">{description}</div>
    </div>
  );
}
