import { useState, useRef } from 'react';
import RollerCard from './RollerCard';
import { FEATURES } from '../../utils/constants';
import { useIntersection } from '../../hooks/useIntersection';

export default function RollerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.clientWidth * 0.8;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, FEATURES.length - 1));
  };

  const scrollToCard = (index) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.clientWidth * 0.8;
      trackRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="roller-section" 
      ref={sectionRef}
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease' }}
    >
      <div className="roller-header">
        <h2 className="roller-title">Your Journey to Wellness</h2>
        <p className="roller-subtitle">
          Explore personalized mental health support tailored to your needs
        </p>
      </div>

      <div className="roller-track" ref={trackRef} onScroll={handleScroll}>
        {FEATURES.map((feature) => (
          <RollerCard key={feature.id} {...feature} />
        ))}
      </div>

      <div className="roller-navigation">
        {FEATURES.map((_, index) => (
          <button
            key={index}
            className={`roller-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
