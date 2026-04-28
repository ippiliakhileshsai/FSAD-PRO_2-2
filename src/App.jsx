import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PageTransition from './components/layout/PageTransition';
import Toast from './components/ui/Toast';
import Spinner from './components/ui/Spinner';

// Lazy load pages for code splitting
const Landing = lazy(() => import('./pages/Landing'));
const AuthPage = lazy(() => import('./pages/auth'));
const AccountPage = lazy(() => import('./pages/account'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MentalHealth = lazy(() => import('./pages/MentalHealth'));
const Therapy = lazy(() => import('./pages/Therapy'));
const SupportGroups = lazy(() => import('./pages/SupportGroups'));
const CharacterDecode = lazy(() => import('./pages/CharacterDecode'));
const SelfHealing = lazy(() => import('./pages/SelfHealing'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingFallback() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--aura-cream)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="lg" />
        <p style={{ 
          marginTop: 'var(--space-3)', 
          fontFamily: 'var(--font-body)',
          color: 'var(--aura-text-tertiary)',
          fontSize: 'var(--font-size-body-sm)'
        }}>
          Loading...
        </p>
      </div>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', fontFamily: 'monospace' }}>
          <h2>Something went wrong.</h2>
          <pre>{this.state.error.toString()}</pre>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Toast />
        <Suspense fallback={<LoadingFallback />}>
          <PageTransition>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Dashboard />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/signup" element={<Dashboard />} />

            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<AccountPage />} />

            {/* FEATURE ROUTES */}
            <Route path="/feature/mental-health" element={<MentalHealth />} />
            <Route path="/feature/therapy" element={<Therapy />} />
            <Route path="/feature/support-groups" element={<SupportGroups />} />
            <Route path="/feature/character" element={<CharacterDecode />} />
            <Route path="/feature/self-healing" element={<SelfHealing />} />

            {/* ADMIN ROUTE */}
            <Route path="/admin" element={<Admin />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </Router>
    </ErrorBoundary>
  );
}
