// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const guests = [];
    for (let id = 1; id < 20; id++) {
        guests.push({ id: id + '', lastName: 'お客様' + id, firstName: 'さん' });
    }
    return res.json(guests);
};
