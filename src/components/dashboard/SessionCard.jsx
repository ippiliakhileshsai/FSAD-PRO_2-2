import { Video } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/formatters';

export default function SessionCard({ therapistName, specialty, dateTime, type }) {
  return (
    <div className="session-card">
      <div className="session-card-avatar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        color: 'white',
        fontWeight: '600'
      }}>
        {therapistName.charAt(0)}
      </div>
      <div className="session-card-info" style={{ flex: 1 }}>
        <h4>{therapistName}</h4>
        <p>{specialty}</p>
        <p style={{ color: 'var(--aura-sage-deep)', fontWeight: 'var(--font-weight-medium)' }}>
          {formatDate(dateTime)} • {formatTime(dateTime)}
        </p>
      </div>
      <button className="btn btn-sm btn-primary" style={{ flexShrink: 0 }}>
        <Video size={14} />
        Join
      </button>
    </div>
  );
}
