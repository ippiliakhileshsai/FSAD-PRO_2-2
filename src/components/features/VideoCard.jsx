import { Play } from 'lucide-react';
import { formatNumber } from '../../utils/formatters';

export default function VideoCard({ title, duration, views, thumbnail }) {
  const colors = ['#0D2C54', '#4A6B5C', '#6B5B95', '#A67C52', '#8B2E3E'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="video-card">
      <div className="video-card-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={title} loading="lazy" />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: `linear-gradient(135deg, ${randomColor}, ${randomColor}dd)`,
            position: 'absolute',
            top: 0,
            left: 0
          }} />
        )}
        <div className="video-play-icon">
          <Play size={22} fill="var(--aura-deep-black)" stroke="none" />
        </div>
        <span className="video-duration">{duration}</span>
      </div>
      <div className="video-card-body">
        <h4>{title}</h4>
        <p>{formatNumber(views)} views</p>
      </div>
    </div>
  );
}
