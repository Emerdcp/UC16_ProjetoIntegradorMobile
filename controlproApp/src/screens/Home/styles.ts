import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
    Typography,
} from "@/designSystem";


export const styles = StyleSheet.create({

    /* FUNDO */

    background: {
        flex: 1,
    },


    /* CONTAINER */

    container: {
        flex: 1,

        backgroundColor: "rgba(5, 11, 44, 0.72)",
    },


    content: {
        paddingBottom: 100,
    },


    /* HEADER */

    header: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        paddingHorizontal: Spacing.lg,

        paddingVertical: 14,

        backgroundColor: "rgba(15, 27, 52, 0.90)",

        borderBottomWidth: 1,

        borderBottomColor: "rgba(255, 255, 255, 0.08)",
    },


    headerButton: {
        width: 44,

        height: 44,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "rgba(5, 11, 44, 0.65)",

        borderWidth: 1,

        borderColor: "rgba(255, 255, 255, 0.08)",
    },


    userArea: {
        flex: 1,

        marginLeft: 14,
    },


    title: {
        fontSize: 21,

        fontWeight: "700",

        color: Colors.white,
    },


    userName: {
        marginTop: 2,

        fontSize: Typography.small,

        color: Colors.textSecondary,
    },


    /* SEÇÕES */

    section: {
        marginTop: Spacing.lg,
    },


    sectionHeader: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        paddingHorizontal: Spacing.lg,

        marginBottom: Spacing.md,
    },


    sectionTitle: {
        paddingHorizontal: Spacing.lg,

        marginBottom: Spacing.md,

        fontSize: 18,

        fontWeight: "700",

        color: Colors.white,
    },


    sectionHeaderTitle: {
        fontSize: 18,

        fontWeight: "700",

        color: Colors.white,
    },


    seeAll: {
        fontSize: 12,

        fontWeight: "600",

        color: Colors.primary,
    },


    /* INDICADORES */

    indicators: {
        paddingHorizontal: Spacing.lg,

        gap: 12,
    },


    indicatorCard: {
        width: 150,

        height: 104,

        padding: Spacing.md,

        borderRadius: Radius.lg,

        backgroundColor: "rgba(30, 41, 59, 0.94)",

        borderWidth: 1,

        borderColor: "rgba(255, 255, 255, 0.08)",

        flexDirection: "row",

        alignItems: "flex-end",

        justifyContent: "space-between",
    },


    indicatorTitle: {
        fontSize: 12,

        fontWeight: "600",

        color: Colors.textSecondary,
    },


    indicatorValue: {
        marginTop: 7,

        fontSize: 28,

        fontWeight: "700",

        color: Colors.white,
    },


    iconContainer: {
        width: 42,

        height: 42,

        borderRadius: Radius.md,

        alignItems: "center",

        justifyContent: "center",

        backgroundColor: "rgba(79, 125, 243, 0.12)",
    },


    /* ATENDIMENTOS */

    attendanceCard: {
        marginHorizontal: Spacing.lg,

        marginBottom: 12,

        padding: Spacing.md,

        borderRadius: Radius.lg,

        backgroundColor: "rgba(30, 41, 59, 0.94)",

        borderWidth: 1,

        borderColor: "rgba(255, 255, 255, 0.08)",
    },


    attendanceTop: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",
    },


    attendanceNumber: {
        fontSize: 12,

        fontWeight: "700",

        color: Colors.primary,
    },


    status: {
        paddingHorizontal: 10,

        paddingVertical: 5,

        borderRadius: Radius.full,

        backgroundColor: "rgba(34, 197, 94, 0.15)",
    },


    statusText: {
        fontSize: 10,

        fontWeight: "600",

        color: Colors.success,
    },


    statusWaiting: {
        paddingHorizontal: 10,

        paddingVertical: 5,

        borderRadius: Radius.full,

        backgroundColor: "rgba(245, 158, 11, 0.15)",
    },


    statusWaitingText: {
        fontSize: 10,

        fontWeight: "600",

        color: "#F59E0B",
    },


    attendanceTitle: {
        marginTop: Spacing.sm,

        fontSize: 15,

        fontWeight: "700",

        color: Colors.white,
    },


    attendanceClient: {
        marginTop: 5,

        fontSize: 12,

        color: Colors.textSecondary,
    },


    /* FOOTER */

    footer: {
        position: "absolute",

        left: 0,

        right: 0,

        bottom: 0,

        paddingHorizontal: Spacing.lg,

        paddingTop: 10,

        paddingBottom: 12,

        backgroundColor: "rgba(5, 11, 44, 0.92)",

        borderTopWidth: 1,

        borderTopColor: "rgba(255, 255, 255, 0.08)",
    },


    logout: {
        height: 48,

        borderRadius: Radius.md,

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 8,

        backgroundColor: Colors.error,
    },


    logoutText: {
        fontSize: 14,

        fontWeight: "700",

        color: Colors.white,
    },

});