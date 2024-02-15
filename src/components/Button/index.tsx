import { Text, TouchableOpacity } from "react-native"
import { IButton, IButtonText, IButtonIcon } from "@/interfaces/components/Button"

const Button = ({ children, ...rest }: IButton) => {
    return (
        <TouchableOpacity
            className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
            activeOpacity={0.7}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

const ButtonText = ({ children }: IButtonText) => {
    return <Text className="text-black font-heading text-base mx-2">{children}</Text>
}

const ButtonIcon = ({ children }: IButtonIcon) => {
    return children
}
Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
