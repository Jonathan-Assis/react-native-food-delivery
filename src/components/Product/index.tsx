import { forwardRef } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import { IProduct } from "@/interfaces/components/Product"

export const Product = forwardRef<TouchableOpacity, IProduct>(({ data, ...rest }, ref) => {
    return (
        <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
            <View className="flex-1 ml-3">
                <View className="flex-row items-center">
                    <Text className="text-slate-100 font-subtitle text-base flex-1">{data.title}</Text>
                    {data.quantity && <Text className="text-lime-500 font-subtitle text-sm">x {data.quantity}</Text>}
                </View>
                <Text className="text-slate-400 text-xs leading-5 mt-0.5">{data.description}</Text>
            </View>
        </TouchableOpacity>
    )
})
