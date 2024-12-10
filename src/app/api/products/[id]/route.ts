import { MOCK_PRODUCTS } from "@/constants/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    // Simulate network latency (500-1500ms delay)
    await new Promise((resolve) =>
		setTimeout(resolve, Math.random() * 1000 + 500),
	);

    const product = MOCK_PRODUCTS.find((product) => product.id === params.id);

    if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}

    return NextResponse.json(product);
}
