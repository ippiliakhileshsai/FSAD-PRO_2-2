import { useNavigate } from 'react-router-dom';
import { NeonAuthUIProvider } from '@neondatabase/auth-ui';
import { authClient } from './lib/auth';

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  return (
    <NeonAuthUIProvider
      authClient={authClient.auth || authClient}
      navigate={navigate}
      replace={(path) => navigate(path, { replace: true })}
      onSessionChange={() => {}}
      redirectTo="/dashboard"
    >
      {children}
    </NeonAuthUIProvider>
  );
}
