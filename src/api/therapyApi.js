import client from './client';

export const therapyApi = {
  getTherapists: async () => {
    const response = await client.get('/therapy/therapists');
    return response.data;
  },

  getTherapist: async (id) => {
    const response = await client.get(`/therapy/therapists/${id}`);
    return response.data;
  },

  getAvailability: async (therapistId, date) => {
    const response = await client.get(`/therapy/therapists/${therapistId}/availability`, {
      params: { date }
    });
    return response.data;
  },

  createBooking: async (therapistId, dateTime) => {
    const response = await client.post('/therapy/bookings', { therapist_id: therapistId, date_time: dateTime });
    return response.data;
  },

  getMyBookings: async () => {
    const response = await client.get('/therapy/bookings');
    return response.data;
  }
};
