const { Webhook } = require('svix');
const {headers} = require('next/headers');


const {db}  = require('/lib/db');

async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  const eventType = evt.type;

  // Handling different event types
  if (eventType === "user.created") {



    // Logic for user.created event
    await db.user.create({
      data: {
        externalUserId: payload.data.id,
        username: payload.data.username,
        imageUrl: payload.data.image_url,
        stream: {
          create: {
            name: `${payload.data.username}'s stream`,
          },
        },
      },
    })
  } else if (eventType === "user.updated") {
    // Logic for user.updated event
    await db.user.update({
        where: {
            externalUserId: payload.data.id,
        },
        data: {
            username: payload.data.username,
            imageUrl: payload.data.image_url,
        }
    })
  } else if (eventType === "user.deleted") {
    // Logic for user.deleted event
    await db.user.delete({
        where: {
            externalUserId: payload.data.id,
        }
    })
  }

  return new Response('', { status: 200 });
}

module.exports = { POST };
