import client from './client';

export const authApi = {
  signup: async (email, password) => {
    const response = await client.post('/auth/signup', { email, password });
    return response.data;
  },

  login: async (email, password) => {
    const response = await client.post('/auth/login', { email, password });
    return response.data;
  },

  googleAuth: async (googleToken) => {
    const response = await client.post('/auth/google', { token: googleToken });
    return response.data;
  },

  refresh: async (refreshToken) => {
    const response = await client.post('/auth/refresh', { refresh_token: refreshToken });
    return response.data;
  }
};
