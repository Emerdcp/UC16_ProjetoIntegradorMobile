import {
    StyleSheet,
} from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/designSystem";


export const styles =
    StyleSheet.create({

        /* =====================================================
           CONTAINER
        ===================================================== */

        container: {
            flex: 1,
            backgroundColor: "#050B2C",
        },


        /* =====================================================
           HEADER
        ===================================================== */

        header: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: Spacing.lg,
            paddingVertical: 14,
            backgroundColor:
                "rgba(15,27,52,0.96)",
            borderBottomWidth: 1,
            borderBottomColor:
                "rgba(255,255,255,0.08)",
        },


        headerButton: {
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: Radius.md,
            backgroundColor:
                "rgba(5,11,44,0.72)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.09)",
        },


        headerContent: {
            flex: 1,
            marginLeft: 14,
        },


        headerTitle: {
            fontSize: 20,
            fontWeight: "700",
            color: Colors.white,
        },


        headerSubtitle: {
            marginTop: 2,
            fontSize: 11,
            color: Colors.textSecondary,
        },


        /* =====================================================
           CONTEÚDO
        ===================================================== */

        content: {
            paddingHorizontal: Spacing.lg,
            paddingTop: 20,
            paddingBottom: 100,
        },


        /* =====================================================
           CAMPOS
        ===================================================== */

        field: {
            marginBottom: 18,
        },


        label: {
            marginBottom: 8,
            fontSize: 12,
            fontWeight: "700",
            color: Colors.white,
        },


        optional: {
            fontSize: 10,
            fontWeight: "400",
            color: Colors.textSecondary,
        },


        inputContainer: {
            minHeight: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
            borderRadius: 14,
            backgroundColor:
                "rgba(24,39,65,0.95)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.08)",
        },


        input: {
            flex: 1,
            marginLeft: 10,
            paddingVertical: 0,
            fontSize: 13,
            color: Colors.white,
        },


        /* =====================================================
           TIPOS
        ===================================================== */

        tipoGrid: {
            gap: 9,
        },


        tipoCard: {
            minHeight: 64,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 15,
            backgroundColor:
                "rgba(24,39,65,0.95)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.07)",
        },


        tipoCardSelected: {
            borderColor:
                "rgba(79,141,247,0.55)",
            backgroundColor:
                "rgba(79,141,247,0.10)",
        },


        tipoIcon: {
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 13,
        },


        tipoContent: {
            flex: 1,
            marginLeft: 11,
        },


        tipoTitle: {
            fontSize: 13,
            fontWeight: "700",
            color: Colors.white,
        },


        tipoSubtitle: {
            marginTop: 3,
            fontSize: 10,
            color: Colors.textSecondary,
        },


        /* =====================================================
           SWITCH
        ===================================================== */

        switchContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
            padding: 13,
            borderRadius: 15,
            backgroundColor:
                "rgba(24,39,65,0.95)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.07)",
        },


        switchContent: {
            flexDirection: "row",
            alignItems: "center",
        },


        switchTextContainer: {
            marginLeft: 10,
        },


        switchTitle: {
            fontSize: 13,
            fontWeight: "700",
            color: Colors.white,
        },


        switchSubtitle: {
            marginTop: 3,
            fontSize: 10,
            color: Colors.textSecondary,
        },


        /* =====================================================
           HORÁRIOS
        ===================================================== */

        timeRow: {
            flexDirection: "row",
            gap: 10,
        },


        timeField: {
            flex: 1,
        },


        /* =====================================================
           TEXTAREA
        ===================================================== */

        textAreaContainer: {
            alignItems: "flex-start",
            paddingVertical: 13,
        },


        textAreaIcon: {
            marginTop: 2,
        },


        textArea: {
            minHeight: 90,
            paddingTop: 0,
        },


        /* =====================================================
           BOTÃO SALVAR
        ===================================================== */

        saveButton: {
            height: 54,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            borderRadius: 15,
            backgroundColor: "#2563EB",
        },


        saveButtonText: {
            marginLeft: 8,
            fontSize: 14,
            fontWeight: "700",
            color: Colors.white,
        },


        /* =====================================================
           ESPAÇO FINAL
        ===================================================== */

        bottomSpace: {
            height: 30,
        },

        modalOverlay: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.55)",
        },

        modalContainer: {
            maxHeight: "82%",
            paddingHorizontal: Spacing.lg,
            paddingTop: 18,
            paddingBottom: 25,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: "#0F1B34",
        },

        modalHeader: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
        },

        modalTitle: {
            fontSize: 17,
            fontWeight: "700",
            color: Colors.white,
        },

        modalSubtitle: {
            marginTop: 3,
            fontSize: 11,
            color: Colors.textSecondary,
        },

        modalClose: {
            width: 38,
            height: 38,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            backgroundColor: "rgba(5,11,44,0.75)",
        },

        modalItem: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 10,
            marginBottom: 8,
            borderRadius: 14,
            backgroundColor: "rgba(24,39,65,0.95)",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.07)",
        },

        modalItemIcon: {
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 13,
            backgroundColor: "rgba(79,141,247,0.12)",
        },

        modalItemContent: {
            flex: 1,
            marginLeft: 11,
            marginRight: 8,
        },

        modalItemTitle: {
            fontSize: 13,
            fontWeight: "700",
            color: Colors.white,
        },

        modalItemSubtitle: {
            marginTop: 3,
            fontSize: 10,
            color: Colors.textSecondary,
        },

        modalLoading: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 35,
        },

        modalLoadingText: {
            fontSize: 12,
            color: Colors.textSecondary,
        },

        modalEmpty: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 35,
        },

        modalEmptyText: {
            fontSize: 12,
            textAlign: "center",
            color: Colors.textSecondary,
        },

    });