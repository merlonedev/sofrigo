// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/prisma";

type Categories = {
	id: number;
	name: string;
}[];

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Categories>
) {
	const categories = await prisma.category.findMany({});

	res.status(200).json(categories);
}
