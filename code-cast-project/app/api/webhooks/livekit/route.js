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
  console.log(event);

  try {
    if (event.event === "participant_joined") {

      console.log(`${event.participant.identity} joined ${event.room.name}`);
      await db.stream.update({
        where: {
          name: event.room.name,
        },
        data: {
          isLive: true,
        },
      });
    }

    if (event.event === "participant_left") {

    console.log(`${event.participant.identity} left room ${event.room.name}`);
    
    const leftParticipant = `${event.participant.identity}'s stream`;
// Check if participant that left is owner of room
    if (leftParticipant === event.room.name) {
      await db.stream.update({
        where: {
          name: event.room.name,
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
