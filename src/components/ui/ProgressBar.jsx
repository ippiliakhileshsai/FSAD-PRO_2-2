export default function ProgressBar({ value = 0, max = 100, color }) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className="progress-bar-track">
      <div 
        className="progress-bar-fill" 
        style={{ 
          width: `${percentage}%`,
          background: color || undefined
        }} 
      />
    </div>
  );
}
