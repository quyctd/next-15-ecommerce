import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
	title: "Sign In | TestApp",
	description: "Sign in to your TestApp account.",
};

const SignInPage = () => {
	return (
		<ComingSoon
			title="Coming Soon"
			className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy mt-10 rounded-lg"
		/>
	);
};

export default SignInPage;
