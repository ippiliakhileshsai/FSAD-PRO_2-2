import { useState } from 'react';
import FeatureHero from '../components/features/FeatureHero';
import GroupsList from '../components/groups/GroupsList';
import ChatRoom from '../components/groups/ChatRoom';
import JoinGroupModal from '../components/groups/JoinGroupModal';
import Footer from '../components/layout/Footer';
import { FEATURES } from '../utils/constants';
import { useUIStore } from '../store/uiStore';

export default function SupportGroups() {
  const feature = FEATURES.find(f => f.id === 'support-groups');
  const { showToast } = useUIStore();
  const [chatGroup, setChatGroup] = useState(null);
  const [joinGroup, setJoinGroup] = useState(null);

  const handleJoinConfirm = () => {
    showToast(`Joined ${joinGroup.name}!`, 'success');
    setJoinGroup(null);
  };

  if (chatGroup) {
    return <ChatRoom group={chatGroup} onBack={() => setChatGroup(null)} />;
  }

  return (
    <main>
      <FeatureHero 
        title={feature.title}
        subtitle={feature.heroSubtitle}
        label={feature.label}
        theme={feature.theme}
      />
      <section className="section-padding" style={{ background: 'var(--aura-off-white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
            Find Your Community
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--aura-text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
            Connect with peers who understand your journey
          </p>
          <GroupsList 
            onJoin={(group) => setJoinGroup(group)}
            onChat={(group) => setChatGroup(group)}
          />
        </div>
      </section>
      
      <JoinGroupModal 
        group={joinGroup}
        isOpen={!!joinGroup}
        onClose={() => setJoinGroup(null)}
        onConfirm={handleJoinConfirm}
      />
      <Footer />
    </main>
  );
}
