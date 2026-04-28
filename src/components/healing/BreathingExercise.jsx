import { useState, useEffect } from 'react';

const phases = [
  { label: 'Breathe In', duration: 4, color: 'rgba(74, 107, 92, 0.6)' },
  { label: 'Hold', duration: 4, color: 'rgba(74, 107, 92, 0.8)' },
  { label: 'Breathe Out', duration: 6, color: 'rgba(74, 107, 92, 0.4)' },
  { label: 'Hold', duration: 2, color: 'rgba(74, 107, 92, 0.3)' },
];

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCounter(prev => {
        const phase = phases[phaseIndex];
        if (prev >= phase.duration - 1) {
          setPhaseIndex(pi => {
            if (pi >= phases.length - 1) {
              setCycles(c => c + 1);
              return 0;
            }
            return pi + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phaseIndex]);

  const phase = phases[phaseIndex];
  const scale = phaseIndex === 0 ? 1 + (counter / phase.duration) * 0.3 : 
                phaseIndex === 2 ? 1.3 - (counter / phase.duration) * 0.3 :
                phaseIndex === 1 ? 1.3 : 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)', padding: 'var(--space-8)' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: phase.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          transform: `scale(${scale})`,
          transition: 'all 1s ease-in-out',
          boxShadow: '0 0 60px rgba(74, 107, 92, 0.3)'
        }}
      >
        <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-medium)' }}>
          {isActive ? phase.label : 'Ready?'}
        </span>
        {isActive && (
          <span style={{ fontSize: 'var(--font-size-h3)', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
            {phase.duration - counter}
          </span>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        {isActive && (
          <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--aura-text-tertiary)', marginBottom: 'var(--space-2)' }}>
            Cycles completed: {cycles}
          </p>
        )}
        <button 
          className={`btn ${isActive ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => {
            setIsActive(!isActive);
            if (!isActive) {
              setPhaseIndex(0);
              setCounter(0);
            }
          }}
        >
          {isActive ? 'Stop' : 'Start Breathing'}
        </button>
      </div>
    </div>
  );
}
