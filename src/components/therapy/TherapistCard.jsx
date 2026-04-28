import { Star, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const gradients = [
  'linear-gradient(135deg, #0D2C54, #2a5a8c)',
  'linear-gradient(135deg, #4A6B5C, #6d9580)',
  'linear-gradient(135deg, #6B5B95, #9080b8)',
  'linear-gradient(135deg, #A67C52, #c49a6c)',
  'linear-gradient(135deg, #8B2E3E, #b5485a)',
  'linear-gradient(135deg, #2c3e50, #4a6b7a)',
];

export default function TherapistCard({ name, specialty, bio, rating, onBook }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const bgGradient = gradients[name.length % gradients.length];

  return (
    <div className="therapist-card" style={{
      borderRadius: '20px',
      background: 'var(--aura-pure-white)',
      padding: 'var(--space-6)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid var(--aura-border-subtle)',
      textAlign: 'center'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.12)';
      e.currentTarget.style.borderColor = 'var(--aura-gold-accent)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
      e.currentTarget.style.borderColor = 'var(--aura-border-subtle)';
    }}>
      <div 
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: bgGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '28px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--font-weight-medium)',
          margin: '0 auto var(--space-3)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          border: '3px solid rgba(255,255,255,0.8)'
        }}
      >
        {initials}
      </div>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h5)', fontWeight: 'var(--font-weight-medium)', marginBottom: '4px' }}>
        {name}
      </h4>
      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--aura-sage-deep)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-2)' }}>
        {specialty}
      </p>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '6px', 
        marginBottom: 'var(--space-3)',
      }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < Math.floor(rating) ? 'var(--aura-gold-deep)' : '#E5E5E5'} stroke="none" />
        ))}
        <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', marginLeft: '4px' }}>
          {rating}
        </span>
      </div>
      <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--aura-text-secondary)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-4)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {bio}
      </p>
      <Button variant="primary" size="sm" onClick={onBook} style={{ width: '100%', borderRadius: '12px' }}>
        <Calendar size={15} />
        Book Session
      </Button>
    </div>
  );
}
