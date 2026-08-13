import React from "react";
import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import { SafeAreaView, } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp, AppScreen } from "@/navigation/types";


interface Indicator {
    id: number;
    title: string;
    value: number;
     icon: keyof typeof Ionicons.glyphMap;
    screen?: AppScreen;
}


const indicators: Indicator[] = [
    {
        id: 1,
        title: "Atendimento",
        value: 25,
        icon: "headset-outline",
        screen: "Atendimento",
    },

    {
        id: 2,
        title: "Projetos",
        value: 14,
        icon: "document-text-outline",
    },

    {
        id: 3,
        title: "Clientes",
        value: 35,
        icon: "people-outline",
    },

    {
        id: 4,
        title: "Kanban",
        value: 5,
        icon: "grid-outline",
    },
];

export default function HomeScreen() {

    const navigation = useNavigation<AppNavigationProp>();

    const {
        user,
        signOut,
    } = useAuth();


    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView style={styles.container}>

                {/*HEADER */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Ionicons
                            name="menu-outline"
                            size={25}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>


                    <View style={styles.userArea}>

                        <Text style={styles.title}>
                            ControlPro
                        </Text>

                        <Text style={styles.userName}>
                            {user?.nome || "Administrador"}
                        </Text>

                    </View>


                    <TouchableOpacity
                        style={styles.headerButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            console.log("Notificações");
                        }}
                    >

                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color="#FFFFFF"
                        />

                    </TouchableOpacity>

                </View>


                {/* CONTEÚDO */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >

                    {/* INDICADORES */}

                    <View style={styles.section}>

                        <Text style={styles.sectionTitle}>
                            Indicadores
                        </Text>


                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.indicators}
                        >

                            {indicators.map((item) => (

                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.indicatorCard}
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        if (item.screen) {
                                            navigation.navigate(item.screen);
                                        }

                                    }}
                                >

                                    <View>

                                        <Text style={styles.indicatorTitle}>
                                            {item.title}
                                        </Text>

                                        <Text style={styles.indicatorValue}>
                                            {item.value}
                                        </Text>

                                    </View>


                                    <View style={styles.iconContainer}>

                                        <Ionicons
                                            name={item.icon}
                                            size={28}
                                            color="#4F7DF3"
                                        />

                                    </View>

                                </TouchableOpacity>

                            ))}

                        </ScrollView>

                    </View>


                    {/* ATENDIMENTOS */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionTitle}>
                                Atendimentos Abertos
                            </Text>


                            <TouchableOpacity
                                onPress={() => {
                                    console.log("Ver todos");
                                }}
                            >

                                <Text style={styles.seeAll}>
                                    Ver todos
                                </Text>

                            </TouchableOpacity>

                        </View>


                        {/* ATENDIMENTO 1 */}

                        <TouchableOpacity
                            style={styles.attendanceCard}
                            activeOpacity={0.8}
                        >

                            <View style={styles.attendanceTop}>

                                <Text style={styles.attendanceNumber}>
                                    #0025
                                </Text>


                                <View style={styles.status}>
                                    <Text style={styles.statusText}>
                                        Em andamento
                                    </Text>
                                </View>

                            </View>


                            <Text style={styles.attendanceTitle}>
                                Problema no faturamento
                            </Text>


                            <Text style={styles.attendanceClient}>
                                Cliente: Empresa XYZ
                            </Text>

                        </TouchableOpacity>


                        {/* ATENDIMENTO 2 */}

                        <TouchableOpacity
                            style={styles.attendanceCard}
                            activeOpacity={0.8}
                        >

                            <View style={styles.attendanceTop}>

                                <Text style={styles.attendanceNumber}>
                                    #0024
                                </Text>


                                <View style={styles.statusWaiting}>

                                    <Text style={styles.statusWaitingText}>
                                        Aguardando
                                    </Text>

                                </View>

                            </View>


                            <Text style={styles.attendanceTitle}>
                                Dúvida sobre o sistema
                            </Text>


                            <Text style={styles.attendanceClient}>
                                Cliente: Cliente ABC
                            </Text>

                        </TouchableOpacity>

                    </View>

                </ScrollView>


                {/* SAIR FIXO */}

                {/* <View style={styles.footer}>

                    <TouchableOpacity
                        style={styles.logout}
                        activeOpacity={0.85}
                        onPress={signOut}
                    >

                        <Ionicons
                            name="log-out-outline"
                            size={20}
                            color="#FFFFFF"
                        />

                        <Text style={styles.logoutText}>
                            Sair
                        </Text>

                    </TouchableOpacity>

                </View> */}

            </SafeAreaView>

        </ImageBackground>
    );
}