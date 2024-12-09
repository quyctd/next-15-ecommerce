import { Star } from "lucide-react";

interface ProductRatingProps {
	rating: number;
}

export function ProductRating({ rating }: ProductRatingProps) {
	return (
		<div className="flex items-center gap-1">
			<div className="flex">
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						className={`h-4 w-4 ${
							i < Math.floor(rating)
								? "fill-app-primary text-app-primary"
								: "fill-white text-white"
						}`}
					/>
				))}
			</div>
			<span className="text-sm leading-[1.5]">{rating.toFixed(1)}</span>
		</div>
	);
}
