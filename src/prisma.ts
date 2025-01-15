import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1';
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2';

export const db1 = new PrismaClient1();
export const db2 = new PrismaClient2();