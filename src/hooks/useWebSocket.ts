import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { updateToken } from "@/store/slices/tokenSlice";

class MockWebSocket {
  private callbacks: ((data: any) => void)[] = [];
  private interval: NodeJS.Timeout | null = null;

  connect() {
    this.interval = setInterval(() => {
      const mockUpdate = {
        id: Math.random().toString(36).substr(2, 9),
        price: Math.random() * 100,
        change24h: (Math.random() - 0.5) * 20,
      };
      this.callbacks.forEach((cb) => cb(mockUpdate));
    }, 2000);
  }

  subscribe(callback: (data: any) => void) {
    this.callbacks.push(callback);
  }

  disconnect() {
    if (this.interval) clearInterval(this.interval);
  }
}

export const useWebSocket = () => {
  const dispatch = useAppDispatch();
  const wsRef = useRef<MockWebSocket | null>(null);

  useEffect(() => {
    wsRef.current = new MockWebSocket();
    wsRef.current.connect();

    wsRef.current.subscribe((data) => {
      dispatch(updateToken(data));
    });

    return () => {
      wsRef.current?.disconnect();
    };
  }, [dispatch]);
};
