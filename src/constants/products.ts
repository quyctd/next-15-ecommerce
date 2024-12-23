import type { Product } from "@/types/product";

import ChilloutVRImage from "@/assets/images/chillout-vr.png";
import ClusterImage from "@/assets/images/cluster.png";
import NeosVRImage from "@/assets/images/neos-vr.png";
import ResoniteImage from "@/assets/images/resonite.png";
import SpatialImage from "@/assets/images/spatial.png";
import VirtualCastImage from "@/assets/images/virtual-cast.png";
import VRChatPCVRImage from "@/assets/images/vr-chat-pcvr.png";
import VRChatQuestImage from "@/assets/images/vr-chat-quest.png";

export const PLATFORMS = [
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

export const MOCK_PRODUCTS: Product[] = [
	{
		id: "1",
		name: "Neo Human Avatar",
		creator: "Digital Dreams",
		image: "https://picsum.photos/200/300",
		price: 149.99,
		rating: 4.5,
		categoryId: "avatars",
		subCategoryId: "human-like",
		platforms: ["vrchat-quest", "vrchat-pcvr", "chillout-vr"],
	},
	{
		id: "2",
		name: "Steampunk Goggles",
		creator: "RetroForge",
		image: "https://picsum.photos/200/300",
		price: 29.99,
		rating: 4.0,
		categoryId: "fashion",
		subCategoryId: "accessories",
		platforms: ["vrchat-quest", "vrchat-pcvr", "resonite"],
	},
	{
		id: "3",
		name: "Dragon Hybrid",
		creator: "MythicalDesigns",
		image: "https://picsum.photos/200/300",
		price: 299.99,
		rating: 4.7,
		categoryId: "avatars",
		subCategoryId: "anthro-furry",
		platforms: ["vrchat-pcvr", "chillout-vr"],
	},
	{
		id: "4",
		name: "Cyber Sentinel",
		creator: "NeoForge",
		image: "https://picsum.photos/200/300",
		price: 249.99,
		rating: 4.8,
		categoryId: "avatars",
		subCategoryId: "robot-cyborgs",
		platforms: ["vrchat-pcvr", "resonite", "neos-vr"],
	},
	{
		id: "5",
		name: "Neon Fox Avatar",
		creator: "FurryArtist",
		image: "https://picsum.photos/200/300",
		price: 159.99,
		rating: 4.2,
		categoryId: "avatars",
		subCategoryId: "anthro-furry",
		platforms: ["vrchat-pcvr", "chillout-vr"],
	},
	{
		id: "6",
		name: "Cyber Jacket",
		creator: "DigitalThreads",
		image: "https://picsum.photos/200/300",
		price: 75.99,
		rating: 3.9,
		categoryId: "fashion",
		subCategoryId: "clothes",
		platforms: null,
	},
	{
		id: "7",
		name: "Digital Necklace",
		creator: "VirtualGems",
		image: "https://picsum.photos/200/300",
		price: 45.99,
		rating: 4.6,
		categoryId: "fashion",
		subCategoryId: "accessories",
		platforms: ["vrchat-pcvr", "spatial"],
	},
	{
		id: "8",
		name: "Mystery Box",
		creator: "Unknown",
		image: "https://picsum.photos/200/300",
		price: 99.99,
		rating: 3.7,
		categoryId: null,
		subCategoryId: null,
		platforms: null,
	},
	{
		id: "9",
		name: "Ethereal Wings",
		creator: "SkyForger",
		image: "https://picsum.photos/200/300",
		price: 129.99,
		rating: 4.9,
		categoryId: "fashion",
		subCategoryId: "others-fashion",
		platforms: ["vrchat-pcvr", "vrchat-quest", "resonite"],
	},
	{
		id: "10",
		name: "Holographic Companion",
		creator: "TechnoSpirit",
		image: "https://picsum.photos/200/300",
		price: 199.99,
		rating: 4.3,
		categoryId: "avatars",
		subCategoryId: "others",
		platforms: ["vrchat-pcvr", "cluster"],
	},
	{
		id: "11",
		name: "Crystal Crown",
		creator: "LuxeDigital",
		image: "https://picsum.photos/200/300",
		price: 89.99,
		rating: 4.4,
		categoryId: "fashion",
		subCategoryId: "accessories",
		platforms: ["vrchat-pcvr", "spatial", "virtual-cast"],
	},
	{
		id: "12",
		name: "Quantum Suit",
		creator: "FutureWear",
		image: "https://picsum.photos/200/300",
		price: 399.99,
		rating: 4.8,
		categoryId: "fashion",
		subCategoryId: "clothes",
		platforms: ["vrchat-pcvr", "resonite", "neos-vr"],
	},
];
