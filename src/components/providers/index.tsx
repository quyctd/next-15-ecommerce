import { NuqsAdapter } from "nuqs/adapters/next/app";

import { JotaiProvider } from "./jotai-provider";
import { QueryProvider } from "./query-provider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<JotaiProvider>
		<QueryProvider>
			<NuqsAdapter>{children}</NuqsAdapter>
		</QueryProvider>
	</JotaiProvider>
);
