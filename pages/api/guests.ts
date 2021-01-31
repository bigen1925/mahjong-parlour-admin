// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    return res.json([
        { id: '1', lastName: '山田', firstName: '太郎' },
        { id: '2', lastName: '鈴木', firstName: '花子' },
        { id: '3', lastName: 'Doe', firstName: 'John' },
        { id: '4', lastName: 'Doe', firstName: 'Jane' },
    ]);
};
