import { useNavigate } from 'react-router-dom';
import ActionCard from './ActionCard';
import { Brain, Video, Users, Sparkles } from 'lucide-react';

const actions = [
  { id: 'mental', icon: Brain, label: 'Mental Health', theme: 'navy', path: '/feature/mental-health' },
  { id: 'therapy', icon: Video, label: 'Book Therapy', theme: 'sage', path: '/feature/therapy' },
  { id: 'groups', icon: Users, label: 'Support Groups', theme: 'gold', path: '/feature/support-groups' },
  { id: 'healing', icon: Sparkles, label: 'Self-Healing', theme: 'lavender', path: '/feature/self-healing' },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-card">
      <h3>Quick Actions</h3>
      <div className="quick-actions-grid">
        {actions.map(action => (
          <ActionCard 
            key={action.id} 
            {...action} 
            onClick={() => navigate(action.path)}
          />
        ))}
      </div>
    </div>
  );
}
