import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isIncognito: false,

      setAuth: (user, token, refreshToken) => {
        set({ 
          user, 
          token, 
          refreshToken, 
          isIncognito: false 
        });
      },

      setIncognito: () => {
        set({ 
          user: null, 
          token: null, 
          refreshToken: null,
          isIncognito: true 
        });
      },

      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData }
        }));
      },

      logout: () => {
        set({ 
          user: null, 
          token: null, 
          refreshToken: null,
          isIncognito: false 
        });
        window.location.href = '/';
      },

      isAuthenticated: () => {
        const { token } = get();
        return !!token;
      },

      isAdmin: () => {
        const { user } = get();
        return user?.role === 'admin';
      }
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);
