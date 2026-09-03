import React from "react";
import {
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { styles } from "./styles";
import { useNavigation, CommonActions, } from "@react-navigation/native";
import { AppNavigationProp, } from "@/navigation/types";
import { useCallback, useState, } from "react";
import { ActivityIndicator, RefreshControl, } from "react-native";
import { useFocusEffect, } from "@react-navigation/native";
import { getAtendimentos, Atendimento, } from "@/services/atendimentoService";


interface Indicator {
    id: number;
    title: string;
    value: number | string;
    description: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconBackground: string;
    screen?: "Atendimento" | "Clientes";
}


const indicators: Indicator[] = [

    {
        id: 1,
        title: "Atendimentos",
        value: 25,
        description: "Em andamento",
        icon: "headset-outline",
        iconColor: "#4F8DF7",
        iconBackground: "rgba(79, 141, 247, 0.14)",
        screen: "Atendimento",
    },

    {
        id: 2,
        title: "Projetos",
        value: 14,
        description: "Em acompanhamento",
        icon: "document-text-outline",
        iconColor: "#A78BFA",
        iconBackground: "rgba(167, 139, 250, 0.14)",
    },

    {
        id: 3,
        title: "Clientes",
        value: 35,
        description: "Clientes cadastrados",
        icon: "people-outline",
        iconColor: "#34D399",
        iconBackground: "rgba(52, 211, 153, 0.14)",
        screen: "Clientes",
    },

    {
        id: 4,
        title: "Kanban",
        value: 5,
        description: "Em acompanhamento",
        icon: "grid-outline",
        iconColor: "#F59E0B",
        iconBackground: "rgba(245, 158, 11, 0.14)",
    },

];


export default function HomeScreen() {

    const navigation = useNavigation<AppNavigationProp>();
    const { user, } = useAuth();
    const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
    const [carregandoAtendimentos, setCarregandoAtendimentos] = useState(true);
    const [atualizando, setAtualizando] = useState(false);
    const [erroAtendimentos, setErroAtendimentos] = useState(false);
    const nomeUsuario = user?.nome || "Administrador";
    const horaAtual = new Date().getHours();
    const atendimentosAbertos =
        atendimentos.filter(
            (item) =>
                item.at_status === "A" ||
                item.at_status === "E" ||
                item.at_status === "D"
        );
    const quantidadeAtendimentos = atendimentosAbertos.length;
    const atendimentosHome = atendimentosAbertos.slice(0, 3);

    let saudacao = "Boa noite";


    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia";
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde";
    }

    const carregarAtendimentos = useCallback(
        async (
            mostrarCarregamento = true
        ) => {

            try {

                if (mostrarCarregamento) {
                    setCarregandoAtendimentos(true);
                }

                setErroAtendimentos(false);


                const resposta =
                    await getAtendimentos(
                        "",
                        1,
                        100
                    );


                /*
                 * O endpoint pode retornar
                 * diretamente um array ou
                 * um objeto contendo data.
                 */

                const lista =
                    Array.isArray(resposta)
                        ? resposta
                        : resposta?.data || [];


                setAtendimentos(lista);

            }
            catch (error) {

                console.log(
                    "Erro ao carregar atendimentos da Home:",
                    error
                );

                setErroAtendimentos(true);

            }
            finally {

                setCarregandoAtendimentos(false);

                setAtualizando(false);

            }

        },
        []
    );

    useFocusEffect(
        useCallback(() => {

            carregarAtendimentos();

        }, [carregarAtendimentos])
    );


    return (

        <ImageBackground
            source={require("../../assets/images/login/background-login.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <SafeAreaView style={styles.container}>

                {/* =================================================
                    HEADER
                ================================================= */}

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
                            {nomeUsuario}
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

                        <View style={styles.notificationDot} />

                    </TouchableOpacity>

                </View>


                {/* =================================================
                    CONTEÚDO
                ================================================= */}

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={atualizando}
                            onRefresh={() => {

                                setAtualizando(true);

                                carregarAtendimentos(false);

                            }}
                            tintColor="#4F8DF7"
                        />
                    }
                >

                    {/* =================================================
                        SAUDAÇÃO
                    ================================================= */}

                    <View style={styles.greetingCard}>

                        <View style={styles.greetingContent}>

                            <Text style={styles.greetingTitle}>
                                {saudacao}, {nomeUsuario}! 👋
                            </Text>

                            <Text style={styles.greetingText}>
                                Aqui está o resumo do seu dia.
                            </Text>

                        </View>


                        <View style={styles.dateContainer}>

                            <Ionicons
                                name="calendar-outline"
                                size={22}
                                color="#4F8DF7"
                            />

                            <Text style={styles.dateText}>
                                {new Date().toLocaleDateString(
                                    "pt-BR",
                                    {
                                        day: "2-digit",
                                        month: "2-digit",
                                    }
                                )}
                            </Text>

                        </View>

                    </View>


                    {/* =================================================
                        INDICADORES
                    ================================================= */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionHeaderTitle}>
                                Indicadores
                            </Text>

                            <TouchableOpacity
                                activeOpacity={0.7}
                            >

                                <Text style={styles.seeAll}>
                                    Ver todos
                                </Text>

                            </TouchableOpacity>

                        </View>


                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.indicators}
                        >

                            {indicators.map((item) => (

                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.indicatorCard}
                                    activeOpacity={0.85}
                                    onPress={() => {

                                        if (item.screen) {

                                            navigation.dispatch(
                                                CommonActions.navigate({
                                                    name: item.screen,
                                                })
                                            );

                                        }

                                    }}
                                >

                                    <View
                                        style={[
                                            styles.indicatorIcon,
                                            {
                                                backgroundColor:
                                                    item.iconBackground,
                                            },
                                        ]}
                                    >

                                        <Ionicons
                                            name={item.icon}
                                            size={22}
                                            color={item.iconColor}
                                        />

                                    </View>


                                    <Text style={styles.indicatorTitle}>
                                        {item.title}
                                    </Text>


                                    <Text style={styles.indicatorValue}>
                                        {item.id === 1
                                            ? quantidadeAtendimentos
                                            : item.value}
                                    </Text>


                                    <Text style={styles.indicatorDescription}>
                                        {item.description}
                                    </Text>

                                </TouchableOpacity>

                            ))}

                        </ScrollView>

                    </View>


                    {/* =================================================
                        ACESSO RÁPIDO
                    ================================================= */}

                    <View style={styles.section}>

                        <Text style={styles.sectionTitle}>
                            Acesso rápido
                        </Text>


                        <View style={styles.quickGrid}>

                            {/* =================================================
                                ATENDIMENTOS
                            ================================================= */}

                            <TouchableOpacity
                                style={styles.quickCard}
                                activeOpacity={0.85}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Atendimento",
                                        })
                                    )
                                }
                            >

                                <View
                                    style={[
                                        styles.quickIcon,
                                        styles.quickBlue,
                                    ]}
                                >

                                    <Ionicons
                                        name="headset-outline"
                                        size={24}
                                        color="#4F8DF7"
                                    />

                                </View>


                                <View style={styles.quickContent}>

                                    <Text style={styles.quickTitle}>
                                        Atendimentos
                                    </Text>

                                    <Text style={styles.quickSubtitle}>
                                        Ver todos
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>


                            {/* =================================================
                                CLIENTES
                            ================================================= */}

                            <TouchableOpacity
                                style={styles.quickCard}
                                activeOpacity={0.85}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Clientes",
                                        })
                                    )
                                }
                            >

                                <View
                                    style={[
                                        styles.quickIcon,
                                        styles.quickGreen,
                                    ]}
                                >

                                    <Ionicons
                                        name="people-outline"
                                        size={24}
                                        color="#34D399"
                                    />

                                </View>


                                <View style={styles.quickContent}>

                                    <Text style={styles.quickTitle}>
                                        Clientes
                                    </Text>

                                    <Text style={styles.quickSubtitle}>
                                        Ver todos
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>


                            {/* =================================================
                                NOVO ATENDIMENTO
                            ================================================= */}

                            <TouchableOpacity
                                style={styles.quickCard}
                                activeOpacity={0.85}
                                onPress={() => {

                                    console.log(
                                        "Novo Atendimento"
                                    );

                                }}
                            >

                                <View
                                    style={[
                                        styles.quickIcon,
                                        styles.quickPurple,
                                    ]}
                                >

                                    <Ionicons
                                        name="add-outline"
                                        size={26}
                                        color="#A78BFA"
                                    />

                                </View>


                                <View style={styles.quickContent}>

                                    <Text style={styles.quickTitle}>
                                        Novo atendimento
                                    </Text>

                                    <Text style={styles.quickSubtitle}>
                                        Criar agora
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>


                            {/* =================================================
    AGENDA
================================================= */}

                            <TouchableOpacity
                                style={styles.quickCard}
                                activeOpacity={0.85}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Agenda",
                                        })
                                    )
                                }
                            >

                                <View
                                    style={[
                                        styles.quickIcon,
                                        styles.quickOrange,
                                    ]}
                                >

                                    <Ionicons
                                        name="calendar-outline"
                                        size={24}
                                        color="#F59E0B"
                                    />

                                </View>


                                <View style={styles.quickContent}>

                                    <Text style={styles.quickTitle}>
                                        Agenda
                                    </Text>

                                    <Text style={styles.quickSubtitle}>
                                        Ver compromissos
                                    </Text>

                                </View>


                                <Ionicons
                                    name="chevron-forward-outline"
                                    size={20}
                                    color="#64748B"
                                />

                            </TouchableOpacity>

                        </View>

                    </View>


                    {/* =================================================
    ATENDIMENTOS ABERTOS
================================================= */}

                    <View style={styles.section}>

                        <View style={styles.sectionHeader}>

                            <Text style={styles.sectionHeaderTitle}>
                                Atendimentos Abertos
                            </Text>


                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.dispatch(
                                        CommonActions.navigate({
                                            name: "Atendimento",
                                        })
                                    )
                                }
                            >

                                <Text style={styles.seeAll}>
                                    Ver todos
                                </Text>

                            </TouchableOpacity>

                        </View>


                        {/* =================================================
        CARREGANDO
    ================================================= */}

                        {carregandoAtendimentos ? (

                            <View style={styles.loadingHome}>

                                <ActivityIndicator
                                    size="small"
                                    color="#4F8DF7"
                                />

                                <Text style={styles.loadingHomeText}>
                                    Carregando atendimentos...
                                </Text>

                            </View>

                        ) : erroAtendimentos ? (

                            /* =================================================
                               ERRO
                            ================================================= */

                            <View style={styles.emptyHome}>

                                <Ionicons
                                    name="alert-circle-outline"
                                    size={30}
                                    color="#EF4444"
                                />

                                <Text style={styles.emptyHomeText}>
                                    Não foi possível carregar os atendimentos.
                                </Text>


                                <TouchableOpacity
                                    style={styles.retryHomeButton}
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        carregarAtendimentos()
                                    }
                                >

                                    <Text style={styles.retryHomeText}>
                                        Tentar novamente
                                    </Text>

                                </TouchableOpacity>

                            </View>

                        ) : atendimentosHome.length === 0 ? (

                            /* =================================================
                               NENHUM ATENDIMENTO
                            ================================================= */

                            <View style={styles.emptyHome}>

                                <Ionicons
                                    name="checkmark-circle-outline"
                                    size={32}
                                    color="#34D399"
                                />

                                <Text style={styles.emptyHomeTitle}>
                                    Tudo tranquilo!
                                </Text>

                                <Text style={styles.emptyHomeText}>
                                    Não existem atendimentos abertos no momento.
                                </Text>

                            </View>

                        ) : (

                            /* =================================================
                               LISTA DE ATENDIMENTOS
                            ================================================= */

                            atendimentosHome.map((atendimento) => (

                                <TouchableOpacity
                                    key={atendimento.id}
                                    style={styles.attendanceCard}
                                    activeOpacity={0.85}
                                    onPress={() =>
                                        navigation.dispatch(
                                            CommonActions.navigate({
                                                name: "Atendimento",
                                                params: {
                                                    screen: "AtendimentoDetalhe",
                                                    params: {
                                                        id: atendimento.id,
                                                    },
                                                },
                                            })
                                        )
                                    }
                                >

                                    <View
                                        style={[
                                            styles.attendanceIconContainer,
                                            atendimento.at_status === "A"
                                                ? styles.attendanceWaitingIcon
                                                : undefined,
                                        ]}
                                    >

                                        <Ionicons
                                            name={
                                                atendimento.at_status === "A"
                                                    ? "time-outline"
                                                    : "headset-outline"
                                            }
                                            size={22}
                                            color={
                                                atendimento.at_status === "A"
                                                    ? "#F59E0B"
                                                    : "#4F8DF7"
                                            }
                                        />

                                    </View>


                                    <View style={styles.attendanceContent}>

                                        <View style={styles.attendanceTop}>

                                            <Text style={styles.attendanceNumber}>
                                                #{atendimento.at_codigo}
                                            </Text>


                                            <View
                                                style={
                                                    atendimento.at_status === "A"
                                                        ? styles.statusWaiting
                                                        : styles.status
                                                }
                                            >

                                                <Text
                                                    style={
                                                        atendimento.at_status === "A"
                                                            ? styles.statusWaitingText
                                                            : styles.statusText
                                                    }
                                                >

                                                    {atendimento.at_status === "A"
                                                        ? "Aberto"
                                                        : atendimento.at_status === "E"
                                                            ? "Em andamento"
                                                            : "Desenvolvimento"}

                                                </Text>

                                            </View>

                                        </View>


                                        <Text
                                            style={styles.attendanceTitle}
                                            numberOfLines={1}
                                        >
                                            {atendimento.at_descricao}
                                        </Text>


                                        <Text
                                            style={styles.attendanceClient}
                                            numberOfLines={1}
                                        >
                                            Cliente:{" "}
                                            {atendimento.cli_fantasia ||
                                                "Não informado"}
                                        </Text>

                                    </View>


                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={20}
                                        color="#64748B"
                                    />

                                </TouchableOpacity>

                            ))

                        )}

                    </View>


                    {/* =================================================
                        ESPAÇO FINAL
                    ================================================= */}

                    <View style={styles.bottomSpace} />

                </ScrollView>

            </SafeAreaView>

        </ImageBackground >
    );
}