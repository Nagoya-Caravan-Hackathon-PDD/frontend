import { useEffect, useState } from 'react';

export const useSocket = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log('connected');
    };

    ws.onmessage = (e) => {
      setData(e.data);
    };

    ws.onclose = () => {
      console.log('disconnected');
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return data;
};
