"use client";

import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const H1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h1
				{...props}
				ref={ref}
				className={cn("text-4xl font-extrabold lg:text-5xl", props.className)}
			>
				{props.children}
			</h1>
		);
	},
);

H1.displayName = "H1";
export { H1 };

const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h2
				{...props}
				ref={ref}
				className={cn(
					"border-b pb-2 text-3xl font-semibold first:mt-0",
					props.className,
				)}
			>
				{props.children}
			</h2>
		);
	},
);

H2.displayName = "H2";
export { H2 };

const H3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h3
				{...props}
				ref={ref}
				className={cn(
					"text-xl sm:text-2xl text-secondary font-semibold",
					props.className,
				)}
			>
				{props.children}
			</h3>
		);
	},
);

H3.displayName = "H3";
export { H3 };

const H4 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	(props, ref) => {
		return (
			<h4
				{...props}
				ref={ref}
				className={cn("text-xl font-semibold", props.className)}
			>
				{props.children}
			</h4>
		);
	},
);

H4.displayName = "H4";
export { H4 };

const Lead = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p {...props} ref={ref} className={cn("text-xl", props.className)}>
			{props.children}
		</p>
	);
});

Lead.displayName = "Lead";
export { Lead };

const P = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p {...props} ref={ref} className={cn("leading-[1.5]", props.className)}>
			{props.children}
		</p>
	);
});

P.displayName = "P";
export { P };

const Large = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	(props, ref) => {
		return (
			<div
				{...props}
				ref={ref}
				className={cn("text-lg font-semibold", props.className)}
			>
				{props.children}
			</div>
		);
	},
);

Large.displayName = "Large";
export { Large };

const Small = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p
			{...props}
			ref={ref}
			className={cn("text-sm font-normal", props.className)}
		>
			{props.children}
		</p>
	);
});

Small.displayName = "Small";
export { Small };

const Muted = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	return (
		<p
			{...props}
			ref={ref}
			className={cn("text-sm text-app-gray", props.className)}
		>
			{props.children}
		</p>
	);
});

Muted.displayName = "Muted";
export { Muted };
