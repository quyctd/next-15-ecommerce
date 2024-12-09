import Image from "next/image";
import Link from "next/link";

import { ProductRating } from "@/components/product/product-rating";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Muted, P } from "@/components/ui/typography";
import { formatCurrency } from "@/lib/utils";

export interface ProductCardProps {
	name: string;
	creator: string;
	rating: number;
	price: number;
	image: string;
}

export function ProductCard({
	name,
	creator,
	rating,
	price,
	image,
}: ProductCardProps) {
	return (
		<Link href={`/product/${name}`}>
			<Card className="overflow-hidden border-none p-0">
				<AspectRatio ratio={1}>
					<Image
						src={image}
						alt={name}
						fill
						className="object-cover transition-all rounded-xl"
						sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
					/>
				</AspectRatio>
				<CardContent className="p-0 mt-2">
					<P className="font-bold text-sm line-clamp-1">{name}</P>
					<Muted className="line-clamp-1">{creator}</Muted>
					<ProductRating rating={rating} />
					<P className="font-bold text-sm">{formatCurrency(price)}</P>
				</CardContent>
			</Card>
		</Link>
	);
}
