import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function JoinGroupModal({ group, isOpen, onClose, onConfirm }) {
  if (!group) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join Group">
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h4)', marginBottom: 'var(--space-2)' }}>
          {group.name}
        </h4>
        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--aura-text-secondary)', marginBottom: 'var(--space-5)', lineHeight: 'var(--line-height-relaxed)' }}>
          {group.description}
        </p>
        <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)', marginBottom: 'var(--space-5)' }}>
          By joining, you agree to contribute positively and respect all members.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="ghost" onClick={onClose} style={{ flex: 1 }}>Cancel</Button>
          <Button variant="primary" onClick={onConfirm} style={{ flex: 1 }}>Join Group</Button>
        </div>
      </div>
    </Modal>
  );
}
