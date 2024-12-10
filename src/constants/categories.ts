import type { Category } from "@/types/category";

export const categories: Category[] = [
	{ id: "all", name: "All" },
	{
		id: "avatars",
		name: "Avatars",
		children: [
			{ id: "human-like", name: "Human-like" },
			{ id: "anthro-furry", name: "Anthro & Furry" },
			{ id: "robot-cyborgs", name: "Robot & Cyborgs" },
			{ id: "others", name: "Others" },
			{ id: "all-avatars", name: "All in Avatars" },
		],
	},
	{
		id: "fashion",
		name: "Fashion",
		children: [
			{ id: "clothes", name: "Clothes" },
			{ id: "accessories", name: "Accessories" },
			{ id: "others-fashion", name: "Others" },
			{ id: "all-fashion", name: "All in Fashion" },
		],
	},
];
