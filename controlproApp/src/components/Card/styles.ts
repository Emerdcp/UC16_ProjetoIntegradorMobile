import { StyleSheet } from "react-native";
import { Colors, Radius, Shadows, Spacing} from "@/designSystem"

export const styles = StyleSheet.create({
    container: {
    marginHorizontal: 8,

    /* Fundo semi-transparente */
    backgroundColor: "rgba(30, 41, 59, 0.95)",

    /* Cantos arredondados */
    borderRadius: 22,

    /* Espaçamento interno */
    padding: Spacing.lg,

    /* Borda discreta */
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",

    /* Sombra */
    ...Shadows.card,
    },
})

