import client from './client';

export const aiApi = {
  getRecommendations: async (preferences = []) => {
    const response = await client.get('/ai/recommendations', {
      params: { preferences: preferences.join(',') }
    });
    return response.data;
  },

  analyzeCharacter: async (answers) => {
    const response = await client.post('/ai/character-analysis', { answers });
    return response.data;
  }
};
