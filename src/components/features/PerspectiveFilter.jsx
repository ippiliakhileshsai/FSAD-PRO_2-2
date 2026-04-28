import Tabs from '../ui/Tabs';
import { PREFERENCES } from '../../utils/constants';

const tabs = PREFERENCES.map(p => ({ id: p.id, label: p.title }));

export default function PerspectiveFilter({ activeFilter, onFilterChange }) {
  return (
    <div style={{ marginBottom: 'var(--space-6)' }}>
      <Tabs
        tabs={[{ id: 'all', label: 'All' }, ...tabs]}
        activeTab={activeFilter}
        onChange={onFilterChange}
      />
    </div>
  );
}
