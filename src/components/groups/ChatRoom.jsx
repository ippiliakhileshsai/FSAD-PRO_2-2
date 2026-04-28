import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import MessageBubble from './MessageBubble';

const mockMessages = [
  { id: 1, sender: 'Alex', content: 'Hey everyone, how are you all doing today?', time: '10:30 AM', isSelf: false },
  { id: 2, sender: 'You', content: 'Doing okay! Had a rough morning but feeling better now.', time: '10:32 AM', isSelf: true },
  { id: 3, sender: 'Jordan', content: 'Hang in there! We\'re all here for each other 💪', time: '10:33 AM', isSelf: false },
  { id: 4, sender: 'Sam', content: 'I tried that breathing exercise from yesterday and it really helped!', time: '10:35 AM', isSelf: false },
];

export default function ChatRoom({ group, onBack }) {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: 'You',
      content: input,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      isSelf: true
    }]);
    setInput('');
  };

  return (
    <div className="chat-room">
      <div className="chat-header">
        <button 
          className="navbar-icon-button" 
          onClick={onBack}
          aria-label="Back"
          style={{ color: 'var(--aura-text-primary)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-body-md)', fontWeight: 'var(--font-weight-semibold)' }}>
            {group?.name}
          </h4>
          <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>
            {group?.memberCount} members
          </p>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <MessageBubble key={msg.id} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          aria-label="Message input"
        />
        <button 
          className="chat-send-btn" 
          onClick={handleSend}
          disabled={!input.trim()}
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
