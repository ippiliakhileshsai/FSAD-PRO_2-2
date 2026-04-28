import { useState } from 'react';
import FeatureHero from '../components/features/FeatureHero';
import MeditationTimer from '../components/healing/MeditationTimer';
import BreathingExercise from '../components/healing/BreathingExercise';
import JournalEntry from '../components/healing/JournalEntry';
import JournalList from '../components/healing/JournalList';
import Tabs from '../components/ui/Tabs';
import Footer from '../components/layout/Footer';
import { FEATURES } from '../utils/constants';

const tabs = [
  { id: 'meditation', label: 'Meditation' },
  { id: 'breathing', label: 'Breathing' },
  { id: 'journal', label: 'Journal' },
];

export default function SelfHealing() {
  const feature = FEATURES.find(f => f.id === 'self-healing');
  const [activeTab, setActiveTab] = useState('meditation');
  const [journalEntries, setJournalEntries] = useState([]);

  const handleSaveEntry = (entry) => {
    setJournalEntries(prev => [entry, ...prev]);
  };

  return (
    <main>
      <FeatureHero 
        title={feature.title}
        subtitle={feature.heroSubtitle}
        label={feature.label}
        theme={feature.theme}
      />
      <section className="section-padding" style={{ background: 'var(--aura-off-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-2)' }}>
              Your Healing Space
            </h2>
            <p style={{ color: 'var(--aura-text-secondary)' }}>
              Tools for mindfulness, reflection, and inner peace
            </p>
          </div>

          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          
          <div style={{ marginTop: 'var(--space-6)' }}>
            {activeTab === 'meditation' && (
              <div className="dashboard-card">
                <h3 style={{ textAlign: 'center' }}>Meditation Timer</h3>
                <MeditationTimer />
              </div>
            )}
            {activeTab === 'breathing' && (
              <div className="dashboard-card">
                <h3 style={{ textAlign: 'center' }}>Breathing Exercise</h3>
                <p style={{ textAlign: 'center', color: 'var(--aura-text-tertiary)', fontSize: 'var(--font-size-body-sm)', marginBottom: 'var(--space-4)' }}>
                  Follow the circle. Breathe in as it expands, breathe out as it contracts.
                </p>
                <BreathingExercise />
              </div>
            )}
            {activeTab === 'journal' && (
              <div>
                <JournalEntry onSave={handleSaveEntry} />
                <div style={{ marginTop: 'var(--space-6)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h5)', marginBottom: 'var(--space-4)' }}>
                    Past Entries
                  </h3>
                  <JournalList entries={journalEntries} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
