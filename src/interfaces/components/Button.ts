import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"

export interface IButton extends TouchableOpacityProps {
    children: ReactNode
}

export interface IButtonText {
    children: ReactNode
}
export interface IButtonIcon {
    children: ReactNode
}
