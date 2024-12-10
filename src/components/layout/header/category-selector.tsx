// src/components/layout/header/category-selector.tsx
import { IconChevronRight } from "@/components/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type Category = {
	id: string;
	name: string;
	children?: {
		id: string;
		name: string;
	}[];
};

const categories: Category[] = [
	{ id: "all", name: "All" },
	{
		id: "avatars",
		name: "Avatars",
		children: [
			{ id: "human-like", name: "Human-like" },
			{ id: "anthro-furry", name: "Anthro & Furry" },
			{ id: "robot-cyborgs", name: "Robot & Cyborgs" },
			{ id: "others", name: "Others" },
			{ id: "all-avatars", name: "All in Avatars" },
		],
	},
	{
		id: "fashion",
		name: "Fashion",
		children: [
			{ id: "clothes", name: "Clothes" },
			{ id: "accessories", name: "Accessories" },
			{ id: "others-fashion", name: "Others" },
			{ id: "all-fashion", name: "All in Fashion" },
		],
	},
];

interface CategorySelectorProps {
	onCategoryChange?: (category: string) => void;
}

export function CategorySelector({ onCategoryChange }: CategorySelectorProps) {
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);
	const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
		null,
	);
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleCategorySelect = (e: React.MouseEvent, category: Category) => {
		e.preventDefault();
		setSelectedCategory(category);
		setSelectedSubCategory(null);
		if (!category.children) {
			onCategoryChange?.(category.name);
		}
	};

	const handleSubCategorySelect = (
		e: React.MouseEvent,
		subCategoryName: string,
	) => {
		e.preventDefault();
		setSelectedSubCategory(subCategoryName);
		onCategoryChange?.(subCategoryName);
		setIsOpen(false);
	};

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<div className="flex flex-col items-start cursor-pointer w-full">
					<span className="text-xs font-bold text-app-gray">Category</span>
					<button className="text-app-gray leading-[1.5] flex items-center gap-2 w-full whitespace-nowrap line-clamp-1">
						{selectedSubCategory || selectedCategory?.name || "All"}
					</button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align={isMobile ? "center" : "start"}
				className={cn(
					"bg-app-background-3",
					"p-4",
					isMobile
						? "w-[256px] rounded-2xl"
						: "w-[444px] h-[352px] grid grid-cols-2 rounded-[32px]",
				)}
			>
				{isMobile ? (
					<div className="space-y-1">
						{categories.map((category) => (
							<div key={category.id}>
								<DropdownMenuItem
									className={cn(
										"rounded-full flex items-center justify-between p-3",
										"hover:bg-[#655D5E] focus:bg-[#655D5E]",
										selectedCategory?.id === category.id && "bg-[#655D5E]",
									)}
									onClick={(e) => handleCategorySelect(e, category)}
								>
									{category.name}
									{category.children && (
										<IconChevronRight className="h-4 w-4" />
									)}
								</DropdownMenuItem>

								{selectedCategory?.id === category.id && category.children && (
									<div className="pl-2 space-y-1 mt-1 border-t border-app-border-gray">
										{category.children.map((subCategory) => (
											<DropdownMenuItem
												key={subCategory.id}
												className={cn(
													"rounded-full p-3",
													"hover:bg-[#655D5E] focus:bg-[#655D5E]",
													selectedSubCategory === subCategory.name &&
														"bg-[#655D5E]",
												)}
												onClick={(e) =>
													handleSubCategorySelect(e, subCategory.name)
												}
											>
												{subCategory.name}
											</DropdownMenuItem>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				) : (
					<>
						<div className="pr-[6px]">
							{categories.map((category) => (
								<DropdownMenuItem
									key={category.id}
									className={cn(
										"rounded-full flex items-center justify-between p-2",
										"hover:bg-[#655D5E] focus:bg-[#655D5E] text-base",
										selectedCategory?.id === category.id && "bg-[#655D5E]",
									)}
									onClick={(e) => handleCategorySelect(e, category)}
								>
									{category.name}
									{category.children && (
										<IconChevronRight className="h-4 w-4" />
									)}
								</DropdownMenuItem>
							))}
						</div>
						{selectedCategory?.children && (
							<div className="border-l border-app-border-gray pl-[6px]">
								{selectedCategory.children.map((subCategory) => (
									<DropdownMenuItem
										key={subCategory.id}
										className={cn(
											"rounded-full flex items-center justify-between p-2",
											"hover:bg-[#655D5E] focus:bg-[#655D5E] text-base",
											selectedSubCategory === subCategory.name &&
												"bg-[#655D5E]",
										)}
										onClick={(e) =>
											handleSubCategorySelect(e, subCategory.name)
										}
									>
										{subCategory.name}
									</DropdownMenuItem>
								))}
							</div>
						)}
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
