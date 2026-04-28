import { Sparkles } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    type: 'article',
    title: 'Understanding Anxiety in Academic Settings',
    description: 'Evidence-based strategies to manage anxiety during exams',
    tag: 'For You'
  },
  {
    id: 2,
    type: 'video',
    title: '5-Minute Breathing Exercise',
    description: 'Quick mindfulness technique for stressful moments',
    tag: 'Recommended'
  },
  {
    id: 3,
    type: 'article',
    title: 'Building Resilience Through Journaling',
    description: 'How daily reflection strengthens mental wellness',
    tag: 'Popular'
  }
];

export default function AIRecommendations() {
  return (
    <div className="dashboard-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', marginBottom: 'var(--space-4)' }}>
        <Sparkles size={20} style={{ color: 'var(--aura-gold-deep)' }} />
        <h3 style={{ margin: 0 }}>For You</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {recommendations.map(rec => (
          <div 
            key={rec.id}
            style={{
              padding: 'var(--space-3)',
              background: 'var(--aura-off-white)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--aura-cream)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--aura-off-white)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <h4 style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: 'var(--font-size-body-sm)', 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--aura-text-primary)' 
              }}>
                {rec.title}
              </h4>
              <span className="badge badge-default" style={{ flexShrink: 0, marginLeft: '8px' }}>{rec.tag}</span>
            </div>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: 'var(--font-size-body-xs)', 
              color: 'var(--aura-text-tertiary)' 
            }}>
              {rec.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
