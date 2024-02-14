import { PressableProps } from "react-native"

export interface ICategoryButton extends PressableProps {
    title: string
    isSelected?: boolean
}
