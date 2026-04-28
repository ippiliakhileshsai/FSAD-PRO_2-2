import { BarChart3, Users, Video, Settings } from 'lucide-react';

const navItems = [
  { id: 'overview', icon: BarChart3, label: 'Overview' },
  { id: 'therapists', icon: Users, label: 'Therapists' },
  { id: 'content', icon: Video, label: 'Content' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function AdminNav({ activeTab, onTabChange }) {
  return (
    <aside className="admin-sidebar">
      <h2>AuraWell Admin</h2>
      <nav>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`admin-nav-link ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
            style={{ width: '100%', border: 'none', cursor: 'pointer' }}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
