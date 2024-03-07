import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";
import { db } from "@/lib/db";

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export async function POST(req) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("No authorization header", { status: 400 });
  }

  const event = await receiver.receive(body, authorization);


  try {
    if (event.event === "participant_joined") {
      await db.stream.update({
        where: {
          name: `${event.participant.identity}'s stream`,
        },
        data: {
          isLive: true,
        },
      });
    }

    if (event.event === "participant_left") {
        
// Check if there are no more participants in the room
    if (event.room.numParticipants === 0) {
      await db.stream.update({
        where: {
          name: `${event.participant.identity}'s stream`,
        },
        data: {
          isLive: false,
        },
      });
    }
    }

    return new Response("Event processed", { status: 200 });
  } catch (error) {
    console.error('Error processing event:', error);
    return new Response("Error occurred while processing event", { status: 500 });
  }
}
