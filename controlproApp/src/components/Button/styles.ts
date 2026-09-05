import { StyleSheet } from "react-native";
import { Colors, Radius, Spacing, Typography, } from "@/designSystem";

export const styles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: Radius.lg,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Spacing.xl,
        marginTop: 10,
    },
    text: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: "600",
    },
});