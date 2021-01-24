// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {Parlour} from "../../database/entities/Parlour";
import {connectDatabase} from "../../database/connection";


export default async (req: NextApiRequest, res:NextApiResponse) => {
  await connectDatabase()

  const parlour = await Parlour.find()

  return res.json(parlour)
}
