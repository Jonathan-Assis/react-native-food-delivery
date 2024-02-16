import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

import * as cartInMemory from "./helpers/cart-in-memory"
import { ProductProps } from "@/utils/data/products"
import { IStateProps } from "@/interfaces/stores/cart-store"

export const useCartStore = create(
    persist<IStateProps>(
        (set) => ({
            products: [],
            add: (product: ProductProps) =>
                set((state) => ({
                    products: cartInMemory.add(state.products, product),
                })),
            remove: (productId: string) =>
                set((state) => ({
                    products: cartInMemory.remove(state.products, productId),
                })),
            clear: () => set(() =>({products: []}) )
        }),
        {
            name: "food-delivery:cart",
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
)
