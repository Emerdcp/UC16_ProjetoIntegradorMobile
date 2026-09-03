import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import { DrawerContentComponentProps,} from "@react-navigation/drawer";
import { Ionicons,} from "@expo/vector-icons";
import { useAuth,} from "@/context/AuthContext";
import { styles,} from "./styles";
import type { AppScreen,} from "@/navigation/types";
import { CommonActions,} from "@react-navigation/native";


/* =====================================================
   ITEM DO MENU
===================================================== */

interface MenuItem {

    label: string;

    icon: keyof typeof Ionicons.glyphMap;

    screen?: AppScreen;

}


/* =====================================================
   MENU
===================================================== */

const menuItems: MenuItem[] = [

    {
        label: "Início",
        icon: "home-outline",
        screen: "Home",
    },

    {
        label: "Atendimento",
        icon: "headset-outline",
        screen: "Atendimento",
    },

    {
        label: "Clientes",
        icon: "people-outline",
        screen: "Clientes",
    },

    {
        label: "Agenda",
        icon: "calendar-outline",
        screen: "Agenda",
    },

];


/* =====================================================
   DRAWER
===================================================== */

export default function CustomDrawer({
    navigation,
    state,
}: DrawerContentComponentProps) {


    const {
        user,
        signOut,
    } = useAuth();


    /* =================================================
       NAVEGAÇÃO
    ================================================= */

    function handleNavigate(
        screen?: AppScreen
    ) {

        if (!screen) {

            return;

        }


        /* =============================================
           AGENDA
           
           Como Agenda possui um Navigator interno,
           precisamos informar explicitamente que
           queremos abrir a tela principal da Agenda.
        ============================================= */

        if (screen === "Agenda") {

            navigation.dispatch(
                CommonActions.navigate({
                    name: "Agenda",
                    params: {
                        screen: "Agenda",
                    },
                })
            );

            return;

        }


        /* =============================================
           DEMAIS TELAS
        ============================================= */

        navigation.navigate(screen);

    }


    /* =================================================
       SAIR
    ================================================= */

    async function handleSignOut() {

        await signOut();

    }


    /* =================================================
       ROTA ATUAL
    ================================================= */

    const currentRoute =
        state.routes[state.index]?.name;


    /* =================================================
       TELA
    ================================================= */

    return (

        <View style={styles.container}>


            {/* =================================================
               HEADER
            ================================================= */}

            <View style={styles.header}>


                {/* LOGO */}

                <Image
                    source={require("../../assets/images/logo/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />


                {/* USUÁRIO */}

                <View style={styles.userContainer}>


                    {/* AVATAR */}

                    <View style={styles.avatar}>

                        <Text style={styles.avatarText}>

                            {
                                user?.nome
                                    ?.charAt(0)
                                    .toUpperCase()
                                || "A"
                            }

                        </Text>

                    </View>


                    {/* INFORMAÇÕES */}

                    <View style={styles.userInfo}>

                        <Text
                            style={styles.userName}
                            numberOfLines={1}
                        >
                            {
                                user?.nome
                                || "Administrador"
                            }
                        </Text>


                        <Text style={styles.userRole}>

                            Administrador

                        </Text>

                    </View>

                </View>

            </View>


            {/* =================================================
               MENU
            ================================================= */}

            <View style={styles.menu}>


                {menuItems.map((item) => {


                    const isActive =
                        item.screen === currentRoute;


                    return (

                        <TouchableOpacity
                            key={item.label}
                            style={[
                                styles.menuItem,

                                isActive &&
                                styles.menuItemActive,
                            ]}
                            activeOpacity={0.8}
                            onPress={() =>
                                handleNavigate(
                                    item.screen
                                )
                            }
                        >


                            {/* ÍCONE */}

                            <Ionicons
                                name={item.icon}
                                size={21}
                                color={
                                    isActive
                                        ? "#FFFFFF"
                                        : "#94A3B8"
                                }
                            />


                            {/* TEXTO */}

                            <Text
                                style={[
                                    styles.menuText,

                                    isActive &&
                                    styles.menuTextActive,
                                ]}
                            >

                                {item.label}

                            </Text>


                        </TouchableOpacity>

                    );

                })}


            </View>


            {/* =================================================
               FOOTER
            ================================================= */}

            <View style={styles.footer}>


                <TouchableOpacity
                    style={styles.logout}
                    activeOpacity={0.8}
                    onPress={handleSignOut}
                >


                    <Ionicons
                        name="log-out-outline"
                        size={21}
                        color="#F87171"
                    />


                    <Text style={styles.logoutText}>

                        Sair

                    </Text>


                </TouchableOpacity>


            </View>


        </View>

    );

}