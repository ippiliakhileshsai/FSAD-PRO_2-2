import { Link } from 'react-router-dom';
import { Heart, Globe, MessageSquare, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative top border gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, var(--aura-gold-accent) 30%, var(--aura-lavender-deep) 70%, transparent 100%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top area: Brand + Newsletter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 'var(--space-8)',
          paddingBottom: 'var(--space-8)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ maxWidth: '380px' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '28px', 
              fontWeight: 'var(--font-weight-light)',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--space-3)',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C49A6C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AuraWell
            </h3>
            <p style={{ 
              fontSize: 'var(--font-size-body-sm)', 
              lineHeight: 'var(--line-height-relaxed)',
              color: 'rgba(255,255,255,0.5)'
            }}>
              A premium mental health platform designed for students. 
              Your journey to wellness starts here — with compassion, 
              privacy, and professional support.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              {[Globe, MessageSquare, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--aura-gold-accent)';
                  e.currentTarget.style.color = 'var(--aura-deep-black)';
                  e.currentTarget.style.borderColor = 'var(--aura-gold-accent)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ maxWidth: '380px', width: '100%' }}>
            <h4 style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: 'var(--font-size-body-md)', 
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--space-2)',
              color: 'rgba(255,255,255,0.9)'
            }}>
              Stay in the loop
            </h4>
            <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'rgba(255,255,255,0.4)', marginBottom: 'var(--space-3)' }}>
              Get wellness tips and platform updates delivered to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'white',
                  fontSize: 'var(--font-size-body-sm)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              />
              <button style={{ 
                padding: '12px 24px',
                borderRadius: '10px', 
                background: 'linear-gradient(135deg, #C49A6C, #D4B896)',
                color: 'var(--aura-deep-black)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-body-sm)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(196,154,108,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="footer-grid" style={{ paddingTop: 'var(--space-8)' }}>
          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li><Link to="/feature/mental-health">Mental Health</Link></li>
              <li><Link to="/feature/therapy">Virtual Therapy</Link></li>
              <li><Link to="/feature/support-groups">Support Groups</Link></li>
              <li><Link to="/feature/character">Character Decode</Link></li>
              <li><Link to="/feature/self-healing">Self-Healing</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#videos">Video Library</a></li>
              <li><a href="#meditation">Meditation</a></li>
              <li><a href="#journal">Journaling</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#crisis">Crisis Resources</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ 
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)'
        }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-body-xs)', color: 'rgba(255,255,255,0.35)' }}>
            &copy; {new Date().getFullYear()} AuraWell. Made with <Heart size={12} fill="var(--aura-gold-accent)" stroke="none" /> for student wellness.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <a href="#privacy" style={{ fontSize: 'var(--font-size-body-xs)', color: 'rgba(255,255,255,0.35)' }}>Privacy</a>
            <a href="#terms" style={{ fontSize: 'var(--font-size-body-xs)', color: 'rgba(255,255,255,0.35)' }}>Terms</a>
            <a href="#accessibility" style={{ fontSize: 'var(--font-size-body-xs)', color: 'rgba(255,255,255,0.35)' }}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
