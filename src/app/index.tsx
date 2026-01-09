import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { Shop } from "@/components/Shop";
export default function IndexScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      
      <AppText center>
        <AppText bold size="heading">DietwithBrandon</AppText> 
      </AppText>
      <AppText center>
        <AppText bold>Are you ready to LEVEL UP your diet? 🚀</AppText> 
        
      </AppText>
      <AppText center>
        <AppText bold>Trying to lose weight with ease? 📉</AppText> 
        
      </AppText>
      <AppText center>
        <AppText bold>Trying to concentrate better but you just can't? 🧠</AppText> 
        
      </AppText>
      <AppText center>
        <AppText bold>Feeling depressed, restless or fatigued? 😔</AppText> 
        
      </AppText>
      <AppText center>
        <AppText bold>✨Maybe✨ its NOT you, it's your DIET! 👍</AppText> 
        
      </AppText>
      
      <Button 
      title="Get Started Today!"
      onPress={()=>{
        router.push("/Shops");
      }}
      />
      <AppText center>
        <AppText>Note: A dieting app is NOT a proper replacement for a dietician or qualified mental health professional, use with caution.</AppText> 
      </AppText>
      <AppText center>
        <AppText bold>Neurodivergent Friendly ✅</AppText> 
      </AppText>
      
      <AppText center>
        <AppText>© Brandon Omar douglas - 2026</AppText> 
      </AppText>
      <AppText center>
        <AppText bold size="large">بِسْمِ ٱللهِ</AppText> 
      </AppText>
      
    </View>
  );
}
