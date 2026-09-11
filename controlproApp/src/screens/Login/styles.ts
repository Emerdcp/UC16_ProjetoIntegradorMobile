import { StyleSheet } from "react-native";
import { Colors, Spacing,} from "@/designSystem";

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
        paddingHorizontal: Spacing.xl,
    },

    /* =====================================================
       CABEÇALHO / LOGO
    ===================================================== */

    header: {
        flex: 0.34,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 12,
    },

    /* =====================================================
       ÁREA DO LOGIN
    ===================================================== */

    body: {
        flex: 0.46,
        justifyContent: "flex-start",
        paddingTop: 8,
    },

    /* =====================================================
       RODAPÉ
    ===================================================== */

    footer: {
        flex: 0.20,

        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 28,
    },

    /* =====================================================
       LOGO
    ===================================================== */

    logo: {
        width: 320,
        height: 170,
        marginBottom: 0,
    },

    /* =====================================================
       TÍTULO
    ===================================================== */

    title: {
        fontSize: 40,
        fontWeight: "700",
        color: Colors.white,
    },

    /* =====================================================
       SUBTÍTULO
    ===================================================== */

    subtitle: {
        marginTop: 6,
        color: Colors.textSecondary,
        fontSize: 13,
        letterSpacing: 2.5,
    },

    /* =====================================================
       TEXTO DO RODAPÉ
    ===================================================== */

    footerText: {
        color: Colors.textSecondary,
        fontSize: 11,
        opacity: 0.9,
    },

    /* =====================================================
       VERSÃO
    ===================================================== */

    version: {
        marginTop: 3,
        color: Colors.textSecondary,
        fontSize: 10,
        opacity: 0.75,
    },

});