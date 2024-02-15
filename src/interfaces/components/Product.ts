import { TouchableOpacityProps } from "react-native"
import { ImageProps } from "react-native"

export interface IProductData {
    title: string
    description: string
    thumbnail: ImageProps
    quantity?: number
}
export interface IProduct extends TouchableOpacityProps {
    data: IProductData
}
