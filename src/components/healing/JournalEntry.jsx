import { useState } from 'react';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useUIStore } from '../../store/uiStore';

export default function JournalEntry({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { showToast } = useUIStore();

  const handleSave = () => {
    if (!content.trim()) {
      showToast('Please write something before saving.', 'warning');
      return;
    }
    const entry = {
      id: Date.now(),
      title: title || `Entry - ${new Date().toLocaleDateString()}`,
      content,
      date: new Date().toISOString()
    };
    onSave?.(entry);
    showToast('Journal entry saved! ✍️', 'success');
    setTitle('');
    setContent('');
  };

  return (
    <div className="journal-entry" style={{ background: 'var(--aura-pure-white)' }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Entry title (optional)"
        className="input-field"
        style={{ marginBottom: 'var(--space-2)', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h5)' }}
      />
      <Textarea
        id="journal-content"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's on your mind today? Write freely..."
        style={{ minHeight: '200px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-3)' }}>
        <Button variant="primary" onClick={handleSave}>
          Save Entry
        </Button>
      </div>
    </div>
  );
}
