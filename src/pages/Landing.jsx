import { useRef } from 'react';
import HeroVideo from '../components/landing/HeroVideo';
import RollerSection from '../components/landing/RollerSection';
import StatsSection from '../components/landing/StatsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import PersonalizationSection from '../components/landing/PersonalizationSection';
import Footer from '../components/layout/Footer';

export default function Landing() {
  const rollerRef = useRef(null);

  const scrollToContent = () => {
    rollerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <HeroVideo 
        onSkip={scrollToContent} 
        onScroll={scrollToContent} 
      />
      <div ref={rollerRef}>
        <RollerSection />
      </div>
      <StatsSection />
      <TestimonialsSection />
      <PersonalizationSection />
      <Footer />
    </main>
  );
}
