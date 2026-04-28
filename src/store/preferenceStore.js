import { create } from 'zustand';

const AVAILABLE_PREFERENCES = [
  'clinical',
  'spiritual',
  'inspirational',
  'research',
  'leaders'
];

export const usePreferenceStore = create((set, get) => ({
  selectedPreferences: [],
  
  togglePreference: (preference) => {
    if (!AVAILABLE_PREFERENCES.includes(preference)) {
      console.warn(`Invalid preference: ${preference}`);
      return;
    }

    set((state) => {
      const isSelected = state.selectedPreferences.includes(preference);
      
      return {
        selectedPreferences: isSelected
          ? state.selectedPreferences.filter(p => p !== preference)
          : [...state.selectedPreferences, preference]
      };
    });
  },
  
  setPreferences: (preferences) => {
    const validPreferences = preferences.filter(p => 
      AVAILABLE_PREFERENCES.includes(p)
    );
    set({ selectedPreferences: validPreferences });
  },

  clearPreferences: () => set({ selectedPreferences: [] }),

  hasMinimumSelected: () => {
    const { selectedPreferences } = get();
    return selectedPreferences.length >= 1;
  },

  isSelected: (preference) => {
    const { selectedPreferences } = get();
    return selectedPreferences.includes(preference);
  }
}));
