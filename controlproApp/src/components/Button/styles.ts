import { StyleSheet } from "react-native";

import { Colors, Radius, Spacing, Typography, } from "@/theme";

export const styles = StyleSheet.create({

    button: {
        height: 52,
        borderRadius: Radius.lg,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Spacing.xl,
    },
    text: {
        color: Colors.white,
        fontSize: Typography.body,
        fontWeight: "600",
    },
});