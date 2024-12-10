import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

interface CartState {
	items: CartItem[];
	itemsCount: number;
}

const initialState: CartState = {
	items: [],
	itemsCount: 0,
};

export const cartAtom = atomWithStorage<CartState>("cart", initialState);

export const cartActions = atom(
	(get) => get(cartAtom),
	(
		get,
		set,
		action: { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> },
	) => {
		const cart = get(cartAtom);

		switch (action.type) {
			case "ADD_ITEM": {
				const existingItem = cart.items.find(
					(item) => item.id === action.payload.id,
				);

				if (existingItem) {
					const updatedItems = cart.items.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item,
					);
					set(cartAtom, {
						items: updatedItems,
						itemsCount: cart.itemsCount + 1,
					});
				} else {
					set(cartAtom, {
						items: [...cart.items, { ...action.payload, quantity: 1 }],
						itemsCount: cart.itemsCount + 1,
					});
				}
				break;
			}
		}
	},
);
