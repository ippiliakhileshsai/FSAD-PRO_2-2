import { Upload } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Button from '../ui/Button';

export default function ContentUpload() {
  return (
    <div className="dashboard-card">
      <h3>Upload Content</h3>
      <Select
        id="content-type"
        label="Content Type"
        placeholder="Select type..."
        options={[
          { value: 'video', label: 'Video' },
          { value: 'article', label: 'Article' },
        ]}
      />
      <Input id="content-title" label="Title" placeholder="Enter content title" />
      <Textarea id="content-description" label="Description" placeholder="Describe the content..." />
      <Select
        id="content-feature"
        label="Feature Category"
        placeholder="Select category..."
        options={[
          { value: 'mental-health', label: 'Mental Health' },
          { value: 'therapy', label: 'Therapy' },
          { value: 'support-groups', label: 'Support Groups' },
          { value: 'character', label: 'Character Decode' },
          { value: 'self-healing', label: 'Self-Healing' },
        ]}
      />
      <div style={{ 
        border: '2px dashed var(--aura-border-medium)', 
        borderRadius: '12px', 
        padding: 'var(--space-6)',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: 'var(--space-3)',
        transition: 'border-color 200ms ease'
      }}>
        <Upload size={32} style={{ color: 'var(--aura-text-tertiary)', marginBottom: 'var(--space-2)' }} />
        <p style={{ fontSize: 'var(--font-size-body-sm)', color: 'var(--aura-text-secondary)' }}>
          Drop files here or click to upload
        </p>
        <p style={{ fontSize: 'var(--font-size-body-xs)', color: 'var(--aura-text-tertiary)' }}>
          MP4, MOV (max 500MB) or PDF, DOCX (max 10MB)
        </p>
      </div>
      <Button variant="primary" style={{ width: '100%' }}>
        <Upload size={16} />
        Upload Content
      </Button>
    </div>
  );
}
