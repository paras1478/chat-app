import { Tool } from "components/Toolbar";

import { getExistingShapes } from "./https";

type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    }
  | {
      type: "pencil";
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    };

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private existingShapes: Shape[];
  private roomId: string;
  private clicked: boolean;
  private startX = 0;
  private startY = 0;
  private lastX = 0;
  private lastY = 0;
  private selectedTool: Tool = "circle";

  socket: WebSocket;

  constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.existingShapes = [];
    this.roomId = roomId;
    this.socket = socket;
    this.clicked = false;

    this.init();
    this.initHandlers();
    this.initMouseHandlers();
  }

  destroy() {
    this.canvas.removeEventListener("mousedown", this.mouseDownHandler);
    this.canvas.removeEventListener("mouseup", this.mouseUpHandler);
    this.canvas.removeEventListener("mousemove", this.mouseMoveHandler);
  }

  setTool(tool: Tool) {
    this.selectedTool = tool;
  }

  async init() {
    this.existingShapes = await getExistingShapes(this.roomId);
    this.clearCanvas();
  }

  initHandlers() {
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type == "chat") {
        const parsedShape = JSON.parse(message.message);
        this.existingShapes.push(parsedShape.shape);
        this.clearCanvas();
      }
    };
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(0,0,0)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.existingShapes.forEach((shape) => {
      this.ctx.strokeStyle = "white";

      if (shape.type === "rect") {
        this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      }

      if (shape.type === "circle") {
        this.ctx.beginPath();
        this.ctx.arc(
          shape.centerX,
          shape.centerY,
          Math.abs(shape.radius),
          0,
          Math.PI * 2
        );
        this.ctx.stroke();
        this.ctx.closePath();
      }

      if (shape.type === "pencil") {
        this.ctx.beginPath();
        this.ctx.moveTo(shape.startX, shape.startY);
        this.ctx.lineTo(shape.endX, shape.endY);
        this.ctx.stroke();
      }
    });
  }

  getCanvasCoords(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  mouseDownHandler = (e: MouseEvent) => {
    this.clicked = true;
    const { x, y } = this.getCanvasCoords(e);

    this.startX = x;
    this.startY = y;
    this.lastX = x;
    this.lastY = y;
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (!this.clicked) return;

    const { x, y } = this.getCanvasCoords(e);

    this.clearCanvas();
    this.ctx.strokeStyle = "white";

    const width = x - this.startX;
    const height = y - this.startY;

    if (this.selectedTool === "rectangle") {
      this.ctx.strokeRect(this.startX, this.startY, width, height);
    } else if (this.selectedTool === "circle") {
      const radius = Math.sqrt(width * width + height * height);
      this.ctx.beginPath();
      this.ctx.arc(this.startX, this.startY, radius, 0, Math.PI * 2);
      this.ctx.stroke();
    } else if (this.selectedTool === "pen")
 {
      // pencil draws continuously
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      // push stroke live to others
      this.socket.send(
        JSON.stringify({
          type: "chat",
          roomId: this.roomId,
          message: JSON.stringify({
            shape: {
              type: "pencil",
              startX: this.lastX,
              startY: this.lastY,
              endX: x,
              endY: y,
            },
          }),
        })
      );

      this.existingShapes.push({
        type: "pencil",
        startX: this.lastX,
        startY: this.lastY,
        endX: x,
        endY: y,
      });
      this.lastX = x;
      this.lastY = y;
    }
  };

  mouseUpHandler = (e: MouseEvent) => {
    this.clicked = false;
    const { x, y } = this.getCanvasCoords(e);

    let shape: Shape | null = null;

    const width = x - this.startX;
    const height = y - this.startY;

   if (this.selectedTool === "rectangle") {
      shape = {
        type: "rect",
        x: this.startX,
        y: this.startY,
        width,
        height,
      };
    } else if (this.selectedTool === "circle") {
      const radius = Math.sqrt(width * width + height * height);
      shape = {
        type: "circle",
        centerX: this.startX,
        centerY: this.startY,
        radius,
      };
    }

    if (!shape) return;

    this.existingShapes.push(shape);

    this.socket.send(
      JSON.stringify({
        type: "chat",
        roomId: this.roomId,
        message: JSON.stringify({ shape }),
      })
    );
  };

  initMouseHandlers() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler);
    this.canvas.addEventListener("mouseup", this.mouseUpHandler);
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
  }
}
