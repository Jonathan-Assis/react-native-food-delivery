import { useState } from "react"
import { View, FlatList } from "react-native"

import { CategoryButton, Header } from "@/components"
import { CATEGORIES } from "@/utils/data/products"

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])

    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory)
    }
    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cartQuantityItems={3} />
            <FlatList
                keyExtractor={(item) => item}
                data={CATEGORIES}
                className="max-h-10 mt-5"
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={item === category}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    )
}
