import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
    Typography,
} from "@/designSystem";


export const styles = StyleSheet.create({

    background: {
        flex: 1,
    },


    container: {
        flex: 1,
        backgroundColor: "rgba(3, 11, 38, 0.88)",
    },


    /* HEADER */

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        backgroundColor: "rgba(15, 27, 52, 0.96)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.08)",
    },
    headerButton: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Radius.md,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.border,
        marginRight: Spacing.md,
    },
    headerInfo: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
    },


    subtitle: {
        marginTop: 3,
        fontSize: 12,
        color: Colors.textSecondary,
    },


    notificationButton: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: Colors.background,

        borderWidth: 1,
        borderColor: Colors.border,
    },


    /* CONTEÚDO */

    content: {
        padding: Spacing.lg,
        paddingBottom: 100,
    },


    /* BUSCA */

    searchContainer: {
        height: 52,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: Spacing.md,

        borderRadius: Radius.md,

        backgroundColor: Colors.surface,

        borderWidth: 1,
        borderColor: Colors.border,
    },


    searchInput: {
        flex: 1,

        marginLeft: Spacing.sm,

        fontSize: 14,

        color: Colors.white,
    },


    /* FILTROS */

    filters: {
        paddingVertical: Spacing.md,
        gap: 8,
    },


    filterButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,

        borderRadius: Radius.full,

        backgroundColor: Colors.surface,

        borderWidth: 1,
        borderColor: Colors.border,
    },


    filterButtonActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },


    filterText: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.textSecondary,
    },


    filterTextActive: {
        color: Colors.white,
    },


    /* LISTA */

    listHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: Spacing.sm,
        marginBottom: Spacing.sm,
    },


    listTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.white,
    },


    total: {
        fontSize: 12,
        color: Colors.textSecondary,
    },


    /* CARD */

    card: {
        marginBottom: Spacing.md,

        padding: Spacing.md,

        borderRadius: Radius.lg,

        backgroundColor: Colors.surface,

        borderWidth: 1,
        borderColor: Colors.border,
    },


    cardTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },


    number: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.primary,
    },


    status: {
        paddingHorizontal: 10,
        paddingVertical: 5,

        borderRadius: Radius.full,
    },


    statusProgress: {
        backgroundColor: "rgba(34,197,94,0.15)",
    },


    statusWaiting: {
        backgroundColor: "rgba(245,158,11,0.15)",
    },


    statusResolved: {
        backgroundColor: "rgba(59,130,246,0.15)",
    },


    statusText: {
        fontSize: 10,
        fontWeight: "700",
    },


    statusTextProgress: {
        color: "#22C55E",
    },


    statusTextWaiting: {
        color: "#F59E0B",
    },


    statusTextResolved: {
        color: "#60A5FA",
    },


    cardTitle: {
        marginTop: Spacing.md,

        fontSize: 16,
        fontWeight: "700",

        color: Colors.white,
    },


    client: {
        marginTop: 5,

        fontSize: 12,

        color: Colors.textSecondary,
    },


    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: Spacing.md,

        paddingTop: Spacing.sm,

        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.06)",
    },


    priorityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },


    priority: {
        marginLeft: 5,

        fontSize: 11,

        fontWeight: "600",

        color: Colors.textSecondary,
    },


    date: {
        fontSize: 11,
        color: Colors.textSecondary,
    },


    /* NOVO ATENDIMENTO */

    floatingButton: {
        position: "absolute",

        right: 20,
        bottom: 38,

        width: 58,
        height: 58,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 29,

        backgroundColor: "rgba(47, 101, 232, 0.90)",

        elevation: 8,

        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.30,
        shadowRadius: 6,
    },

});