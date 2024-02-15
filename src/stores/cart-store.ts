import { create } from "zustand"

import * as cartInMemory from "./helpers/cart-in-memory"
import { ProductProps } from "@/utils/data/products"
import { IStateProps } from "@/interfaces/stores/cart-store"

export const useCartStore = create<IStateProps>((set) => ({
    products: [],
    add: (product: ProductProps) =>
        set((state) => ({
            products: cartInMemory.add(state.products, product),
        })),
}))
