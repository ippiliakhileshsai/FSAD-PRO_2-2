import client from './client';

export const moodApi = {
  logMood: async (score, note = '') => {
    const response = await client.post('/mood', { score, note });
    return response.data;
  },

  getMoodHistory: async (days = 30) => {
    const response = await client.get('/mood/history', {
      params: { days }
    });
    return response.data;
  }
};
