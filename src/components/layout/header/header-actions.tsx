import { useAtomValue } from "jotai";
import Link from "next/link";

import { IconShoppingCart } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cartAtom } from "@/stores/cart.atom";

import { AccountSelector } from "./account-selector";
import { LanguageSelector } from "./language-selector";
import { MobileMenu } from "./mobile-menu";

export function HeaderActions() {
	const { itemsCount } = useAtomValue(cartAtom);

	return (
		<div className="flex items-center gap-6">
			<MobileMenu />

			<Link
				href="/list"
				className="text-sm leading-[1.5] hidden md:block whitespace-nowrap"
			>
				List your creation
			</Link>

			<LanguageSelector className="hidden md:inline-flex" />

			<AccountSelector className="hidden md:inline-flex" />

			<Link href="/cart" className="hidden md:block relative">
				<Button
					variant="outline"
					size="icon"
					className="rounded-full h-12 w-12"
				>
					<IconShoppingCart className="h-6 w-6" />
				</Button>
				{itemsCount > 0 && (
					<Badge
						variant="default"
						className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center"
					>
						{itemsCount}
					</Badge>
				)}
			</Link>
		</div>
	);
}
