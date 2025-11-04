
import axios from "axios";

import { BACKEND_URL, WS_URL } from "../config";

async function getRoom(slug: string) {
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
  return response.data.id;
}

export default async function ChatRoom({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  const roomId = await getRoom(slug);

  return (
    <div>
      <h1>Room ID: {roomId}</h1>
    </div>
  );
}