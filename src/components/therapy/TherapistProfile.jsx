import { Star, Clock, Award } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function TherapistProfile({ therapist, isOpen, onClose, onBook }) {
  if (!therapist) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Therapist Profile">
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'var(--aura-sage-deep)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '36px',
          fontFamily: 'var(--font-heading)',
          margin: '0 auto var(--space-3)'
        }}>
          {therapist.name?.charAt(0)}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h4)', marginBottom: '4px' }}>
          {therapist.name}
        </h3>
        <p style={{ color: 'var(--aura-sage-deep)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-4)' }}>
          {therapist.specialty}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-5)', marginBottom: 'var(--space-4)' }}>
          <div style={{ textAlign: 'center' }}>
            <Star size={18} style={{ color: 'var(--aura-gold-deep)', marginBottom: '4px' }} fill="var(--aura-gold-deep)" />
            <p style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>{therapist.rating}</p>
            <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>Rating</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Clock size={18} style={{ color: 'var(--aura-navy-deep)', marginBottom: '4px' }} />
            <p style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>50 min</p>
            <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>Session</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Award size={18} style={{ color: 'var(--aura-lavender-deep)', marginBottom: '4px' }} />
            <p style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)' }}>12 yrs</p>
            <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>Experience</p>
          </div>
        </div>

        <p style={{ 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--aura-text-secondary)', 
          lineHeight: 'var(--line-height-relaxed)',
          textAlign: 'left',
          marginBottom: 'var(--space-5)'
        }}>
          {therapist.bio}
        </p>

        <Button variant="primary" onClick={onBook} style={{ width: '100%' }}>
          Book a Session
        </Button>
      </div>
    </Modal>
  );
}
