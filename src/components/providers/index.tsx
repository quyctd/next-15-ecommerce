import { NuqsAdapter } from "nuqs/adapters/next/app";
import { JotaiProvider } from "./jotai-provider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<JotaiProvider>
		<NuqsAdapter>{children}</NuqsAdapter>
	</JotaiProvider>
);
