import { RegistrationScreen } from "@/Screens/RegistrationScreen";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegistrationScreen />
    </View>
  );
}
