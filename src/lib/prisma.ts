import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";

const {DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME} = process.env;

const adapter = new PrismaMariaDb({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };