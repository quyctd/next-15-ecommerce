import { Github, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon }) => {
	return (
		<a
			href={href}
			className="text-white/80 hover:text-white transition-colors"
			target="_blank"
			rel="noopener noreferrer"
		>
			{icon}
		</a>
	);
};

export function ComingSoon({
	title,
	description,
	className,
}: {
	title?: string;
	description?: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"min-h-[calc(100vh-160px)] flex items-center justify-center",
				className,
			)}
		>
			<div className="max-w-4xl mx-auto px-6 text-center">
				{/* Main Content */}
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
					{title || "Coming Soon"}
				</h1>

				<p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-delay">
					{description ||
						"We're working hard to bring you something amazing. Stay tuned!"}
				</p>

				{/* Social Links */}
				<div className="flex justify-center gap-6">
					<SocialLink href="#" icon={<Twitter size={24} />} />
					<SocialLink href="#" icon={<Github size={24} />} />
					<SocialLink href="#" icon={<Linkedin size={24} />} />
				</div>
			</div>
		</div>
	);
}
