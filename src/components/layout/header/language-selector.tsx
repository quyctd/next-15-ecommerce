"use client";

import { IconGlobe, IconJpFlag, IconUsFlag } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
	{
		label: "English(US)",
		value: "en-US",
		icon: IconUsFlag,
	},
	{
		label: "Japanese",
		value: "ja-JP",
		icon: IconJpFlag,
	},
] as const;

export function LanguageSelector({ className }: { className?: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className={cn(className)}>
					<IconGlobe className="h-5 w-5" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[200px]">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.value}
						className={cn(
							"flex items-center gap-2 cursor-pointer",
							lang.value === "en-US" && "bg-app-background-3",
						)}
					>
						<lang.icon className="h-3 w-auto" />
						{lang.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
