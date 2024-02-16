import { ProductProps } from "@/utils/data/products"

export interface IProductCartProps extends ProductProps {
    quantity: number
}

export interface IStateProps {
    products: IProductCartProps[]
    add: (product: ProductProps) => void
    remove: (productId: string) => void
    clear: () => void
}
