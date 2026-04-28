import { useAuthStore } from '../store/authStore';
import MoodTrackerWidget from '../components/dashboard/MoodTrackerWidget';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import UpcomingSessions from '../components/dashboard/UpcomingSessions';
import QuickActions from '../components/dashboard/QuickActions';
import Footer from '../components/layout/Footer';
import { Sparkles } from 'lucide-react';

export default function Dashboard() {
  const { user, isIncognito } = useAuthStore();

  const displayName = user?.email?.split('@')[0] || 'Explorer';
  const greeting = new Date().getHours() < 12 ? 'Good morning' : 
                   new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <main className="dashboard">
      {/* Premium header section */}
      <div style={{
        background: 'linear-gradient(135deg, #0D2C54 0%, #1a3d6b 40%, #4A6B5C 100%)',
        padding: 'calc(var(--space-16) + 80px) 0 var(--space-12)',
        marginTop: '-80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,91,149,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ color: 'white' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              marginBottom: 'var(--space-4)'
            }}>
              <Sparkles size={14} style={{ color: 'var(--aura-gold-accent)' }} />
              <span style={{
                fontSize: 'var(--font-size-body-xs)',
                fontWeight: 'var(--font-weight-medium)',
                letterSpacing: 'var(--letter-spacing-wider)',
                textTransform: 'uppercase',
                color: 'var(--aura-gold-accent)'
              }}>
                Your Wellness Dashboard
              </span>
            </div>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 'var(--font-weight-light)',
              marginBottom: 'var(--space-2)'
            }}>
              {greeting}, <span style={{ fontWeight: 'var(--font-weight-medium)' }}>{isIncognito ? 'Explorer' : displayName}</span>
            </h1>
            <p style={{ 
              fontSize: 'var(--font-size-body-md)', 
              opacity: 0.7,
              maxWidth: '500px'
            }}>
              {isIncognito 
                ? "You're browsing in incognito mode. Sign up to save your progress."
                : "Here's your wellness overview for today."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="container" style={{ marginTop: 'calc(var(--space-8) * -1)' }}>
        <div className="dashboard-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <MoodTrackerWidget />
            <AIRecommendations />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <QuickActions />
            <UpcomingSessions />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 'var(--space-16)' }}>
        <Footer />
      </div>
    </main>
  );
}
