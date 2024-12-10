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
	const priceMin = searchParams.get("priceMin");
	const priceMax = searchParams.get("priceMax");
	const platforms = searchParams.get("platforms")?.split(",");

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

	if (priceMin) {
		filteredProducts = filteredProducts.filter(
			(product) => product.price >= Number(priceMin),
		);
	}

	if (priceMax) {
		filteredProducts = filteredProducts.filter(
			(product) => product.price <= Number(priceMax),
		);
	}

	if (platforms && platforms.length > 0) {
		filteredProducts = filteredProducts.filter((product) => {
			if (!product.platforms) return false;

			return product.platforms.some((platform) => platforms.includes(platform));
		});
	}

	return NextResponse.json(filteredProducts);
}
