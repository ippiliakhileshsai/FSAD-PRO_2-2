import { useState } from 'react';
import FeatureHero from '../components/features/FeatureHero';
import GreetingSection from '../components/features/GreetingSection';
import PerspectiveFilter from '../components/features/PerspectiveFilter';
import VideoGrid from '../components/features/VideoGrid';
import ArticleGrid from '../components/features/ArticleGrid';
import Footer from '../components/layout/Footer';
import { FEATURES } from '../utils/constants';

export default function MentalHealth() {
  const [filter, setFilter] = useState('all');
  const feature = FEATURES.find(f => f.id === 'mental-health');

  return (
    <main>
      <FeatureHero 
        title={feature.title}
        subtitle={feature.heroSubtitle}
        label={feature.label}
        theme={feature.theme}
      />
      <GreetingSection 
        expertName={feature.expertName}
        expertTitle={feature.expertTitle}
      />
      <section className="section-padding" style={{ background: 'var(--aura-off-white)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-6)' }}>
            Videos
          </h2>
          <PerspectiveFilter activeFilter={filter} onFilterChange={setFilter} />
          <VideoGrid />
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-6)' }}>
            Articles & Resources
          </h2>
          <ArticleGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
}
