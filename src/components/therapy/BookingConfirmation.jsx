import { CheckCircle } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function BookingConfirmation({ isOpen, onClose, therapist, date, time }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Booking Confirmed">
      <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
        <CheckCircle 
          size={64} 
          style={{ color: 'var(--aura-success)', marginBottom: 'var(--space-4)' }} 
        />
        <h3 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'var(--font-size-h4)', 
          marginBottom: 'var(--space-2)' 
        }}>
          Session Booked!
        </h3>
        <p style={{ 
          fontSize: 'var(--font-size-body-md)', 
          color: 'var(--aura-text-secondary)',
          marginBottom: 'var(--space-5)' 
        }}>
          Your session with <strong>{therapist}</strong> is confirmed for{' '}
          <strong>{date}</strong> at <strong>{time}</strong>.
        </p>
        <p style={{ 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--aura-text-tertiary)',
          marginBottom: 'var(--space-5)' 
        }}>
          You'll receive a confirmation email with the video call link.
        </p>
        <Button variant="primary" onClick={onClose} style={{ width: '100%' }}>
          Done
        </Button>
      </div>
    </Modal>
  );
}
