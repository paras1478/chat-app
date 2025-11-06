"use client";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false); // <-- this stores clicked state

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";

    const startDrawing = (e: MouseEvent) => {
      isDrawing.current = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const stopDrawing = () => {
      isDrawing.current = false;
      ctx.closePath();
    };

    const draw = (e: MouseEvent) => {
      if (!isDrawing.current) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    // Event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    // Cleanup listeners when component unmounts
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={1000} height={1000} className="border" />
    </div>
  );
}
