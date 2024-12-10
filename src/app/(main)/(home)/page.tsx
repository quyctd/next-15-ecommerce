"use client";

import { ProductCard } from "@/components/product/product-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategoryParams } from "@/hooks/use-category-params";
import { useProducts } from "@/hooks/use-products";
import { Ghost } from "lucide-react";
import { useQueryState } from "nuqs";

export default function Home() {
	const { category, subCategory } = useCategoryParams();
	const [search] = useQueryState("q");
	const [priceMin] = useQueryState("priceMin");
	const [priceMax] = useQueryState("priceMax");
	const [platforms] = useQueryState("platforms", {
		parse: (value: string) => value.split(","),
		serialize: (value: string[]) => value.join(","),
	});

	const { data: products, isFetching } = useProducts({
		category: category?.id,
		subcategory: subCategory?.id,
		search,
		priceMin,
		priceMax,
		platforms,
	});

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

			{isFetching ? (
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8">
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i} className="space-y-3">
							<AspectRatio ratio={1}>
								<Skeleton className="h-full w-full rounded-xl" />
							</AspectRatio>
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
							<Skeleton className="h-4 w-1/2" />
						</div>
					))}
				</div>
			) : products && products.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-6 gap-y-6 sm:gap-y-8">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-12 text-app-secondary">
					<Ghost className="h-12 w-12 mb-4" />
					<h3 className="text-lg font-semibold">No products found</h3>
					<p className="text-sm">Try adjusting your filters or search terms</p>
				</div>
			)}
		</div>
	);
}
