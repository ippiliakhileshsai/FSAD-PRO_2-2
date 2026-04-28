import client from './client';

export const contentApi = {
  getVideos: async (params = {}) => {
    const { feature, pref } = params;
    const response = await client.get('/content/videos', {
      params: { feature, pref }
    });
    return response.data;
  },

  getArticles: async (params = {}) => {
    const { feature, pref } = params;
    const response = await client.get('/content/articles', {
      params: { feature, pref }
    });
    return response.data;
  }
};
