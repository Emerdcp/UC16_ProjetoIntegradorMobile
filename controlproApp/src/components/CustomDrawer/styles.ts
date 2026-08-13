import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/designSystem";


export const styles = StyleSheet.create({

    /* CONTAINER */

    container: {
        flex: 1,

        backgroundColor: Colors.background,
    },


    /* HEADER */

    header: {
        paddingHorizontal: Spacing.lg,

        paddingTop: 45,

        paddingBottom: Spacing.lg,

        backgroundColor: "rgba(15, 27, 52, 0.98)",

        borderBottomWidth: 1,

        borderBottomColor: "rgba(255, 255, 255, 0.08)",
    },


    logo: {
        width: 190,

        height: 70,

        alignSelf: "center",

        marginBottom: Spacing.md,
    },


    /* USUÁRIO */

    userContainer: {
        flexDirection: "row",

        alignItems: "center",

        marginTop: Spacing.sm,
    },


    avatar: {
        width: 46,

        height: 46,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: Radius.full,

        backgroundColor: Colors.primary,
    },


    avatarText: {
        fontSize: 18,

        fontWeight: "700",

        color: Colors.white,
    },


    userInfo: {
        flex: 1,

        marginLeft: Spacing.md,
    },


    userName: {
        fontSize: 15,

        fontWeight: "700",

        color: Colors.white,
    },


    userRole: {
        marginTop: 2,

        fontSize: 12,

        color: Colors.textSecondary,
    },


    /* MENU */

    menu: {
        flex: 1,

        paddingHorizontal: Spacing.md,

        paddingTop: Spacing.lg,
    },


    menuItem: {
        height: 50,

        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: Spacing.md,

        marginBottom: 6,

        borderRadius: Radius.md,
    },


    menuItemActive: {
        backgroundColor: Colors.primary,
    },


    menuText: {
        marginLeft: Spacing.md,

        fontSize: 14,

        fontWeight: "600",

        color: "#94A3B8",
    },


    menuTextActive: {
        color: Colors.white,
    },


    /* FOOTER */

    footer: {
        paddingHorizontal: Spacing.md,

        paddingTop: Spacing.md,

        paddingBottom: 25,

        borderTopWidth: 1,

        borderTopColor: "rgba(255, 255, 255, 0.08)",
    },


    logout: {
        height: 50,

        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: Spacing.md,

        borderRadius: Radius.md,

        backgroundColor: "rgba(239, 68, 68, 0.10)",
    },


    logoutText: {
        marginLeft: Spacing.md,

        fontSize: 14,

        fontWeight: "600",

        color: "#F87171",
    },

});