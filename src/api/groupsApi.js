import client from './client';

export const groupsApi = {
  getGroups: async () => {
    const response = await client.get('/groups');
    return response.data;
  },

  getGroup: async (id) => {
    const response = await client.get(`/groups/${id}`);
    return response.data;
  },

  joinGroup: async (groupId) => {
    const response = await client.post(`/groups/${groupId}/join`);
    return response.data;
  },

  leaveGroup: async (groupId) => {
    const response = await client.post(`/groups/${groupId}/leave`);
    return response.data;
  },

  getPosts: async (groupId) => {
    const response = await client.get(`/groups/${groupId}/posts`);
    return response.data;
  },

  createPost: async (groupId, content) => {
    const response = await client.post(`/groups/${groupId}/posts`, { content });
    return response.data;
  }
};
