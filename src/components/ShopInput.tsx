import { TextInput, View, StyleSheet } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";

// This is the component that the user enters their shops into
export default function ShopInput() {
    const [text, onChangeText] = React.useState('');
  return (
    <View>
     
        <TextInput 
        value = {text}
        placeholder="Enter your shop here"
        onChangeText={onChangeText}
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
