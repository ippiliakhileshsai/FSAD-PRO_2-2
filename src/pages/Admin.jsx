import { useState } from 'react';
import AdminNav from '../components/admin/AdminNav';
import StatsCard from '../components/admin/StatsCard';
import TherapistTable from '../components/admin/TherapistTable';
import ContentUpload from '../components/admin/ContentUpload';
import { Users, Video, MessageCircle, TrendingUp } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="admin-layout">
      <AdminNav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="admin-content">
        {activeTab === 'overview' && (
          <>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h2)', marginBottom: 'var(--space-6)' }}>
              Dashboard Overview
            </h1>
            <div className="stats-grid">
              <StatsCard label="Total Users" value="2,847" change={12} icon={Users} />
              <StatsCard label="Active Sessions" value="156" change={8} icon={Video} />
              <StatsCard label="Group Messages" value="1,234" change={-3} icon={MessageCircle} />
              <StatsCard label="Engagement Rate" value="78%" change={5} icon={TrendingUp} />
            </div>
            <TherapistTable />
          </>
        )}
        {activeTab === 'therapists' && (
          <>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h2)', marginBottom: 'var(--space-6)' }}>
              Therapist Management
            </h1>
            <TherapistTable />
          </>
        )}
        {activeTab === 'content' && (
          <>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h2)', marginBottom: 'var(--space-6)' }}>
              Content Management
            </h1>
            <ContentUpload />
          </>
        )}
        {activeTab === 'settings' && (
          <div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h2)', marginBottom: 'var(--space-6)' }}>
              Settings
            </h1>
            <div className="dashboard-card">
              <h3>Application Settings</h3>
              <p style={{ color: 'var(--aura-text-tertiary)' }}>Settings panel coming soon.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
