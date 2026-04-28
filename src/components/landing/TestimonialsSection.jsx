import { useIntersection } from '../../hooks/useIntersection';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Computer Science Junior',
    content: 'AuraWell completely changed how I approach my mental health. The mood tracker helped me identify patterns I never noticed, and my therapist is incredible.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    name: 'Marcus T.',
    role: 'Business Administration Senior',
    content: 'The support groups here feel like family. I was hesitant at first, but the community is so welcoming. It\'s the highlight of my week.',
    rating: 5,
    avatar: '👨‍🎓'
  },
  {
    name: 'Aisha K.',
    role: 'Psychology Sophomore',
    content: 'The character decode quiz was spot-on! Understanding my personality type helped me develop better coping strategies. The design is absolutely beautiful too.',
    rating: 5,
    avatar: '👩‍🔬'
  },
];

export default function TestimonialsSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      style={{
        padding: 'var(--space-16) 0',
        background: 'linear-gradient(180deg, var(--aura-off-white) 0%, var(--aura-cream) 100%)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(30px)',
        transition: 'all 0.8s ease'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 18px',
            background: 'rgba(107,91,149,0.08)',
            borderRadius: '100px',
            marginBottom: 'var(--space-3)'
          }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-body-xs)',
              fontWeight: 'var(--font-weight-semibold)',
              letterSpacing: 'var(--letter-spacing-wider)',
              textTransform: 'uppercase',
              color: 'var(--aura-lavender-deep)'
            }}>
              Student Stories
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 'var(--font-weight-light)', color: 'var(--aura-text-primary)' }}>
            Voices of Our Community
          </h2>
          <p style={{ fontSize: 'var(--font-size-body-md)', color: 'var(--aura-text-tertiary)', maxWidth: '500px', margin: 'var(--space-2) auto 0' }}>
            Real stories from students whose journeys were transformed
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-6)'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: 'var(--space-6)',
              borderRadius: '20px',
              background: 'var(--aura-pure-white)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid var(--aura-border-subtle)',
              position: 'relative',
              transition: 'all 0.3s ease',
              animationDelay: `${i * 0.2}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
            }}>
              {/* Quote icon */}
              <Quote size={32} style={{ 
                color: 'var(--aura-gold-accent)', 
                opacity: 0.3, 
                marginBottom: 'var(--space-3)',
                transform: 'scaleX(-1)'
              }} />
              
              <p style={{ 
                fontSize: 'var(--font-size-body-md)', 
                color: 'var(--aura-text-secondary)', 
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--space-4)',
                fontStyle: 'italic'
              }}>
                "{t.content}"
              </p>

              <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-3)' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--aura-gold-deep)" stroke="none" />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--aura-off-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: 'var(--font-size-body-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--aura-text-primary)' }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
