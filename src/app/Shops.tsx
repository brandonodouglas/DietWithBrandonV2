import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Shop } from "@/components/Shop";


export default function ShopScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        <AppText bold>You currently have 0 shops!</AppText> 
      </AppText>
      <AppText center>
        <AppText bold>Try adding some below.</AppText> 
      </AppText>
             <Shop name={"Aldi"} distance={2} items={15} address={"23 Chester road"} postcode={"b23 5ds"} rating={5} notes={"Good for cheap products"} time={1} />

    </View>
  );
}
