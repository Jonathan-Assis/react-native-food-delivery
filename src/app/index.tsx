import { useRef, useState } from "react"
import { View, FlatList, SectionList, Text } from "react-native"
import { Link } from "expo-router"

import { useCartStore } from "@/stores/cart-store"
import { CategoryButton, Header, Product } from "@/components"
import { CATEGORIES, MENU } from "@/utils/data/products"

export default function Home() {
    const { products } = useCartStore()
    const [category, setCategory] = useState(CATEGORIES[0])
    const sectionListRef = useRef<SectionList>(null)

    const cartQuantityItems = products.reduce((total, product) => total + product.quantity, 0)

    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory)

        const sectionIndex = CATEGORIES.findIndex((item) => item === selectedCategory)
        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                animated: true,
                itemIndex: 0,
                sectionIndex,
            })
        }
    }
    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cartQuantityItems={cartQuantityItems} />
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
            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Link href={`/product/${item.id}`} asChild>
                        <Product data={item} />
                    </Link>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-xl text-white font-heading mt-8 mb-3">{title}</Text>
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}
