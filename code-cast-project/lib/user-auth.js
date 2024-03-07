const { currentUser } = require("@clerk/nextjs");
const { db } = require("@/lib/db");
import { redirect } from "next/navigation";


const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { externalUserId: self.id },
  });

  if (!user) {
    throw new Error("Not found");
  }

  return user;
};

const getSelfByUsername = async (username) => {
  const self = await currentUser();

  if (!self || !self.username) {
    //throw new Error("Unauthorized");
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { username },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (self.username !== user.username) {
    //throw new Error("Unauthorized");
    redirect("/");
  }

  return user;
};

module.exports = { getSelf, getSelfByUsername };
