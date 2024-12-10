import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { useState } from "react";

import {
	IconChevronRight,
	IconJpFlag,
	IconMenu,
	IconShoppingCart,
	IconUsFlag,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

interface Language {
	code: string;
	name: string;
	flag: React.ReactNode;
}

const languages: Language[] = [
	{
		code: "en-US",
		name: "English(US)",
		flag: <IconUsFlag className="h-6 w-6" />,
	},
	{ code: "ja", name: "Japanese", flag: <IconJpFlag className="h-6 w-6" /> },
];

export function MobileMenu() {
	const [open, setOpen] = useState(false);
	const [view, setView] = useState<"menu" | "language">("menu");
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	const handleLanguageSelect = (language: Language) => {
		setSelectedLanguage(language);
		setView("menu");
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
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
					{view === "menu" ? (
						<>
							<SheetHeader className="p-6">
								<Button
									variant="ghost"
									className="w-fit px-0 py-0 h-auto"
									onClick={() => setOpen(false)}
								>
									<IconChevronRight className="h-5 w-5 rotate-180" />
									Go back
								</Button>
							</SheetHeader>

							<div className="flex-1 overflow-y-auto">
								<div className="px-6">
									<h2 className="text-[20px] font-medium mb-6">Hello,</h2>

									<section>
										<h3 className="text-[20px] py-4 font-medium">Shopping</h3>
										<Link
											href="/cart"
											className="flex items-center justify-between py-2"
										>
											<span className="flex items-center gap-2">
												<IconShoppingCart className="h-6 w-6" />
												Your cart
											</span>
											<IconChevronRight className="h-5 w-5" />
										</Link>
									</section>

									<Separator className="my-2" />

									<section>
										<h3 className="text-[20px] py-4 font-medium">
											Your account
										</h3>
										<div className="space-y-1">
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

									<Separator className="my-2" />

									<section>
										<h3 className="text-[20px] py-4 font-medium">Support</h3>
										<Link
											href="/message"
											className="flex items-center justify-between py-2"
										>
											<span>Message to Yuta(The founder)</span>
											<IconChevronRight className="h-5 w-5" />
										</Link>
									</section>

									<Separator className="my-2" />

									<section>
										<h3 className="text-[20px] py-4 font-medium">Language</h3>
										<button
											onClick={() => setView("language")}
											className="flex items-center justify-between py-2 w-full"
										>
											<span className="flex items-center gap-2">
												{selectedLanguage.name}
											</span>
											<IconChevronRight className="h-5 w-5" />
										</button>
									</section>
								</div>
							</div>
						</>
					) : (
						<>
							<SheetHeader className="p-6">
								<Button
									variant="ghost"
									className="w-fit px-0 py-0 h-auto"
									onClick={() => setView("menu")}
								>
									<IconChevronRight className="h-5 w-5 rotate-180" />
									Go back
								</Button>
							</SheetHeader>

							<div className="px-6">
								{languages.map((language) => (
									<button
										key={language.code}
										onClick={() => handleLanguageSelect(language)}
										className="flex items-center justify-between py-2 w-full hover:bg-muted rounded-lg px-0"
									>
										<span className="flex items-center gap-3">
											<span className="text-2xl">{language.flag}</span>
											<span>{language.name}</span>
										</span>
									</button>
								))}
							</div>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
}
