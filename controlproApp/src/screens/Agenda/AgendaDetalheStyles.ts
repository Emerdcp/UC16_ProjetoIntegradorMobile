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
            fontSize: 21,
            fontWeight: "700",
            color: Colors.white,
        },


        headerSubtitle: {
            marginTop: 2,
            fontSize: 12,
            color: Colors.textSecondary,
        },


        /* =====================================================
           CONTEÚDO
        ===================================================== */

        content: {
            paddingTop: Spacing.lg,
            paddingBottom: 110,
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
            marginTop: 10,
            fontSize: 13,
            color: Colors.textSecondary,
        },


        /* =====================================================
           TÍTULO
        ===================================================== */

        titleCard: {
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: Spacing.lg,
            padding: 16,
            borderRadius: 18,
            backgroundColor:
                "rgba(24,39,65,0.96)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.08)",
        },


        mainIcon: {
            width: 52,
            height: 52,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            marginRight: 12,
        },


        titleContent: {
            flex: 1,
        },


        typeText: {
            fontSize: 10,
            fontWeight: "700",
            color: Colors.textSecondary,
        },


        eventTitle: {
            marginTop: 3,
            fontSize: 16,
            fontWeight: "700",
            color: Colors.white,
        },


        status: {
            paddingHorizontal: 9,
            paddingVertical: 6,
            borderRadius: Radius.full,
        },


        statusText: {
            fontSize: 9,
            fontWeight: "700",
        },


        /* =====================================================
           INFORMAÇÕES
        ===================================================== */

        infoCard: {
            marginHorizontal: Spacing.lg,
            marginTop: 12,
            padding: 15,
            borderRadius: 17,
            backgroundColor:
                "rgba(24,39,65,0.96)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.08)",
        },


        infoRow: {
            flexDirection: "row",
            alignItems: "center",
        },


        infoRowSpacing: {
            marginTop: 14,
        },


        infoIcon: {
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 13,
            backgroundColor:
                "rgba(79,141,247,0.13)",
        },


        infoContent: {
            marginLeft: 12,
        },


        infoLabel: {
            fontSize: 10,
            color: Colors.textSecondary,
        },


        infoValue: {
            marginTop: 3,
            fontSize: 14,
            fontWeight: "700",
            color: Colors.white,
        },


        /* =====================================================
           DETALHES
        ===================================================== */

        detailCard: {
            marginHorizontal: Spacing.lg,
            marginTop: 12,
            padding: 15,
            borderRadius: 17,
            backgroundColor:
                "rgba(24,39,65,0.96)",
            borderWidth: 1,
            borderColor:
                "rgba(255,255,255,0.08)",
        },


        detailHeader: {
            flexDirection: "row",
            alignItems: "center",
        },


        detailHeaderText: {
            marginLeft: 8,
            fontSize: 12,
            fontWeight: "700",
            color: Colors.textSecondary,
        },


        detailValue: {
            marginTop: 10,
            fontSize: 14,
            lineHeight: 20,
            color: Colors.white,
        },


        detailSecondary: {
            marginTop: 5,
            fontSize: 11,
            lineHeight: 17,
            color: Colors.textSecondary,
        },


        /* =====================================================
           ESPAÇO FINAL
        ===================================================== */

        bottomSpace: {
            height: 30,
        },

    });