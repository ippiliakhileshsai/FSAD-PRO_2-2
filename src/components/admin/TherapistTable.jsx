import { Edit, Trash2 } from 'lucide-react';

const mockTherapists = [
  { id: 1, name: 'Dr. Sarah Mitchell', specialty: 'Anxiety', sessions: 45, rating: 4.9, status: 'Active' },
  { id: 2, name: 'Dr. James Chen', specialty: 'Depression', sessions: 38, rating: 4.8, status: 'Active' },
  { id: 3, name: 'Maria Rodriguez', specialty: 'Trauma', sessions: 52, rating: 4.9, status: 'Active' },
  { id: 4, name: 'Dr. Aisha Patel', specialty: 'Relationships', sessions: 31, rating: 4.7, status: 'On Leave' },
];

export default function TherapistTable() {
  return (
    <div className="dashboard-card" style={{ overflow: 'auto' }}>
      <h3>Therapist Management</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-body-sm)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--aura-border-subtle)' }}>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Specialty</th>
            <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Sessions</th>
            <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Rating</th>
            <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Status</th>
            <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--aura-text-tertiary)', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-body-xs)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockTherapists.map(t => (
            <tr key={t.id} style={{ borderBottom: '1px solid var(--aura-border-subtle)' }}>
              <td style={{ padding: '14px 8px', fontWeight: 'var(--font-weight-medium)' }}>{t.name}</td>
              <td style={{ padding: '14px 8px', color: 'var(--aura-text-secondary)' }}>{t.specialty}</td>
              <td style={{ padding: '14px 8px', textAlign: 'center' }}>{t.sessions}</td>
              <td style={{ padding: '14px 8px', textAlign: 'center' }}>{t.rating}</td>
              <td style={{ padding: '14px 8px', textAlign: 'center' }}>
                <span className={`badge ${t.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                  {t.status}
                </span>
              </td>
              <td style={{ padding: '14px 8px', textAlign: 'right' }}>
                <button className="navbar-icon-button" style={{ display: 'inline-flex' }} aria-label="Edit">
                  <Edit size={16} />
                </button>
                <button className="navbar-icon-button" style={{ display: 'inline-flex', color: 'var(--aura-error)' }} aria-label="Delete">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
