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
       CONTAINER PRINCIPAL
    ===================================================== */

    container: {
        flex: 1,
        backgroundColor: "rgba(5, 11, 44, 0.88)",
    },


    /* =====================================================
       CABEÇALHO
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
       BOTÃO VOLTAR
    ===================================================== */

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


    /* =====================================================
       TEXTOS DO CABEÇALHO
    ===================================================== */

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
       CAMPO
    ===================================================== */

    field: {
        marginBottom: 18,
    },


    /* =====================================================
       LABEL
    ===================================================== */

    label: {
        marginBottom: 7,

        fontSize: 13,
        fontWeight: "600",

        color: "#E8EEF7",
    },


    /* =====================================================
       INPUT
    ===================================================== */

    inputContainer: {
        flexDirection: "row",

        alignItems: "center",

        minHeight: 52,

        paddingHorizontal: 14,

        borderRadius: Radius.lg,

        backgroundColor: "#FFFFFF",

        borderWidth: 1,
        borderColor: "#D7DEE8",
    },


    input: {
        flex: 1,

        marginLeft: 10,

        paddingVertical: 0,

        fontSize: 15,

        color: "#1E293B",
    },


    /* =====================================================
       TEXTAREA
    ===================================================== */

    textAreaContainer: {
        alignItems: "flex-start",

        minHeight: 130,

        paddingVertical: 12,
    },


    textArea: {
        minHeight: 105,

        paddingTop: 0,

        textAlignVertical: "top",
    },


    /* =====================================================
       CONTADOR
    ===================================================== */

    counter: {
        marginTop: 5,

        textAlign: "right",

        fontSize: 11,

        color: "#8190A5",
    },


    /* =====================================================
       MENSAGEM DE ERRO
    ===================================================== */

    errorContainer: {
        flexDirection: "row",

        alignItems: "center",

        gap: 7,

        padding: 12,

        marginBottom: 18,

        borderRadius: Radius.md,

        backgroundColor: "rgba(239, 68, 68, 0.12)",

        borderWidth: 1,
        borderColor: "rgba(239, 68, 68, 0.35)",
    },


    errorText: {
        flex: 1,

        fontSize: 13,
        fontWeight: "600",

        color: "#EF4444",
    },


    /* =====================================================
       BOTÃO SALVAR
    ===================================================== */

    saveButton: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        gap: 8,

        height: 54,

        marginTop: 8,

        borderRadius: Radius.lg,

        backgroundColor: Colors.primary,
    },


    saveButtonText: {
        fontSize: 15,

        fontWeight: "700",

        color: Colors.white,
    },
    /* =====================================================
   SELECT
===================================================== */

    selectText: {
        flex: 1,

        marginLeft: 10,

        fontSize: 15,

        color: "#1E293B",
    },


    selectPlaceholder: {
        color: "#94A3B8",
    },


    inputDisabled: {
        backgroundColor: "#E2E8F0",

        borderColor: "#CBD5E1",

        opacity: 0.7,
    },


    /* =====================================================
       CARREGAMENTO
    ===================================================== */

    loadingContainer: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },


    loadingText: {
        marginTop: 12,

        fontSize: 14,

        color: "#FFFFFF",
    },


    loadingInline: {
        flexDirection: "row",

        alignItems: "center",

        marginTop: -8,
        marginBottom: 15,
    },


    loadingInlineText: {
        marginLeft: 8,

        fontSize: 12,

        color: "#CBD5E1",
    },


    /* =====================================================
       BOTÃO DESABILITADO
    ===================================================== */

    saveButtonDisabled: {
        opacity: 0.6,
    },


    /* =====================================================
       MODAL
    ===================================================== */

    modalOverlay: {
        flex: 1,

        justifyContent: "flex-end",

        backgroundColor: "rgba(0, 0, 0, 0.65)",
    },


    modalContainer: {
        height: "75%",

        backgroundColor: "#07152B",

        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,

        overflow: "hidden",
    },


    /* =====================================================
       CABEÇALHO DO MODAL
    ===================================================== */

    modalHeader: {
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 20,
        paddingVertical: 18,

        backgroundColor: "#0B2038",

        borderBottomWidth: 1,
        borderBottomColor: "#243852",
    },


    modalTitle: {
        fontSize: 18,

        fontWeight: "700",

        color: "#FFFFFF",
    },


    modalList: {
        flex: 1,

        paddingHorizontal: 16,
        paddingTop: 8,
    },


    /* =====================================================
       ITEM DO MODAL
    ===================================================== */

    modalItem: {
        flexDirection: "row",

        alignItems: "center",

        paddingVertical: 14,

        paddingHorizontal: 8,

        borderBottomWidth: 1,

        borderBottomColor: "#1E334D",
    },


    modalItemIcon: {
        width: 42,
        height: 42,

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,

        borderRadius: Radius.md,

        backgroundColor: "#142A42",
    },


    modalItemTextArea: {
        flex: 1,
    },


    modalItemTitle: {
        fontSize: 15,

        fontWeight: "600",

        color: "#FFFFFF",
    },


    modalItemSubtitle: {
        marginTop: 3,

        fontSize: 12,

        color: "#8FA1B8",
    },


    /* =====================================================
       LISTA VAZIA
    ===================================================== */

    emptyText: {
        paddingVertical: 30,

        textAlign: "center",

        fontSize: 14,

        color: "#8FA1B8",
    },

    /* =====================================================
   PESQUISA DE CLIENTE
===================================================== */

    modalSearchContainer: {
        height: 48,

        flexDirection: "row",
        alignItems: "center",

        marginHorizontal: 18,
        marginBottom: 10,

        paddingHorizontal: 13,

        backgroundColor: "#10253D",

        borderWidth: 1,
        borderColor: "#29415C",

        borderRadius: 12,
    },

    modalSearchInput: {
        flex: 1,

        marginLeft: 9,

        fontSize: 13,

        color: "#FFFFFF",
    },

});