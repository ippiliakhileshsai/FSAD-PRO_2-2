import { useEffect, useCallback, useRef } from 'react';
import { useChatStore } from '../store/chatStore';

export function useWebSocket(groupId) {
  const { connect, disconnect, sendMessage, messages, isConnected } = useChatStore();
  const reconnectRef = useRef(null);

  useEffect(() => {
    if (groupId) {
      connect(groupId);
    }

    return () => {
      disconnect();
      if (reconnectRef.current) {
        clearTimeout(reconnectRef.current);
      }
    };
  }, [groupId, connect, disconnect]);

  const send = useCallback((content) => {
    sendMessage(content);
  }, [sendMessage]);

  return { messages, isConnected, send };
}
