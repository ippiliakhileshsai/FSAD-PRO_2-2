import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RollerCard({ 
  id, 
  title, 
  label, 
  description, 
  theme,
  route 
}) {
  const navigate = useNavigate();

  // Map features to their real images
  const imageMap = {
    'mental-health': '/images/mental-health.png',
    'therapy': '/images/therapy.png',
    'support-groups': '/images/support.png',
    'character': '/images/character.png',
    'self-healing': '/images/healing.png',
  };

  return (
    <div 
      className={`roller-card card-${theme}`}
      onClick={() => navigate(route)}
    >
      <div className="roller-card-image-wrapper">
        <img 
          src={imageMap[id]} 
          alt={title}
          className="roller-card-image"
          loading="lazy"
        />
        <div className="roller-card-overlay">
          <div className="roller-card-label">{label}</div>
          <h3 className="roller-card-title">{title}</h3>
          <p className="roller-card-description">{description}</p>
          <div className="roller-card-cta">
            Explore Resources
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
