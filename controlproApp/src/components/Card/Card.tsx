import { View } from "react-native";
import { styles } from "./styles";
import { CardProps } from "./types";
 
export default function Card({
    children,
}:CardProps){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}