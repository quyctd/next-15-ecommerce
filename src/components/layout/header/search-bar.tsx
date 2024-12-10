"use client";

import { IconAdjustments, IconSearch } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FilterAdjustments } from "./filter-adjustments";

export function SearchBar({
	className,
	style,
}: {
	className?: string;
	style?: React.CSSProperties;
}) {
	const [isSearchFocused, setIsSearchFocused] = useState(false);

	return (
		<div
			className={cn("flex items-center gap-2 w-full justify-center", className)}
			style={style}
		>
			<div className="flex items-center w-full gap-1 bg-app-background-2 rounded-full h-12 min-w-[272px] max-w-[600px]">
				<div className="flex flex-col py-2 pl-6 w-full">
					<span
						className={cn(
							"text-xs font-bold text-app-gray transition-all duration-200 block",
							isSearchFocused
								? "opacity-0 translate-y-1 h-0"
								: "opacity-100 translate-y-0 h-[18px]",
						)}
					>
						Keyword
					</span>
					<Input
						type="search"
						placeholder="Search"
						className="bg-transparent border-none p-0 h-auto text-base text-white placeholder:text-neutral-500 focus-visible:ring-0"
						onFocus={() => setIsSearchFocused(true)}
						onBlur={() => setIsSearchFocused(false)}
					/>
				</div>

				<Separator orientation="vertical" className="h-8" />

				<div className="flex items-center justify-between gap-6 p-2 pl-6 pr-1 w-full">
					<div className="flex flex-col items-start">
						<span className="text-xs font-bold text-app-gray">Category</span>
						<button className="text-app-gray leading-[1.5]">All</button>
					</div>

					<Button
						variant="ghost"
						size="icon"
						className="bg-app-primary hover:bg-app-primary-hover rounded-full"
					>
						<IconSearch className="h-5 w-5 text-white" />
					</Button>
				</div>
			</div>
			<FilterAdjustments />
		</div>
	);
}
