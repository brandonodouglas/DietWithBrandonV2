import { View } from "react-native";
import { AppText } from "@/components/AppText";

// This is the component that the user enters their shops into
export default function ShopInput() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        <AppText bold>Shop Input stuff goes here.</AppText> 
        
      </AppText>
    </View>
  );
}
