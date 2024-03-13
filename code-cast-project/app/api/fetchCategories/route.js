// --->    /api/categories/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  // search for all categories in our db
  const categories = await prisma.category.findMany();
  // for debugging ---> console.log(categories);
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
