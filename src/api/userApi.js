import client from './client';

export const userApi = {
  getProfile: async () => {
    const response = await client.get('/user/profile');
    return response.data;
  },

  updatePreferences: async (preferences) => {
    const response = await client.put('/user/preferences', { preferences });
    return response.data;
  }
};
