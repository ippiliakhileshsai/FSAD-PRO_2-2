import { Clock } from 'lucide-react';

export default function ArticleCard({ title, excerpt, readTime }) {
  const colors = ['#0D2C54', '#4A6B5C', '#6B5B95', '#A67C52'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="article-card">
      <div 
        className="article-card-image"
        style={{ 
          background: `linear-gradient(135deg, ${randomColor}22, ${randomColor}44)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span style={{ fontSize: '48px', opacity: 0.3 }}>📄</span>
      </div>
      <div className="article-card-body">
        <h4>{title}</h4>
        <p className="truncate-2">{excerpt}</p>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px', 
          marginTop: 'var(--space-2)',
          color: 'var(--aura-text-tertiary)',
          fontSize: 'var(--font-size-body-xs)'
        }}>
          <Clock size={12} />
          {readTime} read
        </div>
      </div>
    </div>
  );
}
