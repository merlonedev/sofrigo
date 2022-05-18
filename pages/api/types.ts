import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/prisma";

type Types = {
	id: number;
	name: string;
}[];

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Types>
) {
	const types = await prisma.type.findMany({});
	return res.status(200).json(types);
}
