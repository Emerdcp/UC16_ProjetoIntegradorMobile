import { StyleSheet } from "react-native";

import { Colors, Spacing, } from "@/designSystem";

export const styles = StyleSheet.create({

    /* Fundo */
    background: {
        flex: 1,
    },

    /* Container principal */
    container: {
        flex: 1,
        paddingHorizontal: Spacing.xl,
    },

    /* Cabeçalho */
    header: {
        flex: 0.30,
        justifyContent: "center",
        alignItems: "center",
    },

    /* Área do Login */
    body: {
        flex: 0.55,
        justifyContent: "flex-start",
        paddingTop:20,
    },

    /* Rodapé */
    footer: {
        flex: 0.20,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30,
    },

    /* Logo */
    logo: {
        width: 350,
        height: 200,
        marginBottom: 1,
    },

    /* Nome do sistema */
    title: {
        fontSize: 40,
        fontWeight: "700",
        color: Colors.white,
    },

    /* Slogan */
    subtitle: {
        marginTop: 6,
        color: Colors.textSecondary,
        fontSize: 13,
        letterSpacing: 2.5,
    },

    /* Rodapé */
    footerText: {
        color: Colors.textSecondary,
        fontSize: 12,
    },

    version: {
        marginTop: 4,
        color: Colors.textSecondary,
        fontSize: 11,
    },

});