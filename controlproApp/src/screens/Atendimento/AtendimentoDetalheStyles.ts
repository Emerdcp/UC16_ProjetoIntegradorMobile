import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
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

        backgroundColor:
            "rgba(5, 11, 44, 0.90)",
    },


    /* =====================================================
       HEADER
    ===================================================== */

    header: {
        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,

        backgroundColor:
            "rgba(3, 29, 54, 0.96)",

        borderBottomWidth: 1,
        borderBottomColor: "#24364D",
    },


    backButton: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "#142A42",

        borderWidth: 1,
        borderColor: "#304661",

        marginRight: 14,
    },


    headerTextArea: {
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
       CONTEÚDO
    ===================================================== */

    content: {
        padding: Spacing.lg,

        paddingBottom: 40,
    },


    /* =====================================================
       CARD PRINCIPAL
    ===================================================== */

    mainCard: {
        padding: 18,

        marginBottom: 6,

        borderRadius: 16,

        backgroundColor: "#071D31",

        borderWidth: 1,
        borderColor: "#29415C",
    },


    mainCardTop: {
        flexDirection: "row",

        justifyContent: "space-between",

        gap: 12,
    },


    code: {
        marginBottom: 7,

        fontSize: 13,

        fontWeight: "700",

        color: "#3B82F6",
    },


    description: {
        flex: 1,

        fontSize: 17,

        lineHeight: 23,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    /* =====================================================
       STATUS
    ===================================================== */

    status: {
        alignSelf: "flex-start",

        paddingHorizontal: 10,
        paddingVertical: 6,

        borderRadius: 20,
    },


    statusText: {
        fontSize: 11,

        fontWeight: "700",
    },


    /* =====================================================
       TÍTULO DA SEÇÃO
    ===================================================== */

    sectionTitle: {
        marginTop: 20,

        marginBottom: 10,

        fontSize: 16,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    /* =====================================================
       CARD
    ===================================================== */

    card: {
        padding: 16,

        borderRadius: 15,

        backgroundColor: "#071D31",

        borderWidth: 1,
        borderColor: "#29415C",
    },


    /* =====================================================
       INFORMAÇÃO
    ===================================================== */

    infoRow: {
        flexDirection: "row",

        alignItems: "center",

        gap: 12,
    },


    infoContent: {
        flex: 1,
    },


    infoLabel: {
        marginBottom: 3,

        fontSize: 11,

        color: "#8190A5",
    },


    infoValue: {
        fontSize: 14,

        fontWeight: "600",

        color: "#FFFFFF",
    },


    /* =====================================================
       DETALHES
    ===================================================== */

    detailRow: {
        flexDirection: "row",

        justifyContent: "space-between",

        gap: 15,

        paddingVertical: 10,

        borderBottomWidth: 1,

        borderBottomColor:
            "rgba(255,255,255,0.06)",
    },


    detailLabel: {
        fontSize: 12,

        color: "#8190A5",
    },


    detailValue: {
        flex: 1,

        textAlign: "right",

        fontSize: 13,

        fontWeight: "600",

        color: "#E8EEF7",
    },


    /* =====================================================
       TEXTO LONGO
    ===================================================== */

    longText: {
        fontSize: 14,

        lineHeight: 22,

        color: "#D8E1EF",
    },


    /* =====================================================
       LOADING
    ===================================================== */

    loadingContainer: {
        flex: 1,

        alignItems: "center",

        justifyContent: "center",
    },


    loadingText: {
        marginTop: 12,

        fontSize: 13,

        color: "#94A3B8",
    },


    /* =====================================================
       ERRO / VAZIO
    ===================================================== */

    emptyContainer: {
        flex: 1,

        alignItems: "center",

        justifyContent: "center",

        paddingHorizontal: 30,
    },


    emptyTitle: {
        marginTop: 15,

        fontSize: 16,

        fontWeight: "700",

        color: "#FFFFFF",

        textAlign: "center",
    },


    emptyText: {
        marginTop: 7,

        fontSize: 13,

        lineHeight: 20,

        color: "#94A3B8",

        textAlign: "center",
    },


    retryButton: {
        marginTop: 20,

        paddingHorizontal: 22,
        paddingVertical: 11,

        borderRadius: 10,

        backgroundColor: "#3B82F6",
    },


    retryText: {
        fontSize: 13,

        fontWeight: "700",

        color: "#FFFFFF",
    },
    /* =====================================================
   ÁREA PRINCIPAL DO CARD
===================================================== */

    mainCardInfo: {
        flex: 1,
    },


    /* =====================================================
       CAMPOS EDITÁVEIS
    ===================================================== */

    inputLabel: {
        marginBottom: 8,

        fontSize: 12,

        fontWeight: "600",

        color: "#CBD5E1",
    },


    inputLabelSecond: {
        marginTop: 20,
    },


    editTextArea: {
        minHeight: 120,

        padding: 14,

        borderRadius: 12,

        backgroundColor: "#050F21",

        borderWidth: 1,

        borderColor: "#29415C",

        fontSize: 14,

        lineHeight: 21,

        color: "#FFFFFF",

    },


    inputCounter: {
        marginTop: 5,

        textAlign: "right",

        fontSize: 10,

        color: "#64748B",
    },


    /* =====================================================
       BOTÕES DE AÇÃO
    ===================================================== */

    primaryActionButton: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 8,

        minHeight: 54,

        marginTop: 20,

        paddingHorizontal: 18,

        borderRadius: Radius.lg,

        backgroundColor: "#3B82F6",
    },


    saveActionButton: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 8,

        minHeight: 52,

        marginTop: 20,

        paddingHorizontal: 18,

        borderRadius: Radius.lg,

        backgroundColor: "#2563EB",
    },


    finishActionButton: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 8,

        minHeight: 52,

        marginTop: 10,

        marginBottom: 10,

        paddingHorizontal: 18,

        borderRadius: Radius.lg,

        backgroundColor: "#16A34A",
    },


    primaryActionText: {
        fontSize: 14,

        fontWeight: "700",

        color: "#FFFFFF",
    },

    /* =====================================================
   MENSAGEM DE ERRO
===================================================== */

    errorContainer: {
        flexDirection: "row",

        alignItems: "center",

        gap: 8,

        marginTop: 15,

        padding: 12,

        borderRadius: Radius.md,

        backgroundColor:
            "rgba(239, 68, 68, 0.12)",

        borderWidth: 1,

        borderColor:
            "rgba(239, 68, 68, 0.35)",
    },


    errorText: {
        flex: 1,

        fontSize: 13,

        fontWeight: "600",

        color: "#EF4444",
    },

    /* =====================================================
   BOTÃO CANCELAR
===================================================== */

    cancelActionButton: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 8,

        minHeight: 52,

        marginTop: 10,

        paddingHorizontal: 18,

        borderRadius: Radius.lg,

        backgroundColor: "#B91C1C",
    },


    /* =====================================================
       MODAL CANCELAMENTO
    ===================================================== */

    cancelModalOverlay: {
        flex: 1,

        alignItems: "center",

        justifyContent: "center",

        paddingHorizontal: 20,

        backgroundColor:
            "rgba(0, 0, 0, 0.70)",
    },


    cancelModalContainer: {
        width: "100%",

        padding: 20,

        borderRadius: 18,

        backgroundColor: "#071D31",

        borderWidth: 1,

        borderColor: "#29415C",
    },


    cancelModalHeader: {
        flexDirection: "row",

        alignItems: "flex-start",

        justifyContent: "space-between",

        marginBottom: 20,
    },


    cancelModalTitle: {
        fontSize: 18,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    cancelModalSubtitle: {
        marginTop: 4,

        fontSize: 12,

        color: "#8FA1B8",
    },


    cancelModalLabel: {
        marginBottom: 8,

        fontSize: 13,

        fontWeight: "600",

        color: "#E8EEF7",
    },


    cancelModalInput: {
        minHeight: 120,

        padding: 14,

        borderRadius: 12,

        backgroundColor: "#050F21",

        borderWidth: 1,

        borderColor: "#29415C",

        fontSize: 14,

        lineHeight: 21,

        color: "#FFFFFF",
    },


    cancelModalCounter: {
        marginTop: 5,

        textAlign: "right",

        fontSize: 10,

        color: "#64748B",
    },


    cancelModalActions: {
        flexDirection: "row",

        gap: 10,

        marginTop: 20,
    },


    cancelModalBackButton: {
        flex: 1,

        minHeight: 48,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "#334155",
    },


    cancelModalBackText: {
        fontSize: 14,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    cancelModalConfirmButton: {
        flex: 1,

        flexDirection: "row",

        gap: 7,

        minHeight: 48,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor: "#B91C1C",
    },


    cancelModalConfirmText: {
        fontSize: 14,

        fontWeight: "700",

        color: "#FFFFFF",
    },

});