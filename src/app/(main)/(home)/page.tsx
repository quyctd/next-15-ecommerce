import { ProductCard } from "@/components/product/product-card";

export default function Home() {
	return (
		<div className="p-4">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8">
				{Array.from({ length: 20 }).map((_, index) => (
					<ProductCard
						key={index}
						name="Product name"
						creator="Creator name"
						rating={0}
						price={10.5}
						image="https://picsum.photos/200/300"
					/>
				))}
			</div>
		</div>
	);
}
