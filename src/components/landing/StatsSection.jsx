import { useIntersection } from '../../hooks/useIntersection';
import { useState, useEffect } from 'react';

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersection({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 2847, suffix: '+', label: 'Students Helped', icon: '🎓' },
  { value: 156, suffix: '+', label: 'Licensed Therapists', icon: '🩺' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
];

export default function StatsSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      style={{
        padding: 'var(--space-16) 0',
        background: 'var(--aura-pure-white)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(30px)',
        transition: 'all 0.8s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(13,44,84,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(74,107,92,0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-6)',
          textAlign: 'center'
        }}>
          {stats.map((stat, i) => (
            <div 
              key={i}
              style={{
                padding: 'var(--space-6)',
                borderRadius: '20px',
                background: 'var(--aura-off-white)',
                border: '1px solid var(--aura-border-subtle)',
                transition: 'all 0.3s ease',
                animationDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: 'var(--space-2)' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4vw, 42px)',
                fontWeight: 'var(--font-weight-light)',
                color: 'var(--aura-navy-deep)',
                lineHeight: 1,
                marginBottom: 'var(--space-1)'
              }}>
                <AnimatedCounter target={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-sm)',
                color: 'var(--aura-text-tertiary)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
