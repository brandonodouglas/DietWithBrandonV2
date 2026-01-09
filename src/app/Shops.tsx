import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Shop } from "@/components/Shop";
import ShopInput from "@/components/ShopInput";


export default function ShopScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        <AppText bold>You currently have 0 shops!</AppText> 
      </AppText>
      <AppText center>
        <AppText bold>Try adding some below.</AppText> 
      </AppText>
      <ShopInput />
    
    </View>
  );
}
