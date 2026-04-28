import Badge from '../ui/Badge';

export default function PersonalityCard({ type, description, strengths, growth }) {
  return (
    <div className="personality-card">
      <h2>{type}</h2>
      <p style={{ marginBottom: 'var(--space-5)' }}>{description}</p>
      
      <div style={{ textAlign: 'left', marginBottom: 'var(--space-4)' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-sm)', 
          fontWeight: 'var(--font-weight-semibold)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--letter-spacing-wider)',
          color: 'var(--aura-text-tertiary)',
          marginBottom: 'var(--space-2)'
        }}>
          Your Strengths
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
          {strengths?.map(s => (
            <Badge key={s} variant="success">{s}</Badge>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'left' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-sm)', 
          fontWeight: 'var(--font-weight-semibold)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--letter-spacing-wider)',
          color: 'var(--aura-text-tertiary)',
          marginBottom: 'var(--space-2)'
        }}>
          Growth Opportunity
        </h4>
        <p style={{ 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--aura-text-secondary)',
          lineHeight: 'var(--line-height-relaxed)',
          fontStyle: 'italic'
        }}>
          "{growth}"
        </p>
      </div>
    </div>
  );
}
