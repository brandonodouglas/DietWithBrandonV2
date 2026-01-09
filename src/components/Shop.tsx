import React from "react";
import { Text, View } from "react-native";






// Properties of the shop
type ShopProps = {
    name: string, // Name of the shop
    distance: number, // Distance (from users house) of the shop to determine ease
    items: number, // Number of shopping items to get from said shop
    address: string, // Address of shop
    postcode: string, // Postcode of shop
    rating: number // Rating of shop out of 5 set by user, 5 = excellent, 1= terrible
    notes: string, // Notes and/or comments about said shop
    time: number, // Time in minutes it takes to travel to said shop on average and time taken to return home with items for timeboxing in user calendar
}


// Component
export function Shop(props: ShopProps) {
    return ( <View style={{alignItems: 'center'}}>
      <Text>{props.name}</Text>
      <Text>This shop is: {props.distance} miles from your home.</Text>
      <Text>The number of items to get from this shop is: {props.items}</Text>
      <Text>The address of this shop is: {props.address}</Text>
      <Text>The postcode of this shop is: {props.postcode}</Text>
      <Text>You gave this shop a: {props.rating} out of 5</Text>
      <Text>Your comments: {props.notes}</Text>
      <Text>It takes you {props.time} hour to go to this shop and back</Text>
          </View>);
};

