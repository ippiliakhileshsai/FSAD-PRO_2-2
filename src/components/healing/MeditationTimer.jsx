import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

const DURATIONS = [
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
  { label: '20 min', seconds: 1200 },
];

export default function MeditationTimer() {
  const [duration, setDuration] = useState(300);
  const [remaining, setRemaining] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining(prev => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, remaining]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setRemaining(duration);
  };

  const selectDuration = (secs) => {
    setDuration(secs);
    setRemaining(secs);
    setIsRunning(false);
  };

  const progress = ((duration - remaining) / duration) * 100;
  const circumference = 2 * Math.PI * 110;
  const dashOffset = circumference - (progress / 100) * circumference;

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return (
    <div className="meditation-timer">
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        {DURATIONS.map(d => (
          <button
            key={d.seconds}
            className={`time-slot ${duration === d.seconds ? 'selected' : ''}`}
            onClick={() => selectDuration(d.seconds)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="timer-circle">
        <svg viewBox="0 0 240 240">
          <circle className="timer-track" cx="120" cy="120" r="110" />
          <circle 
            className="timer-progress"
            cx="120" cy="120" r="110" 
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="timer-text">
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        {isRunning ? (
          <Button variant="secondary" onClick={handlePause}>Pause</Button>
        ) : (
          <Button variant="primary" onClick={handleStart}>
            {remaining < duration ? 'Resume' : 'Start'}
          </Button>
        )}
        <Button variant="ghost" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
