import { Star } from 'lucide-react';
import Button from '../ui/Button';

export default function TherapistCard({ name, specialty, bio, rating, onBook }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const colors = ['#0D2C54', '#4A6B5C', '#6B5B95', '#A67C52'];
  const bgColor = colors[name.length % colors.length];

  return (
    <div className="therapist-card">
      <div 
        className="therapist-avatar"
        style={{
          background: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '28px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        {initials}
      </div>
      <h4 className="therapist-name">{name}</h4>
      <p className="therapist-specialty">{specialty}</p>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '4px', 
        marginBottom: 'var(--space-2)',
        color: 'var(--aura-gold-deep)'
      }}>
        <Star size={14} fill="currentColor" />
        <span style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-medium)' }}>
          {rating}
        </span>
      </div>
      <p className="therapist-bio truncate-3">{bio}</p>
      <Button variant="primary" size="sm" onClick={onBook} style={{ width: '100%' }}>
        Book Session
      </Button>
    </div>
  );
}
