export default function StatsCard({ label, value, change, icon: Icon }) {
  const isPositive = change > 0;
  
  return (
    <div className="stats-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p className="stats-card-label">{label}</p>
          <p className="stats-card-value">{value}</p>
        </div>
        {Icon && (
          <div style={{ 
            width: '40px', height: '40px', borderRadius: '10px', 
            background: 'rgba(139, 46, 62, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--aura-crimson-deep)'
          }}>
            <Icon size={20} />
          </div>
        )}
      </div>
      {change !== undefined && (
        <p style={{ 
          fontSize: 'var(--font-size-body-xs)', 
          color: isPositive ? 'var(--aura-success)' : 'var(--aura-error)',
          marginTop: 'var(--space-1)'
        }}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}% from last month
        </p>
      )}
    </div>
  );
}
