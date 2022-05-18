// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/prisma";

type Categories = {
	id: number;
	name: string;
}[];

type Created = {
	id: number
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Categories | Created>
) {
	const { method, body } = req;

	switch (method) {
		case "POST":
			const created = await prisma.category.create({
				data: {
					...body,
				},
			});

			return res.status(201).json(created);
		default:
			const categories = await prisma.category.findMany({});
			res.status(200).json(categories);
	}
}
