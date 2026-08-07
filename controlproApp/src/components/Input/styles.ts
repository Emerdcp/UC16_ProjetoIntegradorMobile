import { StyleSheet } from "react-native";

import { Colors, Radius, Spacing, Typography } from "@/designSystem";

export const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.lg,
        marginTop: 18,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 56,
    },
    label: {
        fontSize: Typography.small,
        color: Colors.text,
        marginBottom: Spacing.sm,
        fontWeight: "600",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: Radius.lg,
        paddingHorizontal: 16,
        height: 56,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.text,
    },
    error: {
        color: Colors.error,
        marginTop: 4,
        fontSize: Typography.caption,
    },
    icon: {
        marginRight: 12,
    }
})