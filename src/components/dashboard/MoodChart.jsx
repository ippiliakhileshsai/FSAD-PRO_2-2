import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for demo - in production would come from API
const mockData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  mood: Math.floor(Math.random() * 5) + 4
}));

export default function MoodChart() {
  return (
    <div>
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: 'var(--font-size-body-xs)', 
        color: 'var(--aura-text-tertiary)',
        marginBottom: 'var(--space-2)'
      }}>
        Last 30 Days
      </p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10, fill: '#7A7A7A' }}
            interval={6}
          />
          <YAxis 
            domain={[1, 10]} 
            tick={{ fontSize: 10, fill: '#7A7A7A' }}
            width={30}
          />
          <Tooltip 
            contentStyle={{ 
              background: '#fff', 
              border: '1px solid #E5E5E5', 
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="mood" 
            stroke="#0D2C54" 
            strokeWidth={2}
            dot={{ r: 3, fill: '#0D2C54' }}
            activeDot={{ r: 5, fill: '#0D2C54' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
