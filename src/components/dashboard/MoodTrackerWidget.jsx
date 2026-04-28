import MoodPicker from './MoodPicker';
import MoodChart from './MoodChart';

export default function MoodTrackerWidget() {
  return (
    <div className="dashboard-card">
      <h3>Mood Tracker</h3>
      <MoodPicker />
      <div style={{ marginTop: 'var(--space-5)' }}>
        <MoodChart />
      </div>
    </div>
  );
}
