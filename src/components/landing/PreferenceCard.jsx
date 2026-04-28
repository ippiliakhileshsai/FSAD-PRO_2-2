import { usePreferenceStore } from '../../store/preferenceStore';

export default function PreferenceCard({ id, title, description, icon }) {
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
    >
      <div className="preference-card-icon">{icon}</div>
      <div className="preference-card-title">{title}</div>
      <div className="preference-card-description">{description}</div>
    </div>
  );
}
