import { MOCK_PRODUCTS } from "@/constants/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// Simulate network latency (500-1500ms delay)
	await new Promise((resolve) =>
		setTimeout(resolve, Math.random() * 1000 + 500),
	);

	const { searchParams } = new URL(request.url);
	const category = searchParams.get("category");
	const subcategory = searchParams.get("subcategory");
	const search = searchParams.get("q");

	let filteredProducts = [...MOCK_PRODUCTS];

	if (category) {
		filteredProducts = filteredProducts.filter(
			(product) => product.categoryId === category,
		);
	}

	if (subcategory) {
		filteredProducts = filteredProducts.filter(
			(product) => product.subCategoryId === subcategory,
		);
	}

	if (search) {
		filteredProducts = filteredProducts.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase()),
		);
	}

	return NextResponse.json(filteredProducts);
}
