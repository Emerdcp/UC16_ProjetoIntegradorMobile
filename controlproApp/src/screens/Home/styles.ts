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

        backgroundColor:
            "rgba(5, 11, 44, 0.78)",
    },


    content: {
        paddingTop: 6,

        paddingBottom: 110,
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
            "rgba(15, 27, 52, 0.94)",

        borderBottomWidth: 1,

        borderBottomColor:
            "rgba(255, 255, 255, 0.08)",
    },


    headerButton: {
        width: 44,

        height: 44,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: Radius.md,

        backgroundColor:
            "rgba(5, 11, 44, 0.72)",

        borderWidth: 1,

        borderColor:
            "rgba(255, 255, 255, 0.09)",

        position: "relative",
    },


    notificationDot: {
        position: "absolute",

        top: 9,

        right: 9,

        width: 7,

        height: 7,

        borderRadius: 10,

        backgroundColor: "#4F8DF7",

        borderWidth: 1,

        borderColor: "#0F1B34",
    },


    userArea: {
        flex: 1,

        marginLeft: 14,
    },


    title: {
        fontSize: 21,

        fontWeight: "700",

        color: Colors.white,
    },


    userName: {
        marginTop: 2,

        fontSize: Typography.small,

        color: Colors.textSecondary,
    },


    /* =====================================================
       SAUDAÇÃO
    ===================================================== */

    greetingCard: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        marginHorizontal: Spacing.lg,

        marginTop: Spacing.lg,

        padding: 17,

        borderRadius: 18,

        backgroundColor:
            "rgba(9, 27, 52, 0.88)",

        borderWidth: 1,

        borderColor:
            "rgba(79, 141, 247, 0.18)",
    },


    greetingContent: {
        flex: 1,

        paddingRight: 10,
    },


    greetingTitle: {
        fontSize: 17,

        fontWeight: "700",

        color: Colors.white,
    },


    greetingText: {
        marginTop: 5,

        fontSize: 12,

        color: Colors.textSecondary,
    },


    dateContainer: {
        alignItems: "center",

        justifyContent: "center",

        minWidth: 48,
    },


    dateText: {
        marginTop: 4,

        fontSize: 11,

        fontWeight: "600",

        color: Colors.textSecondary,
    },


    /* =====================================================
       SEÇÕES
    ===================================================== */

    section: {
        marginTop: 22,
    },


    sectionTitle: {
        paddingHorizontal: Spacing.lg,

        marginBottom: Spacing.md,

        fontSize: 18,

        fontWeight: "700",

        color: Colors.white,
    },


    sectionHeader: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        paddingHorizontal: Spacing.lg,

        marginBottom: Spacing.md,
    },


    sectionHeaderTitle: {
        fontSize: 18,

        fontWeight: "700",

        color: Colors.white,
    },


    seeAll: {
        fontSize: 12,

        fontWeight: "700",

        color: Colors.primary,
    },


    /* =====================================================
       INDICADORES
    ===================================================== */

    indicators: {
        paddingHorizontal: Spacing.lg,

        gap: 12,
    },


    indicatorCard: {
        width: 154,

        minHeight: 148,

        padding: 15,

        borderRadius: 18,

        backgroundColor:
            "rgba(24, 39, 65, 0.95)",

        borderWidth: 1,

        borderColor:
            "rgba(255, 255, 255, 0.08)",
    },


    indicatorIcon: {
        width: 42,

        height: 42,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: 13,

        marginBottom: 12,
    },


    indicatorTitle: {
        fontSize: 12,

        fontWeight: "600",

        color: Colors.textSecondary,
    },


    indicatorValue: {
        marginTop: 2,

        fontSize: 29,

        fontWeight: "700",

        color: Colors.white,
    },


    indicatorDescription: {
        marginTop: 2,

        fontSize: 10,

        color: "#64748B",
    },


    /* =====================================================
       ACESSO RÁPIDO
    ===================================================== */

    quickGrid: {
        flexDirection: "row",

        flexWrap: "wrap",

        paddingHorizontal: Spacing.lg,

        gap: 10,
    },


    quickCard: {
        width: "48.5%",

        minHeight: 86,

        flexDirection: "row",

        alignItems: "center",

        padding: 12,

        borderRadius: 16,

        backgroundColor:
            "rgba(24, 39, 65, 0.94)",

        borderWidth: 1,

        borderColor:
            "rgba(255, 255, 255, 0.07)",
    },


    quickIcon: {
        width: 42,

        height: 42,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: 13,

        marginRight: 10,
    },


    quickBlue: {
        backgroundColor:
            "rgba(79, 141, 247, 0.13)",
    },


    quickGreen: {
        backgroundColor:
            "rgba(52, 211, 153, 0.13)",
    },


    quickPurple: {
        backgroundColor:
            "rgba(167, 139, 250, 0.13)",
    },


    quickOrange: {
        backgroundColor:
            "rgba(245, 158, 11, 0.13)",
    },


    quickContent: {
        flex: 1,
    },


    quickTitle: {
        fontSize: 12,

        fontWeight: "700",

        color: Colors.white,
    },


    quickSubtitle: {
        marginTop: 3,

        fontSize: 10,

        color: Colors.textSecondary,
    },


    /* =====================================================
       ATENDIMENTOS
    ===================================================== */

    attendanceCard: {
        flexDirection: "row",

        alignItems: "center",

        marginHorizontal: Spacing.lg,

        marginBottom: 10,

        padding: 13,

        borderRadius: 17,

        backgroundColor:
            "rgba(24, 39, 65, 0.95)",

        borderWidth: 1,

        borderColor:
            "rgba(255, 255, 255, 0.08)",
    },


    attendanceIconContainer: {
        width: 44,

        height: 44,

        alignItems: "center",

        justifyContent: "center",

        borderRadius: 13,

        marginRight: 12,

        backgroundColor:
            "rgba(79, 141, 247, 0.13)",
    },


    attendanceWaitingIcon: {
        backgroundColor:
            "rgba(245, 158, 11, 0.13)",
    },


    attendanceContent: {
        flex: 1,
    },


    attendanceTop: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        marginBottom: 4,
    },


    attendanceNumber: {
        fontSize: 11,

        fontWeight: "700",

        color: Colors.primary,
    },


    status: {
        paddingHorizontal: 8,

        paddingVertical: 4,

        borderRadius: Radius.full,

        backgroundColor:
            "rgba(34, 197, 94, 0.14)",
    },


    statusText: {
        fontSize: 9,

        fontWeight: "700",

        color: Colors.success,
    },


    statusWaiting: {
        paddingHorizontal: 8,

        paddingVertical: 4,

        borderRadius: Radius.full,

        backgroundColor:
            "rgba(245, 158, 11, 0.14)",
    },


    statusWaitingText: {
        fontSize: 9,

        fontWeight: "700",

        color: "#F59E0B",
    },


    attendanceTitle: {
        fontSize: 14,

        fontWeight: "700",

        color: Colors.white,
    },


    attendanceClient: {
        marginTop: 4,

        fontSize: 11,

        color: Colors.textSecondary,
    },


    /* =====================================================
       ESPAÇO FINAL
    ===================================================== */

    bottomSpace: {
        height: 30,
    },
    loadingHome: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 25,
    },

    loadingHomeText: {
        marginTop: 8,
        fontSize: 12,
        color: Colors.textSecondary,
    },

    emptyHome: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Spacing.lg,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: Radius.lg,
        backgroundColor: "rgba(24, 39, 65, 0.75)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.07)",
    },

    emptyHomeTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "700",
        color: Colors.white,
    },

    emptyHomeText: {
        marginTop: 6,
        fontSize: 11,
        lineHeight: 17,
        textAlign: "center",
        color: Colors.textSecondary,
    },

    retryHomeButton: {
        marginTop: 12,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: Radius.md,
        backgroundColor: "#2563EB",
    },

    retryHomeText: {
        fontSize: 11,
        fontWeight: "700",
        color: Colors.white,
    },

    /* =====================================================
   MINI AGENDA DA HOME
===================================================== */

    homeCalendar: {
        marginHorizontal: Spacing.lg,
        padding: 13,
        borderRadius: 18,
        backgroundColor: "rgba(24, 39, 65, 0.95)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.08)",
    },


    homeCalendarHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },


    homeCalendarButton: {
        width: 34,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "rgba(5, 11, 44, 0.65)",
    },


    homeCalendarMonth: {
        alignItems: "center",
        justifyContent: "center",
    },


    homeCalendarMonthText: {
        fontSize: 15,
        fontWeight: "700",
        color: Colors.white,
    },


    homeCalendarYear: {
        marginTop: 1,
        fontSize: 9,
        color: Colors.textSecondary,
    },


    homeWeekRow: {
        flexDirection: "row",
        marginBottom: 5,
    },


    homeWeekText: {
        width: `${100 / 7}%`,
        textAlign: "center",
        fontSize: 8,
        fontWeight: "700",
        color: Colors.textSecondary,
    },


    homeDaysGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },


    homeDayContainer: {
        width: `${100 / 7}%`,
        height: 31,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },


    homeDay: {
        width: 27,
        height: 27,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
    },


    homeDaySelected: {
        backgroundColor: "#4F8DF7",
    },


    homeDayToday: {
        borderWidth: 1,
        borderColor: "#4F8DF7",
    },


    homeDayText: {
        fontSize: 10,
        fontWeight: "600",
        color: Colors.white,
    },


    homeDayTextSelected: {
        color: Colors.white,
        fontWeight: "700",
    },


    homeEventDot: {
        position: "absolute",
        bottom: 1,
        width: 3,
        height: 3,
        borderRadius: 3,
        backgroundColor: "#4F8DF7",
    },


    homeAgendaDayHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: Spacing.lg,
        marginTop: 16,
        marginBottom: 10,
    },


    homeAgendaDayTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: Colors.white,
    },


    homeAgendaDaySubtitle: {
        marginTop: 3,
        fontSize: 10,
        color: Colors.textSecondary,
        textTransform: "capitalize",
    },


    homeAgendaCount: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        backgroundColor: "rgba(79, 141, 247, 0.14)",
    },


    homeAgendaCountText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#4F8DF7",
    },


    homeAgendaCard: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: Spacing.lg,
        marginBottom: 8,
        padding: 11,
        borderRadius: 15,
        backgroundColor: "rgba(24, 39, 65, 0.95)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.08)",
    },


    homeAgendaIcon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginRight: 10,
        backgroundColor: "rgba(245, 158, 11, 0.13)",
    },


    homeAgendaContent: {
        flex: 1,
    },


    homeAgendaTime: {
        fontSize: 9,
        fontWeight: "700",
        color: "#4F8DF7",
    },


    homeAgendaTitle: {
        marginTop: 2,
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white,
    },


    homeAgendaClient: {
        marginTop: 2,
        fontSize: 9,
        color: Colors.textSecondary,
    },


    homeAgendaEmpty: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Spacing.lg,
        paddingVertical: 16,
        borderRadius: 15,
        backgroundColor: "rgba(24, 39, 65, 0.75)",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.07)",
    },


    homeAgendaEmptyText: {
        marginLeft: 8,
        fontSize: 10,
        color: Colors.textSecondary,
    },

});