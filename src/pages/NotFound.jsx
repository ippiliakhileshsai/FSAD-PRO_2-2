import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          Go Home
        </Link>
        <button className="btn btn-secondary" onClick={() => window.history.back()}>
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    </div>
  );
}
