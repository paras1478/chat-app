"use client";

import { useRef, useEffect, useState } from "react";

interface ToolbarProps {
  onSelectTool: (tool: string) => void;
}

function Toolbar({ onSelectTool }: ToolbarProps) {
  return (
    <div className="flex gap-3 p-2 bg-gray-600 border-b shadow">
      <button onClick={() => onSelectTool("pen")}>✏️ Pen</button>
      <button onClick={() => onSelectTool("rectangle")}>⬛ Rectangle</button>
      <button onClick={() => onSelectTool("circle")}>⚪ Circle</button>
      <button onClick={() => onSelectTool("erase")}>🧽 Erase</button>
    </div>
  );
}

export default function CanvasPage({ params }: { params: Promise<{ roomid: string }> }) {
  const [roomId, setRoomId] = useState<string | null>(null);
  const [tool, setTool] = useState("pen");
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const start = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // unwrap `params` (Next.js 16 behavior)
  useEffect(() => {
    params.then((p) => setRoomId(p.roomid));
  }, [params]);

  // handle canvas resizing
  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight - 60,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // handle drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getPos = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleDown = (e: MouseEvent) => {
      isDrawing.current = true;
      start.current = getPos(e);

      if (tool === "pen") {
        ctx.beginPath();
        ctx.moveTo(start.current.x, start.current.y);
      } else if (tool === "erase") {
        ctx.clearRect(start.current.x - 10, start.current.y - 10, 20, 20);
      }
    };

    const handleMove = (e: MouseEvent) => {
      if (!isDrawing.current) return;
      const pos = getPos(e);

      if (tool === "pen") {
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (tool === "erase") {
        ctx.clearRect(pos.x - 10, pos.y - 10, 20, 20);
      }
    };

    const handleUp = (e: MouseEvent) => {
      if (!isDrawing.current) return;
      isDrawing.current = false;

      const end = getPos(e);

      if (tool === "rectangle") {
        const w = end.x - start.current.x;
        const h = end.y - start.current.y;
        ctx.strokeStyle = "black";
        ctx.strokeRect(start.current.x, start.current.y, w, h);
      } else if (tool === "circle") {
        const dx = end.x - start.current.x;
        const dy = end.y - start.current.y;
        const r = Math.sqrt(dx * dx + dy * dy);
        ctx.beginPath();
        ctx.arc(start.current.x, start.current.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
    };

    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      canvas.removeEventListener("mousedown", handleDown);
      canvas.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [tool]);

  return (
  <div className="h-screen flex flex-col">
    <Toolbar onSelectTool={setTool} />
    <div className="flex-1 relative bg-white">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="absolute top-0 left-0 border"
      />
      <div className="absolute bottom-2 left-2 bg-black text-white text-sm px-3 py-1 rounded shadow">
        Room ID: {roomId ?? "Loading..."} | Tool: {tool}
      </div>
    </div>
  </div>
);

}
