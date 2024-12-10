import {
	IconAccount,
	IconGlobe,
	IconMenu,
	IconShoppingCart,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeaderActions() {
	return (
		<div className="flex items-center gap-6">
			<Button variant="outline" size="icon" className="rounded-full md:hidden">
				<IconMenu className="h-6 w-6" />
			</Button>

			<Link
				href="/list"
				className="text-sm leading-[1.5] hidden md:block whitespace-nowrap"
			>
				List your creation
			</Link>

			<Button variant="ghost" size="icon" className="hidden md:inline-flex">
				<IconGlobe className="h-5 w-5" />
			</Button>

			<Link href="/signin" className="hidden md:block">
				<Button
					variant="outline"
					className="rounded-full h-12 w-auto p-2 gap-[10px]"
				>
					<>
						<IconMenu className="h-5 w-5" />
						<IconAccount className="h-8 w-8" />
					</>
				</Button>
			</Link>

			<Link href="/cart" className="hidden md:block">
				<Button
					variant="outline"
					size="icon"
					className="rounded-full h-12 w-12"
				>
					<IconShoppingCart className="h-6 w-6" />
				</Button>
			</Link>
		</div>
	);
}
