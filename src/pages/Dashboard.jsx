import { useAuthStore } from '../store/authStore';
import MoodTrackerWidget from '../components/dashboard/MoodTrackerWidget';
import AIRecommendations from '../components/dashboard/AIRecommendations';
import UpcomingSessions from '../components/dashboard/UpcomingSessions';
import QuickActions from '../components/dashboard/QuickActions';
import Footer from '../components/layout/Footer';

export default function Dashboard() {
  const { user, isIncognito } = useAuthStore();

  const displayName = user?.email?.split('@')[0] || 'Explorer';
  const greeting = new Date().getHours() < 12 ? 'Good morning' : 
                   new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <main className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>{greeting}, {isIncognito ? 'Explorer' : displayName}</h1>
          <p>
            {isIncognito 
              ? "You're browsing in incognito mode. Sign up to save your progress."
              : "Here's your wellness overview for today."
            }
          </p>
        </div>

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
