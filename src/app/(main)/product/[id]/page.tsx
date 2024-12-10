"use client";

import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { ProductRating } from "@/components/product/product-rating";
import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H3, Muted, P } from "@/components/ui/typography";
import { MOCK_PRODUCTS } from "@/constants/products";
import { formatCurrency } from "@/lib/utils";
import { cartActions } from "@/stores/cart.atom";
import { useParams } from "next/navigation";

interface ProductSpec {
	label: string;
	value: string;
}

const specs: ProductSpec[] = [
	{ label: "Polygon amount(max)", value: "44090" },
	{ label: "Bone component", value: "PhysicsBone" },
	{ label: "Shader type", value: "lilToon Shader" },
	{ label: "Full tracking", value: "Yes" },
	{ label: "Eye tracking", value: "Yes" },
	{ label: "Face tracking", value: "Yes" },
	{ label: "Lip sync", value: "Yes" },
];

const tabs = [
	{
		label: "Overview",
		value: "overview",
		content: <div>Overview content</div>,
	},
	{ label: "Manual", value: "manual", content: <div>Manual content</div> },
	{
		label: "Update History",
		value: "updates",
		content: <div>Update History content</div>,
	},
];

const getProductDetail = async (id: string) => {
	const product = await fetch(`/api/products/${id}`);
	return product;
};

export default function ProductPage() {
	const { id } = useParams();
	const [selectedTab, setSelectedTab] = useState("overview");
	const setCart = useSetAtom(cartActions);

	const productDetail = MOCK_PRODUCTS.find((product) => product.id === id);

	const handleAddToCart = () => {
		if (!productDetail) return;

		setCart({
			type: "ADD_ITEM",
			payload: {
				id: productDetail.id,
				name: productDetail.name,
				price: productDetail.price,
				image: productDetail.image,
			},
		});
		toast.success("Added to cart");
	};

	if (!productDetail) return <div>Product not found</div>;

	return (
		<div className="py-4">
			<Breadcrumb className="mb-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{productDetail.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="relative">
					<Carousel className="w-full px-8">
						<CarouselContent>
							{Array.from({ length: 6 }).map((_, index) => (
								<CarouselItem key={index}>
									<div className="relative aspect-square">
										<Image
											src="https://picsum.photos/800/800"
											alt={`Product image ${index + 1}`}
											fill
											className="object-cover rounded-xl"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2" />
						<CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2" />
					</Carousel>
				</div>

				<div className="space-y-6">
					<div>
						<H3>{productDetail.name}</H3>
						<div className="flex items-center gap-4 mt-2">
							<ProductRating rating={0} />
							<Link href="/shop/hiro-japan" className="text-sm text-app-gray">
								HIRO JAPAN SHOP
							</Link>
						</div>
					</div>

					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<P className="text-2xl font-bold">{formatCurrency(50)}</P>
							<div className="space-x-2">
								<Button variant="outline" onClick={handleAddToCart}>
									Add to Cart
								</Button>
								<Button>Buy Now</Button>
							</div>
						</div>
						<Button variant="outline" disabled className="w-full">
							Buy as a gift <Badge>Soon</Badge>
						</Button>
					</div>

					<div className="space-y-4">
						<H3>Included file types</H3>
						<div className="flex gap-2">
							<Badge variant="outline">Unity package</Badge>
							<Badge variant="outline">FBX</Badge>
							<Badge variant="outline">PNG</Badge>
							<Badge variant="outline">PSD</Badge>
						</div>
					</div>

					<div className="space-y-4">
						<H3>Highlights of this product</H3>
						<div className="space-y-2">
							{specs.map((spec) => (
								<div key={spec.label} className="flex justify-between">
									<Muted>{spec.label}</Muted>
									<P>{spec.value}</P>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12">
				<Tabs
					className="w-full"
					value={selectedTab}
					onValueChange={setSelectedTab}
				>
					<TabsList>
						{tabs.map((tab) => (
							<TabsTrigger key={tab.value} value={tab.value}>
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>
					{tabs.map((tab) => (
						<TabsContent key={tab.value} value={tab.value} className="mt-6">
							{tab.content}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</div>
	);
}
