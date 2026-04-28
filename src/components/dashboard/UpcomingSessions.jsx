import SessionCard from './SessionCard';

const mockSessions = [
  {
    id: 1,
    therapistName: 'Dr. Sarah Mitchell',
    specialty: 'Anxiety & Stress',
    dateTime: new Date(Date.now() + 86400000 * 2).toISOString(),
    type: 'Video Call'
  },
  {
    id: 2,
    therapistName: 'Dr. James Chen',
    specialty: 'Depression & CBT',
    dateTime: new Date(Date.now() + 86400000 * 5).toISOString(),
    type: 'Video Call'
  }
];

export default function UpcomingSessions() {
  return (
    <div className="dashboard-card">
      <h3>Upcoming Sessions</h3>
      {mockSessions.length > 0 ? (
        mockSessions.map(session => (
          <SessionCard key={session.id} {...session} />
        ))
      ) : (
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-sm)', 
          color: 'var(--aura-text-tertiary)',
          textAlign: 'center',
          padding: 'var(--space-4)'
        }}>
          No upcoming sessions. Book a therapist to get started.
        </p>
      )}
    </div>
  );
}
