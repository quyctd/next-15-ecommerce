import { JotaiProvider } from "./jotai-provider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
	<JotaiProvider>{children}</JotaiProvider>
);
