export default function ActionCard({ icon: Icon, label, theme, onClick }) {
  return (
    <button className="action-card" onClick={onClick}>
      <div className={`action-card-icon ${theme}`}>
        <Icon size={22} />
      </div>
      <span className="action-card-title">{label}</span>
    </button>
  );
}
