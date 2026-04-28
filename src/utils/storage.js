const PREFIX = 'aurawell_';

export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(`${PREFIX}${key}`);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    } catch (error) {
      console.warn('LocalStorage set error:', error);
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(`${PREFIX}${key}`);
    } catch (error) {
      console.warn('LocalStorage remove error:', error);
    }
  },

  clear: () => {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(PREFIX))
        .forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.warn('LocalStorage clear error:', error);
    }
  }
};
