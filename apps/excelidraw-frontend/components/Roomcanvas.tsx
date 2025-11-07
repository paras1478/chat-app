import { initDraw } from "draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./canvas";

const WS_URL = "ws://localhost:3001";

export function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?roomId=${roomId}`);

    ws.onopen = () => {
      console.log("WebSocket connected");
      setSocket(ws);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => ws.close();
  }, [roomId]);

  useEffect(() => {
    if (socket && canvasRef.current) {
      initDraw(canvasRef.current);
    }
  }, [socket]);

  if (!socket) return <div>Connecting to server…</div>;

  return (
    <div>
  
      
    </div>
  );
}
