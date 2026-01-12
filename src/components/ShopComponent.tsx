import React from "react";
import { Text, View } from "react-native";

// Item component for items that exist within a shop that the user has bought



// Properties of the shop
type ShopComponentProps = {
    shopName: string, // Name of the shop
   
}


// Component
export function ShopComponent(props: ShopComponentProps) {
    return (<View style={{ alignItems: 'center' }}>
        <Text>{props.shopName}</Text>

    </View>);
};

