"use client";

import { useEffect, useRef, useState } from "react";
import { Toolbar } from "./Toolbar";

export function RoomCanvas({ roomId }: { roomId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState("pen");

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    let drawing = false;

    const onMouseDown = (e: MouseEvent) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!drawing) return;
      if (tool === "pen") {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    };

    const onMouseUp = () => (drawing = false);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
    };
  }, [tool]);

  return (
    <div className="w-screen h-screen">
      <Toolbar onSelectTool={setTool} />

      <canvas
        ref={canvasRef}
        width={1200}
        height={700}
        className="border w-full h-full"
      />
    </div>
  );
}
