"use client";

import { ProductCard } from "@/components/product/product-card";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MOCK_PRODUCTS } from "@/constants/products";
import { useCategoryParams } from "@/hooks/use-category-params";
import { useMemo } from "react";

export default function Home() {
	const { category, subCategory } = useCategoryParams();

	const filteredProducts = useMemo(() => {
		return MOCK_PRODUCTS.filter((product) => {
			if (category && product.categoryId !== category.id) return false;
			if (subCategory && product.subCategoryId !== subCategory.id) return false;
			return true;
		});
	}, [category, subCategory]);

	return (
		<div className="p-4">
			<Breadcrumb className="mb-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">All Categories</BreadcrumbLink>
					</BreadcrumbItem>

					{category && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								{subCategory ? (
									<BreadcrumbLink href={`/?category=${category.id}`}>
										{category.name}
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage>{category.name}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
						</>
					)}

					{subCategory && category && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{subCategory.name}</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8">
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}
