const { PrismaClient } = require("@prisma/client");

if (process.env.NODE_ENV !== "production") {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
}

const db = global.prisma || new PrismaClient();

module.exports = { db };
