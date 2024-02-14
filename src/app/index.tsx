import { useRef, useState } from "react"
import { View, FlatList, SectionList, Text } from "react-native"

import { CategoryButton, Header, Product } from "@/components"
import { CATEGORIES, MENU } from "@/utils/data/products"

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])
    const sectionListRef = useRef<SectionList>(null)

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
            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => <Product data={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-xl text-white font-heading mt-8 mb-3">{title}</Text>
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}
