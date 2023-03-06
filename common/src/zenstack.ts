import { PrismaClient } from '@prisma/client';
import { withPresets } from '@zenstackhq/runtime';

export const prisma = new PrismaClient();
export const zenstackClient = withPresets(prisma);
