import { db }from "@/lib/db";

const getUserByUsername = async (username) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      externalUserId: true,
      username: true,
      bio: true,
      imageUrl: true,
      stream: {
        select: {
          id: true,
          isLive: true,
          isChatEnabled: true,
          thumbnailUrl: true,
          name: true,
        },
      },
    },
  });
  
  return user;
};

const getUserById = async (id) => {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      stream: true,
    },
  });

  return user;
};

module.exports = { getUserByUsername, getUserById };
