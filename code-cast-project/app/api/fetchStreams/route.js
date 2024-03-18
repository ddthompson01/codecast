// --> /api/fetchStreams/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    // get url
    const url = new URL(req.url);
    // search url
    const searchParams = new URLSearchParams(url.search);
    // search for categoryName
    const categoryName = searchParams.get("categoryName");
    // console for debugging
    console.log(categoryName);
    
    // search db for live streams under category 
    const liveStreams = await prisma.stream.findMany({
      where: {
        category: {
          name: categoryName,
        },
        isLive: true,
      },
      include: {
        user: true
      }
    });

    return new Response(JSON.stringify(liveStreams), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error fetching live streams' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
