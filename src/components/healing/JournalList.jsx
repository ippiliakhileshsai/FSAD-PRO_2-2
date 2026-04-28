import { formatDate } from '../../utils/formatters';

export default function JournalList({ entries = [] }) {
  if (entries.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--aura-text-tertiary)' }}>
        <p style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>📝</p>
        <p>Your journal entries will appear here.</p>
        <p style={{ fontSize: 'var(--font-size-body-sm)' }}>Start writing to reflect on your journey.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      {entries.map(entry => (
        <div key={entry.id} className="journal-entry">
          <h4>{entry.title}</h4>
          <p className="journal-date">{formatDate(entry.date)}</p>
          <p className="truncate-3">{entry.content}</p>
        </div>
      ))}
    </div>
  );
}
