import GroupCard from './GroupCard';

const mockGroups = [
  { id: 1, name: 'Anxiety Warriors', mood: 'Supportive', memberCount: 128, description: 'A safe space for those dealing with anxiety. Share coping strategies, support one another, and grow together.', isJoined: false },
  { id: 2, name: 'Study Stress Support', mood: 'Motivating', memberCount: 256, description: 'Navigate academic pressure with peers who understand. Tips, encouragement, and real talk about student life.', isJoined: true },
  { id: 3, name: 'Mindful Living', mood: 'Peaceful', memberCount: 89, description: 'Practice mindfulness together. Daily check-ins, meditation sessions, and gratitude sharing.', isJoined: false },
  { id: 4, name: 'Breaking Through Depression', mood: 'Hopeful', memberCount: 175, description: 'You are not alone. Connect with others who understand depression and find strength in community.', isJoined: false },
  { id: 5, name: 'Self-Care Circle', mood: 'Nurturing', memberCount: 204, description: 'Celebrate small wins, share self-care routines, and hold each other accountable for wellness.', isJoined: false },
  { id: 6, name: 'Relationship Healing', mood: 'Understanding', memberCount: 143, description: 'Process heartbreak, build healthier patterns, and learn about attachment styles together.', isJoined: false },
];

export default function GroupsList({ onJoin, onChat }) {
  return (
    <div className="groups-grid">
      {mockGroups.map(group => (
        <GroupCard 
          key={group.id} 
          {...group} 
          onJoin={() => onJoin?.(group)}
          onChat={() => onChat?.(group)}
        />
      ))}
    </div>
  );
}
