import { ChevronDown } from 'lucide-react';

export default function HeroVideo({ onSkip, onScroll }) {
  return (
    <section className="hero-video-section">
      {/* Gradient background since no actual video file */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0D2C54 0%, #1C1C1C 40%, #4A6B5C 70%, #6B5B95 100%)',
        zIndex: 1
      }} />
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <h1>Your Journey to<br />Mental Wellness</h1>
        <p>
          AuraWell empowers students with professional mental health support, 
          personalized resources, and a compassionate community.
        </p>
        <button 
          className="btn btn-white btn-lg"
          onClick={onScroll}
          style={{ animation: 'fadeInUp 1s var(--ease-smooth) 0.9s both' }}
        >
          Begin Your Journey
        </button>
      </div>

      <button 
        className="hero-skip-button"
        onClick={onSkip}
      >
        Skip
      </button>
      
      <div 
        className="hero-scroll-indicator"
        onClick={onScroll}
      >
        <span className="scroll-indicator-text">Discover More</span>
        <ChevronDown className="scroll-indicator-icon animate-bounce" size={24} />
      </div>
    </section>
  );
}
