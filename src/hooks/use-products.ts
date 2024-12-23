import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

async function getProducts(params: {
	category?: string | null;
	subcategory?: string | null;
	search?: string | null;
	priceMin?: string | null;
	priceMax?: string | null;
	platforms?: string[] | null;
}) {
	const searchParams = new URLSearchParams();
	if (params.category) searchParams.set("category", params.category);
	if (params.subcategory) searchParams.set("subcategory", params.subcategory);
	if (params.search) searchParams.set("q", params.search);
	if (params.priceMin) searchParams.set("priceMin", params.priceMin);
	if (params.priceMax) searchParams.set("priceMax", params.priceMax);
	if (params.platforms)
		searchParams.set("platforms", params.platforms.join(","));

	const response = await fetch(`/api/products?${searchParams.toString()}`);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json() as Promise<Product[]>;
}

export function useProducts(params: {
	category?: string | null;
	subcategory?: string | null;
	search?: string | null;
	priceMin?: string | null;
	priceMax?: string | null;
	platforms?: string[] | null;
}) {
	return useQuery({
		queryKey: ["products", params],
		queryFn: () => getProducts(params),
	});
}
