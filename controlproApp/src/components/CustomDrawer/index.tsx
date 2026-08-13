import React from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import {
    DrawerContentComponentProps,
} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "@/context/AuthContext";

import { styles } from "./styles";


interface MenuItem {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    screen: string;
}


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
        label: "Projetos",
        icon: "folder-outline",
        screen: "Projetos",
    },

    {
        label: "Clientes",
        icon: "people-outline",
        screen: "Clientes",
    },

    {
        label: "Kanban",
        icon: "grid-outline",
        screen: "Kanban",
    },

    {
        label: "Agenda",
        icon: "calendar-outline",
        screen: "Agenda",
    },

    {
        label: "Perfil",
        icon: "person-outline",
        screen: "Perfil",
    },

    {
        label: "Configurações",
        icon: "settings-outline",
        screen: "Configuracoes",
    },

];


export default function CustomDrawer({
    navigation,
}: DrawerContentComponentProps) {

    const {
        user,
        signOut,
    } = useAuth();

    
    function handleNavigate(screen: string) {

        navigation.navigate(screen);
    }


    async function handleSignOut() {

        await signOut();

    }


    return (

        <View style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <Image
                    source={require("../../assets/images/logo/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />


                <View style={styles.userContainer}>

                    <View style={styles.avatar}>

                        <Text style={styles.avatarText}>
                            {user?.nome?.charAt(0).toUpperCase() || "A"}
                        </Text>

                    </View>


                    <View style={styles.userInfo}>

                        <Text
                            style={styles.userName}
                            numberOfLines={1}
                        >
                            {user?.nome || "Administrador"}
                        </Text>

                        <Text style={styles.userRole}>
                            Administrador
                        </Text>

                    </View>

                </View>

            </View>


            {/* MENU */}

            <View style={styles.menu}>

                {menuItems.map((item) => {

                    const isActive =
                        item.screen === "Home";

                    return (

                        <TouchableOpacity
                            key={item.screen}
                            style={[
                                styles.menuItem,
                                isActive && styles.menuItemActive,
                            ]}
                            activeOpacity={0.8}
                            onPress={() => handleNavigate(item.screen)}
                        >

                            <Ionicons
                                name={item.icon}
                                size={21}
                                color={
                                    isActive
                                        ? "#FFFFFF"
                                        : "#94A3B8"
                                }
                            />

                            <Text
                                style={[
                                    styles.menuText,
                                    isActive && styles.menuTextActive,
                                ]}
                            >
                                {item.label}
                            </Text>

                        </TouchableOpacity>

                    );

                })}

            </View>


            {/* FOOTER */}

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