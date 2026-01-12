import { TextInput, View, StyleSheet, Alert, Text, Button } from "react-native";
import { AppText } from "@/components/AppText";
import React, { useState } from "react";
import { FlatList } from "react-native";

// Component to render individual item
type ItemProps = { name: string }
// Component to render items
const Item = ({ name }: ItemProps) => {
    return (
        <View style={styles.item}>
            <Text style={{ color: 'white' }}>{name}</Text>
        </View>
    );
}

// This is the component that the user enters their shops into
export default function ShopInput() {
    const [shopArray, setShopArray] = useState([
        {

            id: '0', name: "Tap the shops below to begin adding food. Use the pen button to edit, and the delete button to delete a shop.",
        },

    ]);

    // The actual shop that gets added to the shop array
    const [shop, setShop] = useState({ id: '', name: 'lol' });
    // Counts the numhber of shosp as of when the user inputs a shop
    const [shopCount, setShopCount] = useState(0);
    const handleSubmit = () => {
        return (Alert.alert("hety"));
    }
    if (shopCount == 0) {
        return (
            <View>
                <Text className="text-center m-3 p-3 backgroundColor">D I E T W I T H B R A N D O N</Text>
                <Text className="text-center">Change your diet, change your life. ✅</Text>
                <Text className="text-center p-2">You currently have {shopCount} shops added into the app.</Text>
                <Text className="text-center p-2">Why not add some shops below? 🛒</Text>
                <TextInput
                    placeholder="Enter new shop here"
                    onSubmitEditing={event => {
                        setShopCount(shopCount => shopCount + 1);
                        setShopArray([...shopArray, { id: { shopCount }.toString(), name: event.nativeEvent.text }]);
                    }}
                    style={styles.input}
                />
            </View>
        );
    }
    return (
        <View>
            <Text className="text-center p-2">You currently have {shopCount} shops added into the app.</Text>
            <TextInput
                placeholder="Enter new shop here"
                onSubmitEditing={event => {
                    setShopCount(shopCount => shopCount + 1);
                    setShopArray([...shopArray, { id: { shopCount }.toString(), name: event.nativeEvent.text }]);
                }}
                style={styles.input}
            />
            <FlatList
                data={shopArray}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={(item, index) => String(index)}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 0,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#4287f5',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
});
