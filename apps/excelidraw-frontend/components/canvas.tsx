"use client"
import { initDraw } from "draw";
import { useEffect,useRef} from "react";


export function Canvas ({
    roomId
}:{
    roomId: String
}){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current,); 
    }
  }, [roomId]);
    return  <div>
        <canvas ref={canvasRef} width={2000} height={1000}></canvas>
    </div>
}