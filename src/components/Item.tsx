import React from "react";
import { Text, View } from "react-native";

// Item component for items that exist within a shop that the user has bought



// Properties of the shop
type ItemProps = {
    name: string, // Name of the shop
    price: number, // price of the item
    quantity: number, // number of this type of item to get from this shop
    date: number, // date for when this item was bough
    comments: string, // any additional information noted by the user
}


// Component
export function Item(props: ItemProps) {
    return ( <View style={{alignItems: 'center'}}>
      <Text>{props.name}</Text>
      <Text>{props.name} costs {props.price}.</Text>
      <Text>{props.name} quantity: {props.quantity}</Text>
      <Text>You bought {props.name} on {props.date}</Text>
      <Text>Additional notes and comments: {props.comments}</Text>
          </View>);
};

