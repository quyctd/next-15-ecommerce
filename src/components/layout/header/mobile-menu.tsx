import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu, IconChevronRight } from "@/components/icons";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full md:hidden"
				>
					<IconMenu className="h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-full p-0" closeButton={false}>
				<VisuallyHidden>
					<SheetTitle>Menu</SheetTitle>
				</VisuallyHidden>
				<div className="flex flex-col h-full bg-background">
					<SheetHeader className="p-6">
						<Button variant="ghost" className="w-fit px-2">
							<IconChevronRight className="h-5 w-5 rotate-180" />
							Go back
						</Button>
					</SheetHeader>

					<div className="flex-1 overflow-y-auto">
						<div className="p-6">
							<h2 className="text-2xl font-semibold mb-6">Hello,</h2>

							<div className="space-y-6">
								<section>
									<h3 className="text-xl mb-4">Shopping</h3>
									<Link
										href="/cart"
										className="flex items-center justify-between py-2"
									>
										<span>Your cart</span>
										<IconChevronRight className="h-5 w-5" />
									</Link>
								</section>

								<section>
									<h3 className="text-xl mb-4">Your account</h3>
									<div className="space-y-2">
										<Link
											href="/signin"
											className="flex items-center justify-between py-2"
										>
											<span>Sign in</span>
											<IconChevronRight className="h-5 w-5" />
										</Link>
										<Link
											href="/signup"
											className="flex items-center justify-between py-2"
										>
											<span>Sign up</span>
											<IconChevronRight className="h-5 w-5" />
										</Link>
									</div>
								</section>

								<section>
									<h3 className="text-xl mb-4">Support</h3>
									<Link
										href="/contact"
										className="flex items-center justify-between py-2"
									>
										<span>Message to Yuta(The founder)</span>
										<IconChevronRight className="h-5 w-5" />
									</Link>
								</section>

								<section>
									<h3 className="text-xl mb-4">Language</h3>
									<Link
										href="/language"
										className="flex items-center justify-between py-2"
									>
										<span>English(US)</span>
										<IconChevronRight className="h-5 w-5" />
									</Link>
								</section>
							</div>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
