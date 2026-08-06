import { View } from "react-native";
import Button from "@/components/Button";

export default function App() {

  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        padding:20,
      }}
    >
      <Button
        title="Entrar"
        onPress={()=>{
          console.log("Login")
        }}
      />
    </View>
  );
}