import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
    Typography,
} from "@/designSystem";


export const styles = StyleSheet.create({

    /* =====================================================
       FUNDO
    ===================================================== */

    background: {
        flex: 1,
    },


    container: {
        flex: 1,
        backgroundColor: "rgba(5, 11, 44, 0.82)",
    },


    /* =====================================================
       HEADER
    ===================================================== */

    header: {
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,

        backgroundColor: "rgba(3, 29, 54, 0.94)",

        borderBottomWidth: 1,
        borderBottomColor: "#24364D",
    },


    headerButton: {
        width: 42,
        height: 42,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "rgba(15, 23, 42, 0.65)",

        borderWidth: 1,
        borderColor: "#33445F",
    },


    headerTitleArea: {
        flex: 1,

        marginHorizontal: 12,
    },


    headerTitle: {
        fontSize: 22,
        fontWeight: "700",

        color: Colors.white,
    },


    headerSubtitle: {
        marginTop: 2,

        fontSize: 12,

        color: "#94A3B8",
    },


    /* =====================================================
       CONTEÚDO
    ===================================================== */

    content: {
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.lg,

        paddingBottom: 110,
    },


    /* =====================================================
       PESQUISA
    ===================================================== */

    searchContainer: {
        height: 52,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,

        backgroundColor: "#202D42",

        borderWidth: 1,
        borderColor: "#33445F",

        borderRadius: Radius.lg,
    },


    searchInput: {
        flex: 1,

        marginLeft: 10,

        fontSize: 14,

        color: "#FFFFFF",
    },


    /* =====================================================
       FILTROS
    ===================================================== */

    filters: {
        gap: 8,

        paddingVertical: 14,
    },


    filterButton: {
        paddingHorizontal: 18,
        paddingVertical: 10,

        borderRadius: 22,

        backgroundColor: "#202D42",

        borderWidth: 1,
        borderColor: "#33445F",
    },


    filterButtonActive: {
        backgroundColor: "#3B82F6",

        borderColor: "#3B82F6",
    },


    filterText: {
        fontSize: 12,

        fontWeight: "600",

        color: "#94A3B8",
    },


    filterTextActive: {
        color: "#FFFFFF",
    },


    /* =====================================================
       CABEÇALHO DA LISTA
    ===================================================== */

    listHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: 10,
    },


    listTitle: {
        fontSize: 18,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    listCount: {
        fontSize: 12,

        color: "#94A3B8",
    },


    /* =====================================================
       CARD DE ATENDIMENTO
    ===================================================== */

    attendanceCard: {
        marginBottom: 12,

        padding: 14,

        backgroundColor: "#202D42",

        borderWidth: 1,
        borderColor: "#33445F",

        borderRadius: 16,
    },


    attendanceTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: 10,
    },


    attendanceNumber: {
        fontSize: 12,

        fontWeight: "700",

        color: "#3B82F6",
    },


    /* =====================================================
       STATUS
    ===================================================== */

    status: {
        paddingHorizontal: 11,
        paddingVertical: 5,

        borderRadius: 20,
    },


    statusInProgress: {
        backgroundColor: "rgba(34, 197, 94, 0.16)",
    },


    statusWaiting: {
        backgroundColor: "rgba(245, 158, 11, 0.16)",
    },


    statusResolved: {
        backgroundColor: "rgba(59, 130, 246, 0.16)",
    },


    statusText: {
        fontSize: 10,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    /* =====================================================
       INFORMAÇÕES
    ===================================================== */

    attendanceTitle: {
        fontSize: 15,

        fontWeight: "700",

        color: "#FFFFFF",

        marginBottom: 5,
    },


    attendanceClient: {
        fontSize: 12,

        color: "#94A3B8",
    },


    /* =====================================================
       RODAPÉ DO CARD
    ===================================================== */

    attendanceFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: 12,

        paddingTop: 10,

        borderTopWidth: 1,
        borderTopColor: "#2D3C52",
    },


    priorityArea: {
        flexDirection: "row",
        alignItems: "center",

        gap: 5,
    },


    priorityText: {
        fontSize: 11,

        color: "#AEBBD0",
    },


    attendanceDate: {
        fontSize: 11,

        color: "#94A3B8",
    },


    /* =====================================================
       VAZIO
    ===================================================== */

    empty: {
        alignItems: "center",

        paddingVertical: 70,
    },


    emptyTitle: {
        marginTop: 12,

        fontSize: 15,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    emptyText: {
        marginTop: 5,

        fontSize: 12,

        textAlign: "center",

        color: "#94A3B8",
    },


    /* =====================================================
       BOTÃO FLUTUANTE
    ===================================================== */

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