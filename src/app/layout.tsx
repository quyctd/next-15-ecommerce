import { AppProviders } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${interFont.className} antialiased`}>
				<AppProviders>
					<main className="container">{children}</main>
					<Toaster richColors />
				</AppProviders>
			</body>
		</html>
	);
}
