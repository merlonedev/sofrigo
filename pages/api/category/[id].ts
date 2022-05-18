import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prisma";

type Category = {
	id: number;
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Category | null>
) {
	const { method, body, query } = req;

	switch (method) {
		default:
			const category = await prisma.category.findUnique({
				where: {
					id: Number(query.id),
				},
			});

			return res.status(200).json(category);
	}
}
