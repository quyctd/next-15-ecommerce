import {
	IconAccount,
	IconGlobe,
	IconMenu,
	IconShoppingCart,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AccountSelector } from "./account-selector";
import { LanguageSelector } from "./language-selector";

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

			<LanguageSelector className="hidden md:inline-flex" />

			<AccountSelector className="hidden md:inline-flex" />

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
