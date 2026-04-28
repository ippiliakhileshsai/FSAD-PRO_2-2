import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Eye } from 'lucide-react';

export default function IncognitoButton() {
  const navigate = useNavigate();
  const { setIncognito } = useAuthStore();

  const handleIncognito = () => {
    setIncognito();
    navigate('/dashboard');
  };

  return (
    <button 
      className="btn btn-ghost"
      onClick={handleIncognito}
      type="button"
      style={{ 
        width: '100%', 
        marginTop: 'var(--space-2)',
        fontSize: 'var(--font-size-body-xs)',
        textTransform: 'none',
        letterSpacing: 'normal'
      }}
    >
      <Eye size={16} />
      Explore without an account
    </button>
  );
}
