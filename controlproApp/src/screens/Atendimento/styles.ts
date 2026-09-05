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


    /* =====================================================
       CONTAINER
    ===================================================== */

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

        marginLeft: 5,
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
       CARD
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


    /* =====================================================
       CÓDIGO
    ===================================================== */

    numberArea: {
        flex: 1,
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
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        gap: 5,

        paddingHorizontal: 11,
        paddingVertical: 5,

        borderRadius: 20,
    },


    /* -----------------------------------------------------
       ABERTO
    ----------------------------------------------------- */

    statusWaiting: {
        backgroundColor: "rgba(245, 158, 11, 0.18)",
    },


    /* -----------------------------------------------------
       EM ATENDIMENTO
    ----------------------------------------------------- */

    statusInProgress: {
        backgroundColor: "rgba(59, 130, 246, 0.18)",
    },


    /* -----------------------------------------------------
       DESENVOLVIMENTO
    ----------------------------------------------------- */

    statusDevelopment: {
        backgroundColor: "rgba(168, 85, 247, 0.18)",
    },


    /* -----------------------------------------------------
       FINALIZADO
    ----------------------------------------------------- */

    statusResolved: {
        backgroundColor: "rgba(34, 197, 94, 0.18)",
    },


    /* -----------------------------------------------------
       CANCELADO
    ----------------------------------------------------- */

    statusCancelled: {
        backgroundColor: "rgba(239, 68, 68, 0.18)",
    },


    statusText: {
        fontSize: 10,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    /* =====================================================
       TÍTULO / DESCRIÇÃO
    ===================================================== */

    attendanceTitle: {
        fontSize: 15,

        fontWeight: "700",

        lineHeight: 21,

        color: "#FFFFFF",

        marginBottom: 7,
    },


    /* =====================================================
       INFORMAÇÃO DO CLIENTE
    ===================================================== */

    infoRow: {
        flexDirection: "row",

        alignItems: "center",

        gap: 7,

        marginBottom: 5,
    },


    attendanceClient: {
        flex: 1,

        fontSize: 12,

        color: "#CBD5E1",
    },


    /* =====================================================
       DETALHES
    ===================================================== */

    detailsArea: {
        flexDirection: "row",

        gap: 10,

        marginTop: 8,
    },


    detailItem: {
        flex: 1,

        padding: 9,

        backgroundColor: "rgba(15, 23, 42, 0.45)",

        borderRadius: 9,

        borderWidth: 1,
        borderColor: "#2D3C52",
    },


    detailLabel: {
        fontSize: 10,

        color: "#64748B",

        marginBottom: 3,
    },


    detailValue: {
        fontSize: 11,

        fontWeight: "600",

        color: "#CBD5E1",
    },


    /* =====================================================
       RODAPÉ
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


    dateArea: {
        flexDirection: "row",

        alignItems: "center",

        gap: 6,
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

        paddingHorizontal: 20,
    },


    emptyTitle: {
        marginTop: 12,

        fontSize: 15,

        fontWeight: "700",

        color: "#FFFFFF",

        textAlign: "center",
    },


    emptyText: {
        marginTop: 5,

        fontSize: 12,

        textAlign: "center",

        color: "#94A3B8",
    },


    /* =====================================================
       BOTÃO TENTAR NOVAMENTE
    ===================================================== */

    retryButton: {
        marginTop: 18,

        paddingHorizontal: 20,
        paddingVertical: 10,

        borderRadius: 10,

        backgroundColor: "#2864E8",
    },


    retryText: {
        fontSize: 13,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    /* =====================================================
       BOTÃO FLUTUANTE
    ===================================================== */

    floatingButton: {
        position: "absolute",

        right: 20,
        bottom: 80,

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