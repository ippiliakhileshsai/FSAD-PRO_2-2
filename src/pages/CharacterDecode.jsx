import FeatureHero from '../components/features/FeatureHero';
import QuizSection from '../components/character/QuizSection';
import Footer from '../components/layout/Footer';
import { FEATURES } from '../utils/constants';

export default function CharacterDecode() {
  const feature = FEATURES.find(f => f.id === 'character');

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
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-2)' }}>
              Discover Your Inner Self
            </h2>
            <p style={{ color: 'var(--aura-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Answer a few questions and receive AI-powered insights about your personality and mental wellbeing patterns.
            </p>
          </div>
          <QuizSection />
        </div>
      </section>
      <Footer />
    </main>
  );
}
