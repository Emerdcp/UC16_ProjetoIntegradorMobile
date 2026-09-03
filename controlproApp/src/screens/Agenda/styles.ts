import { StyleSheet } from "react-native";

import {
    Colors,
    Radius,
    Spacing,
} from "@/designSystem";


export const styles = StyleSheet.create({

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
        backgroundColor: "rgba(15, 27, 52, 0.96)",
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
       CARD DO CALENDÁRIO
    ===================================================== */

    calendarCard: {
        marginHorizontal: Spacing.lg,
        padding: 16,
        borderRadius: 20,
        backgroundColor:
            "rgba(24,39,65,0.96)",
        borderWidth: 1,
        borderColor:
            "rgba(255,255,255,0.08)",
    },


    /* =====================================================
       CABEÇALHO DO MÊS
    ===================================================== */

    monthHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
    },


    monthButton: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Radius.md,
        backgroundColor:
            "rgba(5,11,44,0.65)",
    },


    monthCenter: {
        alignItems: "center",
    },


    monthTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.white,
    },


    yearText: {
        marginTop: 2,
        fontSize: 11,
        color: Colors.textSecondary,
    },


    /* =====================================================
       SEMANA
    ===================================================== */

    weekRow: {
        flexDirection: "row",
        marginBottom: 8,
    },


    weekText: {
        width: `${100 / 7}%`,
        textAlign: "center",
        fontSize: 9,
        fontWeight: "700",
        color: Colors.textSecondary,
    },


    /* =====================================================
       GRADE DE DIAS
    ===================================================== */

    daysGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },


    dayContainer: {
        width: `${100 / 7}%`,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },


    day: {
        width: 34,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
    },


    daySelected: {
        backgroundColor: "#4F8DF7",
    },


    dayToday: {
        borderWidth: 1,
        borderColor: "#4F8DF7",
    },


    dayText: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.white,
    },


    dayTextSelected: {
        color: Colors.white,
        fontWeight: "700",
    },


    eventDot: {
        position: "absolute",
        bottom: 2,
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: "#4F8DF7",
    },


    /* =====================================================
       CABEÇALHO DOS COMPROMISSOS
    ===================================================== */

    dayHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: Spacing.lg,
        marginTop: 24,
        marginBottom: 12,
    },


    dayHeaderTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.white,
    },


    dayHeaderSubtitle: {
        marginTop: 4,
        fontSize: 11,
        color: Colors.textSecondary,
        textTransform: "capitalize",
    },


    eventCount: {
        width: 34,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        backgroundColor:
            "rgba(79,141,247,0.14)",
    },


    eventCountText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#4F8DF7",
    },


    /* =====================================================
       CARD DE EVENTO
    ===================================================== */

    eventCard: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: Spacing.lg,
        marginBottom: 10,
        padding: 13,
        borderRadius: 17,
        backgroundColor:
            "rgba(24,39,65,0.96)",
        borderWidth: 1,
        borderColor:
            "rgba(255,255,255,0.08)",
    },


    eventIcon: {
        width: 46,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        marginRight: 12,
    },


    eventContent: {
        flex: 1,
    },


    eventTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
    },


    eventTime: {
        fontSize: 11,
        fontWeight: "700",
        color: "#4F8DF7",
    },


    eventTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: Colors.white,
    },


    eventClient: {
        marginTop: 3,
        fontSize: 11,
        color: Colors.textSecondary,
    },


    eventDescription: {
        marginTop: 3,
        fontSize: 10,
        color: "#64748B",
    },


    /* =====================================================
       ESPAÇO FINAL
    ===================================================== */

    bottomSpace: {
        height: 30,
    },

    loadingContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 25,
    },

    loadingText: {
        marginTop: 8,
        fontSize: 12,
        color: Colors.textSecondary,
    },

    errorContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Spacing.lg,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: Radius.lg,
        backgroundColor: "rgba(24,39,65,0.95)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
    },

    errorText: {
        marginTop: 8,
        fontSize: 12,
        textAlign: "center",
        color: Colors.textSecondary,
    },

    retryButton: {
        marginTop: 12,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: Radius.md,
        backgroundColor: "#2563EB",
    },

    retryText: {
        fontSize: 11,
        fontWeight: "700",
        color: Colors.white,
    },

    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Spacing.lg,
        paddingVertical: 28,
        paddingHorizontal: 20,
        borderRadius: Radius.lg,
        backgroundColor: "rgba(24,39,65,0.95)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
    },

    emptyTitle: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "700",
        color: Colors.white,
    },

    emptyText: {
        marginTop: 5,
        fontSize: 11,
        textAlign: "center",
        color: Colors.textSecondary,
    },
    floatingButton: {
        position: "absolute",
        right: 18,
        bottom: 4,
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2563EB",
        elevation: 6,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },

});