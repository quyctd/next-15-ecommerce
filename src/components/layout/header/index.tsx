"use client";

import { IconLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HeaderActions } from "./header-actions";
import { SearchBar } from "./search-bar";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [logoPosition, setLogoPosition] = useState({
		x: 0,
		width: 0,
	});
	const logoRef = useRef<HTMLAnchorElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const secondRowHeight = 64;

	useEffect(() => {
		const calculateLogoPosition = () => {
			if (logoRef.current && headerRef.current) {
				const logoRect = logoRef.current.getBoundingClientRect();
				const headerRect = headerRef.current.getBoundingClientRect();

				const x = logoRect.left - headerRect.left;
				setLogoPosition({
					x,
					width: logoRect.width,
				});
			}
		};

		calculateLogoPosition();
		window.addEventListener("resize", calculateLogoPosition);

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const threshold = isScrolled ? 10 : 10 + secondRowHeight;

			setIsScrolled(scrollY > threshold);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", calculateLogoPosition);
		};
	}, [isScrolled]);

	return (
		<header
			ref={headerRef}
			className={cn(
				"sticky top-0 z-50 w-full border-b border-app-border-dark bg-app-background",
			)}
		>
			<div
				className={cn("container h-20 flex items-center justify-between gap-4")}
			>
				<Link
					ref={logoRef}
					href="/"
					className={cn(
						"hidden md:block transition-opacity duration-300",
						isScrolled && "md:opacity-0 lg:opacity-100",
					)}
				>
					<IconLogo className="h-8 w-auto" />
				</Link>

				{/* Mobile and desktop search bar */}
				<SearchBar className="flex md:hidden lg:flex md:mx-[30px]" />
				<HeaderActions />
			</div>

			{/* Tablet search bar with animation */}
			<div
				className={cn(
					"hidden md:block lg:hidden transition-[height] duration-300",
					isScrolled ? "h-0" : `h-[${secondRowHeight}px]`,
				)}
			>
				<SearchBar
					className={cn(
						"hidden md:flex lg:hidden pb-4 transition-all duration-300 origin-left",
					)}
					style={{
						// Dynamic positioning based on logo location
						...(isScrolled
							? {
									width: "300px",
									transform: `translate3d(${logoPosition.x}px, -100%, 0)`,
								}
							: undefined),
					}}
				/>
			</div>
		</header>
	);
}
