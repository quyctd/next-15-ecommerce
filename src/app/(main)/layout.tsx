import { Header } from "@/components/layout/header";
import { Suspense } from "react";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Suspense>
				<Header />
				<main className="container">{children}</main>
			</Suspense>
		</>
	);
}
