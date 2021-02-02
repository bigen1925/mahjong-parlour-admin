// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const guests = await prisma.guest.findMany();

    return res.json(guests);
};
