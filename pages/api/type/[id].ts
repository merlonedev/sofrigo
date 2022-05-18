import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prisma";

type Type = {
	id: number;
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Type | null>
) {
	const { query } = req;
	const type = await prisma.type.findUnique({
		where: {
			id: Number(query.id),
		},
	});

	return res.status(200).json(type);
}
