import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const {name, categoryId} = await req.json();


    // Update the stream with the selected category
    const updatedStream = await prisma.stream.update({
      where: { name },
      data: { categoryId },
    });

    return new Response(JSON.stringify(updatedStream), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error updating stream category' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
