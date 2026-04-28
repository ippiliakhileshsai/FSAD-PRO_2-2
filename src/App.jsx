import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PageTransition from './components/layout/PageTransition';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Toast from './components/ui/Toast';
import Spinner from './components/ui/Spinner';
import { AuthProvider } from './providers';

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

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Toast />
        <Suspense fallback={<LoadingFallback />}>
          <PageTransition>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />

            {/* PROTECTED ROUTES */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              }
            />

            {/* FEATURE ROUTES */}
            <Route path="/feature/mental-health" element={<MentalHealth />} />
            <Route path="/feature/therapy" element={<Therapy />} />
            <Route path="/feature/support-groups" element={<SupportGroups />} />
            <Route path="/feature/character" element={<CharacterDecode />} />
            <Route path="/feature/self-healing" element={<SelfHealing />} />

            {/* ADMIN ROUTE */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <Admin />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Suspense>
      </AuthProvider>
    </Router>
  );
}
