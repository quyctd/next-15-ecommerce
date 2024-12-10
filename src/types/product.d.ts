export type Product = {
	id: string;
	name: string;
	creator: string;
	image: string;
	price: number;
	rating: number;
	categoryId: string | null;
	subCategoryId: string | null;
	platforms?: string[] | null;
};
