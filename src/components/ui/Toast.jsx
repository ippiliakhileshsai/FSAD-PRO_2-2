import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

const ICONS = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export default function Toast() {
  const { toast, setToast } = useUIStore();

  if (!toast) return null;

  const Icon = ICONS[toast.type] || Info;

  return (
    <div className="toast-container">
      <div className={`toast toast-${toast.type}`}>
        <Icon size={18} />
        <span style={{ flex: 1 }}>{toast.message}</span>
        <button 
          className="toast-close" 
          onClick={() => setToast(null)}
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
