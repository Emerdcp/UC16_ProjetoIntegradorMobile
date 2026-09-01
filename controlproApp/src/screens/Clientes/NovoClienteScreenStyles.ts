import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    /* =====================================================
       CONTAINER
    ===================================================== */

    container: {
        flex: 1,
        backgroundColor: "#020B24",
    },

    keyboard: {
        flex: 1,
    },

    scroll: {
        flex: 1,
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 35,
    },


    /* =====================================================
       HEADER
    ===================================================== */

    header: {
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 20,
        paddingVertical: 15,

        backgroundColor: "#06213A",

        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.08)",
    },

    backButton: {
        width: 42,
        height: 42,

        borderRadius: 12,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "rgba(255,255,255,0.06)",

        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.10)",

        marginRight: 12,
    },

    headerText: {
        flex: 1,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 2,

        color: "#94A3B8",
        fontSize: 12,
    },


    /* =====================================================
       SEÇÕES
    ===================================================== */

    sectionTitle: {
        color: "#FFFFFF",

        fontSize: 16,
        fontWeight: "700",

        marginTop: 20,
        marginBottom: 12,
    },


    /* =====================================================
       TIPO DE PESSOA
    ===================================================== */

    personContainer: {
        flexDirection: "row",

        gap: 10,

        marginBottom: 8,
    },

    personButton: {
        flex: 1,

        minHeight: 52,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        gap: 8,

        paddingHorizontal: 10,

        borderRadius: 12,

        backgroundColor: "#17263A",

        borderWidth: 1,
        borderColor: "#2B3B52",
    },

    personButtonActive: {
        backgroundColor: "#2864E8",

        borderColor: "#3B82F6",
    },

    personText: {
        color: "#94A3B8",

        fontSize: 13,
        fontWeight: "600",

        textAlign: "center",
    },

    personTextActive: {
        color: "#FFFFFF",
    },


    /* =====================================================
       GRUPO DOS CAMPOS
    ===================================================== */

    inputGroup: {
        marginTop: 14,
    },

    label: {
        marginBottom: 7,

        color: "#DCE5F2",

        fontSize: 13,
        fontWeight: "600",
    },


    /* =====================================================
       INPUT
    ===================================================== */

    input: {
        width: "100%",

        minHeight: 48,

        paddingHorizontal: 14,

        backgroundColor: "#17263A",

        borderWidth: 1,
        borderColor: "#2B3B52",

        borderRadius: 11,

        color: "#FFFFFF",

        fontSize: 14,
    },


    inputWithAction: {
        flexDirection: "row",

        alignItems: "center",

        width: "100%",

        minHeight: 48,

        backgroundColor: "#17263A",

        borderWidth: 1,
        borderColor: "#2B3B52",

        borderRadius: 11,

        overflow: "hidden",
    },

    inputAction: {
        flex: 1,

        minHeight: 48,

        paddingHorizontal: 14,

        color: "#FFFFFF",

        fontSize: 14,
    },


    /* =====================================================
       BOTÃO DE BUSCA
    ===================================================== */

    searchButton: {
        width: 48,
        height: 48,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#2864E8",

        borderLeftWidth: 1,
        borderLeftColor: "rgba(255,255,255,0.08)",
    },


    /* =====================================================
       CAMPOS LADO A LADO
    ===================================================== */

    row: {
        flexDirection: "row",

        gap: 12,

        width: "100%",
    },

    numberField: {
        flex: 0.35,
    },

    neighborhoodField: {
        flex: 0.65,
    },

    cityField: {
        flex: 0.75,
    },

    stateField: {
        flex: 0.25,
    },


    /* =====================================================
       TEXTAREA
    ===================================================== */

    textarea: {
        minHeight: 110,

        paddingTop: 13,

        textAlignVertical: "top",
    },


    /* =====================================================
       BOTÕES
    ===================================================== */

    actions: {
        flexDirection: "row",

        gap: 12,

        marginTop: 28,
    },

    cancelButton: {
        flex: 1,

        height: 50,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 12,

        backgroundColor: "#263449",

        borderWidth: 1,
        borderColor: "#36465D",
    },

    cancelText: {
        color: "#CBD5E1",

        fontSize: 14,
        fontWeight: "600",
    },

    saveButton: {
        flex: 1,

        height: 50,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        gap: 7,

        borderRadius: 12,

        backgroundColor: "#2864E8",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,

        elevation: 4,
    },

    saveText: {
        color: "#FFFFFF",

        fontSize: 14,
        fontWeight: "700",
    },

});