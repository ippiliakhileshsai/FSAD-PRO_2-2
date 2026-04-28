import { Play } from 'lucide-react';
import { formatNumber } from '../../utils/formatters';

const thumbnailGradients = [
  'linear-gradient(135deg, #0D2C54 0%, #1a4a7a 40%, #2a6090 100%)',
  'linear-gradient(135deg, #4A6B5C 0%, #5d8a6e 40%, #7aa08a 100%)',
  'linear-gradient(135deg, #6B5B95 0%, #8a75b5 40%, #a690cd 100%)',
  'linear-gradient(135deg, #A67C52 0%, #c49a6c 40%, #d4b896 100%)',
  'linear-gradient(135deg, #8B2E3E 0%, #b5485a 40%, #d06878 100%)',
  'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
];

const thumbnailIcons = ['🧠', '💆', '🌱', '🎯', '💪', '🌟'];

export default function VideoCard({ title, duration, views, thumbnail, index = 0 }) {
  const gradientIdx = (title?.length || index) % thumbnailGradients.length;

  return (
    <div className="video-card" style={{
      borderRadius: '16px',
      overflow: 'hidden',
      background: 'var(--aura-pure-white)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
    }}>
      <div className="video-card-thumbnail" style={{ position: 'relative', paddingTop: '56.25%' }}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ 
            position: 'absolute',
            inset: 0,
            background: thumbnailGradients[gradientIdx],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '48px', opacity: 0.3 }}>{thumbnailIcons[gradientIdx]}</span>
          </div>
        )}
        {/* Play button overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0)',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
        >
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
          }}>
            <Play size={22} fill="var(--aura-deep-black)" stroke="none" style={{ marginLeft: '3px' }} />
          </div>
        </div>
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.75)',
          color: 'white',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: 'var(--font-body)',
          backdropFilter: 'blur(4px)'
        }}>
          {duration}
        </span>
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <h4 style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-md)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--aura-text-primary)',
          lineHeight: 'var(--line-height-snug)',
          marginBottom: '6px'
        }}>
          {title}
        </h4>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: 'var(--font-size-body-xs)', 
          color: 'var(--aura-text-tertiary)' 
        }}>
          {formatNumber(views)} views
        </p>
      </div>
    </div>
  );
}
