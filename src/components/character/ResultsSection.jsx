import PersonalityCard from './PersonalityCard';
import Button from '../ui/Button';

const personalityTypes = [
  {
    type: 'The Reflective Thinker',
    description: 'You process the world through careful analysis and deep reflection. You value understanding over quick reactions, and your thoughtful approach to challenges makes you a steady presence in any situation.',
    strengths: ['Self-awareness', 'Analytical thinking', 'Emotional depth', 'Problem-solving'],
    growth: 'Practice sharing your insights with others — your perspective is more valuable than you realize.'
  },
  {
    type: 'The Compassionate Connector',
    description: 'You lead with empathy and create deep bonds with those around you. Your ability to understand others\' emotions makes you a natural support system and a cherished friend.',
    strengths: ['Empathy', 'Active listening', 'Community building', 'Emotional intelligence'],
    growth: 'Remember to direct some of that compassion inward. Self-care is not selfish.'
  },
  {
    type: 'The Resilient Pathfinder',
    description: 'You approach challenges with determination and practical solutions. Your action-oriented mindset helps you navigate obstacles and inspires others to keep moving forward.',
    strengths: ['Resilience', 'Leadership', 'Adaptability', 'Goal-setting'],
    growth: 'Sometimes the most productive thing is rest. Allow yourself to pause and recharge.'
  },
  {
    type: 'The Creative Soul',
    description: 'You experience the world through creativity and expression. Your unique perspective brings beauty and innovation to everything you touch.',
    strengths: ['Creativity', 'Intuition', 'Open-mindedness', 'Self-expression'],
    growth: 'Structure can liberate creativity. Try incorporating some routine into your practice.'
  }
];

export default function ResultsSection({ answers, onRestart }) {
  // Determine personality based on most common answer index
  const counts = [0, 0, 0, 0];
  Object.values(answers).forEach(idx => { counts[idx]++; });
  const maxIdx = counts.indexOf(Math.max(...counts));
  const personality = personalityTypes[maxIdx];

  return (
    <div className="quiz-container" style={{ animation: 'fadeInUp 0.6s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span style={{ fontSize: '48px', marginBottom: 'var(--space-3)', display: 'block' }}>✨</span>
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'var(--font-size-h3)', 
          color: 'var(--aura-lavender-deep)',
          marginBottom: 'var(--space-2)' 
        }}>
          Your Results
        </h2>
        <p style={{ color: 'var(--aura-text-tertiary)' }}>
          Based on your responses, here's your personality insight
        </p>
      </div>

      <PersonalityCard {...personality} />

      <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
        <Button variant="secondary" onClick={onRestart}>
          Retake Quiz
        </Button>
      </div>
    </div>
  );
}
