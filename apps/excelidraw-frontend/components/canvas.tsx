"use client";
import { initDraw } from "draw";

import { useEffect, useRef, useState } from "react";

export function Canvas({ roomId }: { roomId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      (canvasRef.current, roomId);
    }
  }, [roomId]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      className="absolute top-0 left-0 border"
    />
  );
}
