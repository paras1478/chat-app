import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("✅ WebSocket Connected");
      setLoading(false);
      setSocket(ws);
    };

    ws.onerror = () => {
      console.error("❌ WebSocket Error");
    };

    return () => {
      ws.close();
      console.log("🔌 WebSocket Closed");
    };
  }, []);

  return { socket, loading };
}
