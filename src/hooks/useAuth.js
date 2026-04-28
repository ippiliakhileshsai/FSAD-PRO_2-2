import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const { user, token, isIncognito, setAuth, setIncognito, logout, updateUser } = useAuthStore();

  return {
    user,
    token,
    isIncognito,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'admin',
    setAuth,
    setIncognito,
    logout,
    updateUser,
  };
}
