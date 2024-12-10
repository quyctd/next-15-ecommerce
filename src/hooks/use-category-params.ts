import { useQueryState } from "nuqs";
import { categories } from "@/constants/categories";

const findCategoryById = (id: string) => {
	return categories.find((cat) => cat.id === id);
};

const findSubCategory = (categoryId: string, subCategoryId: string) => {
	const category = findCategoryById(categoryId);
	return category?.children?.find((sub) => sub.id === subCategoryId);
};

export function useCategoryParams() {
	const [categoryId, setCategoryId] = useQueryState("category");
	const [subCategoryId, setSubCategoryId] = useQueryState("subcategory");
	const category = categoryId ? findCategoryById(categoryId) : null;
	const subCategory =
		categoryId && subCategoryId
			? findSubCategory(categoryId, subCategoryId)
			: null;

	return {
		category,
		subCategory,
		setCategoryId,
		setSubCategoryId,
		clearCategory: () => {
			setCategoryId(null);
			setSubCategoryId(null);
		},
	};
}
