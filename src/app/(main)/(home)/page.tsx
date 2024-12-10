import { ProductCard } from "@/components/product/product-card";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
	return (
		<div className="p-4">
			<Breadcrumb className="mb-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Parent Category</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Children Category</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

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
