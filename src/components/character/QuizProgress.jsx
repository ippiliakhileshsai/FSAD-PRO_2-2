import ProgressBar from '../ui/ProgressBar';

export default function QuizProgress({ current, total }) {
  return (
    <div style={{ marginBottom: 'var(--space-6)' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: 'var(--space-1)',
        fontSize: 'var(--font-size-body-sm)',
        color: 'var(--aura-text-tertiary)'
      }}>
        <span>Question {current} of {total}</span>
        <span>{Math.round((current / total) * 100)}%</span>
      </div>
      <ProgressBar value={current} max={total} color="var(--aura-lavender-deep)" />
    </div>
  );
}
