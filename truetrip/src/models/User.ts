import { prisma } from "@/lib/prisma";

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return await prisma.user.create({ data });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};
