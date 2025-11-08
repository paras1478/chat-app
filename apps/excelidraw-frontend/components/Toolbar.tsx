"use client";

// ✅ export the Tool type
export type Tool = "pen" | "rectangle" | "circle" | "eraser";

interface ToolbarProps {
  onSelectTool: (tool: Tool) => void;
}

export function Toolbar({ onSelectTool }: ToolbarProps) {
  return (
    <div className="flex gap-2 p-2 border-b bg-red-500 text-white">
      <button onClick={() => onSelectTool("pen")}>✏️ Pen</button>
      <button onClick={() => onSelectTool("rectangle")}>▭ Rectangle</button>
      <button onClick={() => onSelectTool("circle")}>⚪ Circle</button>
      <button onClick={() => onSelectTool("eraser")}>🧽 Eraser</button>
    </div>
  );
}
