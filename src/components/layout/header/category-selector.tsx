import { IconChevronRight } from "@/components/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useCategoryParams } from "@/hooks/use-category-params";
import { categories } from "@/constants/categories";
import type { Category } from "@/types/category";

export function CategorySelector() {
	const { category, subCategory, setCategoryId, setSubCategoryId } =
		useCategoryParams();
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

	const handleCategorySelect = (
		e: React.MouseEvent,
		selectedCategory: Category,
	) => {
		e.preventDefault();
		setCategoryId(selectedCategory.id);
		setSubCategoryId(null);
		if (!selectedCategory.children) {
			setIsOpen(false);
		}
	};

	const handleSubCategorySelect = (
		e: React.MouseEvent,
		subCategoryId: string,
	) => {
		e.preventDefault();
		setSubCategoryId(subCategoryId);
		setIsOpen(false);
	};

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<div className="flex flex-col items-start cursor-pointer w-full">
					<span className="text-xs font-bold text-app-gray">Category</span>
					<button className="text-app-gray leading-[1.5] flex items-center gap-2 w-full whitespace-nowrap line-clamp-1">
						{subCategory?.name || category?.name || "All"}
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
						{categories.map((cat) => (
							<div key={cat.id}>
								<DropdownMenuItem
									className={cn(
										"rounded-full flex items-center justify-between p-3",
										"hover:bg-[#655D5E] focus:bg-[#655D5E]",
										cat.id === category?.id && "bg-[#655D5E]",
									)}
									onClick={(e) => handleCategorySelect(e, cat)}
								>
									{cat.name}
									{cat.children && <IconChevronRight className="h-4 w-4" />}
								</DropdownMenuItem>

								{cat.id === category?.id && cat.children && (
									<div className="pl-2 space-y-1 mt-1 border-t border-app-border-gray">
										{cat?.children.map((subCat) => (
											<DropdownMenuItem
												key={subCat.id}
												className={cn(
													"rounded-full p-3",
													"hover:bg-[#655D5E] focus:bg-[#655D5E]",
													subCat.id === subCategory?.id && "bg-[#655D5E]",
												)}
												onClick={(e) => handleSubCategorySelect(e, subCat.id)}
											>
												{subCat.name}
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
							{categories.map((cat) => (
								<DropdownMenuItem
									key={cat.id}
									className={cn(
										"rounded-full flex items-center justify-between p-2",
										"hover:bg-[#655D5E] focus:bg-[#655D5E] text-base",
										cat.id === category?.id && "bg-[#655D5E]",
									)}
									onClick={(e) => handleCategorySelect(e, cat)}
								>
									{cat.name}
									{cat.children && <IconChevronRight className="h-4 w-4" />}
								</DropdownMenuItem>
							))}
						</div>
						{category?.children && (
							<div className="border-l border-app-border-gray pl-[6px]">
								{category?.children.map((subCat) => (
									<DropdownMenuItem
										key={subCat.id}
										className={cn(
											"rounded-full flex items-center justify-between p-2",
											"hover:bg-[#655D5E] focus:bg-[#655D5E] text-base",
											subCat.id === subCategory?.id && "bg-[#655D5E]",
										)}
										onClick={(e) => handleSubCategorySelect(e, subCat.id)}
									>
										{subCat.name}
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
