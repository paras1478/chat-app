"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const [chats, setChats] = useState(messages);
  const [currentMessage, setCurrentMessage] = useState(""); // ✅ Added
  const { socket, loading } = useSocket();

  useEffect(() => {
    if (!socket || loading) return;

    // ✅ Join room
    socket.send(
      JSON.stringify({
        type: "join_room",
        roomId: id,
      })
    );

    // ✅ Listen to incoming messages
    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      if (parsedData.type === "chat") {
        setChats((prev) => [...prev, { message: parsedData.message }]);
      }
    };
  }, [socket, loading, id]);

  // ✅ Send message to server
  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    socket?.send(
      JSON.stringify({
        type: "chat",
        roomId: id,
        message: currentMessage,
      })
    );

    setCurrentMessage(""); // ✅ Clear input
  };

  return (
    <div>
      {chats.map((chat, idx) => (
        <div key={idx}>{chat.message}</div>
      ))}

      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)} // ✅ correct
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}
