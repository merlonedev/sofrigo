import { prisma } from "../prisma/prisma";

async function main() {
	const categories = await prisma.category.createMany({
		data: [
			{ name: "Luz" },
			{ name: "Gás" },
			{ name: "Aluguel" },
			{ name: "Condomínio" },
			{ name: "Mercado" },
			{ name: "Comida" },
			{ name: "Viagem" },
			{ name: "Carro" },
			{ name: "Estadia" },
		],
	});

	const types = await prisma.type.createMany({
		data: [{ name: "Saída" }, { name: "Entrada" }],
	});

	console.log({ categories, types });
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
