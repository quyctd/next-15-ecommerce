"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

interface DualRangeSliderProps
	extends React.ComponentProps<typeof SliderPrimitive.Root> {
	labelPosition?: "top" | "bottom";
	label?: (value: number | undefined) => React.ReactNode;
}

const DualRangeSlider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	DualRangeSliderProps
>(({ className, label, labelPosition = "top", ...props }, ref) => {
	const initialValue = Array.isArray(props.value)
		? props.value
		: [props.min, props.max];

	return (
		<SliderPrimitive.Root
			ref={ref}
			className={cn(
				"relative flex w-full touch-none select-none items-center",
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-app-border-gray">
				<SliderPrimitive.Range className="absolute h-full bg-app-primary" />
			</SliderPrimitive.Track>
			{initialValue.map((value, index) => (
				<React.Fragment key={index}>
					<SliderPrimitive.Thumb className="relative block h-8 w-8 rounded-full border-2 border-app-primary bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
						{label && (
							<span
								className={cn(
									"absolute flex w-full justify-center",
									labelPosition === "top" && "-top-7",
									labelPosition === "bottom" && "top-4",
								)}
							>
								{label(value)}
							</span>
						)}
					</SliderPrimitive.Thumb>
				</React.Fragment>
			))}
		</SliderPrimitive.Root>
	);
});
DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
