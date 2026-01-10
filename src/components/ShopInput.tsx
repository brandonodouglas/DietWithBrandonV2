import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";

// This is the component that the user enters their shops into
export default function ShopInput() {
    const [text, onChangeText] = React.useState('');
    const [shopCount, setShopCount] = React.useState(0);
  return (
    <View>
        <Text>You currently have {shopCount} shops.</Text>
        <TextInput 
        placeholder="Enter your shop here"
        onSubmitEditing={event => {
            setShopCount(shopCount => shopCount +1);


            Alert.alert("Added shop " + event.nativeEvent.text + " to the app.");
        }}
        style={styles.input}
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
});
