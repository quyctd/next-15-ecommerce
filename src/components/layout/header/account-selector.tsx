import { IconAccount, IconMenu } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AccountSelector({ className }: { className?: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className={cn("rounded-full h-12 w-auto p-2 gap-[10px]", className)}
				>
					<IconMenu className="h-5 w-5" />
					<IconAccount className="h-8 w-8" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[240px]">
				<DropdownMenuItem asChild>
					<Link href="/signin" className="cursor-pointer">
						Sign in
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/signup" className="cursor-pointer">
						Sign up
					</Link>
				</DropdownMenuItem>
				<Separator className="my-2" />
				<DropdownMenuItem asChild>
					<Link href="/list" className="cursor-pointer">
						List your item
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/message" className="cursor-pointer">
						Message to Yuta(The founder)
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
