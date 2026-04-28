import { Users, MessageCircle } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function GroupCard({ name, mood, memberCount, description, isJoined, onJoin, onChat }) {
  return (
    <div className="group-card">
      <div className="group-card-header">
        <h4 className="group-card-name">{name}</h4>
        <Badge variant="info">{mood}</Badge>
      </div>
      <p className="group-card-description">{description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="group-card-members">
          <Users size={14} />
          {memberCount} members
        </span>
        {isJoined ? (
          <Button variant="primary" size="sm" onClick={onChat}>
            <MessageCircle size={14} />
            Chat
          </Button>
        ) : (
          <Button variant="secondary" size="sm" onClick={onJoin}>
            Join Group
          </Button>
        )}
      </div>
    </div>
  );
}
