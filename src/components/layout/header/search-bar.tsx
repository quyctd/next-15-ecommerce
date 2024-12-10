"use client";

import { useQueryState } from "nuqs";
import { useState } from "react";

import { IconSearch } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { CategorySelector } from "./category-selector";
import { FilterAdjustments } from "./filter-adjustments";

export function SearchBar({
	className,
	style,
}: {
	className?: string;
	style?: React.CSSProperties;
}) {
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [search, setSearch] = useQueryState("q");
	const [inputValue, setInputValue] = useState(search ?? "");

	const handleSearch = () => {
		setSearch(inputValue || null);
	};

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
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</div>

				<Separator orientation="vertical" className="h-8" />

				<div className="flex items-center justify-between gap-6 p-2 pl-6 pr-1 w-full">
					<CategorySelector />

					<Button
						variant="ghost"
						size="icon"
						className="bg-app-primary hover:bg-app-primary-hover rounded-full min-w-10"
						onClick={handleSearch}
					>
						<IconSearch className="size-5 min-w-5 text-white" />
					</Button>
				</div>
			</div>
			<FilterAdjustments />
		</div>
	);
}
