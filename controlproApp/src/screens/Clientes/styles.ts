import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/designSystem";
import Button from "@/components/Button";


export const styles = StyleSheet.create({

    /* =====================================================
       FUNDO
    ===================================================== */

    background: {
        flex: 1,
    },


    /* =====================================================
       CONTAINER
    ===================================================== */

    container: {
        flex: 1,
        backgroundColor: "rgba(5, 11, 44, 0.88)",
    },


    /* =====================================================
       HEADER
    ===================================================== */

    header: {
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,

        backgroundColor: "rgba(5, 27, 52, 0.96)",

        borderBottomWidth: 1,
        borderBottomColor: "#243852",
    },


    /* =====================================================
       BOTÃO MENU
    ===================================================== */

    menuButton: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "#142A42",

        borderWidth: 1,
        borderColor: "#304661",

        marginRight: 12,
    },


    /* =====================================================
       TEXTO HEADER
    ===================================================== */

    headerText: {
        flex: 1,
    },


    headerTitle: {
        fontSize: 22,
        fontWeight: "700",

        color: Colors.white,
    },


    headerSubtitle: {
        marginTop: 3,

        fontSize: 12,

        color: "#8FA1B8",
    },


    /* =====================================================
       BOTÃO ADICIONAR
    ===================================================== */

    addButton: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: Colors.primary,

        elevation: 4,

        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },


    /* =====================================================
       CONTEÚDO
    ===================================================== */

    content: {
        padding: Spacing.lg,

        paddingBottom: 100,
    },


    /* =====================================================
       PESQUISA
    ===================================================== */

    searchContainer: {
        flexDirection: "row",

        alignItems: "center",

        height: 52,

        paddingHorizontal: 15,

        borderRadius: Radius.lg,

        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        borderColor: "#D7DEE8",
    },


    searchInput: {
        flex: 1,

        marginLeft: 10,

        fontSize: 15,

        color: "#1E293B",
    },


    /* =====================================================
       RESULTADOS
    ===================================================== */

    resultHeader: {
        marginTop: 18,

        marginBottom: 10,
    },


    resultText: {
        fontSize: 13,

        color: "#9AAAC0",

        fontWeight: "600",
    },


    /* =====================================================
       LISTA
    ===================================================== */

    list: {
        gap: 12,
    },


    /* =====================================================
       CARD CLIENTE
    ===================================================== */

    clientCard: {
        flexDirection: "row",

        alignItems: "center",

        padding: 15,

        borderRadius: 16,

        backgroundColor: "rgba(15, 23, 42, 0.94)",

        borderWidth: 1,
        borderColor: "#263852",

        elevation: 3,

        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },


    /* =====================================================
       ÍCONE CLIENTE
    ===================================================== */

    clientIcon: {
        width: 48,
        height: 48,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 14,

        backgroundColor: "rgba(79, 125, 243, 0.12)",

        marginRight: 13,
    },


    /* =====================================================
       INFORMAÇÕES
    ===================================================== */

    clientInfo: {
        flex: 1,

        minWidth: 0,
    },


    clientName: {
        fontSize: 16,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    clientCompany: {
        marginTop: 3,

        fontSize: 12,

        color: "#AEBBD0",
    },


    clientDocument: {
        marginTop: 7,

        fontSize: 12,

        color: "#CBD5E1",
    },


    clientLocation: {
        marginTop: 3,

        fontSize: 11,

        color: "#8190A5",
    },


    /* =====================================================
       LADO DIREITO
    ===================================================== */

    clientRight: {
        alignItems: "flex-end",

        justifyContent: "space-between",

        gap: 12,

        marginLeft: 8,
    },


    /* =====================================================
       STATUS
    ===================================================== */

    status: {
        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: 9,
        paddingVertical: 5,

        borderRadius: 999,
    },


    statusActive: {
        backgroundColor: "rgba(34, 197, 94, 0.12)",
    },


    statusInactive: {
        backgroundColor: "rgba(239, 68, 68, 0.12)",
    },


    statusDot: {
        width: 6,
        height: 6,

        borderRadius: 3,

        marginRight: 5,
    },


    statusDotActive: {
        backgroundColor: "#22C55E",
    },


    statusDotInactive: {
        backgroundColor: "#EF4444",
    },


    statusText: {
        fontSize: 10,

        fontWeight: "700",
    },


    statusTextActive: {
        color: "#22C55E",
    },


    statusTextInactive: {
        color: "#EF4444",
    },


    /* =====================================================
       VAZIO
    ===================================================== */

    empty: {
        alignItems: "center",

        justifyContent: "center",

        paddingVertical: 70,

        paddingHorizontal: 25,
    },


    emptyTitle: {
        marginTop: 15,

        fontSize: 16,

        fontWeight: "700",

        color: "#E2E8F0",

        textAlign: "center",
    },


    emptyText: {
        marginTop: 7,

        fontSize: 13,

        lineHeight: 19,

        color: "#8190A5",

        textAlign: "center",
    },


    /* =====================================================
       FAB
    ===================================================== */

    fab: {
        position: "absolute",

        right: 22,
        bottom: 80,

        width: 60,
        height: 60,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 30,

        backgroundColor: Colors.primary,

        elevation: 8,

        shadowOpacity: 0.3,
        shadowRadius: 8,

        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
});