import { View, Text, StyleSheet } from "react-native";
import { AppText } from "@/components/AppText";
import { Shop } from "@/components/Shop";
import ShopInput from "@/components/ShopInput";


export default function ShopScreen() {
  const shopCount = 0;
  return (
    <View className="p-10 m-10">
      <Text className="text-center">You currently have {shopCount} shops.</Text>
      <Text className="text-center p-2">Try adding some below!</Text>
      <ShopInput />

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
  },});