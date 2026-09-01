import {
    StyleSheet,
} from "react-native";


export const styles =
    StyleSheet.create({

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
           LOADING
        ===================================================== */

        loadingContainer: {
            flex: 1,

            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#020B24",
        },

        loadingText: {
            marginTop: 14,

            color: "#94A3B8",

            fontSize: 14,
        },


        /* =====================================================
           ERRO
        ===================================================== */

        errorTitle: {
            marginTop: 15,

            color: "#E2E8F0",

            fontSize: 17,
            fontWeight: "700",
        },

        retryButton: {
            marginTop: 18,

            paddingHorizontal: 22,
            paddingVertical: 11,

            borderRadius: 10,

            backgroundColor: "#2864E8",
        },

        retryText: {
            color: "#FFFFFF",

            fontSize: 14,
            fontWeight: "700",
        },


        /* =====================================================
           HEADER
        ===================================================== */

        header: {
            flexDirection: "row",

            alignItems: "center",

            paddingHorizontal: 18,
            paddingVertical: 13,

            backgroundColor:
                "rgba(5, 27, 52, 0.97)",

            borderBottomWidth: 1,

            borderBottomColor:
                "#243852",
        },

        backButton: {
            width: 44,
            height: 44,

            alignItems: "center",
            justifyContent: "center",

            borderRadius: 12,

            backgroundColor: "#142A42",

            borderWidth: 1,

            borderColor: "#304661",

            marginRight: 13,
        },

        headerText: {
            flex: 1,
        },

        headerTitle: {
            color: "#FFFFFF",

            fontSize: 21,
            fontWeight: "700",
        },

        headerSubtitle: {
            marginTop: 2,

            color: "#8FA1B8",

            fontSize: 12,
        },


        /* =====================================================
           CONTEÚDO
        ===================================================== */

        content: {
            padding: 18,

            paddingBottom: 40,
        },


        /* =====================================================
           CARD
        ===================================================== */

        card: {
            padding: 16,

            marginBottom: 12,

            borderRadius: 16,

            backgroundColor:
                "rgba(15, 23, 42, 0.94)",

            borderWidth: 1,

            borderColor: "#263852",
        },


        /* =====================================================
           IDENTIFICAÇÃO
        ===================================================== */

        companyIcon: {
            width: 58,
            height: 58,

            alignItems: "center",
            justifyContent: "center",

            borderRadius: 16,

            backgroundColor:
                "rgba(79, 125, 243, 0.12)",

            marginBottom: 12,
        },

        companyInfo: {
            flex: 1,
        },

        companyName: {
            color: "#FFFFFF",

            fontSize: 20,
            fontWeight: "700",
        },

        companyLegalName: {
            marginTop: 4,

            color: "#AEBBD0",

            fontSize: 13,

            lineHeight: 18,
        },


        /* =====================================================
           STATUS
        ===================================================== */

        status: {
            flexDirection: "row",

            alignItems: "center",

            alignSelf: "flex-start",

            marginTop: 10,

            paddingHorizontal: 9,
            paddingVertical: 5,

            borderRadius: 999,

            backgroundColor:
                "rgba(34, 197, 94, 0.12)",
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
           SEÇÃO
        ===================================================== */

        sectionTitle: {
            marginTop: 8,
            marginBottom: 10,

            color: "#FFFFFF",

            fontSize: 16,
            fontWeight: "700",
        },


        /* =====================================================
           INFORMAÇÕES
        ===================================================== */

        infoRow: {
            flexDirection: "row",

            alignItems: "center",

            paddingVertical: 11,

            borderBottomWidth: 1,

            borderBottomColor:
                "rgba(255,255,255,0.05)",
        },

        infoContent: {
            flex: 1,

            marginLeft: 12,
        },

        infoLabel: {
            color: "#8190A5",

            fontSize: 11,
        },

        infoValue: {
            marginTop: 3,

            color: "#E2E8F0",

            fontSize: 14,
        },


        /* =====================================================
           ENDEREÇO
        ===================================================== */

        addressRow: {
            flexDirection: "row",
        },

        addressContent: {
            flex: 1,

            marginLeft: 12,
        },

        addressText: {
            color: "#E2E8F0",

            fontSize: 14,

            lineHeight: 21,
        },

        addressCep: {
            marginTop: 5,

            color: "#8190A5",

            fontSize: 12,
        },

        mapButton: {
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",

            height: 48,

            marginTop: 16,

            borderRadius: 12,

            backgroundColor: "#2864E8",
        },

        mapButtonText: {
            marginLeft: 8,

            color: "#FFFFFF",

            fontSize: 14,
            fontWeight: "700",
        },


        /* =====================================================
           CONTATOS
        ===================================================== */

        contactName: {
            color: "#FFFFFF",

            fontSize: 15,
            fontWeight: "700",
        },

        contactFunction: {
            marginTop: 3,

            color: "#8190A5",

            fontSize: 12,
        },

        contactActions: {
            flexDirection: "row",

            gap: 10,

            marginTop: 14,
        },

        smallAction: {
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",

            paddingHorizontal: 14,

            height: 38,

            borderRadius: 10,

            backgroundColor: "#2864E8",
        },

        smallActionText: {
            marginLeft: 6,

            color: "#FFFFFF",

            fontSize: 12,
            fontWeight: "700",
        },


        /* =====================================================
           SISTEMAS
        ===================================================== */

        systemCard: {
            flexDirection: "row",

            alignItems: "center",

            padding: 15,

            marginBottom: 10,

            borderRadius: 14,

            backgroundColor:
                "rgba(15, 23, 42, 0.94)",

            borderWidth: 1,

            borderColor: "#263852",
        },

        systemInfo: {
            flex: 1,

            marginLeft: 12,
        },

        systemTitle: {
            color: "#FFFFFF",

            fontSize: 14,
            fontWeight: "700",
        },

        systemDescription: {
            marginTop: 3,

            color: "#8190A5",

            fontSize: 12,
        },

    });