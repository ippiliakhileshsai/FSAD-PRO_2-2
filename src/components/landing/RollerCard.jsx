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

  // Theme colors for card backgrounds
  const themeColors = {
    navy: 'linear-gradient(135deg, #0D2C54, #2A4A70)',
    sage: 'linear-gradient(135deg, #4A6B5C, #7A9B8A)',
    gold: 'linear-gradient(135deg, #A67C52, #D4B896)',
    lavender: 'linear-gradient(135deg, #6B5B95, #A393C8)',
    'sage-light': 'linear-gradient(135deg, #5F8170, #8FA89E)',
  };
  
  return (
    <div 
      className={`roller-card card-${theme}`}
      onClick={() => navigate(route)}
    >
      <div className="roller-card-image-wrapper">
        {/* Gradient placeholder instead of images */}
        <div 
          className="roller-card-image"
          style={{ 
            background: themeColors[theme] || themeColors.navy,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
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
