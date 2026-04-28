export default function Skeleton({ type = 'text', count = 1, className = '' }) {
  const items = Array.from({ length: count });

  return (
    <>
      {items.map((_, i) => (
        <div
          key={i}
          className={`skeleton skeleton-${type} ${className}`}
          style={type === 'text' ? { width: `${70 + Math.random() * 30}%` } : undefined}
        />
      ))}
    </>
  );
}
