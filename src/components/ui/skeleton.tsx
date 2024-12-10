import { cn } from "@/lib/utils";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("animate-pulse rounded-md bg-app-background-2", className)}
			{...props}
		/>
	);
}

export { Skeleton };
