import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator({ onClick }) {
  return (
    <div className="hero-scroll-indicator" onClick={onClick}>
      <span className="scroll-indicator-text">Discover More</span>
      <ChevronDown className="scroll-indicator-icon animate-bounce" size={24} />
    </div>
  );
}
