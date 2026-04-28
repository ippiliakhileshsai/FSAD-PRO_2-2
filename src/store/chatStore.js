import { create } from 'zustand';

export const useChatStore = create((set, get) => ({
  socket: null,
  messages: [],
  isConnected: false,
  currentGroup: null,

  connect: (groupId) => {
    const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:8000';
    const socket = new WebSocket(`${wsUrl}/ws/groups/${groupId}`);

    socket.onopen = () => {
      set({ isConnected: true, currentGroup: groupId });
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      set((state) => ({
        messages: [...state.messages, message]
      }));
    };

    socket.onclose = () => {
      set({ isConnected: false, socket: null });
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      set({ isConnected: false });
    };

    set({ socket, messages: [] });
  },

  sendMessage: (content) => {
    const { socket } = get();
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ content }));
    }
  },

  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.close();
    }
    set({ socket: null, messages: [], isConnected: false, currentGroup: null });
  },

  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message]
    }));
  }
}));
