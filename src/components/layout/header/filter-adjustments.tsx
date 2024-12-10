"use client";

import Image from "next/image";
import { useState } from "react";

import { IconAdjustments, IconClose } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import ChilloutVRImage from "@/assets/images/chillout-vr.png";
import ClusterImage from "@/assets/images/cluster.png";
import NeosVRImage from "@/assets/images/neos-vr.png";
import ResoniteImage from "@/assets/images/resonite.png";
import SpatialImage from "@/assets/images/spatial.png";
import VirtualCastImage from "@/assets/images/virtual-cast.png";
import VRChatPCVRImage from "@/assets/images/vr-chat-pcvr.png";
import VRChatQuestImage from "@/assets/images/vr-chat-quest.png";

const platforms = [
	{ id: "vrchat-quest", name: "VRChat (Quest)", image: VRChatQuestImage },
	{ id: "vrchat-pcvr", name: "VRChat (PCVR)", image: VRChatPCVRImage },
	{ id: "spatial", name: "Spatial", image: SpatialImage },
	{ id: "chillout-vr", name: "ChilloutVR", image: ChilloutVRImage },
	{ id: "resonite", name: "Resonite", image: ResoniteImage },
	{ id: "neos-vr", name: "Neos VR", image: NeosVRImage },
	{ id: "cluster", name: "Cluster", image: ClusterImage },
	{
		id: "virtual-cast",
		name: "Virtual Cast",
		image: VirtualCastImage,
	},
	{ id: "others", name: "Others" },
];

export function FilterAdjustments() {
	const [isOpen, setIsOpen] = useState(false);
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

	const handlePlatformToggle = (platformId: string) => {
		setSelectedPlatforms((prev) =>
			prev.includes(platformId)
				? prev.filter((id) => id !== platformId)
				: [...prev, platformId],
		);
	};

	const handleClearAll = () => {
		setPriceRange([0, 1000]);
		setSelectedPlatforms([]);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleApply = () => {
		// Implement filter application logic here
	};

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="rounded-full min-w-10 hidden md:inline-flex"
					size="icon"
				>
					<IconAdjustments className="size-6" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[560px] p-0 bg-app-background-2 border-app-border-dark"
			>
				<div className="flex items-center justify-between p-5">
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
						onClick={handleClose}
					>
						<IconClose className="h-6 w-6" />
					</Button>
					<h2 className="text-base font-bold">Filters</h2>
					<div className="size-6" />
				</div>

				<Separator />

				<div className="p-6">
					<div className="flex flex-col gap-4">
						<h3 className="text-lg text-app-secondary">Price range</h3>
						<div className="h-8 mt-6">
							<DualRangeSlider
								min={0}
								max={1000}
								step={1}
								value={priceRange}
								onValueChange={setPriceRange}
								label={(value) => ""}
							/>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col items-center justify-center">
								<span className="text-sm text-app-gray">Minimum</span>
								<div className="mt-1 bg-app-background-2 rounded-full px-4 py-2 border border-solid border-app-border-gray">
									<span>$ {priceRange[0].toFixed(2)}</span>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center">
								<span className="text-sm text-app-gray">Maximum</span>
								<div className="mt-1 bg-app-background-2 rounded-full px-4 py-2 border border-solid border-app-border-gray">
									<span>$ {priceRange[1].toFixed(2)}</span>
								</div>
							</div>
						</div>
					</div>

					<Separator className="my-8" />

					<div className="space-y-4">
						<h3 className="text-xl">Platforms</h3>
						<div className="flex flex-wrap gap-3">
							{platforms.map((platform) => (
								<button
									key={platform.id}
									onClick={() => handlePlatformToggle(platform.id)}
									className={cn(
										"w-[120px]",
										"flex flex-col items-start py-3 px-[10px] rounded-lg border border-solid transition-colors",
										selectedPlatforms.includes(platform.id)
											? "border-app-border-dark bg-app-background-3"
											: "border-app-border-gray bg-app-background-2",
									)}
								>
									{platform.image && (
										<Image
											src={platform.image}
											alt={platform.name}
											height={24}
											className="mb-2"
										/>
									)}
									<span className="text-[10px] text-app-secondary">
										{platform.name}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>

				<Separator />

				<div className="flex items-center justify-between py-4 px-6">
					<Button
						variant="ghost"
						onClick={handleClearAll}
						className="text-app-secondary hover:text-white"
					>
						Clear all
					</Button>
					<Button
						variant="secondary"
						onClick={handleApply}
						className="px-8 h-12 w-[180px]"
					>
						Apply
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
