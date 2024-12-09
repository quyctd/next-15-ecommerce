import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)"],
			},
			colors: {
				"app-background": "var(--app-background)",
				"app-secondary": "var(--app-secondary)",
				"app-background-2": "var(--app-background-2)",
				"app-background-3": "var(--app-background-3)",
				"app-border-gray": "var(--app-border-gray)",
				"app-border-dark": "var(--app-border-dark)",
				"app-primary": "var(--app-primary)",
				"app-gray": "var(--app-gray)",
			},
		},
	},
	plugins: [],
} satisfies Config;
