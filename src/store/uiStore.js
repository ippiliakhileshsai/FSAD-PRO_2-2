import { create } from 'zustand';

export const useUIStore = create((set, get) => ({
  isLoading: false,
  activeModal: null,
  toast: null,
  navScrolled: false,

  setLoading: (isLoading) => set({ isLoading }),
  
  setModal: (activeModal) => set({ activeModal }),
  
  closeModal: () => set({ activeModal: null }),

  setToast: (toast) => set({ toast }),
  
  showToast: (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    set({ toast: { id, message, type } });
    
    setTimeout(() => {
      set((state) => 
        state.toast?.id === id ? { toast: null } : state
      );
    }, duration);
  },

  setNavScrolled: (navScrolled) => set({ navScrolled }),
}));
