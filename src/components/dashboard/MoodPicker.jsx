import { useState } from 'react';
import { MOOD_EMOJIS } from '../../utils/constants';
import { useUIStore } from '../../store/uiStore';

export default function MoodPicker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const { showToast } = useUIStore();

  const handleSelect = (score) => {
    setSelectedMood(score);
    // In production, would call moodApi.logMood(score)
    const mood = MOOD_EMOJIS.find(m => m.score === score);
    showToast(`Mood logged: ${mood.label} ${mood.emoji}`, 'success');
  };

  return (
    <div className="mood-picker">
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: 'var(--font-size-body-sm)', 
        color: 'var(--aura-text-secondary)',
        marginBottom: 'var(--space-2)'
      }}>
        How are you feeling today?
      </p>
      <div className="mood-emoji-row">
        {MOOD_EMOJIS.map(({ score, emoji, label }) => (
          <button
            key={score}
            className={`mood-emoji-btn ${selectedMood === score ? 'selected' : ''}`}
            onClick={() => handleSelect(score)}
            title={label}
            aria-label={`Mood: ${label}`}
          >
            {emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-xs)', 
          color: 'var(--aura-text-tertiary)',
          marginTop: 'var(--space-1)'
        }}>
          {MOOD_EMOJIS.find(m => m.score === selectedMood)?.label}
        </p>
      )}
    </div>
  );
}
